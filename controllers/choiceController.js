const { checkSchema, body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var db = require('../models');
var Choice = db.choice;
var Order = db.order;
var User = db.user;
var Product = db.product;

var choiceSchema = require('../schemas/choiceSchema');
var oauthHelpers = require('../oauth/helpers');

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
        } else {
            oauthHelpers.getUserFromBearerToken(req.get('Authorization')).then(function(loggedUser){
                Choice.findOne({
                    where: {
                        'userId': loggedUser.id,
                        'orderId': req.params.orderId,
                    }
                }).then(choice => {
                    if (null === choice) {
                        res.status(404).json({status: 'error', error: 'No choice for given data'});
                    }
                    choice.score = req.body.mark;
                    choice.scoreComment = req.body.scoreComment;
                    choice.save();
                    res.json(choice);
                }).catch(function (error) {
                    res.status(500).json({status: 'error', error: error.message});
                });
            })
        }
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
            productId: req.body.productId,
            orderComment: req.body.orderComment,
        });

        if (!errors.isEmpty()) {
            res.status(422).json({status: 'fail', errors: errors.array()});
        } else {
            oauthHelpers.getUserFromBearerToken(req.get('Authorization')).then(function(loggedUser){
                Order.findOne({ where: {'id': model.orderId }}).then(order => {
                    var deadline = new Date(order.deadlineAt);
                    var date = new Date();
                    var dateDiff = deadline - date;
                    if (dateDiff < 0) {
                        res.status(403).json({status: 'error', errors: 'Time for voting has passed'});
                        return;
                    }

                    var userId = loggedUser.id;
                    if (loggedUser.role === 'admin' && req.body.userId !== undefined) {
                        userId = req.body.userId;
                    }

                    Choice.findOrCreate({
                        where: {
                            'orderId': model.orderId,
                            'userId': userId
                        }
                    }).then( choice => {
                        choice = choice[0];
                        choice.productId = model.productId;
                        choice.orderComment = model.orderComment;
                        choice.save();
                        console.log("\n\n");
                        res.status(200).json(choice);
                    }).catch(function (error) {
                        if (error instanceof db.Sequelize.ForeignKeyConstraintError) {
                            res.status(501).json({status: 'error', error: error.message});
                        } else {
                            res.status(500).json({status: 'error', error: error.message});
                        }
                    });
                });

            });

        }
    }
];

exports.delete = (req, res) => {

    oauthHelpers.getUserFromBearerToken(req.get('Authorization')).then(function(loggedUser){
        Choice.findOne({ where: {'id': req.params.choiceId }})
        .then(choice => {
            if(loggedUser.role != 'admin') {
                if(loggedUser.id != choice.user_id) {
                    res.status(403).json({status: 'error', errors: 'You can not remove not own choice!'});
                }

                var deadline = new Date(choice.order.deadlineAt);
                var date = new Date();
                var dateDiff = deadline - date;
                if (dateDiff < 0) {
                    res.status(403).json({status: 'error', errors: 'Time for voting has passed'});
                    return;
                }
            }

            Choice.destroy({
                where: {
                    id: req.params.choiceId
                }
            }).then(function (deletedRecord) {
                if (deletedRecord === 1) {
                    res.status(200).json({ success: true, message: "Deleted successfully" });
                }
            }).catch(function (error) {
                res.status(500).json({ 'error': error });
            });

        }).catch(function (error) {
            if (error instanceof db.Sequelize.EmptyResultError) {
                res.status(404).json({status: 'error', error: error.message});
            } else {
                res.status(500).json({status: 'error', error: error.message});
            }
        });

    });

}
