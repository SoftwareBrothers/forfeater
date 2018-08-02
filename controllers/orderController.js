const { checkSchema, body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var db = require('../models');
var Order = db.order;
var Vendor = db.vendor;
var User = db.user;

var vendorSchema = require('../schemas/orderSchema');

var Sequelize = db.Sequelize;
const Op = Sequelize.Op;

exports.list = function (req, res) {
    var whereConditions = {};
    if (typeof req.query.active !== 'undefined') {
        if (req.query.active === '1') {
            whereConditions.deadlineAt = {
                [Op.gte]: new Date()
            };
        } else if (req.query.active === '0') {
            whereConditions.deadlineAt = {
                [Op.lte]: new Date()
            };
        }
    }
    Order.findAll({
        where: whereConditions,
        include: [ Vendor, User ] }).then(orders => {
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
                    res.status(201).json(model);
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