const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var db = require('../models');
var User = db.user;

exports.list = function (req, res) {
    User.findAll().then(users => {
        res.json(users);
    })
};

exports.show = function (req, res) {
    User.findById(req.params.id).then(user => {
        res.json(user);
    })
};

exports.store =  [
   
    // Validate that the name field is not empty.
    body('role', 'Role required').isLength({ min: 1 }).trim(),
    body('firstName', 'First name required').isLength({ min: 1 }).trim(),
    body('lastName', 'Last name required').isLength({ min: 1 }).trim(),
    body('email', 'Email required').isEmail().trim(),

    // Sanitize (trim and escape) the name field.
    sanitizeBody('role').trim().escape(),
    sanitizeBody('firstName').trim(),
    sanitizeBody('lastName').trim(),
    sanitizeBody('email').trim(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var model = new User(
          { role: req.body.role, firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email }
        );

        if (!errors.isEmpty()) {
            res.status(422).json({status: 'fail', errors: errors.array()});
        }
        else {
        
            User.findOne({ where: {'email': req.body.email }})
                .then( found_model => { 
                     if (found_model) {
                         res.status(409).json({status: 'fail', data: 'User already exists!'});
                     }
                     else {
                        model.save().then(() => {
                            res.status(200).json({status: 'success'});
                        })
                     }

                 });
        }
    }
];