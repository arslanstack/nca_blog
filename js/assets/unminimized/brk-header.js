(function ($) {
  'use strict';

  Berserk.behaviors.header_init = {
    attach: function (context, settings) {

      /**
       * Global var
       */
      $(context).parent().find('.brk-header:not(.rendered)').addClass('rendered').each(function () {

        var header_one = $(this),
          main_bar = header_one.find('.brk-header__main-bar'),
          main_barData = main_bar.data('height-scroll'),
          widthDoc = 992,
          stickyHide = header_one.data('sticky-hide'),
          bodyWidth = $('body').width();

        /*if (header_one.hasClass('brk-header_not-fixed')) {
          var windowWidth = window.innerWidth || $(window).width();
          if (windowWidth > 992) {
            $('body').css('padding-top', main_bar.height());
          }
        }*/

        /**
         * Header TOP BAR
         */
        if ($('.brk-header__top-bar').length) {
          var top_bar = header_one.find('.brk-header__top-bar_hide'),
            top_bar_scroll = header_one.find('.brk-header__top-bar_scroll'),
            dataTop = header_one.find('.brk-header__top-bar').data('top');

          dataTop = dataTop ? dataTop : 0;

          var topBar = function (widthDoc) {
            var windowWidth = window.innerWidth || $(window).width();

            if (windowWidth >= widthDoc) {
              if (top_bar.length) {
                var h = top_bar.innerHeight() - dataTop;
                if($('body').hasClass('admin-bar')) {
                  var hNew = h - 32;
                  header_one.css('top', '-' + hNew + 'px');
                } else {
                  header_one.css('top', '-' + h + 'px');
                }
              }
            } else {
              header_one.css('top', '0');
            }
          };

          var topBarScroll = function (widthDoc) {
            if (stickyHide !== 1) {
              var windowWidth = window.innerWidth || $(window).width();

              if (windowWidth >= widthDoc) {
                if (top_bar_scroll.length) {
                  var hsc = top_bar_scroll.innerHeight() - dataTop;

                  if ($(window).scrollTop() > 0) {
                    if($('.brk-open-top-bar').length) {
                      header_one.find('.brk-open-top-bar').removeClass('active');
                    }

                    if($('body').hasClass('admin-bar')) {
                      var hNew = hsc - 32;
                      header_one.css('top', '-' + hNew + 'px');
                    } else {
                      header_one.css('top', '-' + hsc + 'px');
                    }
                  } else if ($(window).scrollTop() <= 0) {
                    if($('.brk-open-top-bar').length) {
                      header_one.find('.brk-open-top-bar').addClass('active');
                    }

                    if($('body').hasClass('admin-bar')) {
                      header_one.css('top', '32px');
                    } else {
                      header_one.css('top', '0');
                    }
                  }
                }
              } else {
                header_one.css('top', '0');
              }
            }
          };

          /* Init Function */
          setTimeout(function () {
            topBar(widthDoc)
          }, 2000);

          topBarScroll(widthDoc);

          $(window).on('resize scroll', function () {
            topBar(widthDoc);
            topBarScroll(widthDoc);
          });
        }

        if($('.brk-open-top-bar').length) {
          var openTopBar = header_one.find('.brk-open-top-bar');

          openTopBar.on('click', function () {
            openTopBar.toggleClass('active');
            header_one.toggleClass('top-bar-active');
          })
        }
        /**
         * End Header TOP BAR
         */

        /**
         * Header SCROLL
         */
        //if(header_one.not('.brk-header_vertical')[0]) {
        if (!!main_barData) {
          main_bar.data('height-temp', main_bar.height());
        }

        function headerScroll(widthDoc) {
          var windowWidth = window.innerWidth || $(window).width();

          if (!!main_barData) {
            var height_temp = main_bar.data('height-temp');
            //main_barHeightNew	= height_temp - main_barData;
          }

          if(!header_one.hasClass('brk-header_not-fixed')) {
            if (windowWidth >= widthDoc) {

              if ($(window).scrollTop() > 0) {
                header_one.addClass("brk-header_scroll");

                if (!!main_barData) {
                  main_bar.css('height', main_barData + 'px');
                }
              } else if ($(window).scrollTop() <= 0) {
                header_one.removeClass("brk-header_scroll");

                if (!!main_barData) {
                  main_bar.css('height', height_temp + 'px');
                }
              }
            }
          }

          /* Header scroll mobile */
          if ($(window).scrollTop() > 0) {
            $('.brk-header-mobile').addClass("brk-header-mobile_scroll");
          } else if ($(window).scrollTop() <= 0) {
            $('.brk-header-mobile').removeClass("brk-header-mobile_scroll");
          }
          /* End Header scroll mobile */
        }

        headerScroll(widthDoc);
        $(window).on('scroll', function () {
          headerScroll(widthDoc);
        });
        //}
        /**
         * End Header SCROLL
         */


        /**
         * Sticky Hide
         */
        if (stickyHide === 1) {
          var scrollPrev = 0;

          setTimeout(function () {
            $(window).on('scroll', function () {
              var scrolled = $(this).scrollTop(),
                firstScrollUp = false,
                firstScrollDown = false;

              if (scrolled > 0) {

                if (scrolled > scrollPrev) {
                  firstScrollUp = false;

                  if (scrolled < header_one.height() + header_one.offset().top) {
                    if (firstScrollDown === false) {
                      header_one.addClass('brk-header_sticky-hide');

                      firstScrollDown = true;
                    }
                  }
                } else {
                  firstScrollDown = false;

                  if (scrolled > header_one.offset().top) {
                    if (firstScrollUp === false) {
                      header_one.removeClass('brk-header_sticky-hide');

                      firstScrollUp = true;
                    }
                  }
                }
                scrollPrev = scrolled;
              }

            });
          }, 2500);
        }
        /**
         * End Sticky Hide
         */


        /**
         * brk-header-mobile
         */
        /**
         * Wrap: .brk-header-mobile-wrap
         * Wrap header: .brk-header-mobile-wrap__header
         * Wrap logo: .brk-header-mobile-wrap__logo
         * Wrap close: .brk-header-mobile-wrap__close
         */

        var fnlogic = false;

        function headerMobile(widthDoc) {
          var windowWidth = window.innerWidth || $(window).width(),
            wrapMobile = 'brk-header-mobile-wrap',
            wrapMobileBody = 'brk-header-mobile-wrap__body';

          if (windowWidth < widthDoc && !fnlogic) {

            header_one.wrap('<div class="' + wrapMobile + '"><div class="' + wrapMobileBody + '"></div></div>');

            var wrapMobileClass = $('.brk-header-mobile-wrap'),
              wrapMobileClassBody = $('.brk-header-mobile-wrap__body'),
              wrapMobileData = header_one.data('logo-src'),
              bgMobile = header_one.data('bg-mobile');

            wrapMobileClassBody.prepend('<div class="brk-before"></div><div class="brk-header-mobile-wrap__header">' +
              '<div class="brk-header-mobile-wrap__close"><span></span></div>' +
              '</div>');

            if (wrapMobileData !== '') {
              $('.brk-header-mobile-wrap__header').prepend('<div class="brk-header-mobile-wrap__logo"><img src="' + wrapMobileData + '" alt=""></div>')
            }
            if (bgMobile !== '' && bgMobile !== undefined) {
              wrapMobileClass.css('background-image', 'url(' + bgMobile + ')');
            }
            wrapMobileClass.before('<div class="brk-header-mobile-wrap-layer"></div>');

            /* ------------------- fnlogic ---------------------*/
            fnlogic = true;
          } else if (windowWidth >= widthDoc && fnlogic) {
            $('.brk-header-mobile-wrap__header').detach();
            $('.brk-header-mobile-wrap-layer').remove();

            $('.brk-before, .brk-header-mobile-wrap__header').remove();

            header_one.unwrap();
            header_one.unwrap();

            /* ------------------- fnlogic ---------------------*/
            fnlogic = false;
          }

          /* Open-Close menu mobile */
          var brkHeaderMobile = $('.brk-header-mobile'),
            brkHeaderMobileOpen = brkHeaderMobile.find('.brk-header-mobile__open'),
            wrapMobileClass = $('.brk-header-mobile-wrap'),
            brkHeaderMobileClose = wrapMobileClass.find('.brk-header-mobile-wrap__close'),
            mobileWrapLayer = $('.brk-header-mobile-wrap-layer');

          if (brkHeaderMobile.length) {
            brkHeaderMobileOpen.on('click', function () {
              $('body').addClass('modal-open');
              wrapMobileClass.addClass('is-active');
              mobileWrapLayer.addClass('is-active');
            });
          }

          if (wrapMobileClass.length) {
            brkHeaderMobileClose.on('click', function () {
              $('body').removeClass('modal-open');
              wrapMobileClass.removeClass('is-active');
              mobileWrapLayer.removeClass('is-active');
            })
          }
          /* Open-Close menu mobile */
        }

        headerMobile(widthDoc);

        $(window).on('resize', function () {
          headerMobile(widthDoc);
        });
        /**
         * End brk-header-mobile
         */

        /**
         * Mobile menu
         */
        var fnlogicMob = false;

        function mobileMenu(widthDoc) {
          var $brkNav = $('.brk-nav, .brk-header-popup-menu'),
            $brkNavChildren = $brkNav.find('.brk-nav__children'),
            $brkNavLi = $brkNav.find('.brk-nav__menu > li'),
            $link = $brkNavLi.children('a'),
            $linkHash = $brkNav.find('a'),
            windowWidth = window.innerWidth || $(window).width();

          if (windowWidth < widthDoc && !fnlogicMob) {
            $brkNavChildren.prepend('<div class="brk-nav__link-open"><i class="fa fa-angle-right"></i></div>');

            if ($('.brk-nav__link-open').length) {
              var $openLink = $('.brk-nav__link-open');

              if ($openLink.length > 0) {
                $openLink.on('click', function () {
                  var $this = $(this),
                    $parent = $this.parent(),
                    $thisDropDown = $parent.children('.brk-nav-drop-down');

                  $parent.toggleClass('children-active');
                  $this.toggleClass('is-active');
                  $thisDropDown.slideToggle(400);
                });
              }

              // linck #
              $link.each(function () {
                var $this = $(this),
                  $linkHref = $this.attr('href');

                if($linkHref !== '/') {
                  if (($linkHref[0] === '#' && $linkHref.length === 1) || $linkHref === 'javascript:void(0)' || !$linkHref.length) {
                    $this.on('click', function (e) {
                      
                      e.preventDefault();
                      var $this = $(this),
                        $parent = $this.parent(),
                        $thisDropDown = $parent.children('.brk-nav-drop-down'),
                        $linkOpen = $parent.children('.brk-nav__link-open');

                      $parent.toggleClass('children-active');
                      $linkOpen.toggleClass('is-active');
                      $thisDropDown.slideToggle(400);

                    })
                  }
                }

              });
            }

            $linkHash.each(function () {
              var $this = $(this),
                  $linkHref = $this.attr('href');

              if($linkHref[0] === '#') {
                $this.on('click', function (e) {
                  e.preventDefault();

                  if($($linkHref).length) {
                    var $this = $(this),
                      $linkParent = $this.parents('.brk-header-mobile-wrap');

                    /*$('html, body').animate({
                      scrollTop: $($linkHref).offset().top
                    }, 800, 'swing', function () {
                      window.location.hash = $linkHref;
                    });*/

                    $('body').removeClass('modal-open');
                    $linkParent.removeClass('is-active');
                    $('.brk-header-mobile-wrap-layer').removeClass('is-active');
                  }
                })
              }
            });

            /* fologicMob */
            fnlogicMob = true;
          } else if ($('.brk-nav__link-open').length > 0 && windowWidth >= widthDoc && fnlogicMob) {
            $('.brk-nav__link-open').remove();

            $brkNavChildren.removeClass('children-active');

            /* fologicMob */
            fnlogicMob = false;
          }

        }

        $(window).on('load', function () {
          mobileMenu(widthDoc);
        });

        $(window).on('resize', function () {
          mobileMenu(widthDoc);
        });

        /**
         * End Mobile menu
         */


        function dropDownEffect(e, s, d) {
          var e = (d === 'left') ? $(e.get().reverse()) : e,
            b = (d === 'left') ? {opacity: 0, left: 10} : {opacity: 0, left: -10};

          e.css(b).each(function (i) {
            $(this).delay(s * i).animate({opacity: 1, left: 0});
          });
        }

        $('.brk-nav__drop-down-effect').each(function () {
          var $this = $(this),
            $dd_effect = $this.find('.dd-effect');
          $this.on('mouseenter', function () {
            dropDownEffect($dd_effect, 10);
          });
        });

        /**
         * quantityProducts
         */
        (function quantityProducts() {
          $(".brk-quantity").find(".brk-quantity__arrows").on('click', function () {
            var calc = $(this).parent().find(".brk-quantity__value");
            var calcText = calc.val();
            if ($(this).hasClass("minus") && calcText > 1) {
              calc.val(+calcText - 1);
            } else if ($(this).hasClass("plus")) {
              calc.val(+calcText + 1);
            }
          });
        })();
        /**
         * End quantityProducts
         */

        /**
         * BRK info-menu
         */
        var infoMenu = $('.brk-info-menu'),
          infoMenuOpen = $('.brk-info-menu-open'),
          infoMenuClose = infoMenu.find('.brk-info-menu__close'),
          windowWidth = window.innerWidth || $(window).width();

        infoMenuOpen.on('click', function () {
          infoMenu.toggleClass('active');
          infoMenuOpen.toggleClass('open-active');
          if (windowWidth >= widthDoc) {
            $('body').toggleClass('modal-open');
          }

        });

        infoMenuClose.on('click', function () {
          if (infoMenu.hasClass('active')) {
            infoMenu.removeClass('active');
          }
          if (infoMenuOpen.hasClass('open-active')) {
            infoMenuOpen.removeClass('open-active');
          }
          if (windowWidth >= widthDoc) {
            if ($('body').hasClass('modal-open')) {
              $('body').removeClass('modal-open');
            }
          }
        });

        $(document).on('click', function (e) {
          if (!$(e.target).closest(".brk-info-menu").length && !$(e.target).closest(".brk-info-menu-open").length) {
            if (infoMenu.hasClass('active')) {
              infoMenu.removeClass('active');
            }
            if (infoMenuOpen.hasClass('open-active')) {
              infoMenuOpen.removeClass('open-active');
            }
            if (windowWidth >= widthDoc) {
              if ($('body').hasClass('modal-open')) {
                $('body').removeClass('modal-open');
              }
            }
          }
          e.stopPropagation();
        });

        /**
         * End BRK info-menu
         */


        /**
         * element mobile
         */
        function elementMobile(parentId, openEl, contentEl, widthDoc) {
          var parentId = $(parentId),
            openEl = parentId.find(openEl),
            contentEl = parentId.find(contentEl),
            windowWidth = window.innerWidth || $(window).width();

          if (windowWidth < widthDoc) {
            openEl.unbind('click').on('click', function () {
              contentEl.slideToggle(400);
            });
          } else if (windowWidth >= widthDoc) {
            openEl.unbind('click');
            contentEl.css('display', '');
          }
        }

        elementMobile('.brk-mini-cart', '.brk-mini-cart__open, .brk-mini-cart__info-open', '.brk-mini-cart__menu', widthDoc);
        elementMobile('.brk-social-links', '.brk-social-links__open', '.brk-social-links__block', widthDoc);
        elementMobile('.brk-search', '.brk-search__open', '.brk-search__block', widthDoc);

        $(window).on('resize', function () {
          elementMobile('.brk-mini-cart', '.brk-mini-cart__open, .brk-mini-cart__info-open', '.brk-mini-cart__menu', widthDoc);
          elementMobile('.brk-social-links', '.brk-social-links__open', '.brk-social-links__block', widthDoc);
          elementMobile('.brk-search', '.brk-search__open', '.brk-search__block', widthDoc);
        });
        /**
         * End element mobile
         */


        /**
         * brk-search
         */
        (function () {
          var windowWidth = window.innerWidth || $(window).width();

          if (windowWidth >= widthDoc) {
            $('.brk-search_interactive').each(function () {
              var $this = $(this),
                $parent = $this.parents('.brk-header__main-bar'),
                $container = $parent.children('.container-fluid, .container'),
                $open = $this.find('.brk-search__open'),
                $close = $this.find('.brk-search__close'),
                $block = $this.find('.brk-search__block'),
                $form = $block.find('[type="search"]'),
                $item = $parent.find('.brk-header__item:not(.brk-search_interactive)'),
                $col = $item.parents('[class*="col"]'),
                delay = 0;

              $open.on('click', function () {
                $block.addClass('active');
                $container.addClass('position-relative');
                $item.hide(delay);
                $(this).hide(delay);
                if (!$('div').is('.brk-overlay')) {
                  header_one.after('<div class="brk-overlay"></div>');
                }
                setTimeout(function () {
                  $form.focus();
                }, 150);
                $col.css('border', '0');
              });

              $close.on('click', function () {
                $block.removeClass('active');
                $item.show(delay);
                $open.show(delay);
                $container.removeClass('position-relative');
                if ($('div').is('.brk-overlay')) {
                  $('.brk-overlay').remove();
                }
                $col.css('border', '');
              });

              $(document).on('click', function (e) {
                if (!$(e.target).closest(".brk-header").length) {
                  $block.removeClass('active');
                  $item.show(delay);
                  $open.show(delay);
                  $container.removeClass('position-relative');
                  if ($('div').is('.brk-overlay')) {
                    $('.brk-overlay').remove();
                  }
                  $col.css('border', '');
                }
                e.stopPropagation();
              });
            });
          }
        })();
        /**
         * End brk-search
         */

        /**
         * brk-lang_interactive
         */
        function brkLangInt(widthDoc) {
          var windowWidth = window.innerWidth || $(window).width();

          if (windowWidth < widthDoc) {
            $('.brk-lang:not(.brk-lang-rendered)').addClass('brk-lang-rendered').each(function () {
              var $this = $(this),
                $open = $this.find('.brk-lang__open'),
                $option = $this.find('.brk-lang__option');

              $this.unbind();

              $open.on('click', function () {
                $option.slideToggle(300);
              })
            }).removeClass('brk-lang_interactive-rendered');

          } else if (windowWidth >= widthDoc) {
            $('.brk-lang_interactive:not(.brk-lang_interactive-rendered)').addClass('brk-lang_interactive-rendered').each(function () {
              var $this = $(this),
                $parent = $this.closest('.brk-header__top-bar, .brk-header__main-bar'),
                $container = $parent.find('.container-fluid, .container'),
                $item = $parent.find('.brk-header__item:not(.brk-lang_interactive)'),
                $col = $item.parents('[class*="col"]');

              $parent.css({'height': $parent.outerHeight(), 'transition': 'height .3s'});

              $this.on({
                mouseenter: function () {
                  $item.css('opacity', '0');
                  $container.css('background', 'transparent !important');
                  $parent.addClass('top-bar-bg');
                  if (!$('div').is('.brk-overlay')) {
                    header_one.after('<div class="brk-overlay"></div>');
                  }
                  $col.css('border', '0');
                },
                mouseleave: function () {
                  $item.css('opacity', '1');
                  $container.removeAttr('style');
                  $parent.removeClass('top-bar-bg');
                  if ($('div').is('.brk-overlay')) {
                    $('.brk-overlay').remove();
                  }
                  $col.css('border', '');
                }
              });

            }).removeClass('brk-lang-rendered');
            $('.brk-lang__option').css('display', '');

            $('.brk-lang').find('.brk-lang__open').unbind('click');
          }
        }

        window.addEventListener('load', function () {
          brkLangInt(widthDoc)
        });

        $(window).on('resize', function () {
          brkLangInt(widthDoc)
        });
        /**
         * End brk-lang_interactive
         */

        /**
         * brk-header-popup-menu
         */
        (function () {
          if ($('.brk-header-popup-menu').length > 0) {
            //$('body').append('<div class="brk-header-popup-menu-layer"></div>');
            header_one.after('<div class="brk-header-popup-menu-layer"></div>');

            var $popuMenu = $('.brk-header-popup-menu'),
              $openClose = $popuMenu.find('.brk-header-popup-menu__open-close'),
              $menu = $('.brk-header-popup-menu__menu'),
              $layer = $('.brk-header-popup-menu-layer'),
              $menuLink = $menu.find('a');

            if ($('.brk-header_vertical').length > 0) {
              $('.brk-header').append($menu);
              $menu.addClass('brk-moved-by-js');
            }

            $openClose.on('click', function () {
              var $this = $(this);

              $this.toggleClass('is-active');
              $menu.fadeToggle(300);
              $layer.fadeToggle(500);
            });

            $layer.on('click', function () {
              var $this = $(this);

              $openClose.toggleClass('is-active');
              $menu.fadeToggle(300);
              $this.fadeToggle(500);
            });

            $menuLink.each(function () {
              var $this = $(this),
                  $linkHref = $this.attr('href');

              if($linkHref[0] === '#' && $linkHref.length > 1 && $($linkHref).length) {
                $menuLink.on('click', function () {
                  $openClose.removeClass('is-active');
                  $menu.fadeOut(300);
                  $layer.fadeOut(500);
                })
              }
            })

          }
        })();
        /**
         * End brk-header-popup-menu
         */

        $('.brk-totop').on('click', function () {
          $('html, body').stop().animate({scrollTop: 0}, 500);
        });

        function locationScreen() {
          var windowWidth = window.innerWidth || $(window).width();
          if (windowWidth < 992) {return}

          var brk_element_header = '.brk-mini-cart, .brk-social-links, .brk-search, .brk-lang, .brk-nav__sub-menu, .flexMenu-popup';
          $(brk_element_header).each(function () {
            var $this = $(this),
              widthOffset = (windowWidth / 2) + 350,
              offset = $this.offset().left + ($this.width()/2);

            if (offset < widthOffset) {
              $this.removeClass('brk-location-screen-left brk-location-screen-right').addClass('brk-location-screen-left');
            } else {
              $this.removeClass('brk-location-screen-left brk-location-screen-right').addClass('brk-location-screen-right');
            }
          });
        }

        locationScreen();

        $(window).on('load resize', function () {
          setTimeout(function () {
            locationScreen();
          }, 300)
        });
        /**
         * END location on the screen
         */

      });

    }
  };

  Berserk.behaviors.header_init_menu_flex = {
    attach: function (context, settings) {

      if($('.brk-nav:not(.rendered)').length < 1) {
        return;
      }

      if (typeof $.fn.flexMenu !== 'function') {
        console.log('Waiting for the flexMenu library');
        setTimeout(Berserk.behaviors.header_init_menu_flex.attach, settings.timeout_delay, context, settings);
        return;
      }

      var fnlogic_flexmenu = true;
      function initFlexMenu(brkNavMenu, linkText) {
        var windowWidth = window.innerWidth || $(window).width(),
            widthDoc    = 992;

        if (windowWidth < widthDoc && !fnlogic_flexmenu) {

          brkNavMenu.flexMenu({
            undo: true
          });

          /* ------------------- fnlogic_flexmenu ---------------------*/
          fnlogic_flexmenu = true;
        } else if (windowWidth >= widthDoc && fnlogic_flexmenu) {

          brkNavMenu.flexMenu({
            linkText: linkText
          });

          setTimeout(function () {
            if($('.flexMenu-viewMore').length) {
              var offset          = $('.flexMenu-popup').offset().left + 80,
                brkNavMegaMenu  = brkNavMenu.find('.flexMenu-viewMore .brk-nav__mega-menu');

              brkNavMegaMenu.attr('style', 'width: calc(100vw - ' + offset + 'px)')
            }
          }, 500);

          /* ------------------- fnlogic_flexmenu ---------------------*/
          fnlogic_flexmenu = false;
        }
      }

      $(context).parent().find('.brk-nav:not(.rendered)').addClass('rendered').each(function () {
        var $this           = $(this),
          brkNavMenu      = $this.find('.brk-nav__menu'),
          linkText        = $this.data('flexmenu-link-text'),
          navParent       = $this.closest('.brk-header_vertical');

        if(navParent.length === 0) {
          linkText = linkText ? linkText : 'More';

          $(window).on('load resize', function () {
            initFlexMenu(brkNavMenu, linkText);
          })
        }
      })
    }
  }

})(jQuery);