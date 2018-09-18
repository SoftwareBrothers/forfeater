'use strict';
const today = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [{
      vendorId: 1,
      userId: 1,
      deadlineAt: new Date(),
      deliveryAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
    vendorId: 1,
    userId: 1,
    deadlineAt: new Date(today.getTime() + 1000 * 12 * 25 * 24),
    deliveryAt: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    vendorId: 2,
    userId: 2,
    deadlineAt: new Date(today.getTime() + 1000 * 60 * 60 * 24),
    deliveryAt: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    vendorId: 3,
    userId: 5,
    deadlineAt: new Date(2018, 8, 18, 12, 30, 0, 0),
    deliveryAt: new Date(2018, 8, 19, 10, 30, 0, 0),
    createdAt: new Date(),
    updatedAt: new Date()
  }
], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('orders');
  }
};
