'use strict';

/* jasmine specs for controllers go here */
describe('knowledgeFactory', function() {

  beforeEach(module('ResumeApp'));

  // Test service availability
  it('check the existence of knowledge factory', inject(function(knowledgeFactory) {
    expect(knowledgeFactory).toBeDefined();
  }));

});
