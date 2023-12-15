(function ($) {
  'use strict';

  Berserk.behaviors.portfolio_categories_init = {
    attach: function (context, settings) {
      if (typeof $.fn.slick === 'undefined') {
        console.log('Waiting for the slick library');
        setTimeout(Berserk.behaviors.portfolio_categories_init.attach, settings.timeout_delay, context, settings);
        return;
      }
      $('.brs-portfolio-carousel-item:not(.rendered)', context)
        .slick({
          infinite: true,
          dots: true,
          prevArrow: false,
          nextArrow: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]
        }).addClass('rendered');
    }
  }
})(jQuery);
