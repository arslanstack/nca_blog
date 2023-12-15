(function ($) {
  'use strict';

  Berserk.behaviors.parallax_init = {
    attach: function (context, settings) {
      if (typeof paraxify !== 'function') {
        console.log('Waiting for the paraxify library');
        setTimeout(Berserk.behaviors.parallax_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      $(window).on('load', function () {
        var myParaxify = paraxify('.brk-paraxify');
      });

      var scroll_show = $(".scroll-show:not(.rendered)", context).addClass("rendered");
      if (scroll_show.length) {
        scroll_show.each(function () {
          var it = $(this);
          it.waypoint({
            handler: function () {
              it.addClass("in-view");
            },
            offset: "100%"
          })
        });
      }
    }
  }
})(jQuery);