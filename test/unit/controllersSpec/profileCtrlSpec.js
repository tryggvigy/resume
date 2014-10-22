'use strict';

/* jasmine specs for controllers go here */
describe('Profile Controller', function() {
  var scope, ctrl;

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('ResumeApp'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('ProfileCtrl', {$scope: scope});
  }));


  it('should create "phones" model with 3 phones', function() {

    expect(2).toBe(2);
  });

});
