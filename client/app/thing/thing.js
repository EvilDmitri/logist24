'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('thing', {
        url: '/thing/:id',
        data: {pageTitle: 'Vajan transport'},
        templateUrl: 'app/thing/thing.html',
        controller: 'ThingCtrl'

      });
  });
