var express = require('express');
var router = express.Router();

var vendor_controller = require('../controllers/vendorController');

router.get('/', vendor_controller.list);
router.get('/:id', vendor_controller.show);

router.post('/', vendor_controller.store);
router.patch('/:vendorId', vendor_controller.update);
router.delete('/:vendorId', vendor_controller.delete);

module.exports = router;
