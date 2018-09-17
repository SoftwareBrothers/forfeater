"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Piotr", lastName: "Wilczyński", role: "admin", email: "piotr.wilczynski@rst-it.com", createdAt: new Date(), updatedAt: new Date(),
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Paweł", lastName: "Lorenc", role: "admin", email: "pawel.lorenc@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Marek", lastName: "Firlejczyk", role: "admin", email: "marek.firlejczyk@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Wojciech", lastName: "Krysiak", role: "admin", email: "wojciech.krysiak@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Marta", lastName: "Wodzicka", role: "admin", email: "marta.wodiczka@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },

        {
          firstName: "Katarzyna", lastName: "Heltman", role: "user", email: "katarzyna.heltman@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Wojciech", lastName: "Pawlinów", role: "user", email: "wojciech.pawlinow@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Szymon", lastName: "Półtorak", role: "user", email: "szymon.poltorak@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Arkadiusz", lastName: "Pęcherz", role: "user", email: "arkadiusz.pecherz@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users");
  }
};
