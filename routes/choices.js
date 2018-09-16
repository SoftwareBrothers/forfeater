var express = require('express');
var router = express.Router();

var choice_controller = require('../controllers/choiceController');

router.get('/', choice_controller.list);
router.get('/:id', choice_controller.show);

module.exports = function (app) {
    router.get('/', choice_controller.list);
    router.get('/:id', choice_controller.show);

    return router;
};