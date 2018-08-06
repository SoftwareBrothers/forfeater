let rules = {
    user: {
        denied: [
            {
                method: 'GET',
                route: '/user'
            }
        ]
    }
};

var acl = require('../middleware/acl');

module.exports = function (app) {
    var express = require('express');
    var router = express.Router();

    var auth_controller = require('../controllers/authController');

    router.post('/login', app.oauth.grant(), auth_controller.login);
    router.get('/user', app.oauth.authorise(), acl(rules), auth_controller.get_user);

    return router;
};