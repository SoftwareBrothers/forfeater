var express = require('express');
var router = express.Router();

var vendor_controller = require('../controllers/vendorController');
var product_controller = require('../controllers/productController');

module.exports = function (app) {
    router.get('/', app.oauth.authorise(), vendor_controller.list);
    router.get('/:id', app.oauth.authorise(), vendor_controller.show);

    router.post('/', app.oauth.authorise(), vendor_controller.store);
    router.patch('/:vendorId', app.oauth.authorise(), vendor_controller.update);
    router.delete('/:vendorId', app.oauth.authorise(), vendor_controller.delete);

    router.get('/:vendorId/products', app.oauth.authorise(), product_controller.list);
    router.get('/:vendorId/products/:productId', app.oauth.authorise(), product_controller.show);
    router.post('/:vendorId/products', app.oauth.authorise(), product_controller.store);
    router.patch('/:vendorId/products/:productId', app.oauth.authorise(), product_controller.update);
    router.delete('/:vendorId/products/:productId', app.oauth.authorise(), product_controller.delete);

    return router;
};
