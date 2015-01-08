'use strict';

timeSince.$inject = ['$timeout', 'languageFactory'];

function timeSince($timeout, languageFactory) {
  return {
    restrict: 'AE',
    scope: {
      origin: '@'
    },
    link: function(scope, element, attrs) {
      var originDate = new Date(scope.origin);

      function setHTML() {
        element[0].innerHTML = updateTime();
        $timeout(setHTML, 1000, true);
      }
      setHTML();

      function updateTime() {
          var nowDate = new Date(Date.now());
          //total difference in milliseconds
          var dtMs = nowDate - originDate;

          //leap year not included
          var yy = Math.floor(dtMs / 1000 / 60 / 60 / 24 / 365);
          dtMs -= yy * 1000 * 60 * 60 * 24 * 365;
          var dd = Math.floor(dtMs / 1000 / 60 / 60 / 24);
          dtMs -= dd * 1000 * 60 * 60 * 24;
          var hh = Math.floor(dtMs / 1000 / 60 / 60);
          dtMs -= hh * 1000 * 60 * 60;
          var mm = Math.floor(dtMs / 1000 / 60);
          dtMs -= mm * 1000 * 60;
          var ss = Math.floor(dtMs / 1000);
          dtMs -= ss * 1000;

          if(languageFactory.getCurrLang() === 'en' || undefined)
            return yy+" years, "+dd+" days, "+hh+" hours, "+mm+" minutes, "+ss+" seconds";
          else
            return yy+" ár, "+dd+" dagar, "+hh+" klukkutímar, "+mm+" mínútur, "+ss+" sekúndur";
      }
    }
  };
}
