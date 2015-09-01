'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('loads', {
        url: '/loads',
        data: {pageTitle: 'All loads'},
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          }
          ,
          'content@loads': {
            templateUrl: 'app/loads/loads.html',
            controller: 'LoadsCtrl'
          }
        }
      });
  });