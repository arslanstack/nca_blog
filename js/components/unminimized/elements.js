(function ($) {
  'use strict';

  Berserk.behaviors.element_init = {
    attach: function (context, settings) {

      $(context).parent().find('.brk-sc-item-page-tabs:not(.rendered)').addClass('rendered').each(function () {
        var container = $(this);
        setTimeout(function () {
          var width = container.find('.brk-sc-item-page-tabs__title').outerWidth();
          container.find('.brk-tabs-nav').css('min-width', width);
        }, 300)
      })

    }
  }
})(jQuery);