'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('choices', [
      {
        orderId: 1,
        userId: 1,
        productId: 1,
        score: 5,
        orderComment: 'No kolendra please',
        scoreComment: 'Delicious!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 26,
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 1,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 25,
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 25,
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 31,
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 23,
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 16,
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 21,
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 30,
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 7,
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 27,
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 20,
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 11,
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 2,
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 14,
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 10,
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 19,
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 28,
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 17,
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 6,
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 3,
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 22,
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 8,
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 12,
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 4,
        userId: 5,
        productId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('choices');
  }
};
