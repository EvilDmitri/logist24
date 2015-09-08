'use strict';

angular.module('logistaApp')
  .controller('LoadsCtrl', function ($scope, $http, socket) {

    $scope.Loads = [];
    $http.get('/api/things').success(function(Things) {

      $scope.Loads = Things.things;
      console.log(Things);
      socket.syncUpdates('thing', $scope.Veod);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });


  });
