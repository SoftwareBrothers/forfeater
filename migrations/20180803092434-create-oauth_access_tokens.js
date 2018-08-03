'use strict';

var db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('oauth_access_tokens', {
          access_token: {
              allowNull: false,
              type: Sequelize.TEXT
          },
          client_id: {
              allowNull: false,
              type: Sequelize.TEXT
          },
          expires: {
              allowNull: false,
              type: 'TIMESTAMP'
          },
          user_id: {
              allowNull: false,
              type: Sequelize.INTEGER
          }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('oauth_access_tokens');
  }
};
