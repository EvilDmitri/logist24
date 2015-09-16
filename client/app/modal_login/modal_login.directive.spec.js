'use strict';

describe('Directive: modalLogin', function () {

  // load the directive's module and view
  beforeEach(module('logistaApp'));
  beforeEach(module('app/modal_login/modal_login.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<modal-login></modal-login>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the modalLogin directive');
  }));
});