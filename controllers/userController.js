const { checkSchema, body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var db = require('../models');
var User = db.user;

var userSchema = require('../schemas/userSchema');

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

    checkSchema(userSchema.store),

    (req, res, next) => {
        const errors = validationResult(req);

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
                        model.save()
                        .then(() => {
                            res.status(200).json({status: 'success', data: model});
                        })
                        .catch(function (err) {
                            res.status(500).json({status: 'error', error: err.message});
                            console.error(err);
                          })
                     }

                 });
        }
    }
];

exports.update = [
    
    checkSchema(userSchema.update),

    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ status: 'fail', errors: errors.array() });
        } else {
            User.update(
                req.body,
                { where: { id: req.params.id } }
            ).then(result => {
                if (result) {
                    res.json({ status: 'success' })
                } else {
                    res.status(404).json({ success: false, message: "User with ID: " + req.params.id + "  not found" })
                }
            }).catch(error => {
                if (error instanceof db.Sequelize.UniqueConstraintError) {
                    res.status(409).json({ status: 'error', error: 'E-mail must be unique' });
                } else {
                    res.status(500).json({ status: 'error', error: error.message });
                }
                console.error(err);
            })

        }
    }
]

exports.delete = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (numberOfDeleted) {
        if(numberOfDeleted === 1) {
            res.status(200).json({ status: 'success', message: "Deleted successfully" });
        } else {
            res.status(404).json({ status: 'error', message: "User with ID: " + req.params.id + " not found" })
        }
    }).catch(function (error) {
        res.status(500).json({ status: 'error', message: error.message });
    });
}