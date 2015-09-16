'use strict';

angular.module('logistaApp')
  .controller('ThingCtrl', function ($scope, $http, $location, socket, $stateParams, Auth, Modal) {

    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.id = $stateParams.id;
    //console.log('location', $scope.id);

    var modal = Modal.confirm.askToLogin(function(message) { // callback when modal is confirmed
      $location.path("/login"); //will redirect to login page, make sure your controller is using $location
    });

    $scope.login_required = function (act) {
      modal(act + ' vaata');
    };


    $scope.thing = [];
    $http.get('/api/things/'+$scope.id).success(function(awesomeThing) {
      $scope.thing = awesomeThing;
      console.log(awesomeThing);
      //getCarrier(awesomeThing.owner);
      addMarker(awesomeThing);

    });

    function getCarrier(id){
      $http.get('/api/users/'+id).success(function(User) {
        console.log(User);
          $scope.user = User;
      });
    }

    // Just a sample
    $scope.deleteThing = function(id) {
      $http.delete('/api/things/' + id);
      $location.url('/');
    };

     // Update viewed field
    $scope.updateThing = function(id) {
      $scope.thing.viewed += 1;
      $http.patch('/api/things/' + id, $scope.thing);
      //$location.url('/');
    };

    var source_image = {
      url: '/static/images/map/arrow_up_blue.png',
      origin: new google.maps.Point(0, 0)
    };
    var dest_image = {
      url: '/static/images/map/arrow_down_blue.png',
      origin: new google.maps.Point(0, 0)
    };


    function addMarker(thing){
      console.log(thing);
      var lat = $scope.thing.source_address.geometry.location.G;
      var lng = $scope.thing.source_address.geometry.location.K;
      var latlng = new google.maps.LatLng(lat, lng);

      var source_info = new google.maps.InfoWindow({
        content: '<h2>'+ thing.info +'</h2>'
        //content: '<h2>'+ thing.name +'</h2>' + thing.info + '<br><strong>Väljumine: </strong>' + thing.source_address.formatted_address
      });
      //info[i].setOptions(options:{visible:false});

      var source_marker = new google.maps.Marker({
        title: thing.route_start,
        icon: source_image
      });

      source_marker.setPosition(latlng);
      source_marker.setMap($scope.map);

      google.maps.event.addListener( source_marker, 'click', function() {
        return function(){
           source_info.open($scope.map, source_marker);
        }
      }());


      if(thing.dest_address){
        lat = $scope.thing.dest_address.geometry.location.G;
        lng = $scope.thing.dest_address.geometry.location.K;
        latlng = new google.maps.LatLng(lat, lng);

        var dest_info = new google.maps.InfoWindow({
          content: '<h2>'+ thing.name +'</h2>' + thing.info + '<br><strong>Tarne: </strong>' + thing.dest_address.formatted_address
        });
        //info[i].setOptions(options:{visible:false});

        var dest_marker = new google.maps.Marker({
          title: thing.name,
          icon: dest_image
        });

        dest_marker.setPosition(latlng);
        dest_marker.setMap($scope.map);

        google.maps.event.addListener(dest_marker, 'click', function() {
          return function(){
            dest_info.open($scope.map,dest_marker);
          }
        }());
      }
    }

  });
