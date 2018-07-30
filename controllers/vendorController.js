const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var db = require('../models');
var Vendor = db.vendor;
var Product = db.product;

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
                        vendor.save()
                        .then(() => {
                            res.status(201).json(vendor);
                        })
                        .catch(function (err) {
                            res.status(500).json({status: 'status', error: err.message});
                            console.error(err);
                          })
                     }

                 });
        }
    }
];

exports.update = [
    // Validate that the name field is not empty.
    body('name', 'Name required').isLength({ min: 1 }).trim(),

    // Sanitize (trim and escape) the name field.
    sanitizeBody('name').trim().escape(),
    sanitizeBody('url').trim(),

    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ status: 'fail', errors: errors.array() });
        } else {
            Vendor.update(
                req.body,
                { where: { id: req.params.vendorId } }
            ).then(result => {
                if (result) {
                    res.json({ status: 'success' })
                } else {
                    res.status(404).json({ success: false, message: "Vendor with ID: " + res.params.id + "  not found" })
                }
            }).catch(error => {
                res.status(500).json({ status: 'false', message: error })
            })
        }
    }
];

exports.delete = (req, res) => {
    Vendor.destroy({
        where: {
            id: req.params.vendorId
        }
    }).then(function (deletedRecord) {
        if (deletedRecord === 1) {
            res.status(200).json({ success: true, message: "Deleted successfully" });
        }
        else {
            res.status(404).json({ success: false, message: "Vendor with ID: " + req.params.vendorId + "  not found" })
        }
    }).catch(function (error) {
        res.status(500).json({ 'error': error });
    });
};
