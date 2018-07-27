var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

router.get('/', user_controller.list);
router.get('/:id', user_controller.show);

router.post('/create', user_controller.store);

module.exports = router;
