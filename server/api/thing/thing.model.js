'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ThingSchema = new Schema({
  owner: String,
  company: String,
  contact: {type:String, default: ''},
  phone: {type:String, default: ''},
  email: {type:String, default: ''},
  price: {type:String, default: '0'},
  load_name: {type:String, default: ''},
  source_address: Object,
  dest_address: Object,
  route_start: String,
  route_end: String,
  position: Object,
  date: {type:String, default: ''},
  pallets: {type:String, default: '0'},
  volume: {type:String, default: '0'},
  weight: {type:String, default: '0'},
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
