(function($) {
  'use strict';

  Berserk.behaviors.testimonials_sliders_init = {
    attach: function (context, settings) {

      // If element is lazyloaded but library still loading, then wait a little
      if (typeof Swiper === 'undefined') {
        console.log('Waiting for the swiper library');
        setTimeout(Berserk.behaviors.testimonials_sliders_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      var staff = new Swiper('.staff-slider-container:not(.rendered)', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        //freeMode: true,
        centeredSlides: true,
        //initialSlide: 2,
        slidesPerGroup: 3,
        pagination: {
          el: '.pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
          },
        },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        breakpoints: {
          480: {
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          992: {
            slidesPerGroup: 1,
          }
        }
      });


      var colored = new Swiper('.colored-slider', {
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        loopedSlides: 4,
        speed: 1000,
        centeredSlides: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
      });


      // 01 dash
      var testimonialsDashSlider = new Swiper('.testimonials-dash-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 800,
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
      });


      // 02 Our Reviews
      var ourSliderNav = new Swiper('.testimonials-our-slider-nav', {
        spaceBetween: 0,
        slidesPerView: 5,
        centeredSlides: true,
        direction: 'vertical',
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true,
      });
      var ourSliderFor = new Swiper('.testimonials-our-slider-for', {
        //direction: 'vertical',
        spaceBetween: 0,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
      });

      ourSliderNav.originalParams.controller.control = ourSliderFor;
      ourSliderFor.originalParams.controller.control = ourSliderNav;

    }
  }
})(jQuery);