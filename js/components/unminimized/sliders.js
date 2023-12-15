(function ($) {
  'use strict';

  Berserk.behaviors.sliders_page_init = {
    attach: function (context, settings) {

      if($('.brk-carousel_project:not(.rendered)').length < 1){
        return;
      }

      if (typeof  $.fn.slick === 'undefined') {
        console.log('Waiting for the slick library');
        setTimeout(Berserk.behaviors.sliders_page_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      $(context).parent().find('.brk-carousel_project:not(.rendered)').addClass('rendered').each(function () {
        var $this     = $(this),
          carousel    = $this.find(".brk-carousel__items"),
          currentStep = $this.find(".brk-carousel__current"),
          stepsCount  = $this.find(".brk-carousel__count"),
          prevBtn     = $this.find(".brk-carousel__btn-prev"),
          nextBtn     = $this.find(".brk-carousel__btn-next");

        prevBtn.on('click', function () {
          carousel.slick("slickPrev");
        });

        nextBtn.on('click', function () {
          carousel.slick("slickNext");
        });

        carousel.on("init reInit", function (event, slick, currentSlide, nextSlide) {
          stepsCount.text(slick.slideCount);
          currentStep.text(slick.currentSlide + 1);
        });

        carousel.on("init afterChange", function (event, slick, currentSlide, nextSlide) {
          currentStep.text(slick.currentSlide + 1);

          if (slick.currentSlide === 0) {
            prevBtn.addClass("brk-carousel__btn-prev_disabled")
          } else {
            prevBtn.removeClass("brk-carousel__btn-prev_disabled")
          }


          if (slick.currentSlide + 1 === slick.slideCount) {
            nextBtn.addClass("brk-carousel__btn-next_disabled")
          } else {
            nextBtn.removeClass("brk-carousel__btn-next_disabled")
          }

        });

        carousel.slick({
          dots: false,
          prevArrow: false,
          nextArrow: false,
          infinite: false
        });
      });

    }
  };
})(jQuery);
