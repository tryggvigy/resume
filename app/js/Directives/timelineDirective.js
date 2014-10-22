'use strict';

timeLine.$inject = ['languageFactory'];

function timeLine(languageFactory) {
  return {
    restrict: 'AE',
    scope: {},
    link: function(scope, element, attrs) {

      scope.$watch(function () {return languageFactory.getCurrLang();}, function(lang) {
        initTimeline(lang);
      });

      function initTimeline(lang) {
        var SMALL_SCREEN = 820, margin = 150;
        var timelineWidth = $(window).width()-2*margin, timelineHeight = 600;
        var jsonPath = '../dist/static/timeline/timelineEN.json';
        if(lang === 'is')
          jsonPath = '../dist/static/timeline/timelineIS.json';

        //cleanup after previous timeline if there was one.
        $('#storyjs').remove();
        $('.lazyload').remove();

        if($(window).width() <= SMALL_SCREEN) {
            timelineWidth = $(window).width();
            timelineHeight = 400;
          }

        createStoryJS({
          width: timelineWidth,
          height: timelineHeight,
          source: jsonPath,
          embed_id: 'my-timeline',
          lang: "en",
          font : "Rancho-Gudea",
          start_zoom_adjust: "1",
        });
      }
    }
  };
}
