'use strict';

var express = require('express');
var controller = require('./search.controller');

var router = express.Router();

//router.get('/', controller.index);
router.get('/', controller.show);
router.post('/', controller.search);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);

module.exports = router;
