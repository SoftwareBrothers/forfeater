var db = require('../models');
argon2 = require('argon2');
var User = db.user;

var pg = require('pg'),
    model = module.exports,
    // connString = process.env.DATABASE_URL;
    connString = "pg://postgres:@localhost:5432/forfeaterjs";

model.getAccessToken = function (bearerToken, callback) {
    pg.connect(connString, function (err, client, done) {
        if (err) return callback(err);
        client.query('SELECT access_token, client_id, expires, user_id FROM oauth_access_tokens ' +
            'WHERE access_token = $1', [bearerToken], function (err, result) {
            if (err || !result.rowCount) return callback(err);
            // This object will be exposed in req.oauth.token
            // The user_id field will be exposed in req.user (req.user = { id: "..." }) however if
            // an explicit user object is included (token.user, must include id) it will be exposed
            // in req.user instead
            var token = result.rows[0];
            callback(null, {
                accessToken: token.access_token,
                clientId: token.client_id,
                expires: token.expires,
                userId: token.userId
            });
            done();
        });
    });
};

model.getClient = function (clientId, clientSecret, callback) {
    pg.connect(connString, function (err, client, done) {
        if (err) return callback(err);

        client.query('SELECT client_id, client_secret, redirect_uri FROM oauth_clients WHERE ' +
            'client_id = $1', [clientId], function (err, result) {
            if (err || !result.rowCount) return callback(err);

            var client = result.rows[0];

            if (clientSecret !== null && client.client_secret !== clientSecret) return callback();

            // This object will be exposed in req.oauth.client
            callback(null, {
                clientId: client.client_id,
                clientSecret: client.client_secret
            });
            done();
        });
    });
};

model.getRefreshToken = function (bearerToken, callback) {
    pg.connect(connString, function (err, client, done) {
        if (err) return callback(err);
        client.query('SELECT refresh_token, client_id, expires, user_id FROM oauth_refresh_tokens ' +
            'WHERE refresh_token = $1', [bearerToken], function (err, result) {
            // The returned user_id will be exposed in req.user.id
            callback(err, result.rowCount ? result.rows[0] : false);
            done();
        });
    });
};

// This will very much depend on your setup, I wouldn't advise doing anything exactly like this but
// it gives an example of how to use the method to resrict certain grant types
var authorizedClientIds = ['forfeaterweb'];
model.grantTypeAllowed = function (clientId, grantType, callback) {
    if (grantType === 'password') {
        return callback(false, authorizedClientIds.indexOf(clientId.toLowerCase()) >= 0);
    }

    callback(false, true);
};

model.saveAccessToken = function (accessToken, clientId, expires, userId, callback) {
    pg.connect(connString, function (err, client, done) {
        if (err) return callback(err);
        client.query("INSERT INTO oauth_access_tokens(access_token, client_id, user_id, expires) " +
            "VALUES ($1, $2, $3, $4)", [accessToken, clientId, userId, expires],
            function (err, result) {
                callback(err);
                done();
            });
    });
};

model.saveRefreshToken = function (refreshToken, clientId, expires, userId, callback) {
    pg.connect(connString, function (err, client, done) {
        if (err) return callback(err);
        client.query('INSERT INTO oauth_refresh_tokens(refresh_token, client_id, user_id, ' +
            'expires) VALUES ($1, $2, $3, $4)', [refreshToken, clientId, userId, expires],
            function (err, result) {
                callback(err);
                done();
            });
    });
};

/*
 * Required to support password grant type
 */
model.getUser = function (username, password, callback) {
    pg.connect(connString, function (err, client, done) {
        if (err) return callback(err);
        var user = User.findOne({
            where: {
                'email': username
            }
        }).then(user => {
            var dbPass = user.password;
            argon2.verify(dbPass, password).then(match => {
                callback(null, match ? user.id : false);
                done();
            });

        });
    });
};
