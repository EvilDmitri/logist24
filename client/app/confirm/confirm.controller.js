'use strict';

var app = angular.module('logistaApp');

app.controller('ConfirmCtrl', function ($scope) {
  $scope.message = 'Hello';
});

app.controller('ConfirmIdCtrl', function ($scope, $stateParams, $http) {

  $scope.result = '';
  var id = $stateParams.id;
  $http.get('/mail/verify?id='+id).success(function (result) {
    if(result === 'OK'){
      $scope.result = 1;
    }
  });

});
