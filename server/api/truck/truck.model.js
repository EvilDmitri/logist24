'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TruckSchema = new Schema({
  owner: String,
  company: String,
  contact: {type:String, default: ''},
  phone: {type:String, default: ''},
  email: {type:String, default: ''},
  price: {type:String, default: '0'},
  source_address: Object,
  dest_address: Object,
  route_start: String,
  route_end: String,
  position: Object,
  date: {type:String, default: ''},
  body_type: Object,
  info: Object,
  viewed: Number,
  created_at    : { type: Date },
  updated_at    : { type: Date },

  active: Boolean
});



TruckSchema.pre('save', function (next) {
  var now = new Date();
  this.updated_at = now;
  if(!this.created_at) {
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model('Truck', TruckSchema);
