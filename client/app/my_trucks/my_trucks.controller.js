'use strict';

angular.module('logistaApp')
  .controller('MyTrucksCtrl', function ($scope, Auth, $location, $http) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    if (!$scope.isLoggedIn()){

      $location.path('/login');
    }
    $scope.getCurrentUser = Auth.getCurrentUser;

    var user = Auth.getCurrentUser();

    $http.get('/api/trucks/'+user._id).success(function(Things) {
      $scope.my_trucks = Things;
      console.log($scope.my_trucks);
    });

  });
