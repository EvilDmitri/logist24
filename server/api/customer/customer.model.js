'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var CustomerInfoSchema = mongoose.model('CustomerInfo').schema;

var CustomerSchema = new Schema({
  name: String,
  info: CustomerInfoSchema,
  active: Boolean
});

module.exports = mongoose.model('Customer', CustomerSchema);
