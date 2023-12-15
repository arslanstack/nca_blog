(function ($) {
  'use strict';

  Berserk.behaviors.counter_init = {
    attach: function (context, settings) {

      var counter = $(".counter:not(.rendered)", context); 
      
      if (counter.length) {
        counter.each(function () {
          var it = $(this);
          var countMax = it.attr("data-count-max");
          var countTo = it.attr("data-count-to");
          var countDur = parseInt(it.attr("data-count-speed"));
          var countText = it.attr("data-count-from");

          // Counter filled
          if (it.parents(".counter__wrapper-filled").length) {
            var countCircle = it.parents(".counter__wrapper-filled").find("svg circle");
            var countTri = it.parents(".counter__wrapper-filled").find(".counter-tri");
            var countVal = countTo * 100 / countMax;
            var countTriVal = countVal * 360 / 100;
            var circleStroke = 584 - (countVal * 584 / 100);
          } // end

          it.waypoint({
            handler: function () {
              if (!it.hasClass("init")) {

                // Counter filled
                if (it.parents(".counter__wrapper-filled").length) {
                  countCircle.css({
                    "stroke-dashoffset": circleStroke,
                    "transition": "stroke-dashoffset " + countDur / 1000 + "s ease",
                  });
                }
                if (it.parents(".counter__wrapper-filled").length) {
                  countTri.css({
                    "transform": "rotate(" + countTriVal + "deg)",
                    "transition": "all " + countDur / 1000 + "s ease",
                  });
                }
                // end

                $({
                  countNum: countText
                }).animate({
                  countNum: countTo
                }, {
                  duration: countDur,
                  easing: "linear",
                  step: function () {
                    it.html(Math.floor(this.countNum));
                    it.html(function (i, v) {
                      return v.replace(/(\d)/g, "<span>$1</span>");
                    });
                  },
                  complete: function () {
                    it.html(this.countNum);
                    it.html(function (i, v) {
                      return v.replace(/(\d)/g, "<span>$1</span>");
                    });
                    it.addClass("init");
                  }
                });
              }
            },
            offset: "100%"
          });
          $(this).addClass("rendered");
        });
      }
    }
  }
})(jQuery);