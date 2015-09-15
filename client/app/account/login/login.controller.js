'use strict';

angular.module('logistaApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $rootScope) {

    //console.log($rootScope);
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
          var url = '/';
            if($rootScope.returnToStateParams){
              if($rootScope.returnToStateParams == 'login') {
              } else {
                url = url + $rootScope.returnToStateParams;
              }
            }
          $location.path(url);
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
