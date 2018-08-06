var oauthHelper = require('../oauth/helpers');
var db = require('../models');

var addUserToRequest = function addUserToRequest(req, res, next)
{
    var token = req.get('Authorization');
    if (!token) {
        let User = db.user;
        req.user_details = new User({
            role: 'guest'
        });
        next();
        return;
    }
    oauthHelper.getUserFromBearerToken(token).then(
        user => {
            req.token = token;
            req.user_details = user;
            next();
        }
    );
};

module.exports = addUserToRequest;