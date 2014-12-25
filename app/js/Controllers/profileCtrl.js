'use strict';

ProfileCtrl.$inject = ['knowledgeFactory'];

function ProfileCtrl(knowledgeFactory) {
  var vm = this;
  knowledgeFactory.getWordCloudWords()
  .then(function(response) {
    vm.words = response.data.words;
  });
}
