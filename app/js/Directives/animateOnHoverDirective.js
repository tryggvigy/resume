'use strict';

animateOnHover.$inject = ['$animate'];

function animateOnHover($animate) {
  return {
    restruct: 'A',
    link: function(scope, element, attrs) {
      element.on('mouseenter', function() {
        scope.$apply(function() {
          $animate.addClass(element, 'wordCloudAnim');
        });
      });
      element.on('mouseleave', function() {
        scope.$apply(function() {
          $animate.removeClass(element, 'wordCloudAnim');
        });
      });
    }
  };
}
