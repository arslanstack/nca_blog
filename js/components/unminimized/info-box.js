(function ($) {
  'use strict';

  Berserk.behaviors.info_box_init = {
    attach: function (context, settings) {

      var wave_hover = $(context).parent().find(".wave-hover:not(.rendered)").addClass("rendered");
      if (wave_hover.length) {
        wave_hover.each(function () {
          var it = $(this),
            wh_delay_attr = it.data("wh-delay") * 1000,
            wh_speed_attr = it.data("wh-speed") * 1000,
            wh_delay, wh_speed;

          wh_delay = !isNaN(parseFloat(wh_delay_attr)) ? wh_delay_attr : 1000;

          wh_speed = !isNaN(parseFloat(wh_speed_attr)) ? wh_speed_attr : 1000;

          var wh_repeat = it.data("wh-repeat");
          var wh = it.find(".wpb_column");
          var wh_len = wh.length;
          var wh_num = 0;

          function startCycle() {
            var time_it = setInterval(function () {
              var wh_cur = wh.eq(wh_num);
              wh.removeClass("current");
              wh_cur.addClass("current");
              wh_num++;
              if (wh_num > wh_len) {
                wh_num = 0;
                clearInterval(time_it);
              }
            }, wh_speed);
          }

          if (wh_repeat === true) {
            setInterval(function () {
              startCycle();
            }, wh_delay + wh_len * wh_speed);
          }
          it.waypoint({
            handler: function (direction) {
              startCycle();
            },
            offset: "70%"
          });
        });
      }

      if ($(context).parent().find(".info-box__wrapper-icon:not(.rendered)").length) {
        $(".info-box__wrapper-icon").each(function () {
          $(this).addClass("rendered");
          var it = $(this);
          var it_svg = it.find("svg").clone();
          it.find(".icon-after").append(it_svg);
        });
      }
    }
  }
})(jQuery);