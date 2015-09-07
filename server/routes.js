/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var express = require('express');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/search', require('./api/search'));
  app.use('/api/comments', require('./api/comment'));
  app.use('/api/customers_info', require('./api/customer_info'));
  app.use('/api/customers', require('./api/customer'));
  app.use('/api/trucks', require('./api/truck'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));


  app.use('/mail', require('./mail'));



  app.use('/static', express.static(__dirname + '/static'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
