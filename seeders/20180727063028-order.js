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
    deadlineAt: new Date(),
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
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('orders');
  }
};
