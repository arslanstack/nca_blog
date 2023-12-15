(function ($) {
  'use strict';

  Berserk.behaviors.slick_init = {
    attach: function (context, settings) {

      if (typeof  $.fn.slick === 'undefined') {
        console.log('Waiting for the slick library');
        setTimeout(Berserk.behaviors.slick_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      window.addEventListener('load', function () {
        $(".slick-slider").each(function (){
          $(this).slick("setPosition", 0);
        });
      });

      var htmlRtl = $('html').attr('dir') === 'rtl';

      //context = $(context).wrap('<span></span>').parent();

      function addPNClass(slide, current) {
        setTimeout(function() {                  
          $(slide).removeClass('prev-slid-index next-slid-index');
          $(current).prev().removeClass('next-slid-index').addClass('prev-slid-index');
          $(current).next().removeClass('prev-slid-index').addClass('next-slid-index');
        }, 100)
      }

      $(context).parent().find('.rotation-slider:not(.rendered)').addClass('rendered').each(function() {
        var slider = $(this);

        window.addEventListener('load', function () {
          setTimeout(function () {
            slider.slick({
              dots: false,
              arrows: false,
              infinite: false,
              speed: 800,
              adaptiveHeight: true,
              focusOnSelect: true,
              centerMode: true,
              centerPadding: '75px',
              initialSlide: 1,
              swipeToSlide: true,
              rtl: htmlRtl,
              responsive: [
                {
                  breakpoint: 576,
                  settings: {
                    focusOnSelect: false,
                    centerMode: false,
                    centerPadding: '0'
                  }
                },
              ]
            });
          }, 500)
        });

        slider.on('init', function(){
          var rs_slide =  $(this).find('.slick-slide');
          var rs_current =  $(this).find('.slick-current');


          // On before slide change
          addPNClass(rs_slide, rs_current);
          $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide){
            addPNClass(rs_slide, slick.$slides[nextSlide]);
          });
        });

      });

      //
      // Skin .rotation-slider-min
      // Skin .slider-dark
      //
      $(context).parent().find('.rotation-slider-min:not(.rendered)').addClass("rendered").each(function() {
        var slider = $(this);

        window.addEventListener('load', function () {
          setTimeout(function () {
            slider.slick({
              dots: false,
              arrows: false,
              infinite: true,
              speed: 800,
              swipeToSlide: true,
              adaptiveHeight: true,
              rtl: htmlRtl
            });
          }, 500)
        });
      });

      $(context).parent().find('.slider-dark:not(.rendered)').addClass("rendered").each(function() {
        $(this).slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 800,
          swipeToSlide: true,
          adaptiveHeight: true,
          rtl: htmlRtl
        });
      });

      $(context).parent().find('.tiled-slider:not(.rendered)').addClass("rendered").each(function() {
        $(this).slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 800,
          swipeToSlide: true,
          adaptiveHeight: true,
          swipe: false,
          rtl: htmlRtl,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
              }
            },
          ]
        });
      });

      $(context).parent().find('.triple-slider:not(.rendered)').addClass("rendered").each(function() {
        $(this).slick({
          slidesToShow: 3,
          dots: false,
          arrows: true,
          infinite: true,
          speed: 800,
          swipeToSlide: true,
          rtl: htmlRtl,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        })
      });

      $(context).parent().find('.slider-thumbnailed:not(.rendered)').addClass("rendered").each(function(i, elem) {
        $(elem).addClass('sthumb-' + i);
        var classElement = '.' + 'sthumb-' + i;

        $(classElement + ' .slider-thumbnailed-for').on('init', function(event, slick){
          $(classElement).removeClass('slick-loading');
        });

        window.addEventListener('load', function () {
          $(classElement + ' .slider-thumbnailed-for').slick({
            dots: false,
            arrows: false,
            adaptiveHeight: true,
            rtl: htmlRtl,
            asNavFor: classElement + ' .slider-thumbnailed-nav'
          });

          $(classElement + ' .slider-thumbnailed-nav').slick({
            asNavFor: classElement + ' .slider-thumbnailed-for',
            focusOnSelect: true,
            arrows: false,
            swipeToSlide: true,
            rtl: htmlRtl,
            responsive: [
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 5
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 375,
                settings: {
                  slidesToShow: 3
                }
              },
            ]
          });
        });

      });

      $(context).parent().find('.default-slider:not(.rendered)').addClass("rendered").each(function() {

        var slider = $(this);
        slider.slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 800,
          swipeToSlide: true,
          adaptiveHeight: true,
          rtl: htmlRtl
        });

      });


      $(context).parent().find('.post-angle-slider:not(.rendered)').addClass("rendered").each(function() {
        $(this).slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 800,
          swipeToSlide: true,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 1000,
          pauseOnHover: true,
          rtl: htmlRtl
        });
      });


      $(context).parent().find('div.landscape-slider:not(.rendered)').addClass("rendered").each(function(i, elem) {
        $(elem).addClass('landscape-' + i);
        var classElement = '.' + 'landscape-' + i;

        $(classElement + ' .landscape-slider-for').on('init', function(event, slick){
          $(classElement).removeClass('slick-loading');
        });

        $(classElement + ' .landscape-slider-for').slick({
          dots: false,
          arrows: false,
          adaptiveHeight: true,
          asNavFor: classElement + ' .landscape-slider-nav',
          rtl: htmlRtl
        });
        $(classElement + ' .landscape-slider-nav').slick({
          asNavFor: classElement + ' .landscape-slider-for',
          focusOnSelect: true,
          arrows: false,
          rtl: htmlRtl
        });
      });

      $(context).parent().find('.brk-brand-slider:not(.rendered)').addClass("rendered").each(function (i, elem) {

        $(this).on('init beforeChange afterChange', function (event, slick) {
          var maxHeight = 0;

          slick.$slideTrack.children().each(function () {
            if ($(this).find('img').height() > maxHeight) {
              maxHeight = $(this).height();
            }
          });
          slick.$slideTrack.children().each(function () {
            $(this).css("min-height", maxHeight)
          })
        });

        $(this).slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: false,
          draggable: true,
          swipeToSlide: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          accessibility: false,
          rtl: htmlRtl,
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2
              }
            }
          ]
        })
      });

      $(context).parent().find('.brk-slider-team').each(function(){
        // $(this).slick({
        //   slidesToShow: $(this).hasClass('brk-slider-team_6') ? 6 : 8,
        //   slidesToScroll: 1,
        //   arrows: false,
        //   draggable: true,
        //   swipeToSlide: true,
        //   infinite: true,
        //   autoplay: true,
        //   autoplaySpeed: 5000,
        //   accessibility: false,
        //   rtl: htmlRtl,
        //   responsive: [
        //     {
        //       breakpoint: 1024,
        //       settings: {
        //         slidesToShow: 5
        //       }
        //     },
        //     {
        //       breakpoint: 600,
        //       settings: {
        //         slidesToShow: 3

        //       }
        //     },
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         slidesToShow: 2
        //       }
        //     }
        //   ]
        // });
        
        var sliderItems = $(this).find('.brk-img-zoom');
          sliderItems.each(function (elem) {
            $(this).on('mouseenter', function () {
              var currentCard = $(this);
              sliderItems.each(function () {
                $(this).addClass('brk-img-zoom_not-hovered');
                currentCard.removeClass('brk-img-zoom_not-hovered');
              })
            });
          $(this).on('mouseleave', function () {
            sliderItems.each(function () {
              $(this).removeClass('brk-img-zoom_not-hovered');
            })
          })
        })

      });

      $(context).parent().find('.brk-services-slider__items:not(.rendered)').addClass("rendered").each(function(){
        $(this).slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          infinite: true,
          accessibility: false,
          arrows: false,
          dots: true,
          draggable: true,
          pauseOnHover: true,
          rtl: htmlRtl,
          responsive: [{
            breakpoint: 1230,
            settings: {
              slidesToShow: 3
            }
          },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            },
          ]
        })
      });

      $(context).parent().find('.brk-slider-shop:not(.rendered)').addClass("rendered").each(function () {

        var nav_prev  = $(this).find('.brk-slider__nav-prev');
        var nav_next  = $(this).find('.brk-slider__nav-next');
        var items     = $(this).find('.brk-slider__items');

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
          slidesToShow: 3,
          slidesToScroll: 2,
          rtl: htmlRtl,
          responsive: [{
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ]
        })
      });

      $(context).parent().find('.brk-slider-cards:not(.rendered)').addClass("rendered").each(function(){

        var controlNext = $(this).find('.brk-slider__control-next');
        var controlPrev = $(this).find('.brk-slider__control-prev');
        var dots = $(this).find('.brk-slider__control');
        

        $(this).find('.brk-slider__items').slick({
          slidesToShow: 4,
          infinite: false,
          swipeToSlide: true,
          arrow: false,
          autoplay: true,
          autoplaySpeed: 3500,
          rtl: htmlRtl,
          prevArrow: controlPrev,
          nextArrow: controlNext,
          appendDots: dots,
          dots: true,
          dotsClass: "brk-slider__dots",
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        })
      });
    
      ///////////////////////////
      //Skin navigation panel  //
      ////////////////////////// 

      // element: .dots-base-skin
      window.addEventListener('load', function () {
        setTimeout(function () {
          $(context).parent().find('.dots-base-skin:not(.dots-rendered), .dots-landscape-skin:not(.dots-rendered)').addClass('dots-rendered').each(function (i, el) {
            var slickDots = $(el).find('.slick-dots');
            slickDots.wrap('<div class="dots-wrap"></div>');
 
            var dotsWrap = $(el).find('.dots-wrap');
            dotsWrap.prepend('<button class="l-prev" type="button"><i class="fas fa-angle-left"></i></button>');
            dotsWrap.append('<button class="l-next" type="button"><i class="fas fa-angle-right"></i></button>');

            var l_prev = dotsWrap.find('.l-prev');
            var l_next = dotsWrap.find('.l-next');
            l_prev.on('click', function () {
              $(el).slick("slickPrev")
            });
            l_next.on('click', function () {
              $(el).slick("slickNext")
            });
          });
        }, 150);
      });

    }
  }

})(jQuery);