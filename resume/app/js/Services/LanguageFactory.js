'use strict';

function languageFactory() {

  ///////// PRIVATE ///////////
  var _currLang = "en";

  /////////// PUBLIC //////////////
  function getCurrLang() {
    return _currLang;
  }
  function setCurrLang(lang) {
    _currLang = lang;
  }

  var factory = {
    getCurrLang: getCurrLang,
    setCurrLang: setCurrLang
  };
  return factory;
}
