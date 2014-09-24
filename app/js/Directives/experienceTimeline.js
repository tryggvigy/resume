'use strict';

function resumeTimeline() {
  return {
    restruct: 'A',
    scope: {
      currlang: '='
    },
    link: function(scope, element, attrs) {

      function initTimeline() {
        $('#storyjs').remove();
        createStoryJS({
          width: '800',
          height: '400',
          source: 'timeline/timeline.json',
          embed_id: 'my-timeline',
          lang: "en",
          font : "Rancho-Gudea",
          debug: true
        });
      }

      function initTimelineIS() {
        $('#storyjs').remove(); // fix dom manipulation in ctrl
        createStoryJS({
          width: '800',
          height: '400',
          source: 'timeline/timelineIS.json',
          embed_id: 'my-timeline',
          lang: "is",
          font : "Rancho-Gudea",
          debug: true
        });
      }

      scope.$watch('currlang', function(newValue, oldValue) {
        if (newValue === 'en' || newValue === undefined)
            initTimeline();
        if (newValue === 'is')
            initTimelineIS();
      }, true);
    }
  };
}
