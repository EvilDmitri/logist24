'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('loads', {
        url: '/loads',
        data: {pageTitle: 'All loads'},
        templateUrl: 'app/loads/loads.html',
        controller: 'LoadsCtrl'

      });
  });
