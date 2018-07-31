const { checkSchema, body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var db = require('../models');
var Choice = db.choice;
var Order = db.order;
var User = db.user;
var Product = db.product;

var choiceSchema = require('../schemas/choiceSchema');

exports.list = function (req, res) {
    Choice.findAll({ include: [ Order, User, Product ] }).then(choices => {
        res.json(choices);
    })
};

exports.listOfOrder = function (req, res) {
    Choice.findAll({ 
        include: [ Order, User, Product ],
        where: { orderId: req.params.orderId } 
    }).then(choices => {
        res.json(choices);
    })
};

exports.show = function (req, res) {
    Choice.findById(req.params.id, { include: [ Order, User, Product ] }).then(product => {
        res.json(product);
    })
}

exports.store_rating =  [

    checkSchema(choiceSchema.store_rating),

    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({status: 'fail', errors: errors.array()});
        }

        Choice.findOne({
            where: {
                'userId': req.body.userId,
                'orderId': req.params.orderId,
            }
        }).then(choice => {
            if (null === choice) {
                res.status(404).json({status: 'error', error: 'No choice for given data'});
            }
            choice.score = req.body.mark;
            choice.comment = req.body.comment;
            choice.save();
            res.json(choice);
        }).catch(function (error) {
            res.status(500).json({status: 'error', error: error.message});
        });

    }
];

exports.store =  [

    checkSchema(choiceSchema.store),

    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var model = new Choice({
            orderId: req.params.orderId,
            userId: req.body.userId,
            productId: req.body.productId
        });

        if (!errors.isEmpty()) {
            res.status(422).json({status: 'fail', errors: errors.array()});
        }
        else {
            Order.findOne({ where: {'id': req.params.orderId }}).then(order => {
                var deadline = new Date(order.deadlineAt);
                var date = new Date();
                var dateDiff = deadline - date;
                if (dateDiff < 0) {
                    res.status(403).json({status: 'error', errors: 'Time for voting has passed'});
                    return;
                }

                var choice = Choice.findOrCreate({
                    where: {
                        'orderId': req.params.orderId,
                        'userId': req.body.userId,
                        'productId': req.body.productId
                    }
                }).then( choice => {
                    res.status(200).json(choice);
                }).catch(function (error) {
                    if (error instanceof db.Sequelize.ForeignKeyConstraintError) {
                        res.status(501).json({status: 'error', error: error.message});
                    } else {
                        res.status(500).json({status: 'error', error: error.message});
                    }
                });
            });
        }
    }
];
