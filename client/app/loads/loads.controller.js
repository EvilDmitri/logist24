'use strict';

angular.module('logistaApp')
  .controller('LoadsCtrl', function ($scope, $http, socket) {

    $scope.Loads = [];
    $http.get('/api/things').success(function(Things) {
      $scope.Loads = Things;
      console.log($scope.Loads);
      socket.syncUpdates('thing', $scope.Veod);
    });

    $scope.Things = [];
    $http.get('/api/trucks').success(function(Trucks) {
      $scope.Trucks = Trucks;
      console.log($scope.Trucks);
      socket.syncUpdates('thing', $scope.Trucks);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });


  });
