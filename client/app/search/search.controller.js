'use strict';

angular.module('logistaApp')
  .controller('SearchCtrl', function ($scope, $http) {

    $scope.Loads = null;

    $scope.bodies = [
      {id:1, name:'Järelkäru'},
      {id:2, name:'Väike kaubik'},
      {id:3, name:'Suur kaubik'},
      {id:4, name:'Furgoon'},
      {id:5, name:'Kallur'},
      {id:6, name:'Sadulveok'},
      {id:7, name:'Veoauto'}
    ];


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
        comp = $scope.search.dest_address.address_components;
        length = comp.length;
        for (i=0; i<length; i++){
          if (comp[i].types[0] == 'administrative_area_level_2') {
            route.route_end = comp[i].long_name;
            break;
          }
        }


      } else {
        $scope.search_form.submitted = true;
      }

      //console.log(route);

      $http.get('/api/search').success(function(Things) {
        $scope.Loads = Things;
        console.log($scope.Loads);
        $scope.result = 1;
      });

    };


  });
