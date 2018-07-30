var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

router.get('/', user_controller.list);
router.post('/', user_controller.store);

router.get('/:id', user_controller.show);
router.patch('/:id', user_controller.update);
router.delete('/:id', user_controller.delete);

module.exports = router;
