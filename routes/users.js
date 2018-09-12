var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');


module.exports = function (app) {
    router.get('/', app.oauth.authorise(), user_controller.list);
    router.post('/', app.oauth.authorise(), user_controller.store);

    router.get('/:id', app.oauth.authorise(), user_controller.show);
    router.put('/:id/password', app.oauth.authorise(), user_controller.changePassword);
    router.patch('/:id', app.oauth.authorise(), user_controller.update);
    router.delete('/:id', app.oauth.authorise(), user_controller.delete);

    return router;
};