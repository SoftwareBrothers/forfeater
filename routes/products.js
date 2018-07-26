var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productController');

router.get('/:id', product_controller.product_details);

module.exports = router;