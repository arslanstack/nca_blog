(function ($) {
  'use strict';

  Berserk.behaviors.material_card_init = {
    attach: function (context, settings) {

      var $mcBtnAction = $(context).parent().find('.mc-btn-action:not(.rendered)').addClass('rendered');
      if ($mcBtnAction.length) {
        $mcBtnAction.on('click', function () {
          var $this = $(this),
              card = $this.parent('.brk-team-mc'),
              icon = $this.children('i');
          icon.addClass('fa-spin-fast');

          if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');
            setTimeout(function () {
              icon
                .removeClass('fa-arrow-left')
                .removeClass('fa-spin-fast')
                .addClass('fa-bars');
            }, 800);
          } else {
            card.addClass('mc-active');
            setTimeout(function () {
              icon
                .removeClass('fa-bars')
                .removeClass('fa-spin-fast')
                .addClass('fa-arrow-left');
            }, 800);
          }
        });
      }
    }
  }

})(jQuery);