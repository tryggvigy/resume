'use strict';

function HobbiesCtrl() {
  var vm = this;

  var hoverImg = $('.rollover');
  $('.parallex_column').hover(
    function(){ $(hoverImg).addClass('fade'); },
    function(){ $(hoverImg).removeClass('fade'); }
  );
}
