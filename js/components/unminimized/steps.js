(function ($) {
  'use strict';

  Berserk.behaviors.steps_init = {
    attach: function (context, settings) {

      var tabs =  $(context).parent().find('.tabs').addClass("rendered");
      if (tabs.length) {
        tabs.each(function () {
          var it = $(this);
          var steps_wrap_main = it.parents(".steps__wrapper-main");
          var steps_wrap_light = it.parents(".steps__wrapper-light");
    
          function steps_wrap_main_func() {
            var steps_wrap = steps_wrap_main.width();
            var steps_count = steps_wrap_main.find("li").length - 1;
            var steps_compl_count = steps_wrap_main.find("li.complete").length - 1;
            var steps_prog = steps_wrap_main.find(".steps__progress");
            var steps_w = steps_compl_count * 100 / steps_count;
            steps_prog.css({width: steps_w + "%",});
          }
    
          if (steps_wrap_main.length) {
            steps_wrap_main_func();
          }
          $(window).on("resize", steps_wrap_main_func);
    
          function steps_wrap_light_func() {
            var sw_light_compl = steps_wrap_light.find(".complete");
            var steps_prog = steps_wrap_light.find(".steps__progress");
            var totalWidth = 0;
            sw_light_compl.each(function () {
              var it = $(this);
              totalWidth += parseInt(it.width(), 10);
            });
            steps_prog.css({width: totalWidth,});
          }

          setTimeout(function () {
            if (steps_wrap_light.length) {
              steps_wrap_light_func();
            }
          },300);

          $(window).on("resize", steps_wrap_light_func);
    
          var tabsgroup = it.parent().siblings(".tabgroup");
          var tab_links = it.find(">li>a");
          tabsgroup.find(">div").hide();
          tabsgroup.find($(it.find(">li>a.active").attr("href"))).show();
          tab_links.on("click", function (e) {
            
            var $this = $(this);
            var tabgroup = "#" + $this.parents(".tabs").data("tabgroup");
            var others = $this.closest("li").siblings().children("a");
            var target = $this.attr("href") || null;
            
            if(target === null || target.length === 0 || target[0] === "#"){
              e.preventDefault();
              tab_links.parent().removeClass("complete");
              $this.parent().prevAll().addClass("complete");
              $this.parent().nextAll().removeClass("complete");
              $this.parent().addClass("complete");
      
              others.removeClass("active");
              $this.addClass("active");
              $(tabgroup).children("div").hide();
              $(target).show();
      
              if (steps_wrap_main.length) {
                steps_wrap_main_func();
              }
              if (steps_wrap_light.length) {
                steps_wrap_light_func();
              }
            }
          });
        });
      }
    
    }
  }

})(jQuery);