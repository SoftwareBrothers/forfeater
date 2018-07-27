var express = require('express');
var router = express.Router();

var vendor_controller = require('../controllers/vendorController');

router.get('/', vendor_controller.list);
router.get('/:id', vendor_controller.show);

// router.get('/create', vendor_controller.create);
router.post('/create', vendor_controller.store);

module.exports = router;