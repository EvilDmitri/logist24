'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('thing', {
        url: '/thing/:id',
        data: {pageTitle: 'Main'},
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          },
          'content@thing': {
            templateUrl: 'app/thing/thing.html',
            controller: 'ThingCtrl'
          }
        }
      });
  });
