'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var VerifyEmailSchema = new Schema({
  user: String,
  id: String,
  email: String,
  active: Boolean
});


module.exports = mongoose.model('VerifyEmail', VerifyEmailSchema);
