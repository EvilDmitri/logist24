'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('truck', {
        url: '/truck/:id',
        templateUrl: 'app/truck/truck.html',
        controller: 'TruckCtrl'
      });
  });
