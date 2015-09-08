'use strict';

angular.module('logistaApp')
  .controller('StatisticCtrl', function ($scope, $http) {
    $http.get('/api/statistics').success(function(Statistics) {
      $scope.Statistics = Statistics;
    });



  });
