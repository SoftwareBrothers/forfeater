'use strict';
module.exports = (sequelize, DataTypes) => {
    var oauth_access_token = sequelize.define('oauth_access_token', {
        access_token: {
            type: DataTypes.TEXT,
            primaryKey: true
        },
        client_id: DataTypes.TEXT,
        expires: 'TIMESTAMP',
        user_id: DataTypes.INTEGER
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        tableName: 'oauth_access_tokens'
    });
    oauth_access_token.associate = function(models) {
        oauth_access_token.belongsTo(models.user)
    };
    return oauth_access_token;
};