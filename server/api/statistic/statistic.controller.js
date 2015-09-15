'use strict';

var _ = require('lodash');

var User = require('../user/user.model');
var Thing = require('../thing/thing.model');
var Truck = require('../truck/truck.model');

// Get list of statistics
exports.index = function(req, res) {

  var user_count = 0;
  var things_count = 0;
  var trucks_count = 0;

  Thing.find({}, function (err, things) {
    things_count = things.length;
  });

  Truck.find({}, function (err, trucks) {
    trucks_count = trucks.length;
  });

  User.find({}, function (err, users){
    if(err) { return handleError(res, err); }
    //return res.json(200, {'users_count': users.length, 'things_count': things_count, 'trucks_count': trucks_count});
    res.status(200).json({'users_count': users.length, 'things_count': things_count, 'trucks_count': trucks_count});
    //return res.json(200, tracks);
  });



};


function handleError(res, err) {
  return res.send(500, err);
}
