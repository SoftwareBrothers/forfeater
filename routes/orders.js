var express = require('express');
var router = express.Router();

var order_controller = require('../controllers/orderController');
var choice_controller = require('../controllers/choiceController');

let rules = {
    guest: {
        denied: [
            {
                method: '*',
                route: '*'
            }
        ]
    },
    user: {
        denied: [
            {
                method: 'POST',
                route: '/'
            },
            {
                method: 'PATCH',
                route: '/:orderId'
            },
            {
                method: 'DELETE',
                route: '/:orderId'
            },
        ]
    }
};
var acl = require('../middleware/acl')(rules);

module.exports = function (app) {
    router.get('/', app.oauth.authorise(), order_controller.list);
    router.get('/:id', app.oauth.authorise(), order_controller.show);
    router.post('/', app.oauth.authorise(), acl, order_controller.store);
    router.patch('/:orderId', app.oauth.authorise(), acl, order_controller.update);
    router.delete('/:orderId', app.oauth.authorise(), acl, order_controller.delete);

    router.get('/:orderId/choices', app.oauth.authorise(), choice_controller.listOfOrder);
    router.put('/:orderId/choices', app.oauth.authorise(), choice_controller.store);
    router.patch('/:orderId/ratings', app.oauth.authorise(), choice_controller.store_rating);

    return router;
};
