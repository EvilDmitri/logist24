'use strict';

var app = angular.module('logistaApp');

app.controller('SearchCtrl', function ($scope, $http, $location) {

    $scope.request = {
      type: 'transport'
    };

    $scope.makeRequest = function () {
      if($scope.request.type == 'transport') {
        $location.path('search/trucks');
      } else{
        $location.path('search/things');
      }
    };
  });



app.controller('SearchTrucksCtrl', function ($scope, $http, $location) {
  $scope.Loads = [];
  $scope.bodies = [
    {id:1, name:'Järelkäru'},
    {id:2, name:'Väike kaubik'},
    {id:3, name:'Suur kaubik'},
    {id:4, name:'Furgoon'},
    {id:5, name:'Kallur'},
    {id:6, name:'Sadulveok'},
    {id:7, name:'Veoauto'}
  ];

  $scope.autocompleteOptions = {
    componentRestrictions: { country: 'ee' }
  };


  var route = {
    source_address:null,
    dest_address:null
  };

  $scope.searchThing = function () {

    if ($scope.search_form.$valid) {
      // Get start city name
      var comp = $scope.search.source_address.address_components;
      var length = comp.length;
      for (var i=0; i<length; i++){
        if (comp[i].types[0] == 'administrative_area_level_2') {
          route.route_start = comp[i].long_name;
          break;
        }
      }

      // Get end city name
      if($scope.search.dest_address) {
        comp = $scope.search.dest_address.address_components;
        length = comp.length;
        for (i = 0; i < length; i++) {
          if (comp[i].types[0] == 'administrative_area_level_2') {
            route.route_end = comp[i].long_name;
            break;
          }
        }
      }

      $http.post('/api/search', {'search': route, 'type': 'truck'}).success(function(Things) {
        $scope.Loads = Things;
        //console.log($scope.Loads);
        if(Things.length > 0){$scope.Loads.found = 1}
        $scope.result = 1;
      });

    } else {
      $scope.search_form.submitted = true;
    }
  };
});


app.controller('SearchThingsCtrl', function ($scope, $http, $location) {

  $scope.bodies = [
    {id:1, name:'Järelkäru'},
    {id:2, name:'Väike kaubik'},
    {id:3, name:'Suur kaubik'},
    {id:4, name:'Furgoon'},
    {id:5, name:'Kallur'},
    {id:6, name:'Sadulveok'},
    {id:7, name:'Veoauto'}
  ];

  $scope.autocompleteOptions = {
    componentRestrictions: { country: 'ee' }
  };


  var route = {
    source_address:null,
    dest_address:null
  };

  $scope.searchThing = function () {

    if ($scope.search_form.$valid) {
      // Get start city name
      var comp = $scope.search.source_address.address_components;
      var length = comp.length;
      for (var i=0; i<length; i++){
        if (comp[i].types[0] == 'administrative_area_level_2') {
          route.route_start = comp[i].long_name;
          break;
        }
      }

      // Get end city name
      if($scope.search.dest_address){
        comp = $scope.search.dest_address.address_components;
        length = comp.length;
        for (i=0; i<length; i++){
          if (comp[i].types[0] == 'administrative_area_level_2') {
            route.route_end = comp[i].long_name;
            break;
          }
        }
      }


      $http.post('/api/search', {'search': route, 'type': 'thing'}).success(function(Things) {
        $scope.Loads = Things;
        console.log($scope.Loads);
        $scope.result = 1;
      });

    } else {
      $scope.search_form.submitted = true;
    }
  };
});
