// =================================================================================
// Dropdown effect
// =================================================================================

(function ($) {
  'use strict';

  Berserk.behaviors.buttons_js = {
    attach: function (context, settings) {

      function btn_dropdown_wrap() {
        var dropdownHeight;

        $(context).parent().find('.btn__dropdown_wrap:not(.rendered)').addClass('rendered').each(function () {
          if (!$(this).hasClass('open')) {
            $(this).css({
              'height': $(this).children('li:first-child').innerHeight(),
            });
          } else {
            dropdownHeight = 0;

            $(this).children().each(function () {
              dropdownHeight += $(this).outerHeight();
            });

            $(this).css({
              'height': dropdownHeight,
            });
          }


          $(this).on('click', function (e) {
            if (e.target !== this) {
              return;
            } else {
              dropdownHeight = 0;

              $(this).children().each(function () {
                dropdownHeight += $(this).outerHeight();
              });

              $(this).toggleClass('open');

              if (!$(this).hasClass('open')) {
                $(this).css({
                  'height': $(this).children('li:first-child').innerHeight(),
                });
              } else {
                $(this).css({
                  'height': dropdownHeight,
                });
              }
            }
          })
        });
      }

      function btn_inside_out() {
        $(context).parent().find('.btn-inside-out:not(.rendered)').addClass('rendered').each(function(){
          var 
            textTag = $(this).find(".text"),
            text = textTag.text(),
            textBefore = $(this).find(".before").text(),
            isIconRight = $(this).hasClass(".btn-icon-right");

            if(textBefore.length > text.length) {
              textTag.text(textBefore).css("min-width", function(){
                return  isIconRight ? textTag.outerWidth() + 30 : textTag.outerWidth()
              }).text(text);
            }
        });
      }

      $(window).on('load', function () {
        btn_dropdown_wrap();
        btn_inside_out();
      });


      // btn-pos
      $(context).parent().find('.btn-pos:not(.rendered)').addClass('rendered').each(function () {
        $(this).on('mouseenter', function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top: relY, left: relX})
        })
          .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
          })
      });


      // slide-bg-wrap
      $(context).parent().find('.slide-bg-wrap:not(.rendered)').addClass('rendered').each(function () {
        $(this).on('mouseenter', function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find('.slide-bg').css({top: relY, left: relX})
        })
          .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
            $(this).find('.slide-bg').css({top: relY, left: relX})
          })
      });


      $(context).parent().find('.btn-gradient:not(.rendered)').addClass('rendered').each(function () {
        var $this   = $(this),
          btnStyle  = $this.attr('style') || '',
          dataStyle = '';

        if(btnStyle) {
          $this.data('brk-btn-style', btnStyle);
          dataStyle = $this.data('brk-btn-style');
        }

        $this.on('mousemove', function (event) {
          var parentOffset = $(this).offset();
          var x = event.pageX - parentOffset.left;
          var y = event.pageY - parentOffset.top;

          $(this).attr('style', '--x:' + x + 'px;--y:' + y + 'px;' + dataStyle)
        });
      });

    }
  }

})(jQuery);