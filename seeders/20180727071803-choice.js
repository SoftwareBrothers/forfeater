'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('choices', [{
      orderId: 1,
      userId: 1,
      productId: 1,
      score: 5,
      comment: 'Delicious!',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('choices');
  }
};
