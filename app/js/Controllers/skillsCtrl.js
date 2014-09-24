'use strict';

SkillsCtrl.$inject = ['knowledgeFactory'];

function SkillsCtrl(knowledgeFactory) {
  var vm = this;

  vm.webSkills = knowledgeFactory.getWebSkills();
  vm.langSkills = knowledgeFactory.getLangSkills();
  vm.toolSkills = knowledgeFactory.getToolSkills();
  vm.methodSkills = knowledgeFactory.getMethodSkills();
  vm.systemSkills = knowledgeFactory.getSystemSkills();
  vm.backendSkills = knowledgeFactory.getBackendSkills();

  //functions
  vm.foobar = foobar;

  function foobar() {
  }
}
