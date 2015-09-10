'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('truck', {
        url: '/truck',
        data: {pageTitle: 'Vaba transport'},
        templateUrl: 'app/transport/transport.html',
        controller: 'TransportCtrl'
      });
  });
