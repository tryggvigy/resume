'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */


describe('Skills page', function() {
  var skillsList = [];

  beforeEach(function() {
    browser.get('app/index.html#/Skills');
  });

  it('should filter the skills list as user types into the search box', function() {
      var query = element(by.model('query'));
      skillsList['webskills'] = element.all(by.repeater('skill in skillsCtrl.skills.web_skills'));
      skillsList['langskills'] = element.all(by.repeater('skill in skillsCtrl.skills.lang_skills'));
      skillsList['systemskills'] = element.all(by.repeater('skill in skillsCtrl.skills.system_skills'));

      query.sendKeys('java');
      expect(skillsList['langskills'].count()).toBe(2);
      expect(skillsList['systemskills'].count()).toBe(0);

      query.clear();
      query.sendKeys('AngularJS');
      expect(skillsList['webskills'].count()).toBe(1);
      expect(skillsList['langskills'].count()).toBe(0);
    });

  // it('should initialize with the correct number of web skills', function() {
  //   skillsList['webskills'] = element.all(by.repeater('skill in skillsCtrl.skills.web_skills'));
  //   expect(skillsList['webskills'].count()).toBe(7);
  // })
  // it('should initialize with the correct number of language skills', function() {
  //   skillsList['langskills'] = element.all(by.repeater('skill in skillsCtrl.skills.lang_skills'));
  //   expect(skillsList['langskills'].count()).toBe(7);
  // })
  // it('should initialize with the correct number of tools skills', function() {
  //   skillsList['toolskills'] = element.all(by.repeater('skill in skillsCtrl.skills.tool_skills'));
  //   expect(skillsList['toolskills'].count()).toBe(12);
  // })
  // it('should initialize with the correct number of frameworks skills', function() {
  //   skillsList['frameworkskills'] = element.all(by.repeater('skill in skillsCtrl.skills.framework_skills'));
  //   expect(skillsList['frameworkskills'].count()).toBe(4);
  // })
  // it('should initialize with the correct number of methodoligies skills', function() {
  //   skillsList['methodskills'] = element.all(by.repeater('skill in skillsCtrl.skills.method_skills'));
  //   expect(skillsList['methodskills'].count()).toBe(3);
  // })
  // it('should initialize with the correct number of backend skills', function() {
  //   skillsList['backendskills'] = element.all(by.repeater('skill in skillsCtrl.skills.backend_skills'));
  //   expect(skillsList['backendskills'].count()).toBe(6);
  // })
  // it('should initialize with the correct number of operating-system skills', function() {
  //   skillsList['systemskills'] = element.all(by.repeater('skill in skillsCtrl.skills.system_skills'));
  //   expect(skillsList['systemskills'].count()).toBe(3);
  // })


});
