'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        data: {pageTitle: 'All loads'},
        templateUrl: 'app/search/search.html',
        controller: 'SearchCtrl'
      })
      .state('search_trucks', {
        url: '/search/trucks',
        data: {pageTitle: 'All loads'},
        templateUrl: 'app/search/search_trucks.html',
        controller: 'SearchThingsCtrl'
      })
      .state('search_things', {
        url: '/search/things',
        data: {pageTitle: 'All loads'},
        templateUrl: 'app/search/search_things.html',
        controller: 'SearchTrucksCtrl'
      });
  });
