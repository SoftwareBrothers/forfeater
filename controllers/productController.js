const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var db = require('../models');
var Product = db.product;
var Vendor = db.vendor;

exports.list = function (req, res) {
    Product.findAll({ include: [ Vendor ] }).then(products => {
        res.json(products);
    })
};

exports.show = function (req, res) {
    Product.findById(req.params.id, { include: [ Vendor ] }).then(product => {
        res.json(product);
    })
}

exports.store =  [
   
    // Validate that the name field is not empty.
    body('name', 'Name required').isLength({ min: 1 }).trim(),
    body('vendorId', 'VendorId required').isLength({ min: 1 }).trim(),

    // Sanitize (trim and escape) the name field.
    sanitizeBody('name').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var model = new Product(
          { name: req.body.name, vendorId: req.body.vendorId }
        );

        if (!errors.isEmpty()) {
            res.status(422).json({status: 'fail', errors: errors.array()});
        }
        else {
        
            Product.findOne({ where: {'name': req.body.name }})
                .then( found_model => { 
                     if (found_model) {
                         res.status(409).json({status: 'fail', data: 'Product already exists!'});
                     }
                     else {
                        model.save()
                        .then(() => {
                            res.status(200).json({status: 'success'});
                        })
                        .catch(function (err) {
                            if (err instanceof db.Sequelize.ForeignKeyConstraintError) {
                                res.status(501).json({status: 'status', error: err.message});
                            } else {
                                res.status(500).json({status: 'status', error: err.message});
                            }
                            console.error(err);
                          })
                     }

                 });
        }
    }
];