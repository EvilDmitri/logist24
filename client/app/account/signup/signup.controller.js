'use strict';

angular.module('logistaApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, $http) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;


      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          active: false
        })
        .then( function() {
          // Account created, redirect to confirm page

          $http.post('/mail/send', {'user': $scope.user.name, 'email': $scope.user.email}).success(function(result) {
            //if (result == 'sent'){
              $location.path('/confirm');
            //} else {
              //TODO: Something went wrong
            //}
          });

        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

  });
