'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        data: {pageTitle: 'All loads'},
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          }
          ,
          'content@search': {
            templateUrl: 'app/search/search.html',
            controller: 'SearchCtrl'
          }
        }
      });
  });
