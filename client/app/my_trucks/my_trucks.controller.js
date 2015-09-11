'use strict';

angular.module('logistaApp')
  .controller('MyTrucksCtrl', function ($scope, Auth, $location, $http) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    if (!$scope.isLoggedIn()){

      $location.path('/login');
    }
    $scope.getCurrentUser = Auth.getCurrentUser;

    var user = Auth.getCurrentUser();

    $scope.Trucks = {};
    $http.get('/api/trucks/user/'+user._id).success(function(Things) {
      $scope.Trucks = Things;

    });

    $scope.Loads = {};
    $http.get('/api/things/user/'+user._id).success(function(Things) {
      $scope.Loads = Things;
    });


  });
