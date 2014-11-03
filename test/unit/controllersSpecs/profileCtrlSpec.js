'use strict';

/* jasmine specs for controllers go here */
describe('Profile Controller', function() {
  var scope, ctrl;

  beforeEach(module('ResumeApp'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('ProfileCtrl as ctrl', {$scope: scope});
  }));

  it('should create "words" model with 2 words fetched from xhr', function() {
    expect(scope.ctrl.words).toBeUndefined();
    //TODO
  });

});
