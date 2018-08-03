const { checkSchema, body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var oauthHelpers = require('../oauth/helpers');

var db = require('../models');
var OAuthAccessToken = db.OAuthAccessToken;
var OAuthAuthorizationCode = db.OAuthAuthorizationCode;
var OAuthClient = db.OAuthClient;
var OAuthRefreshToken = db.OAuthRefreshToken;
var OAuthScope = db.OAuthScope;
var User = db.user;

exports.syncDb = function (req, res) {

    OAuthAccessToken.sync({force:true});
    OAuthAuthorizationCode.sync({force:true});
    OAuthClient.sync({force:true});
    OAuthRefreshToken.sync({force:true});
    OAuthScope.sync({force:true});
    OAuthClient.create({
        client_id:'someId',
        client_secret:'someClientSecret',
        redirect_uri:'http://localhost:3000/whatIsIt',
    });

    res.send('synced');

};

exports.login = function (req, res) {
    console.log('login');
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