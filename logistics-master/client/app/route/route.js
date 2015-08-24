'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new_route', {
        url: '/new_route',
        data: {pageTitle: 'New route'},
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          }
          ,
          'content@new_route': {
            templateUrl: 'app/route/route.html',
            controller: 'RouteCtrl'
          }
        }
      });
  });
