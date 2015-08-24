'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TruckSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Truck', TruckSchema);