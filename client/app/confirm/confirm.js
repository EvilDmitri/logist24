'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('confirm', {
        url: '/confirm',
        templateUrl: 'app/confirm/confirm.html',
        controller: 'ConfirmCtrl'
      });
  });