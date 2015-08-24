'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('veod', {
        url: '/veod',
        data: {pageTitle: 'Veod'},
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          }
          ,
          'content@veod': {
            templateUrl: 'app/transport/transport.html',
            controller: 'TransportCtrl'
          }
        }
      });
  });
