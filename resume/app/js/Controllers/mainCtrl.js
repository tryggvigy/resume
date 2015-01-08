'use strict';

MainCtrl.$inject = ['$translate', 'languageFactory'];

function MainCtrl($translate, languageFactory) {
  var vm = this;

  //functions
  vm.changeLanguage = changeLanguage;

  function changeLanguage(langKey) {
    $translate.use(langKey);
    languageFactory.setCurrLang(langKey);
  }
}
