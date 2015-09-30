'use strict';

angular.module('logistaApp')
  .controller('MapCtrl', function ($scope, $http, $timeout, socket, $filter) {

    $scope.$on('mapInitialized', function(event, map) {
      //var latlng = new google.maps.LatLng("58.6, 24.0");
      //map.setCenter(latlng);
      //map.setScale(7);

      console.log($scope);
    });

    var green_image = {
      url: '/static/images/map/green_pin.png'
      ,
      origin: new google.maps.Point(0, 0)
      //,
      //anchor: new google.maps.Point(parseFloat(0), parseFloat(32))
    };
    var red_image = {
      url: '/static/images/map/orange_pin.png'
      ,
      origin: new google.maps.Point(0, 0)
      //,
      //anchor: new google.maps.Point(parseFloat(0), parseFloat(32))
    };

    $scope.Things = [];

    var markers = [];
    var info = [];
    function addMarker(thing, i, color){
      var image = {};
      var url = '';
      if (color === 'red') {
        image = red_image;
        url = '/thing/' + thing._id;
      }
      if (color === 'green') {
        image = green_image;
        url = '/truck/' + thing._id;
      }

      var lat = thing.position.position.lat;
      var lng = thing.position.position.lng;
      var latlng = new google.maps.LatLng(lat, lng);

      var infoText = '';
      if(thing.info) {
        $filter('limitTo')(thing.info, 20);
        infoText += thing.info.length > 20 ? '...' : '';
      }


      info[i] = new google.maps.InfoWindow({
        content: '<h2>'+ thing.company +'</h2>' + infoText + '<br><strong>Pealelaadimise koht: </strong>' + thing.source_address.formatted_address +
        '<br><strong>Mahalaadimise koht: </strong>' + thing.dest_address.formatted_address +
        '<br><a href="' + url + '">Vaata</a>'
      });
      //info[i].setOptions(options:{visible:false});

      markers[i] = new google.maps.Marker({
        title: thing.name,
        icon: image
      });

      markers[i].setPosition(latlng);
      markers[i].setMap($scope.map);

      google.maps.event.addListener(markers[i], 'click', function(i) {
        return function(){
          info[i].open($scope.map,markers[i]);
        }
      }(i));

    }


    function addOne(event, item, array) {
      addMarker(item, markers.length+1);
    }

    $http.get('/api/things').success(function(Things) {
      $scope.Things = Things.things;
      //console.log($scope.Things);

      var all_length = Things.count;
      for (var i=0; i<all_length ; i++) {
          addMarker($scope.Things[i], i+markers.length, 'red');
      }
      socket.syncUpdates('thing', $scope.Things, addOne);
    });

    $http.get('/api/trucks').success(function(Trucks) {
      $scope.Trucks = Trucks.things;
      //console.log($scope.Trucks);

      var all_length = Trucks.count;
      for (var i=0; i<all_length ; i++) {
          addMarker($scope.Trucks[i], i+markers.length, 'green');
      }
      socket.syncUpdates('thing', $scope.Trucks, addOne);
    });


    // Expander
    //function f_createElement() {
    //    var newDiv = document.createElement("div");
    //    newDiv.innerHTML = "<img src='/static/images/map/a02.jpg' width='500' />";
    //    newDiv.id = "newDiv";
    //  //console.log($document[0].body);
    //  var sp2 = document.getElementById("navbar");
    //  $document[0].body.insertBefore(newDiv, sp2);
    //}
    //
    //function f_removeElement() {
    //    var newDiv = document.getElementById("newDiv");
    //    newDiv.parentNode.removeChild(newDiv);
    //}
    //
    //document.getElementById("Expando").onmouseover = f_createElement;
    ////document.getElementById("Expando").onmouseout = f_removeElement;

    //socket.syncUpdates('thing', $scope.Things);
    //
    //console.log('socket', $scope.Things);
    //console.log('socket', $scope.Things[$scope.Things.length - 1]);
      //addMarker($scope.Things[$scope.Things.length - 1], markers.length+1);
    //$scope.addThing = function() {
    //  if($scope.newThing === '') {
    //    return;
    //  }
    //  $http.post('/api/things', { name: $scope.newThing });
    //  $scope.newThing = '';
    //};
    //
    //$scope.deleteThing = function(thing) {
    //  $http.delete('/api/things/' + thing._id);
    //};
    //
    //$scope.$on('$destroy', function () {
    //  socket.unsyncUpdates('thing');
    //});

  });
