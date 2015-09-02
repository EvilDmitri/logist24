'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        data: {pageTitle: 'All loads'},
        templateUrl: 'app/search/search.html',
        controller: 'SearchCtrl'
      });
  });
