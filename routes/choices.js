var express = require('express');
var router = express.Router();

var choice_controller = require('../controllers/choiceController');

router.get('/', choice_controller.list);
router.get('/orders/:orderId', choice_controller.listOfOrder);

router.get('/:id', choice_controller.show);

module.exports = router;