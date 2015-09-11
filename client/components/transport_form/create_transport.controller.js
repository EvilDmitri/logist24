'use strict';

angular.module('logistaApp')
  .controller('CreateTransportCtrl', function ($scope, $http, Auth, $location) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    //if (!$scope.isLoggedIn()){
    //  $location.path('/login');
    //}
    $scope.getCurrentUser = Auth.getCurrentUser;

    var user = Auth.getCurrentUser();
    console.log(user);


    $scope.transport = {};
    //$scope.createTransport = function () {
    //  console.log($scope.transport);
    //};


    $scope.bodies = [
      {id:1, name:'Järelkäru'},
      {id:2, name:'Väike kaubik'},
      {id:3, name:'Suur kaubik'},
      {id:4, name:'Furgoon'},
      {id:5, name:'Kallur'},
      {id:6, name:'Sadulveok'},
      {id:7, name:'Veoauto'},
      {id:8, name:'Rekka'}

    ];

    function addNew(route) {
      if($scope.transport === '') {
        return;
      }
      $http.post('/api/trucks', {
        owner: user._id,
        company: $scope.transport.company,
        contact: $scope.transport.contact,
        phone: $scope.transport.phone,
        email: $scope.transport.email,
        source_address: $scope.transport.source_address,
        dest_address: $scope.transport.dest_address,
        route_start: route.route_start,
        route_end: route.route_end,
        position: route,
        date: $scope.transport.date,
        body_type: $scope.transport.body_type,
        info: $scope.transport.info
      });
      $scope.transport = '';

      $location.path('/');
    }


    $scope.autocompleteOptions = {
      componentRestrictions: { country: 'ee' }
    };

    var route = {};

    $scope.createTransport = function() {
      //console.log($scope.transport.address.geometry.location.lat(), $scope.transport.address.geometry.location.lng());
      //console.log($scope.transport.address.address_components);
      console.log($scope.transport);
      //Check for errors
      if ($scope.purchase_form.$valid) {

        // Get start city name
        var comp = $scope.transport.source_address.address_components;
        var length = comp.length;
        for (var i=0; i<length; i++){
          if (comp[i].types[0] == 'administrative_area_level_2') {
            route.route_start = comp[i].long_name;
            break;
          }
        }

        // Get end city name
        comp = $scope.transport.dest_address.address_components;
        length = comp.length;
        for (i=0; i<length; i++){
          if (comp[i].types[0] == 'administrative_area_level_2') {
            route.route_end = comp[i].long_name;
            break;
          }
        }

        route.position = {
          lat:$scope.transport.source_address.geometry.location.lat(),
          lng:$scope.transport.source_address.geometry.location.lng(),
          formatted_address: $scope.transport.source_address.formatted_address
        };

        console.log(route.position);

        addNew(route);

      } else {
        $scope.purchase_form.submitted = true;
      }
    };

  })



  .config(['flowFactoryProvider', function (flowFactoryProvider) {
    flowFactoryProvider.defaults = {
      target: 'api/images',
      permanentErrors: [404, 500, 501],
      maxChunkRetries: 1,
      chunkRetryInterval: 5000,
      simultaneousUploads: 4,
      singleFile: true
    };
    flowFactoryProvider.on('catchAll', function (event) {
      console.log('catchAll', arguments);
    });
    // Can be used with different implementations of Flow.js
    // flowFactoryProvider.factory = fustyFlowFactory;
  }]);
