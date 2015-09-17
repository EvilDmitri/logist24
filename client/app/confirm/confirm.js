'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('confirm', {
        url: '/confirm',
        templateUrl: 'app/confirm/confirm.html',
        controller: 'ConfirmCtrl'
      })
      .state('confirm/', {
        url: '/confirm/:id',
        templateUrl: 'app/confirm/check_email.html',
        controller: 'ConfirmIdCtrl'
      }
    );
  });
