var db = require('../models');
var User = db.user;

exports.user_list = function (req, res) {
    User.findAll().then(users => {
        res.json(users);
    })
};

exports.user_show = function (req, res) {
    User.findById(req.params.id).then(user => {
        res.json(user);
    })
};