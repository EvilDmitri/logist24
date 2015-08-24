'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ThingSchema = new Schema({
  owner: String,
  name: String,
  type: String,
  endurance: String,
  price: String,
  info: Object,
  source_address: Object,
  dest_address: Object,
  position: Object,
  viewed: Number,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);
