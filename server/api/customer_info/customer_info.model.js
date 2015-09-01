'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CustomerInfoSchema = new Schema({
  name: String,
  info: Object,
  active: Boolean
});


module.exports.CustomerInfoSchema = CustomerInfoSchema;
module.exports = mongoose.model('CustomerInfo', CustomerInfoSchema);
