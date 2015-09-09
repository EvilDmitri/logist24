'use strict';

angular.module('logistaApp')
  .controller('RouteCtrl', function ($scope, Auth, $location) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    //if (!$scope.isLoggedIn()){
    //
    //  $location.path('/login');
    //}
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;


    $scope.back = function () {
      $scope.request.trasportRequest = '';

    };

    $scope.request = {
      type: 'transport'
    };
    $scope.makeRequest = function () {
      $scope.request.trasportRequest = $scope.request.type;

    }


  });
