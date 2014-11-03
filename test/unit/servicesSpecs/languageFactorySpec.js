'use strict';

describe('languageFactory', function() {
  var languageFactory;
  beforeEach(module('ResumeApp'));

  beforeEach(inject(function(_languageFactory_) {
    languageFactory = _languageFactory_;
  }));

  // Test service availability
  it('should check the existence of language factory',function() {
    expect(languageFactory).toBeDefined();
  })

  it('should have english set as the default language', function() {
    expect(languageFactory.getCurrLang()).toEqual("en");
  })

  it('should be able to change current language to icelandic', function() {
    languageFactory.setCurrLang('is')
    expect(languageFactory.getCurrLang()).toEqual("is");
  })

});
