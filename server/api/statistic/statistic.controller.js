'use strict';

var _ = require('lodash');

var User = require('../user/user.model');
var Thing = require('../thing/thing.model');


// Get list of statistics
exports.index = function(req, res) {

  var user_count = 0;
  var things_count = 0;

  Thing.find({}, function (err, things) {
    things_count = things.length;
  });

  User.find({}, function (err, users){
    if(err) { return handleError(res, err); }
    return res.json(200, {'users_count': users.length, 'things_count': things_count});
    //return res.json(200, tracks);
  });



};


function handleError(res, err) {
  return res.send(500, err);
}
