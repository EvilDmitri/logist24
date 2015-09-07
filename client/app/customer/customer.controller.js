'use strict';

angular.module('logistaApp')
  .controller('CustomerCtrl', function ($scope, Auth, $http, $stateParams) {

    //$scope.isLoggedIn = Auth.isLoggedIn;

    function getCarrier(id){
      $http.get('/api/users/'+id).success(function(User) {
        $scope.user = User;
      });
    }

    getCarrier($stateParams.id)


  });
