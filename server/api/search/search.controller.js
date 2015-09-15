'use strict';

var _ = require('lodash');
var Search = require('./search.model');


var Thing = require('../thing/thing.model');
var Truck = require('../truck/truck.model');

// Search from db
exports.show = function(req, res) {

  Thing.find({'route_start': 'Tallinna linn'}, '', {sort: '-createdOn'}, function (err, things) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(things);
  });
};


// Search from db
exports.search = function(req, res) {

  var type = req.body.type;
  var route = req.body.search;

  if(type === 'thing') {
    Thing.find({'route_start': route.route_start, 'route_end': route.route_end}, '', {sort: '-createdOn'}, function (err, things) {
      if(err) { return handleError(res, err); }
      //console.log(things);
      return res.status(200).json(things);
    });
  }

  if(type === 'truck') {
    Truck.find({'route_start': route.route_start, 'route_end': route.route_end}, '', {sort: '-createdOn'}, function (err, things) {
      if(err) { return handleError(res, err); }
      //console.log(things);
      return res.status(200).json(things);
    });
  }

};

function handleError(res, err) {
  return res.send(500, err);
}
