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
  route_start: String,
  route_end: String,
  position: Object,
  viewed: Number,
  active: Boolean,
  createdOn: { type: Date },
  updated_at    : { type: Date }
});


ThingSchema.pre('save', function (next) {
  var now = new Date();
  this.updated_at = now;
  if(!this.created_at) {
    this.created_at = now;
  }
  next();
});


module.exports = mongoose.model('Thing', ThingSchema);
