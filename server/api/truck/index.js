'use strict';

var express = require('express');
var controller = require('./truck.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/limited', controller.index_limited);

router.get('/:id', controller.show);

router.get('/user/:id', controller.show_user_trucks);

router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
