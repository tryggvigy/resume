'use strict';

SkillsCtrl.$inject = ['knowledgeFactory'];

function SkillsCtrl(knowledgeFactory) {
  var vm = this;
  knowledgeFactory.getSkills()
  .then(function(response) {
    vm.skills = response.data;
  });
}
