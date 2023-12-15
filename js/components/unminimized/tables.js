(function ($) {
  'use strict';

  function tableHvAct(el) {
    $(el).each(function () {
      var table = $(this),
        active = table.find('th.brk-tables_active'),
        iTh = table.find('th').index(active);

      var td = table.find('td:nth-child(' + (iTh + 1) + ')'),
        th = table.find('th:nth-child(' + (iTh + 1) + ')');
      td.addClass('brk-tables_active');
      th.addClass('brk-tables_active');

      table.on('mouseover', 'td, th', function () {
        var tds = $(this).parent().find('td'),
          ths = $(this).parent().find('th'),
          indexTd = $.inArray(this, tds),
          indexTh = $.inArray(this, ths),
          ind = indexTd + 1 || indexTh + 1;

        if (ind > 1) {
          var td = table.find('td:nth-child(' + ind + ')'),
            th = table.find('th:nth-child(' + ind + ')');
          td.addClass('brk-tables_hover');
          th.addClass('brk-tables_hover');
        }
      }).on('mouseout', 'td, th', function () {
        var tds = $(this).parent().find('td'),
          ths = $(this).parent().find('th'),
          indexTd = $.inArray(this, tds),
          indexTh = $.inArray(this, ths),
          ind = indexTd + 1 || indexTh + 1;

        var td = table.find('td:nth-child(' + ind + ')'),
          th = table.find('th:nth-child(' + ind + ')');
        td.removeClass('brk-tables_hover');
        th.removeClass('brk-tables_hover');
      });
    });
  }

  Berserk.behaviors.tables_hv_init = {
    attach: function (context, settings) {

      $(context).parent().find('.brk-tables-trend:not(.rendered)').addClass('rendered').each(function () {
        var $this = $(this);

        tableHvAct($this);
      });

    }
  };


  Berserk.behaviors.data_tables_init = {
    attach: function (context, settings) {

      if(typeof brk === 'undefined') {

        var strictTables = $(context).parent().find('.brk-tables-strict:not(.rendered)').addClass('rendered');
        if (strictTables.length) {
          // If element is lazyloaded but library still loading, then wait a little
          if (typeof $.fn.DataTable === 'undefined') {
            console.log('Waiting for the DataTable library');
            setTimeout(Berserk.behaviors.data_tables_init.attach, settings.timeout_delay, context, settings);
            return;
          }

          strictTables.each(function () {
            var $this = $(this);

            tableHvAct($this);

            $this.find('table').each(function () {
              $(this).DataTable();

              /* brk-tables-lines__sort-nav */
              setTimeout(function () {
                $('.brk-tables').each(function () {
                  var $this = $(this),
                    $wrap = $this.find('.dataTables_info, .dataTables_paginate'),
                    $paginate = $this.find('.dataTables_paginate'),
                    $first = $paginate.find('.first'),
                    $previous = $paginate.find('.previous'),
                    $next = $paginate.find('.next'),
                    $last = $paginate.find('.last');

                  $wrap.wrapAll('<div class="brk-tables-lines__sort-nav"></div>');
                  $first.prepend('<i class="fa fa-angle-double-left"></i>');
                  $previous.prepend('<i class="fa fa-angle-left"></i>');
                  $next.prepend('<i class="fa fa-angle-right"></i>');
                  $last.prepend('<i class="fa fa-angle-double-right"></i>');
                });
              }, 400);
              /* brk-tables-lines__sort-nav */
            })

          });

        }

      }

    }
  };

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

})(jQuery);