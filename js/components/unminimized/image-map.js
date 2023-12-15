(function ($) {
  'use strict';

  Berserk.behaviors.image_map_init = {
    attach: function (context, settings) {      

      if($('.brk-image-map:not(.rendered)').length < 1) {
        return;
      }

      if (typeof $.fn.imageMapPro !== 'function') {
        console.log('Waiting for the imageMapPro library');
        setTimeout(Berserk.behaviors.image_map_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      $(context).parent().find('.brk-image-map:not(.rendered)').each(function() { 
        var $this 	= $(this),
            imData	= $this.data('brk-image-map');            
    
        setTimeout(function () {
          $this.imageMapPro(imData);
        }, 100);
      }).addClass("rendered");

      var absoluteTopIM = function(){
        var absoluteTop       = $('.brk-image-map_absolute-top'),
            absoluteTopHeight = absoluteTop.height(),
            absoluteTopParent = absoluteTop.parent();

        absoluteTopParent.css('min-height', absoluteTopHeight);
      };

      $(window).on('load', function() {
        setTimeout(function () {
          absoluteTopIM();
        }, 500);
      });

      $(window).on('resize', function(){
        absoluteTopIM();
      });
    }
  }
})(jQuery); 
