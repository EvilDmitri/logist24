'use strict';

angular.module('logistaApp')
  .controller('CreateThingCtrl', function ($scope, $http, Auth, $location) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    //if (!$scope.isLoggedIn()){
    //  $location.path('/login');
    //}
    $scope.getCurrentUser = Auth.getCurrentUser;

    var user = Auth.getCurrentUser();
    console.log(user);

    $scope.bodies = [
      {id:1, name:'Järelkäru'},
      {id:2, name:'Väike kaubik'},
      {id:3, name:'Suur kaubik'},
      {id:4, name:'Furgoon'},
      {id:5, name:'Kallur'},
      {id:6, name:'Sadulveok'},
      {id:7, name:'Veoauto'}

    ];

    function addNew(route) {
      if($scope.thing === '') {
        return;
      }
      $http.post('/api/things', {
        owner: user._id,
        company: $scope.thing.company,
        contact: $scope.thing.contact,
        phone: $scope.thing.phone,
        email: $scope.thing.email,
        name: $scope.thing.load,
        date: $scope.thing.date,
        pallets: $scope.thing.pallets,
        volume: $scope.thing.volume,
        weight: $scope.thing.weight,

        //price: $scope.thing.price,
        info: $scope.thing.info,
        source_address: $scope.thing.source_address,
        dest_address: $scope.thing.dest_address,
        route_start: route.route_start,
        route_end: route.route_end,
        position: route,
        viewed: 0,
        createdOn: Date.now()
      });
      $scope.thing = '';

      $location.path('/');
    }


    $scope.autocompleteOptions = {
      componentRestrictions: { country: 'ee' }
    };

    var route = {
     source_address:null,
     dest_address:null
    };

    $scope.createThing = function() {
      //console.log($scope.thing.address.geometry.location.lat(), $scope.thing.address.geometry.location.lng());
      //console.log($scope.thing.address.address_components);
      console.log($scope.thing);
      //Check for errors
      if ($scope.purchase_form.$valid) {

        // Get start city name
        var comp = $scope.thing.source_address.address_components;
        var length = comp.length;
        for (var i=0; i<length; i++){
          if (comp[i].types[0] == 'administrative_area_level_2') {
            route.route_start = comp[i].long_name;
            break;
          }
        }

        // Get end city name
        comp = $scope.thing.dest_address.address_components;
        length = comp.length;
        for (i=0; i<length; i++){
          if (comp[i].types[0] == 'administrative_area_level_2') {
            route.route_end = comp[i].long_name;
            break;
          }
        }

        route.position = {
          lat:$scope.thing.source_address.geometry.location.lat(),
          lng:$scope.thing.source_address.geometry.location.lng(),
          formatted_address: $scope.thing.source_address.formatted_address
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
