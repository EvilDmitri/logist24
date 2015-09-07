'use strict';

var express = require('express');
var controller = require('./verify.controller');

var router = express.Router();

router.post('/send', controller.send);
router.get('/verify', controller.verify);


module.exports = router;
