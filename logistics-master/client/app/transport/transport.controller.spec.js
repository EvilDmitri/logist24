'use strict';

describe('Controller: TransportCtrl', function () {

  // load the controller's module
  beforeEach(module('myBlogApp'));

  var TransportCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransportCtrl = $controller('TransportCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
