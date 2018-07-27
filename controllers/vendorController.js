const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var db = require('../models');
var Vendor = db.vendor;

exports.list = function (req, res) {
    Vendor.findAll().then(vendors => {
        res.json(vendors);
    })
};

exports.show = function (req, res) {
    Vendor.findById(req.params.id).then(vendor => {
        res.json(vendor);
    })
};

exports.store =  [
   
    // Validate that the name field is not empty.
    body('name', 'Name required').isLength({ min: 1 }).trim(),

    // Sanitize (trim and escape) the name field.
    sanitizeBody('name').trim().escape(),
    sanitizeBody('url').trim(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var vendor = new Vendor(
          { name: req.body.name, url: req.body.url }
        );

        if (!errors.isEmpty()) {
            res.status(422).json({status: 'fail', errors: errors.array()});
        }
        else {
        
            Vendor.findOne({ where: {'name': req.body.name }})
                .then( found_vendor => { 
                     if (found_vendor) {
                         res.status(409).json({status: 'fail', data: 'Vendor already exists!'});
                     }
                     else {
                        vendor.save().then(() => {
                            res.status(200).json({status: 'success'});
                        })
                     }

                 });
        }
    }
];