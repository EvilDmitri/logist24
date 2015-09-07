'use strict';

angular.module('logistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('customer', {
        url: '/customer/:id',
        templateUrl: 'app/customer/customer.html',
        controller: 'CustomerCtrl'
      });
  });
