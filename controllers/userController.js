

var db = require('../models');
var User = db.user;

exports.user_list = function (req, res) {

    User.findAll().then(users => {
        // res.send(users);
        res.send(users);
        // res.render('index', { title: 'Express', users: users });
    })


};