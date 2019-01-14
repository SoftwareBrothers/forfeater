var db = require('../models');
argon2 = require('argon2');
var User = db.user;
var Oauth_access_token = db.oauth_access_token;
var Oauth_client = db.oauth_client;

var pg = require('pg'),
    model = module.exports,
    connString = "pg://postgres:@localhost:5432/forfeaterjs";

model.getAccessToken = function (bearerToken, callback) {
    Oauth_access_token.findOne({
        where: {
            'access_token': bearerToken
        }
    }).then(oauth_access_token => {
        if (!oauth_access_token) {
            return callback(null);
        }
        callback(null, {
            accessToken: oauth_access_token.access_token,
            clientId: oauth_access_token.client_id,
            expires: oauth_access_token.expires,
            userId: oauth_access_token.user_id
        });
    });
};

model.getClient = function (clientId, clientSecret, callback) {

    Oauth_client.findOne({
        where: {
            client_id: clientId
        }
    }).then(client => {
        if (!client) {
            return callback(null);
        }
        callback(null, {
            clientId: client.client_id,
            clientSecret: client.client_secret
        });
    });
};


// it's very much workaround but suit forfeater's needs
var authorizedClientIds = ['forfeaterweb'];
model.grantTypeAllowed = function (clientId, grantType, callback) {
    if (grantType === 'password') {
        return callback(false, authorizedClientIds.indexOf(clientId.toLowerCase()) >= 0);
    }

    callback(false, true);
};

model.saveAccessToken = function (accessToken, clientId, expires, userId, callback) {
    console.log('============================');
    console.log(expires);
    console.log(new Date().getTimezoneOffset());
    console.log('============================');

    var access_token = new Oauth_access_token({
        access_token: accessToken,
        client_id: clientId,
        expires: expires,
        user_id: userId,
    });
    access_token.save();
    callback(null);
};

/*
 * Required to support password grant type
 */
model.getUser = function (username, password, callback) {
    User.findOne({where: {'email': username}})
        .then(user => {
            if (user === null) {
                callback(null, false);
            }
            const dbPass = user.password;
            argon2.verify(dbPass, password).then(match => {
                callback(null, match ? user.id : false);
            });
        });
};

// not used in password grant
model.getRefreshToken = function (bearerToken, callback) {
    callback(null);
};

// not used in password grant
model.saveRefreshToken = function (refreshToken, clientId, expires, userId, callback) {
    callback(null);
};