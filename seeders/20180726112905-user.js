"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Piotr",
          lastName: "Wilczyński",
          role: "admin",
          email: "piotr.wilczynski@rst-it.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          // password is test
          password:
            "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4"
        },
        {
          firstName: "Paweł",
          lastName: "Lorenc",
          role: "admin",
          email: "pawel.lorenc@rst-it.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          // password is test
          password:
            "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users");
  }
};
