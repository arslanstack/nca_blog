(function ($) {
  'use strict';

  Berserk.behaviors.timeline_masonry_init = {
    attach: function (context, settings) {

      var $prev = {};
      if ($('.timeline--masonry-grid .timeline__item:not(.rendered)').length) {
        setTimeout(function () {
          $('.timeline--masonry-grid .timeline__item:not(.rendered)', context).addClass('rendered').each(function () {
            $prev = $(this).prev().prev();
            var newPos = 0;
            if ($prev.length && $prev.offset().top + $prev.height() + 60 !== $(this).offset().top) {
              newPos = $prev.offset().top + $prev.height() + 60 - $(this).offset().top;
              $(this).css("margin-top", newPos);
            }
          });
        }, 300);
      }
    }
  }
})(jQuery);