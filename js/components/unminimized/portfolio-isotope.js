(function ($) {
  'use strict';

  Berserk.behaviors.portfolio_isotope_init = {
    attach: function (context, settings) {
      if (typeof Isotope !== 'function' && typeof $.fn.brk_hover3d !== 'function' || typeof anime !== 'function') {
        console.log('Waiting for the Isotope || brk-hover-3d || anime library');
        setTimeout(Berserk.behaviors.portfolio_isotope_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      var $grid = $(".brk-grid:not(.rendered)", context).addClass("rendered");
      if ($grid.length) {
        var $gridCols = $grid.attr('data-grid-cols');
        var $tabletGridCols,
          $gridWidth,
          $doubleGridWidth;
        var $currentWidth = $(window).width();

        if ($grid.attr('data-grid-cols-tablet')) {
          $tabletGridCols = $grid.attr('data-grid-cols-tablet')
        }

        var setCols = function (windowSize) {
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
        };

        setCols($currentWidth);

        $(window).on('resize', function () {
          setCols($(window).width());
        });

        var iso;

        setTimeout(function () {
          iso = new Isotope($grid.get(0), {
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

          $grid.find('img').css('display', 'block');
        }, 400);

        // each filter count

        $('.brk-filters:not(.rendered)', context).find('.brk-filters__item').each(function () {
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
          var filterValue = $(this).attr("data-filter").toLowerCase();
          iso.arrange({
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

        $(".brk-filters:not(.rendered)", context).addClass("rendered");

        var sortChanger = $('#brk-grid-sort');
        var setSelectWidth = function (){
          $("#brk-select__sizer-option").html($('#brk-grid-sort option:selected').text());
          $("#brk-grid-sort").width($("#brk-select__sizer").width() + 15);
        };
        if(sortChanger.length){
          setSelectWidth();
          sortChanger.on('change', function () {
            var sortValue = $(this).val();
            iso.arrange({
              sortBy: sortValue
            });
            setSelectWidth();
          });
        }

      }


      var simpleCards = $(".brk-simple-card:not(.rendered)", context);
      if (simpleCards.length) {
        simpleCards.each(function () {
          $(this).addClass("rendered");
          $(this).brk_hover3d("animation2", {
            imgWrapper: ".brk-simple-card__animation-wrapper",
            caption: ".brk-simple-card__info"
          });
        })
      }

      var swipeCards = $(".brk-btn-swipe-card:not(.rendered)", context);
      if (swipeCards.length) {
        swipeCards.each(function () {
          $(this).addClass("rendered");
          $(this).brk_hover3d("animation2", {
            caption: ".brk-btn-swipe-card__caption"
          })
        })
      }
    }
  };
})(jQuery);
