var express = require('express');
var router = express.Router();

var vendor_controller = require('../controllers/vendorController');

router.get('/', vendor_controller.vendor_list);

router.get('/create', vendor_controller.vendor_create_form);

router.get('/:id', vendor_controller.vendor_show);

module.exports = router;