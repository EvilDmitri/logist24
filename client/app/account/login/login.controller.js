'use strict';

angular.module('logistaApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $rootScope) {

    console.log($rootScope);
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to returnToState

          $location.path($rootScope.returnToState);
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
