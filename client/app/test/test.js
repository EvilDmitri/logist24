'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('test', {
        url: '/test',
        data: {pageTitle: 'Test'},
        views: {
          'main': {
            templateUrl: 'app/test/test.html',
            controller: 'TestCtrl'
          }
          //,
          //'content@all': {
          //  templateUrl: 'app/all/all.html',
          //  controller: 'AllCtrl'
          //}
        }
      });
  });
