'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Profile page', function() {

  beforeEach(function() {
    browser.get('app/index.html#/Profile');
  });

  it('should be able to change language from english to icelandic', function() {
    browser.ignoreSynchronization = true;
    var profileBtn = element(by.css('.icon-profile'));
    var icelandicBtn = element.all(by.css('.languages a')).get(0);

    expect(profileBtn.getText()).toEqual('Profile');
    icelandicBtn.click();
    expect(profileBtn.getText()).toEqual('Yfirlit');

    browser.ignoreSynchronization = false;
  })
});
