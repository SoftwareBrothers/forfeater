'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('products', [{
          name: 'Frytki',
          vendorId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },{
          name: 'Kurczak',
          vendorId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },{
          name: 'Bebek Burger',
          vendorId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('products');
  }
};
