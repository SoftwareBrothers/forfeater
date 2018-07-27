const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var db = require('../models');
var Order = db.order;
var Vendor = db.vendor;
var User = db.user;

exports.list = function (req, res) {
    Order.findAll({ include: [ Vendor, User ] }).then(orders => {
        res.json(orders);
    })
};

exports.show = function (req, res) {
    Order.findById(req.params.id, { include: [ Vendor, User ] }).then(order => {
        res.json(order);
    })
}

exports.store =  [
   
    // Validate that the name field is not empty.
    body('vendorId', 'VendorId required').isLength({ min: 1 }).trim(),
    body('userId', 'UserId required').isLength({ min: 1 }).trim(),
    body('deadlineAt', 'Deadline is required').isLength({ min: 1 }).trim(),
    // body('deliveryAt', 'Format is wrong').isLength({ min: 1 }).trim(),

    // Sanitize (trim and escape) the name field.
    // sanitizeBody('name').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var model = new Order(
            { 
              vendorId: req.body.vendorId, 
              userId: req.body.userId, 
              deadlineAt: req.body.deadlineAt, 
              deliveryAt: req.body.deliveryAt 
            }
        );

        if (!errors.isEmpty()) {
            res.status(422).json({status: 'fail', errors: errors.array()});
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
    }
];