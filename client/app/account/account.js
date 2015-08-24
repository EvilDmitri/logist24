'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        data: {pageTitle: 'Login'},
        views: {
          'main': {
            templateUrl: 'app/account/login/login.html',
            controller: 'LoginCtrl'
          }
        }
      })
      .state('signup', {
        url: '/signup',
        data: {pageTitle: 'Sign up'},
        views: {
          'main': {
            templateUrl: 'app/account/signup/signup.html',
            controller: 'SignupCtrl'
          }
          //,
          //'content@transport': {
          //  templateUrl: 'app/transport/transport.html',
          //  controller: 'FXCtrl'
          //}
        }
      })
      .state('settings', {
        url: '/settings',
        data: {pageTitle: 'Transport'},
        views: {
          'main': {
            templateUrl: 'app/account/settings/settings.html',
            controller: 'SettingsCtrl'
          }
        },
        authenticate: true
      });
  });
