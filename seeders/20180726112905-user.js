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
        },
        {
          firstName: "Daniel", lastName: "Gościmiński", role: "user", email: "daniel.gosciminski@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Szymon", lastName: "Bartczak", role: "user", email: "szymon.bartczak@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Sergii", lastName: "Kucher", role: "user", email: "sergii.kucher@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Krzysztof", lastName: "Marszałek", role: "user", email: "krzysztof.marszalek@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Angelika", lastName: "Tańczuk", role: "user", email: "angelika.tanczuk@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Szymon", lastName: "Brucko-Stępkowski", role: "user", email: "szymon.brucko-stepkowski@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Włodzimierz", lastName: "Mazur", role: "user", email: "wlodzimierz.mazur@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Agnieszka", lastName: "Trnka", role: "user", email: "agnieszka.trnka@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Mateusz", lastName: "Gasiński", role: "user", email: "mateusz.gasinski@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Cezary", lastName: "Ołowski", role: "user", email: "cezary.olowski@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Mariusz", lastName: "Banaszek", role: "user", email: "mariusz.banaszek@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Joanna", lastName: "Fałkowska", role: "user", email: "joanna.falkowska@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Konrad", lastName: "Kieryś", role: "user", email: "konrad.kierys@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Łukasz", lastName: "Szramko", role: "user", email: "lukasz.szramko@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Szymon", lastName: "Litera", role: "user", email: "szymon.litera@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Łukasz", lastName: "Adamczyk", role: "user", email: "lukasz.adamczyk@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Krzysztof", lastName: "Bednarz", role: "user", email: "krzysztof.bednarz@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Ruslan", lastName: "Kravchyk", role: "user", email: "ruslan.kravchyk@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Krzysztof", lastName: "Nowacki", role: "user", email: "krzysztof.nowacki@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Maciej", lastName: "Szopiński", role: "user", email: "maciej.szopinski@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Michał", lastName: "Laskowski", role: "user", email: "michal.laskowski@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
          password: "$argon2i$v=19$m=4096,t=3,p=1$vh121pIrNfQQIWNrR0vGsQ$zeZPx5uxxkoPgBH70P+p7Iciltdghg7EjNC8rJHOCs4" // password is test
        },
        {
          firstName: "Bartłomiej", lastName: "Lechowski", role: "user", email: "bartlomiej.lechowski@rst-it.com", createdAt: new Date(), updatedAt: new Date(),       
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
