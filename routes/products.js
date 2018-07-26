var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productController');

router.get('/', product_controller.product_list);
router.get('/:id', product_controller.product_show);

module.exports = router;