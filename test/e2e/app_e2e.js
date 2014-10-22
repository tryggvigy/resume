'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Résumé app', function() {

  it('should redirect index.html to index.html#/Profile', function() {
    browser.get('app/index.html');
    browser.ignoreSynchronization = true;
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/Profile');
      });
    browser.ignoreSynchronization = false;
  });
});
