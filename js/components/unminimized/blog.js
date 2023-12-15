(function ($) {
  'use strict';

  Berserk.behaviors.blog_init = {
    attach: function (context, settings) {

      if (typeof $.fn.slick === 'undefined') {
        console.log('Waiting for the slick library');
        setTimeout(Berserk.behaviors.blog_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      $('.brs-post__slider-container:not(.rendered)', context).addClass('rendered')
        .slick({
          prevArrow: "<div class=\"brs-post__btn-prev\"><i class=\"fal fa-angle-left\"></i></div>",
          nextArrow: "<div  class=\"brs-post__btn-next\"><i class=\"fal fa-angle-right\"></i></div>",
          infinite: false,
        });
    }
  }
})(jQuery);
