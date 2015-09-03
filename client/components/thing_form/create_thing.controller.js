'use strict';

angular.module('logistaApp')
  .controller('CreateCtrl', function ($scope, $http, Auth, $location) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    //if (!$scope.isLoggedIn()){
    //  $location.path('/login');
    //}
    $scope.getCurrentUser = Auth.getCurrentUser;

    var user = Auth.getCurrentUser();
    console.log(user);

    $scope.bodies = [
      {id:1, name:'Kaubik'},
      {id:2, name:'Veoauto'}
    ];

    function addNew() {
      if($scope.thing === '') {
        return;
      }
      $http.post('/api/things', {
        owner: user._id,
        name: $scope.thing.name,
        type: $scope.thing.price,
        endurance: $scope.thing.endurance,
        price: $scope.thing.price,
        info: $scope.thing.info,
        source_address: $scope.thing.source_address,
        dest_address: $scope.thing.dest_address,
        position: $scope.thing.position,
        viewed: 0,
        createdOn: Date.now()
      });
      $scope.thing = '';
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
          formatted_address: $scope.thing.source_address.formatted_address,
        };

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
