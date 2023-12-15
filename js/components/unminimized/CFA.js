(function ($) {
  'use strict';

  Berserk.behaviors.cfa__page_init = {
    attach: function (context, settings) {
      var embedVideo = $('.embed-responsive:not(.rendered)');
      if (embedVideo.length) {
        embedVideo.addClass("rendered");
        embedVideo.each(function () {
          var _this = $(this);
          var overlay = $(this).find('.overlay-image');
          var button = $(this).find('.icon__btn');
          var link = $(this).data('embed');
          var video = '<iframe class="yt-iframe" src="'+link+'?rel=0&mute=1&autoplay=1" allowfullscreen></iframe>';
          button.on('click', function(ev){
            overlay.css('display','none');
            _this.get(0).insertAdjacentHTML("beforeend", video);
            ev.preventDefault();
          })

        }).addClass('rendered');
      }
    }
  }
})(jQuery);