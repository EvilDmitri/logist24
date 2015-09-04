'use strict';

var _ = require('lodash');
var Search = require('./search.model');


var Thing = require('../thing/thing.model');

// Search from db
exports.show = function(req, res) {

  Thing.find({'route_start': 'Tallinna linn'}, '', {sort: '-createdOn'}, function (err, things) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(things);
  });
};


function handleError(res, err) {
  return res.send(500, err);
}
