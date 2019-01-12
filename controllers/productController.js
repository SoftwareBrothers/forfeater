const { checkSchema, body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var db = require('../models');
var Product = db.product;
var Vendor = db.vendor;
var Choice = db.choice;

var productSchema = require('../schemas/productSchema');

var db = require('../models/index');
var sequelize = db.sequelize;

exports.list = function (req, res) {
    /**
     * TODO
     * controllers should be free of queries
     * this code will be moved in future to repository
     * maybe it could be done through sequelizer objects?
     */
    var postgresQuery = 'SELECT\n' +
        '  products.id,\n' +
        '  products.active,\n' +
        '  products.name,\n' +
        '  products."vendorId",\n' +
        '  products."createdAt",\n' +
        '  products."updatedAt",\n' +
        '  ROUND(u."avgScore",2) AS "avgScore",\n' +
        '  u."rankCount"\n' +
        'FROM\n' +
        ' products\n' +
        'LEFT JOIN (\n' +
        '  SELECT\n' +
        '    "productId",\n' +
        '    AVG(score) AS "avgScore",\n' +
        '    SUM(case when score is null then 0 else 1 end) AS "rankCount"' +
        '  FROM\n' +
        '    choices\n' +
        '  GROUP BY "productId"\n' +
        ') u ON u."productId" = products.id WHERE products."vendorId"=\'' + req.params.vendorId + '\'';
    if (req.query.active) {
        postgresQuery += ' AND products.active=\'' + req.query.active + '\'';
    }

    // remember - controllers free of queries
    sequelize.query(
        postgresQuery,
        { type: sequelize.QueryTypes.SELECT}
    ).then(function(result) {
        res.json(result);
    })
};

exports.show = function (req, res) {
    Product.findById(req.params.productId, { include: [Vendor, Choice] }).then(product => {
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
            { name: req.body.name, vendorId: req.params.vendorId, active: req.body.active }
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
                                res.status(201).json(model);
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

exports.storeMany = [

    (req, res, next) => {

        req.body.forEach(function (product, index) {

            let model = new Product(
                { name: product.name, vendorId: req.params.vendorId, active: product.active }
            );

            Product.findOne({ where: { 'name': model.name } })
                .then(found_model => {
                    if (!found_model) {

                        model.save()
                            .then(() => {
                                console.log(model.name + ' added!');
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

        });

        res.status(201).json();

    }

]

exports.update = [

    checkSchema(productSchema.update),

    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ status: 'fail', errors: errors.array() });
        } else {
            model = new Product(req.body)
            model.id = req.params.productId;
            Product.update(
                req.body,
                { where: { id: req.params.productId } }
            ).then(result => {
                if (result) {
                    res.status(200).json(model)
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
            id: req.params.productId
        }
    }).then(function (deletedRecord) {
        if (deletedRecord === 1) {
            res.status(200).json({ success: true, message: "Deleted successfully" });
        }
        else {
            res.status(404).json({ success: false, message: "Product with ID: " + req.params.productId + "  not found" })
        }
    }).catch(function (error) {
        res.status(500).json({ 'error': error });
    });
}
