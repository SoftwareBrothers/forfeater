var db = require('../models');
var Vendor = db.vendor;

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

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

// exports.create = function (req, res) {
//     res.send("vendor create form");
// };

// exports.store = function (req, res) {
//     res.send("vendor create action (post)");
// };

// Handle Genre create on POST.
exports.store =  [
   
    // Validate that the name field is not empty.
    body('name', 'Name required').isLength({ min: 1 }).trim(),

    // Sanitize (trim and escape) the name field.
    sanitizeBody('name').trim().escape(),
    sanitizeBody('url').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var vendor = new Vendor(
          { name: req.body.name },
          { url: req.body.url }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            // res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});
            res.json({errors: errors.array(), body: req.body});
        return;
        }
        else {
            // Data from form is valid.
            // Check if Genre with same name already exists.
            Vendor.findOne({ 'name': req.body.name })
                .exec( function(err, found_vendor) {
                     if (err) { return next(err); }

                     if (found_vendor) {
                         // Genre exists, redirect to its detail page.
                         res.json('exists!');
                     }
                     else {

                         vendor.save(function (err) {
                           if (err) { return next(err); }
                           // Genre saved. Redirect to genre detail page.
                           res.json('success');
                         });

                     }

                 });
        }
    }
];