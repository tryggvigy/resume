'use strict';

HobbiesCtrl.$inject = ['knowledgeFactory'];

function HobbiesCtrl(knowledgeFactory) {
  var vm = this;

  var hoverImg = $('.rollover');
  $('.parallex_column').hover(
       function(){ $(hoverImg).addClass('fade') },
       function(){ $(hoverImg).removeClass('fade') }
)

  //functions
  vm.foobar = foobar;

  function foobar() {
  }
}
