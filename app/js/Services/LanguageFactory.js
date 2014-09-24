'use strict';

function languageFactory() {

  ///////// PRIVATE ///////////
  var _observerCallbacks = [];
  var _currLang = "en";

  /////////// PUBLIC //////////////
  function getCurrLang() {
    return _currLang;
  }
  function setCurrLang(lang) {
    notifyObservers(lang);
    _currLang = lang;
  }

  //register an observer
  var registerObserverCallback = function(callback){
    _observerCallbacks.push(callback);
  };

  //call this when you know 'foo' has been changed
  var notifyObservers = function(lang){
    angular.forEach(_observerCallbacks, function(callback){
      callback(lang);
    });
  };

  var factory = {
    getCurrLang: getCurrLang,
    setCurrLang: setCurrLang,
    registerObserverCallback: registerObserverCallback
  };
  return factory;
}
