'use strict';

describe("timeSinceDirective", function() {
  var element, scope, languageFactory, $httpBackend;
  beforeEach(module('ResumeApp'));

  beforeEach(inject(function($compile, $rootScope, $injector) {
    scope = $rootScope;
    scope.origin = "2012-08-30T16:00:00"

    $httpBackend = $injector.get('$httpBackend');
    //ignore all GET requests made.
    $httpBackend.whenGET('../dist/json/languages/lang-en.json').respond(200, '');

    element = angular.element('<time-since origin="2012-08-30T16:00:00"></time-since>');
    $compile(element)($rootScope);
  }));

  it('should create a time-since directive containing the time format [ x years, x days, x minutes, x seconds ]',
  function() {
    scope.$digest();
    expect(element.html()).toContain('years');
    expect(element.html()).toContain('days');
    expect(element.html()).toContain('minutes');
    expect(element.html()).toContain('seconds');
  })

  it('should display the time from origin correctly', function() {
    scope.$digest();
    var originDate = new Date(scope.origin);
    var nowDate = new Date(Date.now());
    //total difference in milliseconds
    var dtMs = nowDate - originDate;
    var years = Math.floor(dtMs / 1000 / 60 / 60 / 24 / 365);
    dtMs -= years * 1000 * 60 * 60 * 24 * 365;
    var days = Math.floor(dtMs / 1000 / 60 / 60 / 24);
    dtMs -= days * 1000 * 60 * 60 * 24;
    var hours = Math.floor(dtMs / 1000 / 60 / 60);
    dtMs -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(dtMs / 1000 / 60);
    dtMs -= minutes * 1000 * 60;
    var seconds = Math.floor(dtMs / 1000);
    dtMs -= seconds * 1000;

    var elemYears = element.html().split(', ')[0].split(' ')[0];
    expect(elemYears).toEqual(years.toString());

    var elemDays = element.html().split(', ')[1].split(' ')[0];
    expect(elemDays).toEqual(days.toString());

    var elemHours = element.html().split(', ')[2].split(' ')[0];
    expect(elemHours).toEqual(hours.toString());

    var elemMinutes = element.html().split(', ')[3].split(' ')[0];
    expect(elemMinutes).toEqual(minutes.toString());

    var elemSecs = element.html().split(', ')[4].split(' ')[0];
    expect(elemSecs).toEqual(seconds.toString());
  })

});
