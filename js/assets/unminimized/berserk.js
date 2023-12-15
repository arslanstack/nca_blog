'use strict';

var Berserk = Berserk || {'settings': {timeout_delay: 200}, 'behaviors': {}};

var brk_xmode = false;
// Put your google maps api key here
Berserk.settings.gmap_api_key = typeof brk !== 'undefined' && typeof brk.gmap_api_key !== 'undefined' ? brk.gmap_api_key : "AIzaSyDEE4w3qmvL1fF91KiHhySPYZNiULI0YRo";
// Put your Re-Captcha key here
Berserk.settings.recaptcha_api_key = typeof brk !== 'undefined' && typeof brk.recaptcha_api_key !== 'undefined' ? brk.recaptcha_api_key : "6Lfsu3QUAAAAAO6j2iAsncliNSQqISfipl0DjPAp";
// Advanced: If your real project path is different then in the URL
Berserk.settings.project_prefix = typeof brk !== 'undefined' && typeof brk.shorcodesurl !== 'undefined' ? brk.shorcodesurl : '';


// Allow other JavaScript libraries to use $.
jQuery.noConflict();

window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.expand = 500;

function isSafari() {
  var ua = window.navigator.userAgent;
  var iOS = !!ua.match(/iP(ad|od|hone)/i);
  var hasSafariInUa = !!ua.match(/Safari/i);
  var noOtherBrowsersInUa = !ua.match(/Chrome|CriOS|OPiOS|mercury|FxiOS|Firefox/i);
  var result = false;
  if(iOS) { //detecting Safari in IOS mobile browsers
    var webkit = !!ua.match(/WebKit/i);
    result = webkit && hasSafariInUa && noOtherBrowsersInUa
  } else if(window.safari !== undefined){ //detecting Safari in Desktop Browsers
    result = true;
  } else { // detecting Safari in other platforms
    result = hasSafariInUa && noOtherBrowsersInUa
  }
  return result;
}


/* RTL Detect */
(function () {
  if(!brk_xmode) {
    var brkDirectionBootstrap = document.getElementById('brk-direction-bootstrap'),
        brkDirectionOffsets   = document.getElementById('brk-direction-offsets'),
        revSlider             = document.getElementsByClassName('rev_slider_wrapper');

    if (location.search.indexOf('dir=rtl') + 1) {
      document.documentElement.setAttribute('dir', 'rtl');

      brkDirectionBootstrap.setAttribute('href', 'css/assets/bootstrap-rtl.css');
      brkDirectionOffsets.setAttribute('href', 'css/assets/offsets-rtl.css');

      if(revSlider.length){
        revSlider[0].style.direction = 'ltr';
      }
    } else if(location.search.indexOf('dir=ltr') + 1) {
      document.documentElement.setAttribute('dir', 'ltr');

      brkDirectionBootstrap.setAttribute('href', 'css/assets/bootstrap.css');
      brkDirectionOffsets.setAttribute('href', 'css/assets/offsets.css');
    }
  }
})();
/* End RTL Detect */

(function ($) {

  if(isSafari()) {
    $('html').addClass('brk-safari')
  }

  jQuery.cachedScript = function (url, options) {

    // Allow user to set any option except for dataType, cache, and url
    options = $.extend(options || {}, {
      crossDomain: true,
      dataType: "script",
      cache: true,
      url: url
    });

    // Use $.ajax() since it is more flexible than $.getScript
    // Return the jqXHR object so we can chain callbacks
    return jQuery.ajax(options);
  };

  /*
  * Behaviors engine
  */
  Berserk.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || Berserk.settings;
    // Execute all of them.
    $.each(Berserk.behaviors, function () {
      if ($.isFunction(this.attach)) {
        this.attach(context, settings);
      }
    });
  };


  /*
  * Attach all behaviors.
  */
  $(function () {

    // Run behaviors, because some scripts is already in the scripts.js and they should be runned
    Berserk.attachBehaviors($('body'), Berserk.settings);
    // Add all libraries to the page, the behaviors also will be runned for each script
    brs_add_libraries();

    $(document).on('trigger-behaviors', function (e) {
      Berserk.attachBehaviors($('.trigger-behaviors'), Berserk.settings);
      $('.trigger-behaviors').removeClass('trigger-behaviors');
    });

  });

  // Google Fonts async
  $(function () {

    var fonts = {
      '.font__family-oxygen': 'Oxygen:300,400,700',
      '.font__family-montserrat': 'Montserrat:100,200,300,400,500,600,700',
      '.font__family-open-sans': 'Open+Sans:200,300,400,600,700',
      '.font__family-playfair': 'Playfair+Display:400,400i,700',
      '.font__family-roboto': 'Roboto:100,300,400,700',
      '.font__family-roboto-slab': 'Roboto+Slab:100,300,400,700',
      '.font__family-poppins': 'Poppins:100,200,300,400,600,700',
      '.font__family-pacifico': 'Pacifico:300,400,700',
      '.font__family-montserrat-alt': 'Montserrat+Alternates:400,700'
    };

    var fontValue = [],
      i = 0;
    $.each(fonts, function (index, value) {
      if ($(index).length) {
        fontValue[i] = value;
        i++;
      }
    });

    var strFont = fontValue.join('|');
    $('head').append('<link id = "css-google-fonts" href="https://fonts.googleapis.com/css?family=' + strFont + '" rel="stylesheet">');
  });

  // variables
  var $html = $('html'),
    $document = $(document),
    $window = $(window),
    i = 0;
  
  $.fn.isOnScreen = function (test) {
    var height = this.outerHeight();
    var width = this.outerWidth();
    if (!width || !height) {
      return false;
    }

    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    var showing = {
      top: viewport.bottom - bounds.top,
      left: viewport.right - bounds.left,
      bottom: bounds.bottom - viewport.top,
      right: bounds.right - viewport.left
    };

    /*        if (showing.top > 0 && showing.left > 0 && showing.right > 0 && showing.bottom > 0){
     $(this).trigger('inscreen');
     }else{
     $(this).trigger('outscreen');
     }*/

    if (typeof test == 'function') {
      return test(showing);
    }

    return showing.top - height > 0 &&
      showing.left > 0 &&
      showing.right > 0 &&
      showing.bottom - height > 0;
  };
  $.fn.isAppearOnScreen = function (test) {
    var height = this.outerHeight();
    var width = this.outerWidth();
    if (!width || !height) {
      return false;
    }

    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    var showing = {
      top: viewport.bottom - bounds.top,
      left: viewport.right - bounds.left,
      bottom: bounds.bottom - viewport.top,
      right: bounds.right - viewport.left
    };

    /*        if (showing.top > 0 && showing.left > 0 && showing.right > 0 && showing.bottom > 0){
     $(this).trigger('inscreen');
     }else{
     $(this).trigger('outscreen');
     }*/

    if (typeof test == 'function') {
      return test(showing);
    }

    return showing.top > 0 &&
      showing.left > 0 &&
      showing.right > 0 &&
      showing.bottom > 0;
  };
  $.fn.rotate = function (degrees) {
    $(this).css({
      '-webkit-transform': 'rotate(' + degrees + 'deg)',
      '-moz-transform': 'rotate(' + degrees + 'deg)',
      '-ms-transform': 'rotate(' + degrees + 'deg)',
      'transform': 'rotate(' + degrees + 'deg)'
    });
    return $(this);
  };
  $.fn.setGradientBackground = function (color) {
    if (color.end) {
      $(this).css({
        'background': color.start,
        'background': '-moz-linear-gradient(top, ' + color.start + ' 0%, ' + color.end + ' 100%)',
        'background': '-webkit-gradient(left top, left bottom, color-stop(0%, ' + color.start + '), color-stop(100%, ' + color.end + '))',
        'background': '-webkit-linear-gradient(top, ' + color.start + ' 0%, ' + color.end + ' 100%)',
        'background': '-o-linear-gradient(top, ' + color.start + ' 0%, ' + color.end + ' 100%)',
        'background': '-ms-linear-gradient(top, ' + color.start + ' 0%, ' + color.end + ' 100%)',
        'background': 'linear-gradient(to bottom, ' + color.start + ' 0%, ' + color.end + ' 100%)',
        'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr=' + color.start + ', endColorstr=' + color.end + ', GradientType=0 )'
      });
    } else {
      $(this).css({
        'background': color.start
      });
    }
    return $(this);
  };
  $.fn.addClassDelay = function (className, delay, condition) {
    condition = typeof condition != "undefined" ? condition : true;
    //console.log(condition);
    $(this).each(function (i) {
      if (condition) {
        $(this).delay(i * delay).queue(function (next) {
          $(this).addClass(className);
          next();
        });
      }
    });
  };

  /**
   * location on the screen
   */

  var icon__wrap_main = $(".active__effect-main");
  if (icon__wrap_main.length) {
    icon__wrap_main.each(function () {
      var icon__wrap = $(this).find(".active__effect");
      var icon__wrap_act = $(this).find(".active");
      icon__wrap.on("mouseenter", function () {
        icon__wrap.removeClass("current");
        icon__wrap.trigger("hover");
      });
      $(".active__effect-main").on("mouseleave", function () {
        icon__wrap.removeClass("current");
        icon__wrap_act.addClass("current");
      });
    });
  }

  window.addEventListener("load", function() {
    // Scroll to anchor
    $("a:not(.nohash-animat)").on('click', function (event) {
      var $href = $(this).attr('href');
      if (this.hash !== "" &&
        this.hash !== "#top" &&
        this.getAttribute("data-toggle") !== "collapse" &&
        this.getAttribute("data-toggle") !== "tab" &&
        !$(this).hasClass('fancybox') &&
        !$(this).parent().parent().get(0).getAttribute("data-tabgroup") &&
        $href[0] === '#'
      ) {
        event.preventDefault();
        var hash = this.hash;
        if($(hash).length) {
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, 'swing', function () {
            window.location.hash = hash;
          });
        }
      }
    });
    if(window.location.hash) { 
      window.scrollTo(0,0);
      setTimeout(function() {
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top
        }, 800, 'swing');
      }, 800)
    }
  });

  // Scroll to top
  Berserk.behaviors.smooth_scroll_top = {
    attach: function (context, settings) {
      var top_show = 150,
        delay = 300,
        toTop = $('a[href="#top"]');

      toTop.each(function () {
        var $this = $(this);

        $(window).on('scroll', function () {
          if($this.is('[id="toTop"]')) {
            if ($(this).scrollTop() > top_show) $this.fadeIn();
            else $this.fadeOut();
          }
        });
        $this.on('click', function () {
          $('body, html').animate({
            scrollTop: 0
          }, delay);
          return false;
        });
      })
    }
  };

  // Bordered theme
  Berserk.behaviors.border_theme_init = {
    attach: function (context, settings) {
      if ($('body').hasClass('brk-bordered-theme')) {
        $(':root').attr('style',  '--b-radius: ' + $('body').attr('data-border') + 'px;');
      } else {
        $(':root').attr('style',  '--b-radius:;');
      }
    }
  };

  // Jquery Counter
  Berserk.behaviors.counter_lib_init = {
    attach: function (context, settings) {
      (function (b) {
        b.fn.counter = function (a) {
          function d(b, e, c) {
            var f = parseInt(b.html(), 10) + e;
            f >= c ? (b.html(Math.round(c)), a.callback()) : (b.html(Math.round(f)), setTimeout(function () {
              d(b, e, c)
            }, a.step))
          }

          a = b.extend({
            start: 0,
            end: 10,
            time: 10,
            step: 1E3,
            callback: function () {
            }
          }, a);
          var g = b(this);
          b(this).html(Math.round(a.start));
          var h = (a.end - a.start) / (1E3 / a.step * a.time);
          setTimeout(function () {
            d(g, h, a.end)
          }, a.step)
        }
      })(jQuery);
    }
  };
  // jQuery counter end

  // WOW init
  $(document).ready(function () {
  if (typeof(WOW) !== 'undefined') {
    var wow = new WOW();
      wow.init();
    }
  });
  // WOW init end

  // Fancy box 
  Berserk.behaviors.fancybox_init = {
    attach: function (context, settings) {

      if($('.fancybox:not(.rendered), .fancybox-media:not(.rendered)').length < 1) {
        return;
      }

      // If element is lazyloaded but library still loading, then wait a little
      if (typeof $.fn.fancybox === 'undefined') {
        console.log('Waiting for the fancybox library');
        setTimeout(Berserk.behaviors.fancybox_init.attach, 200, context, settings);
        return;
      }

      var fancybox = $('.fancybox:not(.rendered)', context);
      var fancybox_media = $('.fancybox-media:not(.rendered)', context);

      if (fancybox.length) {
        fancybox.fancybox({
          openEffect: 'elastic',
          closeEffect: 'elastic'
        }).addClass('rendered');
      }

      if (fancybox_media.length) {
        fancybox_media.fancybox({
          openEffect: 'fade',
          closeEffect: 'fade',
          helpers: {
            media: {}
          }
        }).addClass('rendered');
      }
    }
  };
  // Fancy box end


  // scrollbar-inner
  Berserk.behaviors.scrollbar_init = {
    attach: function (context, settings) {

      $(context).parent().find('.scrollbar-inner:not(.rendered)').addClass('rendered').each(function () {
        if ($(this).length) {
          // If element is lazyloaded but library still loading, then wait a little
          if (typeof $.fn.scrollbar === 'undefined') {
            console.log('Waiting for the scrollbar library');
            setTimeout(Berserk.behaviors.scrollbar_init.attach, 200, context, settings);
            return;
          }

          $(this).scrollbar();
        }
      });

    }
  };
  // end scrollbar-inner

  // =================================================================================
  // UIToTop
  // =================================================================================
  if (typeof $.UItoTop === 'function') {
    $().UItoTop({
      text: '',
      min: 200,
      inDelay: 0,
      outDelay: 0
    });
  }
  // UIToTop end

  var adds = {
      'css': {},
      'js': {}
  },
  brk_added_libraries = {},
  uniqueUrls = {
    // CSS
    "css/assets/brk-header-elements.css": true,
    "css/components/theme-options.css": true,
    "css/components/accordions.css": true,
    "css/components/tabs.css": true,
    "css/components/buttons.css": true,
    "css/components/pricing-tables.css": true,
    "css/components/testimonials.css": true,
    "css/components/CFA.css": true,
    "css/components/form-controls.css": true,
    "css/components/flip-boxes.css": true,
    "css/components/elements.css": true,
    "css/components/titles.css": true,
    "vendor/fancybox/css/jquery.fancybox.min.css": true,
    // JS
    "js/assets/brk-customizer.js": true,
    "js/assets/brk-header.js": true,
    "js/components/accordions.js": true,
    "js/components/tabs.js": true,
    "js/components/buttons.js": true,
    "js/components/form-controls.js": true,
    "vendor/formStyler/js/jquery.formstyler.min.js": true,
    // TEST
    "css/components/footer.css": true,
    "css/components/image-map.css": true,
    "css/components/media-embeds.css": true,
    // TEST JS
    "js/components/media-embeds.js": true,
    "js/components/image-map.js": true,
    "js/components/footer.js": true,
    "js/components/portfolio-masonry.js": true,
    "js/components/progress-bars.js": true,
    "js/components/portfolio-rows.js": true,
    "js/components/steps.js": true,
    "js/components/parallax-video.js": true,
    "js/components/counter.js": true,
    "js/components/sliders.js": true,
    "js/components/breadcrumbs.js": true,
    "js/components/info-box.js": true,
    "js/components/shop-components-tiles.js": true,
    "js/components/blog-page.js": true,
  },
  lazyUrls = {
    "component__map": {
      "js": [
        "https://maps.googleapis.com/maps/api/js?key=" + Berserk.settings.gmap_api_key,
        "js/components/google-maps.js"
      ]
    },
    "twitter_init": {
      "js": [
        "js/assets/twitter-init.js"
      ]
    },
    "recaptcha": {
      "js": [
        "https://www.google.com/recaptcha/api.js?render=" + Berserk.settings.recaptcha_api_key,
        "js/assets/recaptcha.js"
      ]
    }
  },
  uniqueLazyUrls = {};

  // Attach lazyload
  function brk_lazyload() {
    $.each(lazyUrls, function (i, v) {
      $('[data-brk-library*="' + i + '"]:not(.lazyloaded):not(.lazyload)').addClass('lazyload');
    });
  }

  $(document).ready(function() {
    brk_lazyload();
  });

  function brs_add_libraries_lazy(data_library) {
    var required_libs = data_library.split(','), prefix = '';

    for(var j in required_libs) {
      if(lazyUrls[required_libs[j]]) {


        if(typeof lazyUrls[required_libs[j]].js !== 'undefined') {

          for(var i in lazyUrls[required_libs[j]].js) {
            if(!uniqueLazyUrls[lazyUrls[required_libs[j]].js[i]]) {
              uniqueLazyUrls[lazyUrls[required_libs[j]].js[i]] = true;

              prefix = Berserk.settings.project_prefix && lazyUrls[required_libs[j]].js[i].indexOf('//') === -1 ? Berserk.settings.project_prefix : '';
              console.log('JS added: ' + prefix + lazyUrls[required_libs[j]].js[i]);
              $.cachedScript(prefix + lazyUrls[required_libs[j]].js[i]).done(function (script, textStatus) {
                Berserk.attachBehaviors($('body'), Berserk.settings);
              });
            }
          }
        }

        if(typeof lazyUrls[required_libs[j]].css !== 'undefined') {
          for(i in lazyUrls[required_libs[j]].css) {
            if(!uniqueLazyUrls[lazyUrls[required_libs[j]].css[i]]) {
              uniqueLazyUrls[lazyUrls[required_libs[j]].css[i]] = true;

              prefix = Berserk.settings.project_prefix && lazyUrls[required_libs[j]].css[i].indexOf('//') === -1 ? Berserk.settings.project_prefix : '';
              console.log('CSS added: ' + prefix + lazyUrls[required_libs[j]].css[i]);
              $('head').append('<link rel="stylesheet"  href="' + prefix + lazyUrls[required_libs[j]].css[i] + '">');
            }
          }
        }

      }
    }
  }

  addEventListener('lazybeforeunveil', function(e){
    var library = e.target.getAttribute('data-brk-library');
    if (library) {
      brs_add_libraries_lazy(library)
    }
  });

  /*
  Test this method for novi project - force lazyload-libraries to loads immediatly without lazyload script
  $(document).ready(function() {
    if (typeof window.lazySizes !== 'undefined') {
      $('[data-brk-library]').each(function() {
        brs_add_libraries_lazy($(this).data('brk-library'));
      });
    }  
  });
  */

  function brs_add_libraries_enqueue(library) {
    if (typeof libraries[library] == 'undefined') {
      return;
    }
    if (typeof libraries[library].dependency !== 'undefined') {
      for (i in libraries[library].dependency) {
        if (typeof brk_added_libraries[libraries[library].dependency[i]] === 'undefined') {
          brk_added_libraries[libraries[library].dependency[i]] = 1;
          brs_add_libraries_enqueue(libraries[library].dependency[i]);
        }
      }
    }
    if (typeof libraries[library].css !== 'undefined') {
      for (i in libraries[library].css) {
        if (!uniqueUrls[libraries[library].css[i]]) {
          uniqueUrls[libraries[library].css[i]] = true;
          adds.css[libraries[library].css[i]] = libraries[library].css[i];
        }
      }
    }
    if (typeof libraries[library].js !== 'undefined') {
      for (i in libraries[library].js) {
        if (!uniqueUrls[libraries[library].js[i]]) {
          uniqueUrls[libraries[library].js[i]] = true;
          adds.js[libraries[library].js[i]] = libraries[library].js[i];
        }
      }
    }
  }

  function brs_add_libraries() {
    $('[data-brk-library]:not(.brk-library-rendered)').addClass('brk-library-rendered').each(function () {
      // Support for multiple libraries devided by comma
      var required_libs = $(this).data('brk-library').split(',');
      for (i in required_libs) {
        if (typeof brk_added_libraries[required_libs[i]] === 'undefined') {
          brk_added_libraries[required_libs[i]] = 1;
          brs_add_libraries_enqueue(required_libs[i]);
        }
      }
    });

    if (Object.keys(adds.css).length) {
      var css   = '',
        addClass = '',
        prefix = '';
      if (brk_xmode) {
        addClass = 'class="brk-css-add" '
      }

      for (i in adds.css) {
        prefix = Berserk.settings.project_prefix && adds.css[i].indexOf('//') === -1 ? Berserk.settings.project_prefix : '';
        console.log('CSS added: ' + prefix + adds.css[i]);
        css += '<link ' + addClass + 'rel="stylesheet"  href="' + prefix + adds.css[i] + '">';
      }
      $('head').append(css);
    }

    if (Object.keys(adds.js).length) {
      var loaded_js = 0;
      for (i in adds.js) {
        prefix = Berserk.settings.project_prefix && adds.js[i].indexOf('//') === -1 ? Berserk.settings.project_prefix : '';
        console.log('JS added: ' + prefix + adds.js[i]);
        $.cachedScript(prefix + adds.js[i]).done(function (script, textStatus) {
          loaded_js = loaded_js + 1;
          if (Object.keys(adds.js).length === loaded_js) {
            Berserk.attachBehaviors($('body'), Berserk.settings);
            // Clear all global elements - prepear for next calls
            adds = {
              'css': {},
              'js': {}
            };
          }
        });

      }
    }
  }


  var libraries = {
    "font_awesome__5": {
      "js": [
        "//use.fontawesome.com/releases/v5.0.1/js/all.js"
      ]
    },
    "waypoints": {
      "js": [
        "vendor/waypoints/js/jquery.waypoints.min.js"
      ]
    },
    "pe-icon-7": {
      "css": [
        "vendor/pe-icon-7-stroke/css/pe-icon-7-stroke.css"
      ]
    },
    "slider__swiper": {
      "dependency": [
        "component__sliders_css"
      ],
      "css": [
        "vendor/swiper/css/swiper.min.css"
      ],
      "js": [
        "vendor/swiper/js/swiper.min.js",
        "js/assets/swiper-skin.js"
      ]
    },
    "slider__slick": {
      "css": [
        "vendor/slickCarousel/css/slick.css",
        "css/components/sliders.css"
      ],
      "js": [
        "vendor/slickCarousel/js/slick.min.js",
        "js/assets/sliders-skin.js"
      ]
    },
    "slider__rotator": {
      "js": [
        "js/assets/rotation-slider.js"
      ]
    },
    "jquerySlider": {
      "js": [
        "vendor/jquerySlider/js/jquery-ui.min.js"
      ]
    },
    "isotope": {
      "js": [
        "vendor/isotope/js/isotope.pkgd.min.js"
      ]
    },
    "datatables_js": {
      "js": [
        "vendor/datatables/js/jquery.dataTables.min.js"
      ]
    },
    "scrollbar": {
      "css": [
        "vendor/jquery.scrollbar/css/jquery.scrollbar.css"
      ],
      "js": [
        "vendor/jquery.scrollbar/js/jquery.scrollbar.min.js"
      ]
    },
    "assets_particleground": {
      "js": [
        "js/assets/jquery.particleground.min.js"
      ]
    },
    "assets_fss": {
      "js": [
        "js/assets/fss.min.js"
      ]
    },
    "assets_skrollr": {
      "js": [
        "js/assets/skrollr.min.js"
      ]
    },
    "paper": {
      "js": [
        "vendor/paper/js/paper-full.js"
      ]
    },
    "anime": {
      "js": [
        "vendor/animejs/js/anime.min.js",
        "js/assets/brk-hover3d.js"
      ]
    },
    "fancybox": {
      "css": [
        "vendor/fancybox/css/jquery.fancybox.min.css"
      ],
      "js": [
        "vendor/fancybox/js/jquery.fancybox.min.js"
      ]
    },
    "odometer": {
      "js": [
        "vendor/odometer/js/odometer.min.js"
      ]
    },
    "typewriter": {
      "js": [
        "vendor/typewriter/js/core.js"
      ]
    },
    "jqueryAutocomplete": {
      "css": [
        "vendor/jqueryAutocomplete/css/jquery-ui.css"
      ],
      "js": [
        "vendor/jqueryAutocomplete/js/jquery-ui.min.js"
      ]
    },
    "assets__typing_rotator": {
      "js": [
        "js/assets/typing-rotator.js"
      ]
    },
    "assets__image_caption": {
      "dependency": [
        "anime"
      ],
      "js": [
        "js/components/image-caption-parallax.js"
      ]
    },
    "brk-customizer": {
      "dependency": [
        "component__accordions"
      ],
      "css": [
        "css/components/theme-options.css"
      ],
      "js": [
        "js/assets/brk-customizer.js"
      ]
    },
    "flexmenu": {
      "js": [
        "js/assets/flexmenu.js"
      ]
    },
    "component__social_links": {
      "css": [
        "css/components/social-links.css"
      ]
    },
    "component__breadcrumbs_css": {
      "css": [
        "css/components/breadcrumbs.css"
      ]
    },
    "component__breadcrumbs_js": {
      "js": [
        "js/components/breadcrumbs.js"
      ]
    },
    "component__breadcrumbs": {
      "js": [
        "js/components/breadcrumbs.js"
      ],
      "dependency": [
        "jquerySlider",
        "component__breadcrumbs_css"
      ]
    },
    "component__accordions": {
      "css": [
        "css/components/accordions.css"
      ],
      "js": [
        "js/components/accordions.js"
      ]
    },
    "component__sliders": {
      "js": [
        "js/components/sliders.js"
      ],
      "dependency": [
        "component__sliders_css"
      ]
    },
    "component__sliders_css": {
      "css": [
        "css/components/sliders.css"
      ]
    },
    "component__content_slider": {
      "css": [
        "css/components/content-sliders.css"
      ]
    },
    "component__team": {
      "css": [
        "css/components/team.css"
      ],
      "js": [
        "js/components/team.js"
      ]
    },
    "component__social_block": {
      "css": [
        "css/components/social.css"
      ]
    },
    "component__flip_box_css": {
      "css": [
        "css/components/flip-boxes.css"
      ]
    },
    "component__flip_box": {
      "dependency": [
        "component__flip_box_css"
      ]
    },
    "component__app_showcase": {
      "css": [
        "css/components/flip-boxes.css"
      ]
    },
    "component__title": {
      "css": [
        "css/components/titles.css"
      ]
    },
    "component__typing_rotator": {
      "css": [
        "css/components/typing-rotator.css"
      ]
    },
    "component__dividers": {
      "css": [
        "css/components/dividers.css"
      ]
    },
    "component__progress_circle": {
      "css": [
        "css/components/progress-circles.css"
      ],
      "js": [
        "js/components/progress-circles.js"
      ]
    },
    "component__counter": {
      "css": [
        "css/components/counter.css"
      ],
      "js": [
        "js/components/counter.js"
      ],
      "dependency": [
        "waypoints"
      ]
    },
    "component__button": {
      "css": [
        "css/components/buttons.css"
      ],
      "js": [
        "js/components/buttons.js"
      ]
    },
    "component__alert": {
      "css": [
        "css/components/alerts.css"
      ],
      "js": [
        "js/components/alerts.js"
      ]
    },
    "component__form": {
      "css": [
        "css/components/form-controls.css"
      ],
      "js": [
        "vendor/formStyler/js/jquery.formstyler.min.js",
        "js/components/form-controls.js"
      ]
    },
    "component__forum_post": {
      "css": [
        "css/components/forum-post.css"
      ]
    },
    "component__forum_main": {
      "css": [
        "css/components/forum-main.css"
      ]
    },
    "component__forum_author": {
      "css": [
        "css/components/forum-author.css"
      ]
    },
    "component__countdown": {
      "css": [
        "css/components/countdown.css"
      ],
      "js": [
        "vendor/jqueryCountdown/js/jquery.countdown.min.js",
        "vendor/underscore/js/underscore-min.js",
        "js/components/countdown.js"
      ]
    },
    "component__image_frames": {
      "css": [
        "css/components/image-frames.css"
      ]
    },
    "component__info_box": {
      "css": [
        "css/components/info-box.css"
      ],
      "js": [
        "js/components/info-box.js"
      ],
      "dependency": [
        "waypoints"
      ]
    },
    "component__call_to_action": {
      "css": [
        "css/components/CFA.css"
      ],
      "js": [
        "js/components/CFA.js"
      ]
    },
    "component__list": {
      "css": [
        "css/components/lists.css"
      ]
    },
    "component__panel": {
      "css": [
        "css/components/panels.css"
      ]
    },
    "component__pricing_table": {
      "css": [
        "css/components/pricing-tables.css"
      ]
    },
    "component__blog_css": {
      "css": [
        "css/components/blog.css"
      ]
    },
    "component__blog_js": {
      "js": [
        "js/components/blog.js"
      ]
    },
    "component__blog": {
      "js": [
        "js/components/blog.js"
      ],
      "dependency": [
        "slider__slick",
        "component__blog_css"
      ]
    },
    "component__blog_grid": {
      "css": [
        "css/components/blog-grid.css"
      ]
    },
    "component__blog_page_css": {
      "css": [
        "css/components/blog-page.css"
      ]
    },
    "component__blog_page": {
      "js": [
        "js/components/blog-page.js"
      ],
      "dependency": [
        "component__social_links",
        "component__blog",
        "component__blog_page_css"
      ]
    },
    "component__cta": {
      "css": [
        "css/components/cta.css"
      ],
      "js": [
        "js/components/cta.js"
      ]
    },
    "component__widgets_css": {
      "css": [
        "css/components/widgets.css"
      ]
    },
    "component__widgets": {
      "js": [
        "js/components/widgets.js"
      ],
      "dependency": [
        "component__widgets_css",
        "slider__slick"
      ]
    },
    "component__winter": {
      "css": [
        "css/components/winter.css"
      ]
    },
    "component__media_embeds": {
      "css": [
        "css/components/media-embeds.css"
      ],
      "js": [
        "js/components/media-embeds.js"
      ]
    },
    "component__pagination": {
      "css": [
        "css/components/pagination.css"
      ],
      "js": [
        "js/components/pagination.js"
      ]
    },
    "component__index": {
      "css": [
        "css/components/index.css"
      ],
      "js": [
        "js/components/index.js"
      ],
      "dependency": [
        "jqueryAutocomplete",
        "isotope"
      ]
    },
    "component__team_page_css": {
      "css": [
        "css/components/team-member.css"
      ]
    },
    "component__team_page": {
      "dependency": [
        "component__social_links",
        "component__team_page_css"
      ]
    },
    "component__portfolio_page-styles": {
      "css": [
        "css/components/portfolio-page.css"
      ]
    },
    "component__portfolio_page": {
      "dependency": [
        "component__portfolio_page-styles",
        "anime"
      ]
    },
    "component__portfolio_list": {
      "css": [
        "css/components/portfolio-list.css"
      ]
    },
    "component__portfolio_grid": {
      "css": [
        "css/components/portfolio-grid.css"
      ],
      "js": [
        "js/components/portfolio-grid.js"
      ],
      "dependency": [
        "anime"
      ]
    },
    "component__portfolio_row": {
      "css": [
        "css/components/portfolio-rows.css"
      ],
      "js": [
        "js/components/portfolio-rows.js"
      ],
      "dependency": [
        "isotope",
        "anime"
      ]
    },
    "component__portfolio_isotope_css": {
      "css": [
        "css/components/portfolio-isotope.css"
      ]
    },
    "component__portfolio_isotope": {
      "js": [
        "js/components/portfolio-isotope.js"
      ],
      "dependency": [
        "component__portfolio_isotope_css",
        "isotope",
        "anime"
      ]
    },
    "component__portfolio_category": {
      "css": [
        "css/components/portfolio-categories.css"
      ],
      "js": [
        "js/components/portfolio-categories.js"
      ]
    },
    "component__portfolio_galleries": {
      "css": [
        "css/components/portfolio-galleries.css"
      ],
      "dependency": [
        "component__social_links"
      ]
    },
    "component__portfolio_masonry": {
      "css": [
        "css/components/portfolio-masonry.css"
      ],
      "js": [
        "js/components/portfolio-masonry.js"
      ],
      "dependency": [
        "component__media_embeds",
        "isotope",
        "component__content_slider"
      ]
    },
    "component__portfolio_masonry-2": {
      "css": [
        "css/components/portfolio-masonry-2.css"
      ],
      "dependency": [
        "component__portfolio_isotope"
      ]
    },
    "component__progress_bar": {
      "css": [
        "css/components/progress-bars.css"
      ],
      "js": [
        "js/components/progress-bars.js"
      ]
    },
    "component__promo": {
      "css": [
        "css/components/promo.css"
      ],
      "js": [
        "js/components/promo.js"
      ]
    },
    "component__sequence": {
      "css": [
        "css/components/sequence.css"
      ]
    },
    "component__services": {
      "css": [
        "css/components/services.css"
      ]
    },
    "component__shape_box": {
      "css": [
        "css/components/shape-box.css"
      ],
      "js": [
        "js/components/shape-box.js"
      ]
    },
    "component__steps": {
      "css": [
        "css/components/steps.css"
      ],
      "js": [
        "js/components/steps.js"
      ]
    },
    "component__tabs": {
      "css": [
        "css/components/tabs.css"
      ],
      "js": [
        "js/components/tabs.js"
      ]
    },
    "component__tabbed_contents": {
      "css": [
        "css/components/tabbed-contents.css"
      ],
      "js": [
        "js/components/tabs.js"
      ]
    },
    "component__testimonials": {
      "css": [
        "css/components/testimonials.css"
      ]
    },
    "component__tiles": {
      "css": [
        "css/components/tiles.css"
      ]
    },
    "component__icons": {
      "css": [
        "css/components/icons.css"
      ],
      "js": [
        "js/components/icons.js"
      ]
    },
    "component__title_section": {
      "css": [
        "css/components/section-titles.css"
      ]
    },
    "component__delimiters": {
      "css": [
        "css/components/delimiters.css"
      ]
    },
    "component__backgrounds_css": {
      "css": [
        "css/components/backgrounds.css"
      ]
    },
    "component__backgrounds_js": {
      "js": [
        "js/components/backgrounds.js"
      ]
    },
    "component__backgrounds": {
      "dependency": [
        "component__backgrounds_css",
        "component__backgrounds_js",
        "assets_particleground",
        "assets_skrollr",
        "assets_fss",
        "paper"
      ]
    },
    "component__image_caption_css": {
      "css": [
        "css/components/image-caption-parallax.css"
      ]
    },
    "component__image_caption": {
      "dependency": [
        "component__image_caption_css",
        "assets__image_caption"
      ]
    },
    "component__tags": {
      "css": [
        "css/components/tags.css"
      ]
    },
    "component__tags_js": {
      "js": [
        "js/components/tags.js"
      ]
    },
    "component__timelines_css": {
      "css": [
        "css/components/timelines.css"
      ]
    },
    "component__timelines": {
      "dependency": [
        "component__timelines_css",
        "component__content_slider"
      ]
    },
    "component__timelines_js": {
      "js": [
        "js/components/timelines.js"
      ]
    },
    "component__gallery_sliders_css": {
      "css": [
        "css/components/gallery-sliders.css"
      ]
    },
    "component__gallery_sliders": {
      "js": [
        "js/components/gallery-sliders.js"
      ],
      "dependency": [
        "slider__slick",
        "component__gallery_sliders_css"
      ]
    },
    "component__tables": {
      "css": [
        "css/components/tables.css"
      ],
      "js": [
        "js/components/tables.js"
      ]
    },
    "component__shop_row": {
      "css": [
        "css/components/shop-components-row.css"
      ]
    },
    "component__shop_tiles": {
      "css": [
        "css/components/shop-components-tiles.css"
      ],
      "js": [
        "js/components/shop-components-tiles.js"
      ],
      "dependency": [
        "component__shop_row"
      ]
    },
    "component__shop_masonry": {
      "css": [
        "css/components/shop-components-masonry.css"
      ],
      "dependency": [
        "component__shop_row"
      ]
    },
    "component__shop_grid_filter": {
      "css": [
        "css/components/shop-components-grid-filter.css"
      ],
      "js": [
        "js/components/shop-components-grid-filter.js"
      ],
      "dependency": [
        "isotope"
      ]
    },
    "component__shop_honeycomb": {
      "css": [
        "css/components/shop-components-honeycomb.css"
      ]
    },
    "component__shop_product_row": {
      "css": [
        "css/components/shop-components-row.css"
      ]
    },
    "component__shop_grid": {
      "dependency": [
        "component__flip_box"
      ]
    },
    "component__shop_cards": {
      "css": [
        "css/components/shop-components-cards.css"
      ]
    },
    "component__shop_flip": {
      "css": [
        "css/components/shop-components-flip.css"
      ],
      "js": [
        "js/components/shop-components-flip.js"
      ],
      "dependency": [
        "scrollbar"
      ]
    },
    "component__shop_item_page_sidebar": {
      "css": [
        "css/components/shop-components-item-sidebar.css"
      ]
    },
    "component__elements": {
      "css": [
        "css/components/elements.css"
      ],
      "js": [
        "js/components/elements.js"
      ]
    },
    "component__header": {
      "dependency": [
        "flexmenu"
      ],
      "css": [
        "css/assets/brk-header-elements.css"
      ],
      "js": [
        "js/assets/brk-header.js"
      ]
    },
    "component__footer": {
      "css": [
        "css/components/footer.css"
      ],
      "js": [
        "js/components/footer.js"
      ]
    },
    "component__svg_pattern": {
      "css": [
        "css/components/svg-pattern.css"
      ]
    },
    "component__gallery": {
      "css": [
        "css/components/gallery-cols.css"
      ],
      "dependency": [
        "fancybox"
      ]
    },
    "component__image_map": {
      "css": [
        "css/assets/image-map-pro.css",
        "css/components/image-map.css"
      ],
      "js": [
        "js/assets/image-map-pro.min.js",
        "js/components/image-map.js"
      ],
      "dependency": [
        "component__title"
      ]
    },
    "component__parallax": {
      "css": [
        "css/components/parallax.css"
      ],
      "js": [
        "vendor/paraxify/js/paraxify.min.js",
        "js/components/parallax.js"
      ],
      "dependency": [
        "waypoints"
      ]
    },
    "component__parallax-video": {
      "dependency": [
        "component__parallax"
      ],
      "css": [
        "vendor/jqueryMbYT_player/css/jquery.mb.YTPlayer.min.css",
        "vendor/jqueryMbVimeo_player/css/jquery.mb.vimeo_player.min.css",
        "css/components/parallax-video.css"
      ],
      "js": [
        "vendor/jqueryMbYT_player/js/jquery.mb.YTPlayer.min.js",
        "vendor/jqueryMbVimeo_player/js/jquery.mb.vimeo_player.min.js",
        "js/components/parallax-video.js"
      ]
    },
    "component__cart": {
      "css": [
        "css/components/cart.css"
      ],
      "js": [
        "js/components/cart.js"
      ]
    },
    "component__checkout": {
      "css": [
        "css/components/checkout.css"
      ]
    },
    "component__map": {
      "css" : [
        'css/components/google-maps.css'
      ]
    }
  };

  // Brk-preloader
  if(!window.xMode) {
    window.addEventListener('load', function () {
      $('html').addClass('brk-preloader-remove');
      setTimeout(function () {
        $('html').removeClass('brk-preloader brk-preloader-remove');
        $('.brk-header:not(.brk-header_vertical)').css('display', '').addClass('d-flex');
      }, 1500)
    });

    setTimeout(function () {
      $('html').addClass('brk-preloader-remove');
      setTimeout(function () {
        $('html').removeClass('brk-preloader brk-preloader-remove');
        $('.brk-header:not(.brk-header_vertical)').css('display', '').addClass('d-flex');
      }, 1500)
    }, 5000);
  } else {
    $('html').removeClass('brk-preloader');
    $('.brk-header:not(.brk-header_vertical)').css('display', '').addClass('d-flex');
  }
  // End Brk-preloader

  /* Novi Builder */
  if (brk_xmode) {

    window.addEventListener('load', function () {
      var idAdd = $('.brk-css-add'),
          dataHtmlSkin = $('html').data('brk-skin').replace(/\b.css\b/g, '');

      idAdd.each(function () {
        var $this = $(this),
          idAddHref = $this.attr('href');

        if((!idAddHref.indexOf('css/' + dataHtmlSkin + '/') + 1) && (idAddHref.indexOf('css/') + 1)) {
          var idAddHrefN = idAddHref.replace(/^\bcss\/\b/g, 'css/' + dataHtmlSkin + '/');
          $this.attr('href', idAddHrefN);

          console.log(idAddHrefN);
        }
      });
    })
  }

  if(window.xMode) {
    $('head').append('<link rel="stylesheet" href="css/assets/novi.css">');

    $('.flip-box').on('dblclick', function () {
      $(this).toggleClass('flip-box-xmode-active');
    });

    $('.btn').on('click', function (e) {e.preventDefault()});
    $('.btn').on('dblclick', function () {
      $(this).toggleClass('btn-xmode-active');
    });

  }
  /* End Novi Builder */


})(jQuery);