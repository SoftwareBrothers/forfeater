var express = require('express');
var router = express.Router();

var order_controller = require('../controllers/orderController');

router.get('/', order_controller.list);
router.get('/:id', order_controller.show);

router.post('/create', order_controller.store);

module.exports = router;