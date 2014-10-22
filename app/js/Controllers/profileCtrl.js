'use strict';

ProfileCtrl.$inject = ['knowledgeFactory'];

function ProfileCtrl(knowledgeFactory) {
  var vm = this;
  vm.words = knowledgeFactory.getWordCloudWords();
}
