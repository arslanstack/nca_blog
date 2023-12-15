(function ($) {
  'use strict';

  Berserk.behaviors.footer_init = {
    attach: function (context, settings) {

      // animated footer
      var footerWraps = $('.brk-footer__wrapper:not(.rendered)', context);
      footerWraps.each(function () {
        if ($(this).hasClass('brk-footer__wrapper_animated')) {

          var wrapper = $(this),
            footer = $(this).parent(),
            prevEl = footer.prev(),
            viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

          var setFooterStyles = function () {
            footer.css('height', wrapper.outerHeight(true)).addClass('brk-footer_animated');
            prevEl
              .css('margin-bottom', wrapper.outerHeight(true))
              .css('background-color', "#fff")
              .css('position', 'relative')
              .css('z-index', '2');
          };

          if (viewportHeight >= wrapper.outerHeight(true)) {
            setFooterStyles();
          }

          $(this).on("DOMSubtreeModified", function () {
            if (wrapper.outerHeight(true) !== footer.outerHeight(true) && (viewportHeight >= wrapper.outerHeight(true))) {
              setFooterStyles();
            }
          });

          $(document).on('scroll', function(){
            if (wrapper.outerHeight(true) !== footer.outerHeight(true) && (viewportHeight >= wrapper.outerHeight(true))) {
              setFooterStyles();
            }
          });

        }
        $(this).addClass("rendered")
      });
      // animated footer end

      // Footer shop slider
      if ($('.brk-slider_shop-footer:not(.rendered)').length) {
        if (typeof $.fn.slick === 'undefined') {
          console.log('Waiting for the slick library');
          setTimeout(Berserk.behaviors.footer_init.attach, settings.timeout_delay, context, settings);
          return;
        }

        var htmlRtl = $('html').attr('dir') === 'rtl';

        var footer_slider = $('.brk-slider_shop-footer:not(.rendered)', context);
        footer_slider.each(function () {
          var nav_prev = $(this).find('.brk-slider__nav-prev');
          var nav_next = $(this).find('.brk-slider__nav-next');
          var items = $(this).find('.brk-slider__items');

          nav_prev.on('click', function () {
            items.slick("slickPrev");
          });

          nav_next.on('click', function () {
            items.slick("slickNext");
          });

          items.slick({
            accessibility: false,
            arrows: false,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            rtl: htmlRtl,
            responsive: [{
              breakpoint: 850,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },]
          });

          $(this).addClass("rendered");
        })
      }
      //footer shop slider end 
      
    }
  };

  Berserk.behaviors.footer_scrollr_init = {
    attach: function (context, settings) {
      if($('[data-skrollr]:not(.skrollr-rendered)').length){
        if (typeof skrollr === 'undefined') {
          console.log('Waiting for the skrollr library');
          setTimeout(Berserk.behaviors.footer_scrollr_init.attach, settings.timeout_delay, context, settings);
          return;
        }

        var windowWidth = window.innerWidth || $(window).width();
        if (windowWidth >= 992) {
          $('[data-skrollr]:not(.skrollr-rendered)').addClass("skrollr-rendered");
          setTimeout(function() {
            var s = skrollr.init({forceHeight: false});
          }, 1500)
        }

      }
    }
  }

})(jQuery);
