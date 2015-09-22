
angular.module('logistaApp')
  .controller('ModalCtrl', function ($scope, $translate) {

    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };

  });
