'use strict';

SkillsCtrl.$inject = ['knowledgeFactory'];

function SkillsCtrl(knowledgeFactory) {
  var vm = this;
  vm.skills;
  knowledgeFactory.getSkills()
  .then(function(response) {
    vm.skills = response.data;
  });
}
