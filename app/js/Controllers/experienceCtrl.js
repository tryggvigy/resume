'use strict';

ExperienceCtrl.$inject = ['$scope', 'languageFactory'];

function ExperienceCtrl($scope, languageFactory) {
  var vm = this;

  vm.currlang = languageFactory.getCurrLang();
  if(vm.currlang === 'en')
    initTimelineEN();
  if(vm.currlang === 'is')
    initTimelineIS();

  var changeLang = function(lang){
    if(lang === 'en')
      initTimelineEN();
    if(lang === 'is')
      initTimelineIS();
  };
  languageFactory.registerObserverCallback(changeLang);

  //functions
  vm.initTimelineEN = initTimelineEN;
  vm.initTimelineIS = initTimelineIS;

  function initTimelineEN() {
    //cleanup after previous timeline.
    $('#storyjs').remove();
    $('.lazyload').remove();
    createStoryJS({
      width: '1000',
      height: '600',
      source: '../dist/static/timeline/timelineEN.json',
      embed_id: 'my-timeline',
      lang: "en",
      font : "Rancho-Gudea",
      start_zoom_adjust: "1",
    });
  }

  function initTimelineIS() {
    //cleanup after previous timeline.
    $('#storyjs').remove();
    $('.lazyload').remove();
    createStoryJS({
      width: '1000',
      height: '600',
      source: '../dist/static/timeline/timelineIS.json',
      embed_id: 'my-timeline',
      lang: "en",
      font : "Rancho-Gudea",
      start_zoom_adjust: "1",
    });
  }
}
