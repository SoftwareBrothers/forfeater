var db = require('../models');

var getUserIdFromBearerToken = function getUserIdFromBearerToken(token)
{
    var query_string = 'SELECT\n' +
        '  u.id\n' +
        'FROM\n' +
        '  oauth_access_tokens T\n' +
        'LEFT JOIN users u\n' +
        '    ON u.id = t.user_id\n' +
        'WHERE\n' +
        '  access_token=\'' + token + '\'';

    return db.sequelize.query(query_string, {
        type: db.sequelize.QueryTypes.SELECT
    }).then(users => {
        return users[0].id;
    });
};

var getUserFromBearerToken = function getUserFromBearerToken(token)
{
    return getUserIdFromBearerToken(token).then(function(userId){
        var User = db.user;
        return User.findOne({
            id: userId,
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