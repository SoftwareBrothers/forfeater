'use strict';
module.exports = (sequelize, DataTypes) => {
    var oauth_client = sequelize.define('oauth_client', {
        client_id: {
            type: DataTypes.TEXT,
            primaryKey: true
        },
        client_secret: DataTypes.TEXT,
        redirect_uri: DataTypes.TEXT
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        tableName: 'oauth_clients'
    });
    oauth_client.associate = function(models) {
    };
    return oauth_client;
};