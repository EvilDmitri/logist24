'use strict';

angular.module('logistaApp')
  .controller('AllCtrl', function ($scope, $http, socket) {

    // things
    $scope.Veod = [];
    $http.get('/api/things/limited').success(function(Things) {
      $scope.Veod = Things;
      console.log(Things);
      socket.syncUpdates('thing', $scope.Veod);
    });

    $scope.Trucks = [];
    $http.get('/api/trucks/limited').success(function(Trucks) {
      $scope.Trucks = Trucks;
      socket.syncUpdates('truck', $scope.Trucks);
    });


    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.showItem = function () {
      console.log('show');
    };



    //$scope.addThing = function() {
    //  if($scope.newThing === '') {
    //    return;
    //  }
    //  $http.post('/api/things', { name: $scope.newThing });
    //  $scope.newThing = '';
    //};

    //$scope.deleteThing = function(id) {
    //  $http.delete('/api/things/' + id);
    //};


    // Our callback function is called if/when the delete modal is confirmed
    //$scope.delete_thing = function() {
    //  console.log('modal');
    //};
    //$scope.delete_thing = Modal.confirm.delete(function() {
    //
    //});
  });
