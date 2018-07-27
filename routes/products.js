var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productController');

router.get('/', product_controller.list);
router.get('/:id', product_controller.show);

router.post('/create', product_controller.store);

module.exports = router;