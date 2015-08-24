'use strict';

angular.module('logistaApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $translate) {
    $scope.menu = [
      {
        'title': 'ALL',
        'description': ['Main page'],
        'link': '/'
      },
      {
        'title': 'TRUCKS',
        'description': ['Veod'],
        'link': '/veod'
      },
      {
        'title': 'NEW',
        'description': ['New route'],
        'link': '/new_route'
      }
      //,
      //{
      //  'title': 'NEW_TRUCK',
      //  'description': ['Koormus'],
      //  'link': '/koormus'
      //}
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

  });
