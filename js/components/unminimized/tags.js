(function ($) {
  'use strict';

  Berserk.behaviors.tags_bubble_init = {
    attach: function (context, settings) {

      $('.brk-tags_bubble:not(.rendered)').addClass('rendered').find('li a').each(function () {
        var elem  = $(this);
        setTimeout(function () {
          var w   = elem.innerWidth(),
              par = elem.parent();
          elem.css('height', w);
          par.css('width', w);
        }, 800)
      });

    }
  }
})(jQuery);