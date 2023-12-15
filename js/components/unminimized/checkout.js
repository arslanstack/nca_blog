(function ($) {

  Berserk.behaviors.checkout_init = {
    attach: function (context, settings) {

      var itemsPicker = $(".brk-checkout-order-item__count_input:not(.rendered)").addClass("rendered");
      itemsPicker.each(function(){
        var input = $(this).find("input");
        $(this).find(".count-less").click(function() {
          input.val(function(){
            var val = parseInt(input.val());
            return val > 0 ? val - 1 : 0
          }).trigger("change")
        });
        $(this).find(".count-more").click(function() {
          input.val(function(){
            var val = parseInt(input.val()),
            max = parseInt(input.attr('max'));

            return typeof(val) === 'number' && !isNaN(val) ? val + 1 : 0
          }).trigger("change")
        })
      })
    }
  }
})(jQuery);