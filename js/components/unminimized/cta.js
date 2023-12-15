(function ($) {
  'use strict';

  Berserk.behaviors.cta_init = {
    attach: function (context, settings) {

      // function to check cookie by name
      function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }


      $('.brk-cta:not(.rendered)').addClass('rendered').each(function() {
        var cta = $(this);
        var accept = $(this).find('.brk-cta__accept');
        var close = $(this).find('.brk-cta__close');

        if (getCookie('cta-confirmation')) {
          cta.css('display', 'none');
        }
        
        accept.on('click', function() {
          if (cta.data('brk-expires')) {
            var date = new Date;
            date.setDate(date.getDate() + cta.data('brk-expires'));

            document.cookie = 'cta-confirmation=True; expires=' + date.toUTCString() + ';';
          }

          if (!cta.data('brk-expires')) {
            document.cookie = 'cta-confirmation=True;';
          }

          cta.css('display', 'none');
        });

        close.on('click', function() {
          cta.css('display', 'none');  
        })
      })

    }
  }
})(jQuery);