(function ($) {
  'use strict';

  Berserk.behaviors.parallax_video_init = {
    attach: function (context, settings) {

      if($('.vimeo-video:not(.rendered), .player-yt:not(.rendered), .player-vimeo:not(.rendered)').length < 1){
        return;
      }

      if (typeof jQuery.mbYTPlayer === 'undefined' || typeof jQuery.vimeo_player === 'undefined') {
        console.log('Waiting for the MBYTP library');
        setTimeout(Berserk.behaviors.parallax_video_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      function setVimeoVolume() {
        var player = [];
        $('.vimeo-video:not(.rendered) iframe').each(function () {
          player[i] = new Vimeo.Player($(this));
          player[i].setVolume(0);
        });
        $('.vimeo-video').addClass("rendered");
      }

      setVimeoVolume();
      
      window.addEventListener('load', function () {
        $(function () {
          $('.player-yt:not(.rendered)', context).addClass("rendered").each(function () {
            $(this).YTPlayer($(this).data('options'));

            $(this)
              .on('YTPPlay', function () {
                $(this).find('.mb_YTPPlaypause').addClass('active')
              })
              .on('YTPPause', function () {
                $(this).find('.mb_YTPPlaypause').removeClass('active')
              })
              .on('YTPMuted', function () {
                $(this).find('.mb_YTPMuteUnmute').removeClass('active')
              })
              .on('YTPUnmuted', function () {
                $(this).find('.mb_YTPMuteUnmute').addClass('active')
              });
          });
        });

        $(function () {
          $('.player-vimeo:not(.rendered)', context).addClass("rendered").each(function () {
            $(this).vimeo_player($(this).data('options'));

            $(this)
              .on('VPPlay', function () {
                $(this).find('.vimeo_player_pause').addClass('active');
              })
              .on('VPPause', function () {
                $(this).find('.vimeo_player_pause').removeClass('active');
              })
              .on('VPMuted', function () {
                $(this).find('.vimeo_player_muteUnmute').removeClass('active')
              })
              .on('VPUnmuted', function () {
                $(this).find('.vimeo_player_muteUnmute').addClass('active')
              });
          });
        });
      })

    }
  }
})(jQuery);
// var vimeoAPIUrl = new url
