'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new_route', {
        authenticate: true,
        url: '/new_route',
        data: {pageTitle: 'New route'},
        templateUrl: 'app/route/route.html',
        controller: 'RouteCtrl'
      });
  });
