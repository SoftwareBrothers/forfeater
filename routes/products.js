var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productController');

router.get('/', product_controller.list);
router.get('/:id', product_controller.show);

router.post('/', product_controller.store);
router.patch('/:id', product_controller.update);
router.delete('/:id', product_controller.delete);

module.exports = router;
