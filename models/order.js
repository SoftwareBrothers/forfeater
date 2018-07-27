'use strict';
module.exports = (sequelize, DataTypes) => {
  var order = sequelize.define('order', {
    vendorId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    deadlineAt: DataTypes.DATE,
    deliveryAt: DataTypes.DATE
  }, {});
  order.associate = function(models) {
    order.belongsTo(models.vendor),
    order.belongsTo(models.user)
  };
  return order;
};