const { checkSchema, body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var oauthHelpers = require('../oauth/helpers');

exports.login = function (req, res) {
    res.send('ok');
};

exports.get_user = function (req, res) {
    oauthHelpers.getUserFromBearerToken(req.get('Authorization')).then(function(user){
        res.json(user);
    });
};

exports.restrictedArea = function (req, res) {
    res.send('restricted area');
};