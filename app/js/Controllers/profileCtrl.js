'use strict';

ProfileCtrl.$inject = ['knowledgeFactory'];

function ProfileCtrl(knowledgeFactory) {
  var vm = this;
  vm.words;
  knowledgeFactory.getWordCloudWords()
  .then(function(response) {
    vm.words = response.data.words;
  });
}
