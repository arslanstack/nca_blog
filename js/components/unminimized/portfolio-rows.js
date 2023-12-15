(function ($) {
  'use strict';

  Berserk.behaviors.portfolio_rows_init = {
    attach: function (context, settings) {

      if($('.brk-grid-fitrows:not(.rendered), .brk-simple-card-2:not(.rendered)').length < 1){
        return;
      }

      if (typeof Isotope !== 'function' && typeof $.fn.brk_hover3d !== 'function' || typeof anime !== 'function') {
        console.log('Waiting for the Isotope || brk-hover-3d || anime library');
        setTimeout(Berserk.behaviors.portfolio_rows_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      var $grid = $(".brk-grid-fitrows:not(.rendered)").addClass("rendered");
      $grid.each(function () {
        var $gridCols = $grid.attr('data-grid-cols');
        var $tabletGridCols,
          $gridWidth,
          $doubleGridWidth,
          iso;
        var $currentWidth = window.innerWidth || $(window).width();
        var $gridHeight = $grid.attr('data-grid-height') + 'px';


        if ($grid.attr('data-grid-cols-tablet')) {
          $tabletGridCols = $grid.attr('data-grid-cols-tablet')
        }

        var setCols = function (windowSize) {
          if (windowSize > 992) {
            $gridWidth = 100 / $gridCols + '%';
            $doubleGridWidth = 100 / $gridCols * 2 + '%';
            $grid.find('.brk-grid-fitrows__item').css('width', $gridWidth);
            $grid.find('.brk-grid-fitrows__item_width-2').css('width', $doubleGridWidth);
          } else if (windowSize <= 992 && $tabletGridCols) {
            $gridWidth = 100 / $tabletGridCols + '%';
            $doubleGridWidth = 100 / $tabletGridCols * 2 + '%';
            $grid.find('.brk-grid-fitrows__item').css('width', $gridWidth);
            $grid.find('.brk-grid-fitrows__item_width-2').css('width', $doubleGridWidth);
          } else if (windowSize <= 992 && !$tabletGridCols) {
            $gridWidth = 100 / $gridCols + '%';
            $doubleGridWidth = 100 / $gridCols * 2 + '%';
            $grid.find('.brk-grid-fitrows__item').css('width', $gridWidth);
            $grid.find('.brk-grid-fitrows__item_width-2').css('width', $doubleGridWidth);
          }
        };
        setCols($currentWidth);

        $(window).on('resize', function () {
          setCols(window.innerWidth || $(window).width());
        });


        $grid.find('.brk-grid-fitrows__item').css('height', $gridHeight);

        setTimeout(function () {
          iso = new Isotope($grid.get(0), {
            itemSelector: ".brk-grid-fitrows__item",
            percentPosition: true
          });
        }, 400)
      });

      $(".brk-simple-card-2:not(.rendered)", context)
        .brk_hover3d("animation2", {
          imgWrapper: ".brk-simple-card-2__animation-wrapper",
          caption: ".brk-simple-card-2__info"
        })
        .addClass("rendered");

    }
  };
})(jQuery);