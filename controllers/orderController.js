const { checkSchema, body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var db = require('../models');
var Order = db.order;
var Vendor = db.vendor;
var User = db.user;

var vendorSchema = require('../schemas/orderSchema');

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

    checkSchema(vendorSchema.store),

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