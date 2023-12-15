(function ($) {
  'use strict';

  Berserk.behaviors.progressbar_init = {
    attach: function (context, settings) {

      if($('.progress__bar:not(.rendered), .progress__curve:not(.rendered), .progress__count:not(.rendered)').length < 1){
        return;
      }

      var progressBar = $(".progress__bar:not(.rendered)", context).addClass("rendered");
      if (progressBar.length) {
        $(document).on("scroll", function () {
          progressBar.not('.scrolled').each(function () {
            var position = $(this).offset().top;
            var item_offset = $(window).scrollTop() + $(window).height();
            if (item_offset > position) {
              var item = $(this);
              var start = item.attr("data-valuemin");
              var end = item.attr("data-valuenow");
              item.css({
                width: end + '%'
              });
              item.parent().parent().find('.progress__bar-counter')
                .removeClass("hide")
                .counter({
                  start: start,
                  end: end,
                  time: 0.7,
                  step: 50
                });
              item.addClass('scrolled');

              // Stripe progress bar
              var ps = $(".progress__stripe");
              if (ps.length) {
                ps.each(function () {
                  var it = $(this);
                  setTimeout(function () {
                    var ps_counter = it.find(".progress__bar-counter");
                    var ps_progress_w = it.find(".progress").width();
                    var ps_bar_w = it.find(".progress__bar").width();
                    var ps_counter_w = ps_counter.width();
                    if (ps_bar_w > ps_progress_w / 2 - 10) {
                      ps_counter.css({
                        "color": "#fff"
                      });
                    }
                  }, 1000);

                });
              }
            }
          });
        }).trigger("scroll");
      }

      // Curve progress bar
      var p_curve = $(".progress__curve:not(.rendered)", context).addClass("rendered");
      if (p_curve.length) {
        $(window).on("resize", function () {
          p_curve.each(function () {
            var it = $(this);
            var p_curve_perc = it.data("value") / 100;
            var path = it.find("path");
            var svg_wrap_w = it.width();
            var svg_wrap_h = it.height();
            var svg_wrap_w_alt = 65 * svg_wrap_w / 100;
            var svg_wrap_curve_point = 90 * svg_wrap_w / 100;

            path.attr("d", "M 0 " + svg_wrap_h + " L " + svg_wrap_w_alt + " " + svg_wrap_h + " Q " + svg_wrap_curve_point + " " + svg_wrap_h + " " + svg_wrap_w + " 0");
          });
        });
        $(window).on("scroll", function () {
          p_curve.not('.scrolled').each(function () {
            var pos = $(this).offset().top;
            var item_off = $(window).scrollTop() + $(window).height();
            var it = $(this);
            var p_curve_perc = it.data("value") / 100;
            var path = it.find("path");
            if (item_off > pos) {
              path.css({
                "stroke-dashoffset": 153 - (p_curve_perc * 153) + "%",
              });
              it.addClass('scrolled');
            }
          });
        });
        window.addEventListener('load', function () {
          setTimeout(function () {
            $(window).trigger("resize");
          }, 300)
        })
      }

      // Count progress bar
      var p_count = $(".progress__count:not(.rendered)", context).addClass("rendered");
      if (p_count.length) {
        $(window).on("scroll", function () {
          p_count.not('.scrolled').each(function () {
            var pos = $(this).offset().top;
            var item_off = $(window).scrollTop() + $(window).height();
            var it = $(this);
            var count_value = parseInt(it.find(".count-value").text());
            var count_amount = parseInt(it.find(".count-amount").text());
            var pc_bar = it.find(".progress__bar");
            var pc_bar_w = count_value * 100 / count_amount + "%";
            if (item_off > pos) {
              pc_bar.css({
                width: pc_bar_w
              });
              it.addClass('scrolled');
            }
          });
        });
      }

    }
  }
})(jQuery);