'use strict';

angular.module('logistaApp')
  .controller('AllCtrl', function ($scope, $http, socket) {

    // things
    $scope.Veod = [];
    $http.get('/api/things').success(function(Things) {
      $scope.Veod = Things;
      socket.syncUpdates('thing', $scope.Veod);
    });
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });



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
