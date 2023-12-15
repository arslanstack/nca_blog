(function ($) {
  'use strict';

  Berserk.behaviors.promo_init = {
    attach: function (context, settings) {

      $(".brk-promo-crcl:not(.rendered)").addClass("rendered").each(function(){
        var circles = $(this).find(".brk-promo-crcl__circle");
        var cardContainer = $(this).find(".brk-promo-crcl__cards-container");
        var content = $(this).find(".brk-promo-crcl__content");
        var bg = $(this).find(".brk-promo-crcl__bg");

        var waypoints = $(this).waypoint({
          handler: function() {
            circles.addClass("brk-promo-crcl__circle_animdated");
            cardContainer.addClass("brk-promo-crcl__cards-container_animated");
            content.addClass("brk-promo-crcl__content_animated");
            bg.addClass("brk-promo-crcl__bg_animated");
          },
          offset: '50%'
        })

      });

      $(".brk-promo-orbit:not(.rendered)").addClass("rendered").each(function(){
        var _this = $(this);
        var waypoints = _this.waypoint({
          handler: function() {
            _this.addClass("brk-promo-orbit_animated");
          },
          offset: '50%'
        })

      });

    }
  }
})(jQuery);
