'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my_trucks', {
        url: '/my_trucks',
        data: {pageTitle: 'My trucks'},
        templateUrl: 'app/my_trucks/my_trucks.html',
        controller: 'MyTrucksCtrl',
        authenticate: true
      });
  });
