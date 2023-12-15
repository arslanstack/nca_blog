(function ($) {
  'use strict';

  Berserk.behaviors.gallery_sliders_init = {
    attach: function (context, settings) {

      // GRADIENT SLIDER

      if (typeof $.fn.slick === 'undefined') {
        console.log('Waiting for the slick library');
        setTimeout(Berserk.behaviors.gallery_sliders_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      var gradien_slider_container = $(context).parent().find('.brk-gradien-carousel:not(.rendered)').addClass("rendered");
      gradien_slider_container.each(function () {

        var gradient_slider = $(this).find('.brk-gradien-carousel__items');
        var gradient_slider_sort_item = $(this).find('.brk-sort-list li');

        // Positioning the left and right cards on hover

        /*gradient_slider.on('init afterChange', function (evt, slick, direction) {
          var allSlides = slick.$slideTrack['0'].children;
          var activeSlides = [];

          for (var i = 0; i < allSlides.length; i++) {
            allSlides[i].classList.remove('slick-active-first');
            allSlides[i].classList.remove('slick-active-last');
            allSlides[i].classList.remove('slick-active-single');
            if (allSlides[i].classList.contains('slick-active')) {
              activeSlides.push(allSlides[i]);
            }
          }
          if (activeSlides.length >= 2){
            activeSlides[0].classList.add('slick-active-first');
            activeSlides[activeSlides.length - 1].classList.add('slick-active-last');
          }
          else {
            activeSlides[0].classList.add('slick-active-single');
            activeSlides[activeSlides.length - 1].classList.add('slick-active-single');
          }
          
        });*/
        // Positioning the left and right cards on hover end


        // Filter
        gradient_slider_sort_item.each(function () {
          var counter = $(this).find('.brk-sort-list__item-counter');
          var filterName = $(this).attr('data-filter');

          if (filterName === 'all') {
            counter.html(gradient_slider.children().length)
          } else {
            var selector = "[data-filter='" + filterName + "']";
            counter.html(gradient_slider.find(selector).length)
          }
        });

        gradient_slider_sort_item.on('click', function (e) {
          gradient_slider_sort_item.each(
            function () {
              $(this).removeClass('active')
            }
          );
          $(this).addClass('active');

          var filter = $(this).attr('data-filter');
          var key;
          if (filter === 'all') {
            gradient_slider.slick('slickUnfilter');
          } else {
            key = "." + filter;
            gradient_slider.slick('slickUnfilter');
            gradient_slider.slick('slickFilter', key).slick('refresh');
            gradient_slider.slick('slickGoTo', 0);
          }
        });

        gradient_slider.on('init', function (evt, slick, direction) {
          slick.$slides.each(function () {
            $(this).addClass($(this).children().attr('data-filter'));
          })
        });
        // Filter end

        gradient_slider.slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          infinite: false,
          accessibility: false,
          autoplay: true,
          autoplaySpeed: 3000,
          centerMode: true,
          centerPadding: '0',
          initialSlide: 1,
          arrows: false,
          dots: true,
          draggable: true,
          pauseOnHover: true,
          responsive: [{
              breakpoint: 1230,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1
              }
            },
          ]
        });
      });


      // SOLID SLIDER

      // Filter
      var solid_slider_container = $(context).parent().find('.brk-gallery-solid:not(.rendered)').addClass("rendered");
      solid_slider_container.each(function () {

        var solid_slider = $(this).find('.brk-gallery-solid__slider');
        var solid_slider_sort_item = $(this).find('.brk-sort-list li');


        $(this).find('.brk-sort-list li').each(function () {
          var counter = $(this).find('.brk-sort-list__item-counter');
          var filterName = $(this).attr('data-filter');

          if (filterName === 'all') {
            counter.html(solid_slider.children().length)
          } else {
            var selector = "[data-filter='" + filterName + "']";
            counter.html(solid_slider.find(selector).length)
          }
        });

        solid_slider_sort_item.on('click', function (e) {
          solid_slider_sort_item.each(
            function () {
              $(this).removeClass('active')
            }
          );
          $(this).addClass('active');

          var filter = $(this).attr('data-filter');
          var key;
          if (filter === 'all') {
            solid_slider.slick('slickUnfilter');
          } else {
            key = "." + filter;
            solid_slider.slick('slickUnfilter');
            solid_slider.slick('slickFilter', key).slick('refresh');
            solid_slider.slick('slickGoTo', 0);
          }
        });

        solid_slider.on('init', function (evt, slick, direction) {
          slick.$slides.each(function () {
            $(this).addClass($(this).children().attr('data-filter'));
          })
        });

        // Filter end

        solid_slider.slick({
          "slidesToShow": 5,
          "slidesToScroll": 1,
          "swipeToSlide": true,
          "infinite": false,
          "accessibility": false,
          "autoplay": true,
          "autoplaySpeed": 3000,
          "arrows": true,
          "dots": true,
          "appendArrows": $('.brk-gallery-solid__slider-control'),
          "prevArrow": '<button class="brk-gallery-solid__slider-prev"><i class="fal fa-angle-left"></i></button>',
          "appendDots": $('.brk-gallery-solid__slider-control'),
          "nextArrow": '<button class="brk-gallery-solid__slider-next"><i class="fal fa-angle-right"></i></button>',
          "dotsClass": "brk-gallery-solid__slider-dots brk-slider__dots_circled",
          "draggable": true,
          "pauseOnHover": true,
          "pauseOnDotsHover": true,
          "responsive": [{
              breakpoint: 1230,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
        });
      });

      // STRICT SLIDER
      var strict_carousel_container = $(context).parent().find('.brk-strict-carousel:not(.rendered)').addClass("rendered");
      strict_carousel_container.each(function(){
        $(this).find('.brk-strict-carousel__items').slick({
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "swipeToSlide": true,
          "infinite": true,
          "accessibility": false,
          "autoplay": true,
          "autoplaySpeed": 3000,
          "arrows": true,
          "appendArrows": $(".brk-strict-carousel__control"),
          "prevArrow": '<button class="brk-strict-carousel__control-prev"><i class="far fa-arrow-left"></i></button>',
          "nextArrow": '<button class="brk-strict-carousel__control-next"><i class="far fa-arrow-right"></i></button>',
          "dots": true,
          "appendDots": $(".brk-strict-carousel__control"),
          "dotsClass": "brk-strict-carousel__dots brk-slider__dots_circled",
          "draggable": true,
          "pauseOnHover": true,
          "pauseOnDotsHover": true,
          "responsive": [{
              breakpoint: 1230,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 1230,
              settings: {
                slidesToShow: 1
              }
            },
          ]
        });
      });

      // DARK SLIDER

      $(context).parent().find('.brk-carousel-dark__items:not(.rendered)').each(function(){
        $(this).slick({
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "swipeToSlide": true,
          "infinite": true,
          "accessibility": false,
          "autoplay": true,
          "autoplaySpeed": 3000,
          "arrows": false,
          "dots": false,
          "draggable": true,
          "pauseOnHover": true,
          "responsive": [{
              breakpoint: 1230,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1
              }
            },
          ]
        })
      }).addClass("rendered");
    }
  }
})(jQuery);