'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('products', [
            {
                name: 'Frytki',
                vendorId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Kurczak',
                vendorId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Bebek Burger',
                vendorId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Hot Chili',
                vendorId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Filet drobiowy + ziemniaki + surówka',
                vendorId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Gulasz drobiowy + kasza + surówka',
                vendorId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Kotlet schabowy + ziemniaki + surówki',
                vendorId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Łopatka pieczona w warzywach + puree + surówka',
                vendorId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Pierogi kapusta+pieczarka (duze - 11 sztuk)',
                vendorId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Pierogi mięsne (duze - 11 sztuk)',
                vendorId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Pierogi ruskie (duze - 11 sztuk)',
                vendorId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Pierogi ruskie (małe - 7 sztuk)',
                vendorId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.bulkDelete('products');
    }
};
