const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var db = require('../models');
var Choice = db.choice;
var Order = db.order;
var User = db.user;
var Product = db.product;

exports.list = function (req, res) {
    Choice.findAll({ include: [ Order, User, Product ] }).then(choices => {
        res.json(choices);
    })
};

exports.show = function (req, res) {
    Choice.findById(req.params.id, { include: [ Order, User, Product ] }).then(product => {
        res.json(product);
    })
}

exports.store =  [
   
    // Validate that the name field is not empty.
    body('orderId', 'OrderId required').isLength({ min: 1 }).trim(),
    body('userId', 'UserId required').isLength({ min: 1 }).trim(),
    body('productId', 'ProductId required').isLength({ min: 1 }).trim(),

    // Sanitize (trim and escape) the name field.
    sanitizeBody('name').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var model = new Choice({
            orderId: req.body.orderId,  
            userId: req.body.userId,
            productId: req.body.productId
        });

        if (!errors.isEmpty()) {
            res.status(422).json({status: 'fail', errors: errors.array()});
        }
        else {
        
            Choice.findOne({ where: {'orderId': req.body.orderId, 'userId': req.body.userId }})
                .then( found_model => { 
                     if (found_model) {
                         res.status(409).json({status: 'fail', data: 'Choice already exists!'});
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