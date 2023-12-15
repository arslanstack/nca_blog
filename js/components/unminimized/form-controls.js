(function ($) {
  'use strict';

  $.fn.berserkforms = function (params) {
    var defaults = {
      formWrap: 'brk-form-wrap',
      formWrapActive: 'brk-form-wrap-active',
      inputLabel: 'input-label'
    },
      options = $.extend({}, defaults, params);

    var _ = this,
      i = 0;

    _.each(function () {
      var _ = $(this),
        textPlaceholder = null,
        imputId = null;

      $(this).addClass("rendered");

      if (_.attr('placeholder') !== undefined) {
        textPlaceholder = _.attr('placeholder');
      } else {
        textPlaceholder = false;
      }
      _.removeAttr('placeholder');

      if (_.attr('id') !== undefined) {
        imputId = _.attr('id');
      } else {
        imputId = 'brkin-' + i;
        _.attr('id', imputId);
      }

      _.wrap(function () {
        return '<div class="' + options.formWrap + '"></div>';
      });

      if (_.attr('readonly') === undefined) {
        if (textPlaceholder !== false) {
          _.parent().append('<label class="' + options.inputLabel + '" for="' + imputId + '">' + textPlaceholder + '</label>');
        }
      }

      if (_.val() !== '') {
        if (_.attr('readonly') === undefined) {
          _.parent().addClass(options.formWrapActive);
        }
      }

      _.on('focus', function () {
        if (_.attr('readonly') === undefined) {
          _.parent().addClass(options.formWrapActive);
        }
      });

      _.on('blur', function () {
        if (_.val() === '') {
          _.parent().removeClass(options.formWrapActive);
        }
      });

      i++;
    });

    return _;
  };
})(jQuery);

(function ($) {
  Berserk.behaviors.form_controls = {
    attach: function (context, settings) {

      var brkForms = '.brk-form-strict [type="text"]:not(.rendered), .brk-form-strict [type="search"]:not(.rendered), .brk-form-strict [type="password"]:not(.rendered), .brk-form-strict [type="email"]:not(.rendered), .brk-form-strict [type="tel"]:not(.rendered), .brk-form-strict textarea:not(.rendered)';
      $(brkForms).berserkforms();

      if (typeof $.fn.styler === 'undefined') {
        console.log('Waiting for the styler library');
        setTimeout(Berserk.behaviors.form_controls.attach, settings.timeout_delay, context, settings);
        return;
      }

      var brkSelect     = $('select'),
          wpDataTables  = $('.wpDataTables select');

      if ((brkSelect.length !== 0) && (wpDataTables.length === 0)) {
        $(context).parent().find('select:not(.rendered)').styler();
      }

      // Date
      (function () {
        var _ = $(context).parent().find('[type="date"]:not(.rendered)'),
          wrap = 'brk-form-date-wrap';

        _.each(function () {
          var _ = $(this);
          $(this).addClass("rendered");
          _.wrap(function () {
            return '<div class="' + wrap + '"></div>';
          });
        });

        _.parent().append('<span class="icon-before"><i class="fa fa-calendar" aria-hidden="true"></i></span>');

      })();


      // File
      $(context).parent().find('.brk-form [type="file"]:not(.rendered)').each(function () {
        var _ = $(this),
          wrap = 'brk-form-file-wrap',
          wrapTr = 'brk-form-file-wrap-transparent';
        
        $(this).addClass("rendered");

        if (_.attr('type') === 'file') {
          if (_.parents().hasClass('brk-form-strict')) {
            _.wrap(function () {
              return '<label class="' + wrap + '"></label>';
            });
            _.parent().append('<span class="file-info">Choose file</span><span class="icon-before"><i class="fa fa-upload" aria-hidden="true"></i></span>');
          } else if (_.parents().hasClass('brk-form-round')) {
            _.wrap(function () {
              return '<label class="' + wrap + '"></label>';
            });
            _.parent().append('<span class="file-info">Choose file</span><span class="icon-before"><i class="fal fa-upload" aria-hidden="true"></i></span>');
          } else if (_.parents().hasClass('brk-form-transparent')) {
            _.wrap(function () {
              return '<label class="' + wrapTr + '"></label>';
            });
            _.parent().append('<span class="file-info">Choose file</span><span class="icon-before"><i class="fa fa-upload" aria-hidden="true"></i></span>');
          }

        }

        _.on('change', function () {
          var file = _.val(),
            fileInfo = $('.file-info');
          file = file.replace(/\\/g, "/").split('/').pop();
          fileInfo.html(file);
        });
      });

      // checkbox
      $("body").find('.brk-form [type="checkbox"]:not(.rendered)').each(function () {
        var _ = $(this),
          wrap = 'brk-form-checkbox';
        $(this).addClass("rendered");
        if (_.attr('type') === 'checkbox') {
          _.wrap(function () {
            return '<label class="' + wrap + '"></label>';
          });

          _.parent().append('<span class="checkbox-custom"><i class="fa fa-check" aria-hidden="true"></i></span>');
        }
      });

      // radio
      $(context).parent().find('.brk-form [type="radio"]:not(.rendered)').each(function () {
        var _ = $(this),
          wrap = 'brk-form-radio';
        $(this).addClass("rendered");
        if (_.attr('type') === 'radio') {
          _.wrap(function () {
            return '<label class="' + wrap + '"></label>';
          });

          if (_.parents().hasClass('brk-form-transparent')) {
            _.parent().append('<span class="radio-custom"><i class="fa fa-check" aria-hidden="true"></i></span>');
          } else {
            _.parent().append('<span class="radio-custom"></span>');
          }

        }
      });

      $('.brk-subscribe-mail:not(.rendered)').addClass('rendered').each(function () {
        var $form = $(this);
        $form.on('submit', function (e) {
          e.preventDefault();
          var formData = $(this).serialize();
          $.getJSON('php/subscribe.php', formData, function (data) {
            var messageStatus = "<span class='brk-subscribe-message font__family-open-sans font__size-14 line__height-21 opacity-80'>" + data.status + "</span>";
            $form.append(messageStatus);
            setTimeout(function () {
              $form.find('.brk-subscribe-message').fadeOut();
              $form.trigger("reset");
            }, 3000);
          });
        });
      });


      /* --------------- Deleting placeholder focus --------------- */
      var placeholderInput = $('input,textarea');
      placeholderInput.on('focus', function () {
        $(this).data('placeholder', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
      });
      placeholderInput.on('blur', function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
      });
      /* ------------- End Deleting placeholder focus ------------- */

    }
  }
})(jQuery);