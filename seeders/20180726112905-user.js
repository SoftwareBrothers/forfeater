'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('users');
      
      return queryInterface.bulkInsert('users', [{
          firstName: 'Piotr',
          lastName: 'Wilczyński',
          role: 'admin',
          email: 'piotr.wilczynski@rst-it.com',
          createdAt: new Date(),
          updatedAt: new Date()
      },{
          firstName: 'Paweł',
          lastName: 'Lorenc',
          role: 'admin',
          email: 'pawel.lorenc@rst-it.com',
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users');
  }
};
