'use strict';
module.exports = (sequelize, DataTypes) => {
  var vendor = sequelize.define('vendor', {
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  vendor.associate = function(models) {
    // associations can be defined here
  };
  return vendor;
};