'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('trucks', {
        url: '/trucks',
        data: {pageTitle: 'Vaba transport'},
        templateUrl: 'app/transport/transport.html',
        controller: 'TransportCtrl'
      });
  });
