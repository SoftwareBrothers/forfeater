"use strict";

const argon2 = require("argon2");

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define(
    "user",
    {
      role: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCreate: (user,options) => {
          return argon2
          .hash(user.password)
          .then(hash => {
            user.password = hash;
          })
          .catch(error => {
            console.log(error);
          });
        }
      }
    }
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
