var oauthHelper = require('../oauth/helpers');

var addUserToRequest = function addUserToRequest(req, res, next)
{
    var token = req.get('Authorization');
    if (!token) {
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