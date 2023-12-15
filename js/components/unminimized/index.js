(function ($) {
  'use strict';

  Berserk.behaviors.frontpage_init = {
    attach: function (context, settings) {

      window.lazySizesConfig = window.lazySizesConfig || {};
      lazySizesConfig.expand = 100;


      var lis = $(context).parent().find('.brk-page-intro__sorting-item:not(.rendered)').addClass("rendered");
      if (lis.length) {
        var queue = $.Deferred().resolve(); // create an empty queue
        var speed = 170;
        lis.get().forEach(function (li) {
          queue = queue.then(function () {
            return $(li).animate({
              opacity: 1
            }, speed).promise();
          });
          speed = speed - 5;
        });
      }


      var inp = $(context).parent().find('.brk-page-intro__search--input:not(.rendered)').addClass("rendered");
      if (inp.length) {
        var arr = inp.data('placeholder').split(', '),
          i = 0,
          count = arr.length,
          int = 2000;

        var searchSubstitution = function () {
          inp.attr('placeholder', arr[i]);
          i++;

          if (i >= count) {
            i = 0;
          }
        }
      }

      var intervalID = setInterval(searchSubstitution, int);

      /* --------------- Deleting placeholder focus --------------- */
      var placeholderInput = $('input,textarea');
      placeholderInput.on('focus', function () {
        $(this).data('placeholder', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
        clearInterval(intervalID);
      });
      placeholderInput.on('blur', function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
        intervalID = setInterval(searchSubstitution, int);
      });
      /* ------------- End Deleting placeholder focus ------------- */

      if (typeof $.fn.isotope !== 'function' || typeof $.fn.autocomplete !== "function") {
        console.log('Waiting for the isotope & autocomplete');
        setTimeout(Berserk.behaviors.frontpage_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      $(context).parent().find('.brk-page-intro:not(.rendered)').addClass('rendered').each(function (i) {
        var $this = $(this),
          $grid = $this.find('.brk-page-intro__items'),
          $buttonGroup = $this.find('.brk-page-intro__sorting'),
          $buttonItem = $this.find('.brk-page-intro__sorting-item'),
          $checked = $this.find('.checked'),
          $search = $this.find('.brk-page-intro__search'),
          $inputSearch = $search.find('.brk-page-intro__search--input'),
          $templates = $this.find('.brk-page-intro__template');

        var spinnerOnWay = function () {
          $templates.each(function () {
            var img = $(this).find("img");
            var spinner = $(this).find(".brk-page-intro__template-loading");
            var $this = $(this);
            var waypoints = $this.waypoint({
              handler: function () {
                if (!img.hasClass("lazyloaded")) {
                  spinner.css("display", "block");
                }
              },
              offset: "110%"
            });
            img.on("ready", function () {
              spinner.css("display", "none");
            })
          });
        };

        $(document).ready(setTimeout(function () {
          spinnerOnWay()
        }, 2000));

        $buttonItem.each(function () {
          var $this = $(this),
            dataFilter = $this.data('filter'),
            $count = $this.find('.brk-page-intro__sorting-count');

          if (dataFilter !== '*') {
            $count.html($(dataFilter).length)
          }
        });

        // init Isotope
        if ($("html").attr("dir") === "rtl") {          
          $grid.isotope({
            itemSelector: '.brk-page-intro__item',
            percentPosition: true,
            layoutMode: 'fitRows',
            originLeft: false
          });
        }
        else {
          $grid.isotope({
            itemSelector: '.brk-page-intro__item',
            percentPosition: true,
            layoutMode: 'fitRows'
          });
        }

        window.addEventListener('load', function () {
          $grid.isotope('layout');
        });

        window.addEventListener('lazybeforeunveil', function () {
          $grid.isotope('layout')
        });

        // filter items on button click
        $buttonGroup.on('click', 'li', function () {
          var filterValue = $(this).data('filter');
          $grid.isotope({
            filter: filterValue
          })
        });


        /* autocomplete */
        var keywordsSortingArray = $inputSearch.data('keywords').split(', ');

        $inputSearch.autocomplete({
          source: keywordsSortingArray,
          select: function (event, ui) {
            $search.closest('form').on('submit', function (e) {
              e.preventDefault();
            });

            var val = ui.item.value;

            setTimeout(function () {
              if (val === '') {
                $grid.isotope({
                  filter: '*'
                });
              } else {
                $grid.isotope({
                  filter: '.filter-' + val
                });
              }
            }, 1000);

          }
        });
        /* End autocomplete */

        $inputSearch.on('change keyup input', function () {

          $search.closest('form').on('submit', function (e) {
            e.preventDefault();
          });

          var val = $(this).val();

          if (val === '') {
            setTimeout(function () {
              $grid.isotope({
                filter: '*'
              });
            }, 1000);
          } else {
            setTimeout(function () {
              $grid.isotope({
                filter: '.filter-' + val
              });
            }, 1000);
          }

        });


        $checked.trigger('click');

        $buttonGroup.each(function (i, buttonGroup) {
          var $buttonGroup = $(buttonGroup);
          $buttonGroup.on('click', 'li', function () {
            $buttonGroup.find(".checked").removeClass('checked');
            $(this).addClass('checked');
          });
        });
      });

    }
  }

})(jQuery);