var db = require('../models');

var getUserIdFromBearerToken = function getUserIdFromBearerToken(token)
{
    token = token.replace("Bearer ", "");
    var Oauth_access_token = db.oauth_access_token;
    return Oauth_access_token.findOne({
        where: {
            'access_token': token
        }
    }).then(oauth_access_token => {
        return oauth_access_token ? oauth_access_token.user_id : null;
    });
};

var getUserFromBearerToken = function getUserFromBearerToken(token)
{
    return getUserIdFromBearerToken(token).then(function(userId){
        var User = db.user;
        return User.findOne({
            where: {
                id: userId
            },
            attributes: {
                exclude: ['password']
            }
        }).then(user => {
            return user;
        });
    });
};

module.exports = {
    getUserFromBearerToken: getUserFromBearerToken
};