(function ($) {
  'use strict';

  Berserk.behaviors.ranged_slider_init = {
    attach: function (context, settings) {

      if($('#slider:not(.rendered)').length < 1){
        return;
      }

      if (typeof $.fn.slider === 'undefined') {
        console.log('Waiting for the slider library');
        setTimeout(Berserk.behaviors.ranged_slider_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      $(context).parent().find('#slider:not(.rendered)').addClass('rendered').slider({
        range: true,
        min: 1990,
        max: 2018,
        step: 1,
        values: [1996, 2011],
        slide: function (event, ui) {
          for (var i = 0; i < ui.values.length; ++i) {
            $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
          }
        }
      });

      $("input.sliderValue").on('change', function () {
        var $this = $(this);
        $("#slider").slider("values", $this.data("index"), $this.val());
      });

    }
  };

  function filterTrigger() {
    $('#filter-trigger').each(function () {
      var $this = $(this);

      $this.on('click', function () {
        $(this).toggleClass('closed');
        $(this).next().toggleClass('closed');
      });
    });
  }

  function categoriesListTrigger() {
    $('button#categories-list-trigger').on('click', function () {
      var filtersContainer = this.parentNode.parentNode;
      filtersContainer.querySelector('#filter-trigger').classList.add('closed');
      filtersContainer.querySelector('.filter').classList.add('closed');
    });
  }

  $(window).on('load', function(){
    filterTrigger();
    categoriesListTrigger();
  });

})(jQuery);
