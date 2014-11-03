'use strict';

describe("timelineDirective", function() {
  var element, scope, languageFactory, $httpBackend;
  beforeEach(module('ResumeApp'));

  beforeEach(inject(function($compile, $rootScope, $injector) {
    scope = $rootScope;
    scope.origin = "2012-08-30T16:00:00"

    $httpBackend = $injector.get('$httpBackend');
    //ignore all GET requests made.
    $httpBackend.whenGET('../dist/json/languages/lang-en.json').respond(200, '');

    element = angular.element('<time-line id="my-timeline"></time-line>');
    $compile(element)($rootScope);
  }));

  // it('should initialize the jquery timeline',
  // function() {
  //   scope.$digest();
  //   console.log(element.html())
  // })

});
