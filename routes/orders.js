var express = require('express');
var router = express.Router();

var order_controller = require('../controllers/orderController');
var choice_controller = require('../controllers/choiceController');

router.get('/', order_controller.list);
router.get('/:id', order_controller.show);
router.post('/', order_controller.store);
router.patch('/:orderId', order_controller.update);
router.delete('/:orderId', order_controller.delete);

router.put('/:orderId/choices', choice_controller.store);
router.patch('/:orderId/ratings', choice_controller.store_rating);

module.exports = router;
