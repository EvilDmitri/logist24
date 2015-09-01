'use strict';

angular.module('logistaApp')
  .controller('MapCtrl', function ($scope, $http, $timeout, socket, $filter) {

    $scope.$on('mapInitialized', function(event, map) {
      //var latlng = new google.maps.LatLng("58.6, 24.0");
      //map.setCenter(latlng);
      //map.setScale(7);
    });

    var image = {
      //url: '/static/images/map/arrow_up_blue.png'
      url: '/static/images/map/yellow_pin.png'
      ,
      //size: new google.maps.Size(parseFloat(20), parseFloat(32)),
      origin: new google.maps.Point(0, 0)
      //,
      //anchor: new google.maps.Point(parseFloat(0), parseFloat(32))
    };

    $scope.Things = [];

    var markers = [];
    var info = [];
    function addMarker(thing, i){
      var lat = thing.position.lat;
      var lng = thing.position.lng;
      var latlng = new google.maps.LatLng(lat, lng);

      var infoText = $filter('limitTo')(thing.info.desc, 20);
      infoText += thing.info.desc.length > 20 ? '...' : '';

      info[i] = new google.maps.InfoWindow({
        content: '<h2>'+ thing.name +'</h2>' + infoText + '<br><strong>Väljumine: </strong>' + thing.source_address.formatted_address +
        '<br><strong>Tarne: </strong>' + thing.dest_address.formatted_address +
        '<br><a href="/thing/' + thing._id + '">Vaata</a>'
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
      $scope.Things = Things;
      //console.log(Things);

      var all_length = Things.length;
      for (var i=0; i<all_length ; i++) {
        addMarker(Things[i], i);
      }
      socket.syncUpdates('thing', $scope.Things, addOne);
    });



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
