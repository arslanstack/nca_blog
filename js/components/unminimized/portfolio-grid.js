(function ($) {
  'use strict';

  Berserk.behaviors.portfolio_init = {
    attach: function (context, settings) {
      if (typeof $.fn.brk_hover3d !== 'function' || typeof anime !== 'function') {
        console.log('Waiting for the brk_hover3d && anime library');
        setTimeout(Berserk.behaviors.portfolio_init.attach, settings.timeout_delay, context, settings);
        return;
      }
      $('.brk-portfolio-card:not(.rendered)', context)
        .brk_hover3d('animation2', {
          imgWrapper: ".brk-portfolio-card__figure",
          caption: ".brk-portfolio-card__caption "
        }).addClass('rendered');
    }
  }
})(jQuery);
