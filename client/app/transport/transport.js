'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('veod', {
        url: '/veod',
        data: {pageTitle: 'Veod'},
        templateUrl: 'app/transport/transport.html',
        controller: 'TransportCtrl'
      });
  });
