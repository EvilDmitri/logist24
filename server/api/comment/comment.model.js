'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  header: String,
  body: String,
  active: Boolean
});

module.exports = mongoose.model('Comment', CommentSchema);
