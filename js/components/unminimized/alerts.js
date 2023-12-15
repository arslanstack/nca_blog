(function ($) {
  'use strict';

  Berserk.behaviors.alerts_init = {
    attach: function (context, settings) {
      var $alert = $(context).parent().find('.alert:not(.rendered)');
      $alert.each(function () {
        $alert.addClass('rendered');
        var $self = {};
        $(window).on('scroll', function () {
          $alert.each(function () {
            $self = $(this);
            $self = $(this);
            if ($self.isOnScreen()) {
              $self.addClass('show')
            }
          });
        }).trigger('scroll');
      })
    }
  }
})(jQuery);