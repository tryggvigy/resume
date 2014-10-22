'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */


describe('Skills page', function() {

  beforeEach(function() {
    browser.get('app/index.html#/Skills');
  });


    it('should filter the skills list as user types into the search box', function() {
      var skillsList = [];
      skillsList['webskills'] = element.all(by.repeater('skill in skillsCtrl.webSkills'));
      expect(skillsList['webskills'].count()).toBe(7);

      skillsList['langskills'] = element.all(by.repeater('skill in skillsCtrl.langSkills'));
      expect(skillsList['langskills'].count()).toBe(7);

      skillsList['toolskills'] = element.all(by.repeater('skill in skillsCtrl.toolSkills'));
      expect(skillsList['toolskills'].count()).toBe(14);

      skillsList['methodskills'] = element.all(by.repeater('skill in skillsCtrl.methodSkills'));
      expect(skillsList['methodskills'].count()).toBe(3);

      skillsList['backendskills'] = element.all(by.repeater('skill in skillsCtrl.backendSkills'));
      expect(skillsList['backendskills'].count()).toBe(6);

      skillsList['systemskills'] = element.all(by.repeater('skill in skillsCtrl.systemSkills'));
      expect(skillsList['systemskills'].count()).toBe(3);


      var query = element(by.model('query'));
      query.sendKeys('java');
      expect(skillsList['langskills'].count()).toBe(2);
      expect(skillsList['systemskills'].count()).toBe(0);

      query.clear();
      query.sendKeys('AngularJS');
      expect(skillsList['webskills'].count()).toBe(1);
      expect(skillsList['langskills'].count()).toBe(0);
    });

/*

    it('should be possible to control phone order via the drop down select box', function() {

      var phoneNameColumn = element.all(by.repeater('phone in phones').column('{{phone.name}}'));
      var query = element(by.model('query'));

      function getNames() {
        return phoneNameColumn.map(function(elm) {
          return elm.getText();
        });
      }

      query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "Motorola XOOM\u2122 with Wi-Fi",
        "MOTOROLA XOOM\u2122"
      ]);

      element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

      expect(getNames()).toEqual([
        "MOTOROLA XOOM\u2122",
        "Motorola XOOM\u2122 with Wi-Fi"
      ]);
    });


    it('should render phone specific links', function() {
      var query = element(by.model('query'));
      query.sendKeys('nexus');
      element.all(by.css('.phones li a')).first().click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/phones/nexus-s');
      });
    });
  });


  describe('Phone detail view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/phones/nexus-s');
    });


    it('should display nexus-s page', function() {
      expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');
    });


    it('should display the first phone image as the main phone image', function() {
      expect(element(by.css('img.phone.active')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });


    it('should swap main image if a thumbnail image is clicked on', function() {
      element(by.css('.phone-thumbs li:nth-child(3) img')).click();
      expect(element(by.css('img.phone.active')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/);

      element(by.css('.phone-thumbs li:nth-child(1) img')).click();
      expect(element(by.css('img.phone.active')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });
  });
  */
});
