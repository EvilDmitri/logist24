'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('truck', {
        url: '/truck',
        templateUrl: 'app/truck/truck.html',
        controller: 'TruckCtrl'
      });
  });
