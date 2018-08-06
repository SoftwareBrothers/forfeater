'use strict';

var db = require('../models');
var OAuthScope = db.OAuthScope;

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('oauth_clients', {
          client_id: {
              allowNull: false,
              type: Sequelize.TEXT
          },
          client_secret: {
              allowNull: false,
              type: Sequelize.TEXT
          },
          redirect_uri: {
              allowNull: false,
              type: Sequelize.TEXT
          }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('oauth_clients');
  }
};
