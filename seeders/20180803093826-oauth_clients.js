'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('oauth_clients', [{
        client_id: 'forfeaterWeb',
        client_secret: 'forfeaterSecrett',
        redirect_uri: '/auth/authorize' // not user
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('oauth_clients');
  }
};
