'use strict';

angular.module('logistaApp')
  .controller('MainCtrl', function ($scope, $translate) {

    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };

  });
