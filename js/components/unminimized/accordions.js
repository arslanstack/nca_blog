(function ($) {
  'use strict';

  Berserk.behaviors.accordions_init = {
    attach: function (context, settings) {

      $('.accordion:not(.rendered)', context).addClass("rendered").each(function () {
        var collapse = $(this).find('.collapse');

        collapse.each(function () {

          $(this).on('show.bs.collapse', function () {
            var curId = $(this).attr('id');
            collapse.each(function () {
              if ($(this).attr('id') !== curId) {
                $(this).collapse('hide');
              }
            })
          });

          $(this).on('shown.bs.collapse', function () {
            $(this).parents('.card').addClass('expanded');
            var sliders = $(this).find(".slick-slider");
            if(sliders.length){
              sliders.each(function () {
                var _this = $(this);
                setTimeout(_this.slick("setPosition", 0), 200); 
              })
            }
          });

          $(this).on('hide.bs.collapse', function () {
            $(this).parents('.card').removeClass('expanded');
          });
        })
      })
    }
  }
})(jQuery);
