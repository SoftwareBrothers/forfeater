var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

router.get('/', user_controller.user_list);
router.get('/:id', user_controller.user_show);

module.exports = router;
