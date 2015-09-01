'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var CustomerInfo = mongoose.model('CustomerInfo').schema;

var CustomerSchema = new Schema({
  name: String,
  info: {
    type: Schema.ObjectId,
    ref: CustomerInfo
  },
  active: Boolean
});


module.exports = mongoose.model('Customer', CustomerSchema);
