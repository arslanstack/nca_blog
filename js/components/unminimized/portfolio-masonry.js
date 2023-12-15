(function ($) {
  'use strict';

  Berserk.behaviors.portfolio_masonry_init = {
    attach: function (context, settings) {

      if($('.brk-grid:not(.rendered):not(.brk-grid-sorted)').length < 1){
        return;
      }

      if (typeof Isotope !== 'function') {
        console.log('Waiting for the Isotope library');
        setTimeout(Berserk.behaviors.portfolio_masonry_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      var $grid = $('.brk-grid:not(.rendered):not(.brk-grid-sorted)', context).addClass("rendered");
      if ($grid.length) {
        $grid.each(function () {
          var $grid = $(this);

          var $gridCols = $grid.attr('data-grid-cols');
          var $tabletGridCols,
            $gridWidth,
            $doubleGridWidth;
          var $currentWidth = $(window).width();

          if ($grid.attr('data-grid-cols-tablet')) {
            $tabletGridCols = $grid.attr('data-grid-cols-tablet')
          }

          function setCols(windowSize) {
            if (windowSize > 992) {
              $gridWidth = 100 / $gridCols + '%';
              $doubleGridWidth = 100 / $gridCols * 2 + '%';
              $grid.find('.brk-grid__sizer').css('width', $gridWidth);
              $grid.find('.brk-grid__item').css('width', $gridWidth);
              $grid.find('.brk-grid__item_width-2').css('width', $doubleGridWidth);
            } else if (windowSize <= 992 && $tabletGridCols) {
              $gridWidth = 100 / $tabletGridCols + '%';
              $doubleGridWidth = 100 / $tabletGridCols * 2 + '%';
              $grid.find('.brk-grid__sizer').css('width', $gridWidth);
              $grid.find('.brk-grid__item').css('width', $gridWidth);
              $grid.find('.brk-grid__item_width-2').css('width', $doubleGridWidth);
            } else if (windowSize <= 992 && !$tabletGridCols) {
              $gridWidth = 100 / $gridCols + '%';
              $doubleGridWidth = 100 / $gridCols * 2 + '%';
              $grid.find('.brk-grid__sizer').css('width', $gridWidth);
              $grid.find('.brk-grid__item').css('width', $gridWidth);
              $grid.find('.brk-grid__item_width-2').css('width', $doubleGridWidth);
            }
          }

          setTimeout(function () {
            setCols($currentWidth);
          }, 300);

          $(window).on('resize', function () {
            setCols($(window).width());
          });

          var iso;
          setTimeout(function() {
            if ($("html").attr("dir") === "rtl") {
              iso = $grid.isotope({
                itemSelector: ".brk-grid__item",
                percentPosition: true,
                originLeft: false,
                masonry: {
                  columnWidth: ".brk-grid__sizer",
                  rowHeight: ".brk-grid__sizer"
                },
                getSortData: {
                  category_data: '[data-category]',
                  name: '.brk-simple-card__title',
                  category_name: '.brk-simple-card__category',
                }
              });
            }
            else {
              iso = $grid.isotope({
                itemSelector: ".brk-grid__item",
                percentPosition: true,
                masonry: {
                  columnWidth: ".brk-grid__sizer",
                  rowHeight: ".brk-grid__sizer"
                },
                getSortData: {
                  category_data: '[data-category]',
                  name: '.brk-simple-card__title',
                  category_name: '.brk-simple-card__category',
                }
              });
            }  
          },400);
          // each filter count


          $('.brk-filters:not(.rendered)',context).find('.brk-filters__item').each(function () {
            var filterElem = $(this),
                filterName = filterElem.attr('data-filter'),
                elemCount;

            if (filterName && filterName !== '*') {
              elemCount = $grid.find(filterName).length;
              filterElem.find('.brk-filters__count').html(elemCount);
            }
            if (filterName && filterName === '*') {
              elemCount = $grid.find('.brk-grid__item').length;
              filterElem.find('.brk-filters__count').html(elemCount);
            }
          });

          $(".brk-filters:not(.rendered)", context).on("click", "li", function () {
            var filterValue = $(this).attr("data-filter");
            iso.isotope({
              filter: filterValue
            });
          });

          $(".brk-filters:not(.rendered)", context).each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on("click", "li", function () {
              $buttonGroup.find(".active").removeClass("active");
              $(this).addClass("active");
            });
          });

          $(".brk-filters:not(.rendered)", context).addClass('rendered');


          $(context).parent().find('.brk-load-button:not(.rendered)').addClass('rendered').each(function () {

            $(this).on('click', function () {
              $.ajax({
                url: 'ajax-portfolio-masonry.html',
                type: 'GET',
                beforeSend:function(xhr){},
                success:function(data){
                  var $content = $(data);
                  $grid.append( $content );
                  setCols($currentWidth);
                  $grid.isotope( 'appended', $content );
                }
              });
            })

          })

        });

      }
    }
  };
})(jQuery);
