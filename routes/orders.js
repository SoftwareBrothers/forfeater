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
    /**
     * @api {get} /orders list
     *
     * @apiDescription Get all orders
     * 
     * @apiName list
     * @apiGroup Order
     * 
     * @apiHeader {string} Authorization Bearer
     */
    router.get('/', app.oauth.authorise(), order_controller.list);

    /**
     * @api {get} /orders/:id show
     *
     * @apiDescription Get order
     * 
     * @apiName show
     * @apiGroup Order
     * 
     * @apiHeader {string} Authorization Bearer
     */
    router.get('/:id', app.oauth.authorise(), order_controller.show);

    /**
     * @api {post} /orders store
     *
     * @apiDescription Create order
     * 
     * @apiName store
     * @apiGroup Order
     * 
     * @apiHeader {string} Authorization Bearer
     * 
     * @apiParam {string} vendorId vendor Id
     * @apiParam {string} userId user Id
     * @apiParam {dateTime} deadlineAt
     */
    router.post('/', app.oauth.authorise(), acl, order_controller.store);

    /**
     * @api {patch} /orders/:orderId update
     *
     * @apiDescription Update order
     * 
     * @apiName update
     * @apiGroup Order
     * 
     * @apiHeader {string} Authorization Bearer
     * 
     * @apiParam {string} vendorId vendor Id
     * @apiParam {string} userId user Id
     * @apiParam {dateTime} deadlineAt
     */
    router.patch('/:orderId', app.oauth.authorise(), acl, order_controller.update);

    /**
     * @api {delete} /orders/:orderId delete
     *
     * @apiDescription Delete order
     * 
     * @apiName delete
     * @apiGroup Order
     * 
     * @apiHeader {string} Authorization Bearer
     */
    router.delete('/:orderId', app.oauth.authorise(), acl, order_controller.delete);

    /**
     * @api {get} /orders/:orderId/choices list of order
     *
     * @apiDescription List choices of order
     * 
     * @apiName list of order
     * @apiGroup Choice
     * 
     * @apiHeader {string} Authorization Bearer
     */
    router.get('/:orderId/choices', app.oauth.authorise(), choice_controller.listOfOrder);

    /**
     * @api {get} /orders/:orderId/choice show
     *
     * @apiDescription Get user's choice from an order
     *
     * @apiName show
     * @apiGroup Choice
     *
     * @apiHeader {string} Authorization Bearer
     *
     */
    router.get('/:orderId/choice', app.oauth.authorise(), choice_controller.showFromOrder);

    /**
     * @api {put} /orders/:orderId/choices store
     *
     * @apiDescription Create choice
     * 
     * @apiName store
     * @apiGroup Choice
     * 
     * @apiHeader {string} Authorization Bearer
     * 
     * @apiParam {string} productId product Id
     * @apiParam {string} [orderComment] comment when order
     */
    router.put('/:orderId/choices', app.oauth.authorise(), choice_controller.store);

    /**
     * @api {delete} /orders/:orderId/choices/:choiceId delete
     *
     * @apiDescription Delete choice
     * 
     * @apiName delete
     * @apiGroup Choice
     * 
     * @apiHeader {string} Authorization Bearer
     * 
     */
    router.delete('/:orderId/choices/:choiceId', app.oauth.authorise(), choice_controller.delete);

    /**
     * @api {patch} /orders/:orderId/ratings rate
     *
     * @apiDescription Rate choice
     * 
     * @apiName rate
     * @apiGroup Choice
     * 
     * @apiHeader {string} Authorization Bearer
     * 
     * @apiParam {number} mark mark
     */
    router.patch('/:orderId/ratings', app.oauth.authorise(), choice_controller.store_rating);

    return router;
};
