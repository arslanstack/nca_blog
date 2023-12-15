(function ($) {
  'use strict';

  Berserk.behaviors.image_caption_init = {
    attach: function (context, settings) {   

      if (typeof $.fn.brk_hover3d !== 'function' || typeof anime !== 'function') {
        console.log('Waiting for the brk_hover3d && anime library');
        setTimeout(Berserk.behaviors.image_caption_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      $(context).parent().find('.brk-tilter:not(.rendered)').addClass('rendered').each(function () {
        $(this).brk_hover3d('animation4', {
          imgWrapper: ".brk-tilter__figure",
          lines: ".brk-tilter__deco--lines",
          caption: ".brk-tilter__caption",
          overlay: ".brk-tilter__deco--overlay"
        })
      });
    }
  }
})(jQuery);
