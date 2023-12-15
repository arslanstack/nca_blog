(function ($) {
  'use strict';

  Berserk.behaviors.tiles_angle_init = {
    attach: function (context, settings) {

      if($('.brk-sc-tiles-angle:not(.rendered)').length < 1) {
        return;
      }

      var windowWidth = window.innerWidth || $(window).width();

      if (windowWidth >= 992) {

        $(context).parent().find('.brk-sc-tiles-angle:not(.rendered)').addClass('rendered').each(function() {
          var $this           = $(this),
              loading         = '.brk-sc-tiles-angle__loading',
              angleTop        = '.brk-sc-tiles-angle__top',
              angleBottom     = '.brk-sc-tiles-angle__bottom',
              $angleTopObj    = $this.find(angleTop),
              $angleBottomObj = $this.find(angleBottom);

          $angleTopObj.on({
            mouseenter: function () {
              $(this).siblings(angleBottom).addClass('no-active');
              $(this).siblings(loading).addClass('top-active');
            },
            mouseleave: function () {
              $(this).siblings(angleBottom).removeClass('no-active');
              $(this).siblings(loading).removeClass('top-active');
            }
          });

          $angleBottomObj.on({
            mouseenter: function () {
              $(this).siblings(angleTop).addClass('no-active');
              $(this).siblings(loading).addClass('bottom-active');
            },
            mouseleave: function () {
              $(this).siblings(angleTop).removeClass('no-active');
              $(this).siblings(loading).removeClass('bottom-active');
            }
          });

        })
      }
    }
  }

})(jQuery);