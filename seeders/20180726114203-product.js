'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('products');

      return queryInterface.bulkInsert('products', [{
          name: 'Frytki',
          vendor_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },{
          name: 'Kurczak',
          vendor_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },{
          name: 'Bebek Burger',
          vendor_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('products');

  }
};
