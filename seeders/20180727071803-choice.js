'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('choices', [{
      orderId: 1,
      userId: 1,
      score: 5,
      comment: 'Delicious!',
      createdAt: new Date(),
      updatedAt: new Date()
  },{
    orderId: 1,
    userId: 2,
    score: 6,
    comment: 'It was fine.',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    orderId: 2,
    userId: 1,
    score: 6,
    comment: 'ok....',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('choices');
  }
};
