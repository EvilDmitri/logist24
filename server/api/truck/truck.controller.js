'use strict';

var _ = require('lodash');
var Truck = require('./truck.model');

// Get list of trucks
exports.index = function(req, res) {
  Truck.find({}, '', {sort: '-created_at'}, function (err, trucks) {
    if(err) { return handleError(res, err); }
    return res.json(200, {'things':trucks, 'count': trucks.length});

  });
};

// Get a single truck
exports.show = function(req, res) {
  Truck.find({'owner': req.params.id}, function (err, truck) {
    if(err) { return handleError(res, err); }
    if(!truck) { return res.status(404).send('Not Found'); }
    return res.json(truck);
  });
};

// Get user trucks
exports.show_user_trucks = function(req, res) {
  Truck.find({'owner': req.params.id}, '', {sort: '-created_at'}, function (err, things) {
    if(err) { return handleError(res, err); }
    return res.json(200, {'trucks':things, 'count': things.length});
  });
};

// Creates a new truck in the DB.
exports.create = function(req, res) {
  Truck.create(req.body, function(err, truck) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(truck);
  });
};

// Updates an existing truck in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Truck.findById(req.params.id, function (err, truck) {
    if (err) { return handleError(res, err); }
    if(!truck) { return res.status(404).send('Not Found'); }
    var updated = _.merge(truck, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(truck);
    });
  });
};

// Deletes a truck from the DB.
exports.destroy = function(req, res) {
  Truck.findById(req.params.id, function (err, truck) {
    if(err) { return handleError(res, err); }
    if(!truck) { return res.status(404).send('Not Found'); }
    truck.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
