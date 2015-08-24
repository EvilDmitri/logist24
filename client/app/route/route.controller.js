'use strict';

angular.module('logistaApp')
  .controller('RouteCtrl', function ($scope, Auth, $location) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    if (!$scope.isLoggedIn()){

      $location.path('/login');
    }
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;



  });
