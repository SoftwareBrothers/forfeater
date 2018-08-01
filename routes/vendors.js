var express = require('express');
var router = express.Router();

var vendor_controller = require('../controllers/vendorController');
var product_controller = require('../controllers/productController');

router.get('/', vendor_controller.list);
router.get('/:id', vendor_controller.show);

router.post('/', vendor_controller.store);
router.patch('/:vendorId', vendor_controller.update);
router.delete('/:vendorId', vendor_controller.delete);

router.get('/:vendorId/products', product_controller.list);
router.get('/:vendorId/products/:productId', product_controller.show);
router.post('/:vendorId/products', product_controller.store);
router.patch('/:vendorId/products/:productId', product_controller.update);
router.delete('/:vendorId/products/:productId', product_controller.delete);

module.exports = router;
