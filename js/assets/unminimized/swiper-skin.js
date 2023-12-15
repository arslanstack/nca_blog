(function ($) {
  'use strict';

  Berserk.behaviors.swiper_slider_init = {
    attach: function (context, settings) {

      // If element is lazyloaded but library still loading, then wait a little
      if (typeof Swiper === 'undefined') {
        console.log('Waiting for the swiper library');
        setTimeout(Berserk.behaviors.swiper_slider_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      var filmstripSlider = $(context).parent().find('.filmstrip-slider:not(.rendered)').addClass('rendered');

      filmstripSlider.each(function () {
        var el = $(this),
          slider = el.find('.filmstrip-slider-container'),
          scrollbar = el.find('.brk-scrollbar'),
          scrollbarTrack = scrollbar.find('.brk-scrollbar-track'),
          scrollbarDrag = scrollbar.find('.brk-scrollbar-drag'),
          dataperwiew = el.data('perwiew'),
          dataSpaceBetween = el.data('spacebetween');

        dataperwiew = dataperwiew ? dataperwiew : 'auto';

        switch (true) {
          case el.attr('class').indexOf('timeline--strict') >= 0:
          case el.attr('class').indexOf('timeline--masonry') >= 0:
            var caption = '';
            var j = 0;

            if (typeof dataSpaceBetween === 'undefined' || dataSpaceBetween === '') {
              dataSpaceBetween = 76;
            }

            var filmstrip = new Swiper(slider, {
              init: false,
              freeMode: false,
              slidesPerView: dataperwiew,
              resistance: true,
              spaceBetween: dataSpaceBetween,
              resistanceRatio: 0,
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                renderBullet: function (index, className) {
                  j++;
                  caption = $(this.slides[index]).data("caption") ? "<strong>" + $(this.slides[index]).data("caption") + "</strong>" : "";
                  return '<span class="' + className + '" style="width: ' + (100 / (this.slides.length)) + '%;">' + caption + '</span>';
                }
              },
              watchSlidesProgress: true,
              watchSlidesVisibility: true,
              on: {
                transitionStart: function () {
                  updateProgress();
                },
                resize: function () {
                  updateBulletsSize(this);
                }
              }
            });

            var $progressBar = $('<span class="swiper-progress__bar"></span>');

          var updateProgress = function () {
            filmstrip.pagination.bullets.each(function (i) {
              if ($(this).hasClass('swiper-pagination-bullet-active')) {
                $progressBar.css('transform', 'translate3d(' + ($(this).width() / 2 + $(this).offset().left - ($(window).width() / 2)) + 'px, 0px, 0px)');
              }
            });
          };

          var updateBulletsSize = function (filmstrip) {
            filmstrip.$el.find('.swiper-pagination > .swiper-pagination-bullet').each(function () {
              $(this).width(100 / j + '%');
            });
          };

            window.addEventListener('load', function () {
              setTimeout(function () {
                filmstrip.init();
                $progressBar.appendTo(filmstrip.pagination.$el);
                updateBulletsSize(filmstrip);
              }, 300);
              setTimeout(function () {
                updateProgress();
              }, 350);
            });

            $(window).on('resize', function () {
              updateBulletsSize(filmstrip);
            });

            break;

          case el.attr('class').indexOf('slider--scroll') >= 0:

            if (typeof dataSpaceBetween === 'undefined' || dataSpaceBetween === '') {
              dataSpaceBetween = 0;
            }

            var filmstripScroll = new Swiper(slider, {
              init: false,
              freeMode: true,
              slidesPerView: dataperwiew,
              spaceBetween: dataSpaceBetween,
              resistance: false,
              resistanceRatio: 0,
              scrollbar: {
                el: scrollbar,
                draggable: true,
                snapOnRelease: false,
                dragSize: 8,
                dragClass: 'brk-scrollbar-drag'
              },
              on: {
                setTranslate: function () {
                  var progress = this.progress;
                  scrollbarTrack.css({'width': progress * 100 + '%'});
                },
                setTransition: function (duration) {
                  scrollbarTrack.css({'transition-duration': duration + 'ms'});
                  //console.log(duration);
                }
              }
            });

            $(window).on('load', function () {
              setTimeout(function () {
                filmstripScroll.init()
              }, 350)
            });

            break;
        }

      });


      $(context).parent().find('.staff-slider:not(.rendered)').addClass('rendered').each(function () {
        var el = $(this),
          slider = el.children('.staff-slider-container'),
          dotsSkin = el.children('.dots-base-staff-skin'),
          dataperwiew = el.data('perwiew'),
          pagination = dotsSkin.children('.pagination'),
          next = dotsSkin.children('.button-next'),
          prev = dotsSkin.children('.button-prev');

        dataperwiew = dataperwiew ? dataperwiew : 'auto';

        var staff = new Swiper(slider, {
          init: false,
          slidesPerView: dataperwiew,
          spaceBetween: 30,
          loop: true,
          loopFillGroupWithBlank: true,
          centeredSlides: true,
          slidesPerGroup: 3,
          speed: 700,
          pagination: {
            el: pagination,
            clickable: true,
            renderBullet: function (index, className) {
              return '<li class="' + className + '"></li>';
            },
          },
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          breakpoints: {
            480: {
              slidesPerGroup: 1,
              spaceBetween: 10,
              slidesPerView: 'auto'
            },
            992: {
              slidesPerGroup: 1,
              slidesPerView: 'auto'
            },
            1680: {
              slidesPerView: 'auto'
            }
          }
        });

        window.addEventListener("load", function (event) {
          setTimeout(function () {
            staff.init()
          }, 300)
        });
      });

      $(context).parent().find('.colored-slider:not(.rendered)').addClass('rendered').each(function () {
        var $this = $(this),
          colored;
        colored = new Swiper($this, {
          init: false,
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
          breakpoints: {
            991: {
              slidesPerView: 2
            },
            767: {
              slidesPerView: 1
            }
          }
        });

        $(window).on('load', function () {
          setTimeout(function () {
            colored.init()
          }, 350)
        });
      });

      // 1 dash-one
      $(context).parent().find('.dash-one-slider:not(.rendered)').addClass('rendered').each(function () {
        var $this = $(this),
          dashOneSlider;

        dashOneSlider = new Swiper($this, {
          init: false,
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          speed: 800,
          autoHeight: true, //enable auto height
          navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
          },
        });
        $(document).ready(function () {
          setTimeout(function () {
            dashOneSlider.init()
          }, 300)
        });
      });

      // 2 dash-two
      $(context).parent().find('.brk-testimonials-dash-two:not(.rendered)').addClass('rendered').each(function () {
        var el = $(this),
          slider = el.children('.dash-two-slider'),
          pagination = el.children('.dash-two-pagination');

        var dashTwo = new Swiper(slider, {
          init: false,
          spaceBetween: 0,
          speed: 1000,
          initialSlide: 2,
          autoHeight: true, //enable auto height
          pagination: {
            el: pagination,
            bulletClass: 'dash-two-pagination-bullet',
            bulletActiveClass: 'dash-two-pagination-bullet-active',
            clickable: true,
            dynamicBullets: true
          },
        });

        setTimeout(function () {
          dashTwo.init();

          var objSlider = dashTwo.slides,
            childSlider = objSlider.children('.brk-testimonials-dash-two__text-reviews'),
            bullet = pagination.children('.dash-two-pagination-bullet'),
            i = 0;
          childSlider.each(function () {
            var _d = $(this).data('img'),
              _b = bullet[i];
            $(_b).css('backgroundImage', 'url(' + _d + ')');
            i++;
          });
        }, 300);
      });

      $(context).parent().find('.dash-three-slider:not(.rendered)').addClass('rendered').each(function () {
        var dashThreeSlider;
        if ($(this).hasClass("dash-three-slider_single")) {
          dashThreeSlider = new Swiper($(this), {
            init: false,
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
            loopedSlides: 2,
            loop: true,
            speed: 800,
            autoplay: {
              delay: 8000
            },
            pagination: {
              el: '.swiper-pagination-base',
              dynamicBullets: true,
              clickable: true
            },
            breakpoints: {
              992: {
                slidesPerView: 1,
                loopedSlides: 2,
                spaceBetween: 0,
              }
            }
          });
        } else {
          dashThreeSlider = new Swiper($(this), {
            init: false,
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: true,
            loopedSlides: 5,
            loop: true,
            speed: 800,
            pagination: {
              el: '.swiper-pagination-base',
              dynamicBullets: true,
              clickable: true
            },
            breakpoints: {
              992: {
                slidesPerView: 1,
                loopedSlides: 2,
                spaceBetween: 0,
              }
            }
          });
        }
        setTimeout(function () {
          dashThreeSlider.init()
        }, 300)
      });

      // 4 dash-four
      $(context).parent().find('.brk-testimonials-dash-four:not(.rendered)').addClass('rendered').each(function () {
        var el = $(this),
          slider = el.children('.dash-four-slider'),
          pagination = el.children('.dash-four-pagination');

        var dashFour = new Swiper(slider, {
          spaceBetween: 0,
          speed: 800,
          pagination: {
            el: pagination,
            bulletClass: 'dash-four-pagination-bullet',
            bulletActiveClass: 'dash-four-pagination-bullet-active',
            clickable: true
          },
        });
        var objSlider = dashFour.slides,
          childSlider = objSlider.children('.brk-testimonials-dash-four__item'),
          bullet = pagination.children('.dash-four-pagination-bullet'),
          i = 0;
        childSlider.each(function () {
          var _d = $(this).data('img'),
            _b = bullet[i];
          $(_b).css('backgroundImage', 'url(' + _d + ')');
          i++;
        });
      });

      // 5 dash-five
      $(context).parent().find('.dash-five-slider:not(.rendered)').addClass('rendered').each(function () {
        var $this = $(this),
          dashFive;

        dashFive = new Swiper($this, {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          loopedSlides: 4,
          centeredSlides: true,
          speed: 1000,
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
            768: {
              slidesPerView: 1,
              loopedSlides: 2
            },
            992: {
              slidesPerView: 2,
              loopedSlides: 3
            }
          }
        });
      });

      // 6 dash-six
      $(context).parent().find('.dash-six-slider:not(.rendered)').addClass('rendered').each(function () {
        var $this = $(this),
          dashSixSlider;

        dashSixSlider = new Swiper($this, {
          slidesPerView: 3,
          spaceBetween: 0,
          //loop: true,
          speed: 800,
          navigation: {
            nextEl: '.dash-six-arrow-next',
            prevEl: '.dash-six-arrow-prev',
          },
          breakpoints: {
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            }
          }
        });
      });

      // 02 double-slider
      $(context).parent().find('.brk-testimonials-double__slider:not(.rendered)').addClass('rendered').each(function () {
        var el = $(this),
          slider = el.find('.double-slider'),
          pagination = el.find('.double-pagination');

        var doubleSlider = new Swiper(slider, {
          init: false,
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 800,
          autoplay: {
            delay: 10000
          },
          pagination: {
            el: pagination,
            clickable: true,
            bulletClass: 'double-pagination-bullet',
            bulletActiveClass: 'double-pagination-bullet-active'
          }
        });

        window.addEventListener("load", function () {
          doubleSlider.init()
        })
      });

      // 03 Layered Horizontal
      $(context).parent().find('.brk-testimonials-layered-horizontal__container:not(.rendered)').addClass('rendered').each(function () {
        var el = $(this),
          slider = el.children('.layered-horizontal-slider'),
          sliderPrev = el.children('.button-prev'),
          sliderNext = el.children('.button-next'),
          overlayHorizontal = el.children('.overlay-horizontal');

        var layeredHorizontal = new Swiper(slider, {
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
          navigation: {
            nextEl: sliderNext,
            prevEl: sliderPrev
          }
        });

        window.addEventListener("load", function () {
          layeredHorizontal.init();

          layeredHorizontal.on('touchStart', function () {
            if (!overlayHorizontal.hasClass('deactive')) {
              overlayHorizontal.addClass('deactive');
              setTimeout(function () {
                overlayHorizontal.removeClass('deactive');
              }, 500);
            } else {
              overlayHorizontal.removeClass('deactive');
            }
          });
        });

        $(sliderPrev).on('click', function () {
          if (!overlayHorizontal.hasClass('deactive')) {
            overlayHorizontal.addClass('deactive');
            setTimeout(function () {
              overlayHorizontal.removeClass('deactive');
            }, 500);
          } else {
            overlayHorizontal.removeClass('deactive');
          }
        });

        $(sliderNext).on('click', function () {
          if (!overlayHorizontal.hasClass('deactive')) {
            overlayHorizontal.addClass('deactive');
            setTimeout(function () {
              overlayHorizontal.removeClass('deactive');
            }, 500);
          } else {
            overlayHorizontal.removeClass('deactive');
          }

        });
      });

      // 04 Layered Vertical
      $(context).parent().find('.brk-testimonials-layered-vertical__container:not(.rendered)').addClass('rendered').each(function () {
        var el = $(this),
          slider = el.children('.layered-vertical-slider'),
          sliderPrev = el.children('.button-prev'),
          sliderNext = el.children('.button-next'),
          overlayHorizontal = el.children('.overlay-vertical'),
          layeredVerticalItem = '.layered-vertical-item';

        var layeredVertical = new Swiper(slider, {
          init: false,
          effect: 'flip',
          direction: 'vertical',
          spaceBetween: 0,
          autoHeight: true, //enable auto height
          loop: true,
          speed: 900,
          navigation: {
            nextEl: sliderNext,
            prevEl: sliderPrev
          }
        });

        window.addEventListener("load", function () {
          layeredVertical.init();

          layeredVertical.on('touchStart', function () {
            if (!overlayHorizontal.hasClass('deactive')) {
              overlayHorizontal.addClass('deactive');
              setTimeout(function () {
                overlayHorizontal.removeClass('deactive');
              }, 400);
            } else {
              overlayHorizontal.removeClass('deactive');
            }
          });
        });

        $(sliderPrev).on('click', function () {
          if (!overlayHorizontal.hasClass('deactive')) {
            overlayHorizontal.addClass('deactive');
            setTimeout(function () {
              overlayHorizontal.removeClass('deactive');
            }, 400);
          } else {
            overlayHorizontal.removeClass('deactive');
          }
        });

        $(sliderNext).on('click', function () {
          if (!overlayHorizontal.hasClass('deactive')) {
            overlayHorizontal.addClass('deactive');
            setTimeout(function () {
              overlayHorizontal.removeClass('deactive');
            }, 400);
          } else {
            overlayHorizontal.removeClass('deactive');
          }

        });
      });

      // 05 Circle
      $(context).parent().find('.brk-testimonials-circle:not(.rendered)').addClass('rendered').each(function () {
        var el = $(this),
          slider = el.children('.circle-slider'),
          pagination = el.children('.circle-pagination');

        var circle = new Swiper(slider, {
          init: false,
          spaceBetween: 0,
          speed: 800,
          parallax: true,
          pagination: {
            el: pagination,
            bulletClass: 'circle-pagination-bullet',
            bulletActiveClass: 'circle-pagination-bullet-active',
            clickable: true
          }
        });

        window.addEventListener("load", function () {
          circle.init();

          var objSlider = circle.slides,
            childSlider = objSlider.children('.brk-testimonials-circle__item'),
            bullet = pagination.children('.circle-pagination-bullet'),
            i = 0;
          childSlider.each(function () {
            var _d = $(this).data('img'),
              _b = bullet[i];
            $(_b).css('backgroundImage', 'url(' + _d + ')');
            i++;
          });
        });

      });

      // brk-sc-row-three
      $(context).parent().find('.brk-sc-row-three:not(.rendered)').addClass('rendered').each(function () {
        var el = $(this),
          slider = el.find('.swiper-container'),
          pagination = el.find('.brk-sc-row-three__pagination');

        var scRowThree = new Swiper(slider, {
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 800,
          autoplay: {
            delay: 5000
          },
          pagination: {
            el: pagination,
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">0' + (index + 1) + '</span>';
            }
          }
        });
      });

      // brk-sc-row-four
      $(context).parent().find('.brk-sc-row-four:not(.rendered)').addClass('rendered').each(function () {
        var el = $(this),
          slider = el.find('.swiper-container'),
          pagination = el.find('.brk-sc-row-four-pagination');

        var scRowThree = new Swiper(slider, {
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 1200,
          autoHeight: true,
          autoplay: {
            delay: 5000
          },
          pagination: {
            el: pagination,
            clickable: true,
            bulletClass: 'brk-sc-row-four-pagination-bullet',
            bulletActiveClass: 'brk-sc-row-four-pagination-bullet-active'
          }
        });
      });

      // Default
      $(context).parent().find('.brk-swiper-default:not(.rendered)').addClass('rendered').each(function () {
        var el = $(this),
          slider      = el.find('.swiper-container'),
          sliderNext  = el.find('.brk-swiper-default-nav-next'),
          sliderPrev  = el.find('.brk-swiper-default-nav-prev'),
          pagination  = el.find('.brk-swiper-default-pagination'),
          params      = el.data('brk-swiper') ? el.data('brk-swiper') : {};

        var defaults = {
          init: false,
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 1000,
          loop: true,
          autoHeight: true,
          autoplay: {
            delay: 3000
          },
          navigation: {
            nextEl: sliderNext,
            prevEl: sliderPrev
          },
          pagination: {
            el: pagination,
            clickable: true,
            bulletClass: 'brk-swiper-default-pagination-bullet',
            bulletActiveClass: 'brk-swiper-default-pagination-bullet-active'
          }
        };

        var options = $.extend({}, defaults, params);

        var brkDefaultSwiper = new Swiper(slider, options);

        window.addEventListener("load", function () {
          brkDefaultSwiper.init()
        })
      });

      // Thumbnailed full
      $(context).parent().find('.slider-thumbnailed-full:not(.rendered)').addClass('rendered').each(function () {
        var $this           = $(this),
          $slider_thumb_for = $this.find('.slider-thumbnailed-full-for'),
          $slider_thumb_nav = $this.find('.slider-thumbnailed-full-nav'),
          prev              = $this.find('.slider-thumbnailed-full-prev'),
          next              = $this.find('.slider-thumbnailed-full-next'),
          paramsFor         = $slider_thumb_for.data('brk-swiper') ? $slider_thumb_for.data('brk-swiper') : {},
          paramsNav         = $slider_thumb_nav.data('brk-swiper') ? $slider_thumb_nav.data('brk-swiper') : {};

        var defaultsNav = {
          init: false,
          spaceBetween: 6,
          slidesPerView: 5,
          loop: true,
          centeredSlides: true,
          loopedSlides: 5, //looped slides should be the same
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          breakpoints: {
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            }
          }
        },
          optionsNav = $.extend({}, defaultsNav, paramsNav);

        var galleryNav = new Swiper($slider_thumb_nav.find('.swiper-container'), optionsNav);

        var defaultsFor = {
          init: false,
          spaceBetween: 0,
          loop:true,
          speed: 800,
          effect: 'fade',
          loopedSlides: 5, //looped slides should be the same
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          thumbs: {
            swiper: galleryNav,
          },
          preloadImages: false,
          lazy: {
            loadPrevNext: true
          }
        },
          optionsFor = $.extend({}, defaultsFor, paramsFor);

        var galleryFor = new Swiper($slider_thumb_for, optionsFor);

        window.addEventListener('load', function () {
          galleryNav.init();
          galleryFor.init();
        })
      })
    }
  }

})(jQuery);