const { checkSchema, body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var db = require('../models');
var Product = db.product;
var Vendor = db.vendor;

var productSchema = require('../schemas/productSchema');

exports.list = function (req, res) {
    var whereConditions = {};
    if (req.query.active) {
        whereConditions.active = req.query.active;
    }
    if (req.query.vendorId) {
        whereConditions.vendorId = req.query.vendorId;
    }
    Product.findAll({
        where: whereConditions,
        include: [Vendor] }).then(products => {
        res.json(products);
    })
};

exports.show = function (req, res) {
    Product.findById(req.params.id, { include: [Vendor] }).then(product => {
        res.json(product);
    })
}

exports.store = [

    checkSchema(productSchema.store),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var model = new Product(
            { name: req.body.name, vendorId: req.body.vendorId }
        );

        if (!errors.isEmpty()) {
            res.status(422).json({ status: 'fail', errors: errors.array() });
        }
        else {

            Product.findOne({ where: { 'name': req.body.name } })
                .then(found_model => {
                    if (found_model) {
                        res.status(409).json({ status: 'fail', data: 'Product already exists!' });
                    }
                    else {
                        model.save()
                            .then(() => {
                                res.status(200).json({ status: 'success' });
                            })
                            .catch(function (err) {
                                if (err instanceof db.Sequelize.ForeignKeyConstraintError) {
                                    res.status(501).json({ status: 'error', error: err.message });
                                } else {
                                    res.status(500).json({ status: 'error', error: err.message });
                                }
                                console.error(err);
                            })
                    }

                });
        }
    }
]

exports.put = [

    checkSchema(productSchema.update),

    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ status: 'fail', errors: errors.array() });
        } else {
            Product.update(
                req.body,
                { where: { id: req.params.id } }
            ).then(result => {
                if (result) {
                    res.json({ status: 'success' })
                } else {
                    res.status(404).json({ success: false, message: "Product with ID: " + res.params.id + "  not found" })
                }
            }).catch(error => {
                res.status(500).json({ status: 'false', message: error })
            })

        }
    }
]

exports.delete = (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (deletedRecord) {
        if (deletedRecord === 1) {
            res.status(200).json({ success: true, message: "Deleted successfully" });
        }
        else {
            res.status(404).json({ success: false, message: "Product with ID: " + res.params.id + "  not found" })
        }
    }).catch(function (error) {
        res.status(500).json({ 'error': error });
    });
}
