'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('vendors', [
            {
                name: 'KFC',
                url: 'www.kfc.pl',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Pasibus',
                url: 'www.pasibus.pl',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pierogarnia Krzycka',
                url: null,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('vendors');
    }
};
