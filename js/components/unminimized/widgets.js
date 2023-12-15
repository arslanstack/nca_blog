(function ($) {


  Berserk.behaviors.widgets_carousel_init = {
    attach: function (context, settings) {

      if ($('.brs-carousel').length) {

        if (typeof $.fn.slick === 'undefined') {
          console.log('Waiting for the slick library');
          setTimeout(Berserk.behaviors.widgets_carousel_init.attach, settings.timeout_delay, context, settings);
          return;
        }

        var sideBardCarousel = $(context).parent().find('.brs-carousel:not(.rendered)').addClass('rendered');

        sideBardCarousel.on('init', function (event, slick) {
          slick.$dots.removeClass('slick-dots');
          slick.$dots.addClass('brs-carousel__dots-circled');
        });

        sideBardCarousel.slick({
          infinite: false,
          arrows: false,
          dots: true,
          adaptiveHeight: true
        }).addClass('rendered');
      }

    }
  };


  Berserk.behaviors.widgets_slider_cube_init = {
    attach: function (context, settings) {

      var sliderCube = $('.brk-slider-cube:not(.rendered)', context);

      if (sliderCube.length) {
        // If element is lazyloaded but library still loading, then wait a little
        if (typeof Swiper === 'undefined') {
          console.log('Waiting for the swiper cube library');
          setTimeout(Berserk.behaviors.widgets_slider_cube_init.attach, settings.timeout_delay, context, settings);
          return;
        }

        sliderCube.each(function () {
          var el = $(this),
            slider = el.find('.brk-slider-cube__items'),
            pagination = el.find('.brk-slider-cube__pagintaion'),
            overlayHorizontal = el.find('.brk-slider-cube__overlay');

          el.addClass('rendered');

          var cubeSlider = new Swiper(slider, {
            init: false,
            effect: 'cube',
            spaceBetween: 0,
            loop: true,
            loopedSlides: 2,
            autoHeight: true, //enable auto height
            speed: 900,
            cubeEffect: {
              shadow: false,
              slideShadows: false,
              shadowOffset: 20,
              shadowScale: 0.94
            },
            pagination: {
              el: pagination,
              clickable: true
            }
          });

          $(window).on('load', function() {
            cubeSlider.init()
          });

          cubeSlider.on('touchStart', function () {
            if (!overlayHorizontal.hasClass('deactive')) {
              overlayHorizontal.addClass('deactive');
              setTimeout(function () {
                overlayHorizontal.removeClass('deactive');
              }, 500);
            } else {
              overlayHorizontal.removeClass('deactive');
            }
          });

          pagination.find('span').each(function () {
            $(this).on('click', function () {
              if (!overlayHorizontal.hasClass('deactive')) {
                overlayHorizontal.addClass('deactive');
                setTimeout(function () {
                  overlayHorizontal.removeClass('deactive');
                }, 500);
              } else {
                overlayHorizontal.removeClass('deactive');
              }
            })
          })
        });
      }
    }
  };

  var viewSwiper = $('.brk-sc-view-swiper');
  if (viewSwiper.length) {
    viewSwiper.find('.brk-sc-view-swiper__btn').each(function () {
      $(this).on('click', function () {
        if (viewSwiper.hasClass('row-view')) {
          viewSwiper.removeClass('row-view');
          viewSwiper.addClass('col-view');
        } else if (viewSwiper.hasClass('col-view')) {
          viewSwiper.removeClass('col-view');
          viewSwiper.addClass('row-view');
        }
      })
    })
  }


  Berserk.behaviors.widgets_price_slider_init = {
    attach: function (context, settings) {
      // Filter slider 
      var sliderContainers = $(context).parent().find('.brk-sc-price-slider:not(.rendered)');

      if (sliderContainers.length) {

        // If element is lazyloaded but library still loading, then wait a little
        if (typeof $.fn.slider !== 'function') {
          console.log('Waiting for the price slider library');
          setTimeout(Berserk.behaviors.widgets_price_slider_init.attach, settings.timeout_delay, context, settings);
          return;
        }

        sliderContainers.each(function () {
          var container = $(this);
          var slider = $(this).find('.brk-sc-price-slider__container');
          var input = $(this).find('input.sliderValue');
          var min_value = +slider.attr('data-min-value');
          var max_value = +slider.attr('data-max-value');

          container.addClass('rendered');
          slider.slider({
            range: true,
            min: min_value,
            max: max_value,
            step: 1,
            values: [min_value, max_value],
            slide: function (event, ui) {
              for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
              }
            },
            change: function () {
              input.each(function () {
                setInputWidth($(this))
              })
            }
          });

          function setInputWidth(input) {
            var strLegth = input.val().length;
            if (strLegth <= 1) {
              input.css('width', '14px')
            } else if (strLegth === 2) {
              input.css('width', '22px')
            } else if (strLegth === 3) {
              input.css('width', '30px')
            } else if (strLegth === 4) {
              input.css('width', '37px')
            } else if (strLegth >= 5) {
              input.css('width', '45px')
            }
          }

          input.each(function () {
            setInputWidth($(this))
          });
          input.on('keyup', function () {
            setInputWidth($(this))
          });

          input.on('change', function () {
            var $this = $(this);
            $(".brk-sc-price-slider__container").slider("values", $this.data("index"), $this.val());
          });
        })
        // Filter slider  end
      }

    }
  };


})(jQuery);
