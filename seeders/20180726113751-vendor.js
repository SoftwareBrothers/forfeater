'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('vendors');

      return queryInterface.bulkInsert('vendors', [{
          name: 'KFC',
          url: 'www.kfc.pl',
          createdAt: new Date(),
          updatedAt: new Date()
      },{
          name: 'Pasibus',
          url: 'www.pasibus.pl',
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('vendors');
  }
};
