(function ($) {
  'use strict';

  Berserk.behaviors.pagination_init = {
    attach: function (context, settings) {
      (function(){
        var twoCurrent = $('.brk-pagination-two .current', context),
            twoPrev = $('.brk-pagination-two .prev'),
            twoNext = $('.brk-pagination-two .next');
      
        twoCurrent.before(twoPrev);
        twoCurrent.after(twoNext);
      })();
    }
  }
})(jQuery);