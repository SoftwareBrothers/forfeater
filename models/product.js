'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('product', {
    active: DataTypes.INTEGER,
    name: DataTypes.STRING,
    vendorId: DataTypes.INTEGER
  }, {});
  product.associate = function(models) {
    product.belongsTo(models.vendor)
  };
  return product;
};