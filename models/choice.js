'use strict';
module.exports = (sequelize, DataTypes) => {
  var choice = sequelize.define('choice', {
    orderId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  choice.associate = function(models) {
    choice.belongsTo(models.order),
    choice.belongsTo(models.user),
    choice.belongsTo(models.product)
  };
  return choice;
};