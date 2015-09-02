'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('all', {
        url: '/',
        data: {pageTitle: 'Main'},
        templateUrl: 'app/all/all.html',
        controller: 'AllCtrl'

      });
  });
