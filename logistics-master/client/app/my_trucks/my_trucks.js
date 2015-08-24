'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my_trucks', {
        url: '/my_trucks',
        data: {pageTitle: 'My trucks'},
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          }
          ,
          'content@my_trucks': {
            templateUrl: 'app/my_trucks/my_trucks.html',
            controller: 'MyTrucksCtrl'
          }
        }
        //,
        //authenticate: true
      });
  });
