(function ($) {
  'use strict';

  Berserk.behaviors.shpa_box_init = {
    attach: function (context, settings) {

      var shape_box = $(".shape-box__wrapper-shape:not(.rendered)", context).addClass("rendered");
      if (shape_box.length) {
        $(window).on("resize", function () {
          shape_box.each(function () {
            var it = $(this);
            var path = it.find(".curve path");
            var svg_wrap_w = it.width();
            var svg_wrap_h = it.height() - 90;
            var svg_wrap_w_alt = 78 * svg_wrap_w / 100;

            path.attr("d", "M 0 0 Q 0 " + svg_wrap_h + " " + svg_wrap_w + " " + svg_wrap_h + " L 0 " + svg_wrap_h + " ");
            var d_to = parseInt("M 0 0 L 0 " + svg_wrap_h + " L " + svg_wrap_w + " " + svg_wrap_h + " L " + svg_wrap_w + " 0 Z");
          });
        });

        $(window).on('load', function () {
          $(window).trigger("resize");
        });

      }

    }
  }
})(jQuery);
