'use strict';

ProfileCtrl.$inject = ['$scope', 'knowledgeFactory'];

function ProfileCtrl($scope, knowledgeFactory) {
  var vm = this;

  vm.words = knowledgeFactory.getWordCloudWords();

  //functions
  vm.foobar = foobar;

  function foobar() {
  }
}
