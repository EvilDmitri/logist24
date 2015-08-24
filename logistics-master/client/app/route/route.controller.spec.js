'use strict';

describe('Controller: EhitusCtrl', function () {

  // load the controller's module
  beforeEach(module('myBlogApp'));

  var EhitusCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EhitusCtrl = $controller('EhitusCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
