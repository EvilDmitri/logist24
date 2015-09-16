'use strict';

angular.module('logistaApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $translate, Modal) {
    $scope.menu = [
      //{
      //  'title': 'ALL',
      //  'description': ['Main page'],
      //  'link': '/'
      //},
      //{
      //  'title': 'TRUCKS',
      //  'description': ['Veod'],
      //  'link': '/veod'
      //},
      {
        'title': 'Meist',
        'description': ['Koormus'],
        'link': '/about'
      },
      {
        'title': 'NEW',
        'description': ['New route'],
        'link': '/new_route'
      },
      {
        'title': 'Kõik päringud',
        'description': ['Kõik koormad'],
        'link': '/loads'
      },
      {
        'title': 'Otsi päring',
        'description': ['Otsing'],
        'link': '/search'
      }

    ];


    var modal = Modal.confirm.askToLogin(function(message) { // callback when modal is confirmed
      $location.path("/login"); //will redirect to login page, make sure your controller is using $location
    });

    $scope.login_user = function() { // callback when modal is confirmed
      modal('Saada päring');
      };





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
