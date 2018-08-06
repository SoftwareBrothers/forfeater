let rules = {
    user: {
        allowed: [
            {
                method: 'GET',
                route: '/user'
            }
        ]
    }
};
var acl = require('../middleware/acl')(rules);

module.exports = function (app) {
    var express = require('express');
    var router = express.Router();

    var auth_controller = require('../controllers/authController');

    router.post('/login', app.oauth.grant(), auth_controller.login);
    router.get('/user', app.oauth.authorise(), acl, auth_controller.get_user);

    return router;
};
