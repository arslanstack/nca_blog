(function ($) {
  'use strict';

  Berserk.behaviors.tabs_init = {
    attach: function (context, settings) {

      function setSlickPosition(slider) {
        setTimeout(function () {
          slider.slick("setPosition", 0);
        }, 200)
      }

      $('.brk-tabs:not(.rendered)', context).addClass('rendered').each(function () {
        if (!$(this).hasClass('brk-tabs-hovers')) {
          var _ = $(this),
            tab = _.find('.brk-tab'),
            tabItem = _.find('.brk-tab-item'),
            index = _.data('index'),
            hash = _.data('hash'),
            tabIndex = window.location.hash;

          index = index ? index : 0;

          $(window).on('load', function () {
            tabItem.hide().eq(index).fadeIn();
          });

          tab.on('click', function () {
            $(this).addClass('active').siblings('.active').removeClass('active no-hover');
            tabItem.hide().eq($(this).index()).fadeIn();
                        
            var sliders = tabItem.eq($(this).index()).find(".slick-slider");
            if(sliders.length){
              sliders.each(function () {
                var _this = $(this);
                setSlickPosition(_this);
              })
            }
            
          }).eq(index).addClass("active");

        } else {

          var _ = $(this),
            tabsNav = _.find('.brk-tabs-nav'),
            tab = _.find('.brk-tab'),
            tabItem = _.find('.brk-tab-item'),
            index = _.data('index'),
            headerStyle_1 = _.closest('.brk-header_style-1'),
            headerStyle_2 = _.closest('.brk-header_style-2'),
            headerStyle_3 = _.closest('.brk-header_style-3');

          index = index ? index : 0;

          if (headerStyle_1[0]) {
            _.addClass('brk-tabs-hovers_style-1');
          } else if (headerStyle_2[0]) {
            _.addClass('brk-tabs-hovers_style-2')
          } else if (headerStyle_3[0]) {
            _.addClass('brk-tabs-hovers_style-3')
          }

          if (headerStyle_1[0]) {
            tabsNav.append('<div class="brk-tabs-hovers__duplicate-icon"></div>');
          }

          $(window).on('load', function () {
            tabItem.hide().eq(index).fadeIn();
            tab.eq(index).addClass('current');
          });

          if (headerStyle_1[0]) {
            var currentTab = _.find('.current'),
              icon = currentTab.children('[class*="fa-"]'),
              duplicateIcon = tabsNav.find('.brk-tabs-hovers__duplicate-icon');

            icon.clone().appendTo(duplicateIcon);
          }


          var tabHover = function(widthDoc) {
            var windowWidth = window.innerWidth || $(window).width();

            if (windowWidth < widthDoc) {

              tab.on('click', function () {
                var $this = $(this),
                  $icon = $this.children('[class*="fa-"]');

                if (headerStyle_1[0]) {
                  duplicateIcon.empty();
                  $icon.clone().appendTo(duplicateIcon);
                }

                if (!$this.hasClass('current')) {
                  tab.removeClass('current').eq($(this).index()).addClass('current');
                  tabItem.hide().eq($(this).index()).fadeIn();
                }
              }).unbind('mouseenter');

            } else if (windowWidth >= widthDoc) {

              tab.on('mouseenter', function () {
                var $this = $(this),
                  $icon = $this.children('[class*="fa-"]');

                if (headerStyle_1[0]) {
                  duplicateIcon.empty();
                  $icon.clone().appendTo(duplicateIcon);
                }

                if (!$this.hasClass('current')) {
                  tab.removeClass('current').eq($(this).index()).addClass('current');
                  tabItem.hide().eq($(this).index()).fadeIn();
                }
              }).unbind('click');

            }
          };

          tabHover(992);

          $(window).on('resize', function () {
            tabHover(992);
          });


          /*$(this).on('mouseleave', function () {
            tab.removeClass('current').eq(index).addClass('current');
            item.hide().eq(index).fadeIn();
          });*/
        }

        if ($(this).hasClass('brk-tabs-simple-top') || $(this).hasClass('brk-tabs-simple-bottom') || $(this).hasClass('brk-tabs-bottom-top') || $(this).hasClass('brk-tabs-bottom-bottom') || $(this).hasClass('brk-tabs-parallax') || $(this).hasClass('brk-tabs_tabbed-filter')) {

          var _ = $(this),
            nav = _.find('.brk-tabs-nav'),
            tab = _.find('.brk-tab'),
            tabActive = _.find('.brk-tab.active');
          nav.append("<span class='magic-line'></span>");

          var magicLine = _.find(".magic-line");

          window.addEventListener('load', function () {
            setTimeout(function () {
              magicLineFunc(magicLine, tabActive)
            }, 500)
          });

          $(window).on('resize', function () {
            magicLineFunc(magicLine, tabActive);
          });

          tab.on('click', function () {
            if (tab.hasClass('active')) {
              var tabActive = _.find('.brk-tab.active');
              magicLine
                .width(tabActive.innerWidth())
                .css("left", tabActive.position().left)
                .data("origLeft", magicLine.position().left)
                .data("origWidth", magicLine.innerWidth());
            }
          });

          tab.on({
            mouseenter: function () {
              var el = $(this);
              var leftPos = el.position().left;
              var newWidth = el.innerWidth();

              magicLine.stop().animate({
                left: leftPos,
                width: newWidth
              });

              var tabActive = _.find('.brk-tab.active');
              if (el.hasClass('active') === false) {
                tabActive.addClass('no-hover');
              }
            },
            mouseleave: function () {
              magicLine.stop().animate({
                left: magicLine.data("origLeft"),
                width: magicLine.data("origWidth")
              });
              var tabActive = _.find('.brk-tab.active');
              tabActive.removeClass('no-hover');
            }
          });

        }

      });

      function magicLineFunc(magicLine, tabActive) {
        magicLine
          .width(tabActive.innerWidth())
          .css("left", tabActive.position().left)
          .data("origLeft", magicLine.position().left)
          .data("origWidth", magicLine.innerWidth());
      }

    }
  };


  Berserk.behaviors.tabs_slider_init = {
    attach: function (context, settings) {

      if ($('.brk-slider').length) {

        if (typeof $.fn.slick === 'undefined') {
          console.log('Waiting for the slick library');
          setTimeout(Berserk.behaviors.tabs_slider_init.attach, settings.timeout_delay, context, settings);
          return;
        }

        $(context).parent().find('.brk-slider:not(.rendered)').addClass('rendered').each(function () {
          var container   = $(this),
            carousel      = container.find('.brk-slider__items'),
            prev          = $(this).find('.brk-slider__prev'),
            next          = $(this).find('.brk-slider__next'),
            sliderControl = container.find('.brk-slider__control');

          carousel.on('init', function (event, slick, currentSlide, nextSlide) {
            var slider = $(this);
            prev.on('click', function () {
              slider.slick('slickPrev')
            });
            next.on('click', function () {
              slider.slick('slickNext')
            });
          });

          carousel.on('init reInit', function(event, slick, currentSlide, nextSlide){
            if(slick.slideCount <= slick.options.slidesToShow) {
              sliderControl.remove();
              sliderControl = '';
            }
          });

          carousel.slick({
            appendDots: sliderControl,
            responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2
                }
              }
            ]
          });
        })

      }
    }
  }

})(jQuery);