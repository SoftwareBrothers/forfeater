
module.exports = function (app) {

    var express = require('express');
    var router = express.Router();

    var auth_controller = require('../controllers/authController');

    router.post('/login', app.oauth.grant(), auth_controller.login);
    router.get('/user', app.oauth.authorise(), auth_controller.get_user);




    // router.post('/getAccessToken', auth_controller.getAccessToken);
    //
    // // router.post('/restrictedArea', app.oauth.authorise(), auth_controller.restrictedArea);
    // router.post('/restrictedArea', app.oauth.authorise(), function (req, res) {
    //
    //     var headerValue = req.get('Authorization');
    //     res.json(req.headers);
    //
    // });
    //
    // console.log("\n\n\n\n");
    // console.log('======= test =============');


    return router;
};