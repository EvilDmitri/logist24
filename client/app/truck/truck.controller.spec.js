'use strict';

describe('Controller: TruckCtrl', function () {

  // load the controller's module
  beforeEach(module('logistaApp'));

  var TruckCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TruckCtrl = $controller('TruckCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
