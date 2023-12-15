(function ($) {
  'use strict';

  Berserk.behaviors.progress_circles_init = {
    attach: function (context, settings) {

      var $window = $(window);

      function Progress(obj, options) {
        this.obj = obj || {};
        this.options = options || {};
        this.type = this.options.type || 'circle';
        this.val = this.options.val;
        this.doted = this.options.doted || false;
        this.gradient = this.obj.data('color-end');
        var self = this;

        var strokeWidth = self.options.strokeWidth;
        var radius = self.options.radius;
        var circleSize = 2 * Math.PI * radius;
        var progress = self.type === 'minimal' || self.type === 'light' ? (self.val - self.val * 0.1) / 100 : (self.val - strokeWidth / 2) / 100;
        var dashoffset = circleSize * (1 - progress);
        var dotColor = self.options.color.end ? self.options.color.end : self.options.color.start;

        this.render = function () {
          if (self.type !== 'vertical') {
            var gradient = '';
            var direction = {
              toBottom: 'x1="1" y1="0" x2="0" y2="0"',
              toRight: 'x1="0" y1="1" x2="0" y2="0"'
            };

            var gradientId = '';
            if (this.gradient) {
              gradientId = Math.random();
              gradient = '' +
                '<defs>' +
                '<linearGradient id="' + gradientId + '" ' + direction.toRight + '>' +
                '<stop offset="0" stop-color="' + self.options.color.start + '"/>' +
                '<stop offset="1" stop-color="' + self.options.color.end + '"/>' +
                '</linearGradient>' +
                '</defs>';
            } else {
              self.color = this.options.color.start;
            }

            var gradientLink = this.gradient ? 'stroke="url(#' + gradientId + ')"/>' : 'stroke="' + self.color + '"/>';
            var size = (radius) * 2;
            var realR = radius - strokeWidth / 2;
            var dotStyle = self.obj.parents('.chart-triangled').length ? 'style="border-top-color: ' + self.options.color.start + '"' : 'style="background-color: ' + dotColor + '"';
            var doted = self.options.doted ? '<div class="chart__circle-dot-wrapper"><span class="chart__circle-dot" ' + dotStyle + ' ></span></div>' : '';


            var html = '<div class="chart__svg-holder">' +
              doted +
              '<svg class="chart__svg" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" fill="none">' + gradient +
              '<circle class="chart__circle-meter" cx="' + radius + '" cy="' + radius + '" r="' + realR + '" stroke-width="' + strokeWidth + '" stroke="' + self.options.backStrokeColor + '"/>' +
              '<circle class="chart__circle-value" cx="' + radius + '" cy="' + radius + '" r="' + realR + '" stroke-width="' + strokeWidth + '"' + gradientLink +
              '</svg>' +
              '</div>';
            self.obj.append(html);
            self.obj.find('.chart__circle-value')[0].style.strokeDasharray = circleSize;
            self.obj.find('.chart__circle-value')[0].style.strokeDashoffset = circleSize;
          }
          if (self.type === 'vertical') {
            self.obj.find('.chart__circle-counter-over').css('color', dotColor);
          }
          if (self.type === 'circles') {
            self.obj.find('.chart__circle-counter').css('background', dotColor);
          }
          if (self.type === 'minimal' || self.type === 'light' || self.type === 'triangled') {
            self.obj.find('.chart__circle-counter').css('color', dotColor);
          }
          if (self.type === 'icon') {
            self.obj.find('.icon').css('color', dotColor);
          }

          $window.on('scroll', function () {
            if (self.obj.isOnScreen()) {
              if (!self.obj.hasClass('loaded')) {
                self.obj.addClass('loaded');
                if (self.type !== 'vertical') {
                  self.obj.find('.chart__circle-value')[0].style.strokeDashoffset = dashoffset;
                  if (self.doted) {
                    self.obj.find('.chart__circle-dot-wrapper').rotate(360 * self.val / 100 + 90);
                  }
                } else {
                  self.obj.find('.gradient').css({
                    'top': (100 - parseInt(self.val)) + '%'
                  });
                  self.obj.find('.gradient > .gradient-bg').css({
                    'top': -(100 - parseInt(self.val)) + '%'
                  }).setGradientBackground({
                    start: self.options.color.start,
                    end: self.options.color.end
                  });
                  self.obj.find('.gradient > span').css('top', parseInt(self.val) - 50 + '%');
                }

                self.obj.find('.chart__circle-counter .percents').each(function () {
                  var $self = $(this);
                  if (!$self.hasClass('inited')) {
                    $self.prop('Counter', 0).animate({
                      Counter: self.val
                    }, {
                      delay: 0,
                      duration: 1000,
                      easing: 'swing',
                      step: function (now) {
                        $self.text(Math.ceil(now));
                      }
                    });
                    $self.addClass('inited');
                  }
                });
              }
            }
          });

          this.gradient = '';
          $window.trigger('scroll');
        };
      }
      
      var a = {};
      var $chartMinimalCircles = $('.chart-minimal .chart__circle:not(.rendered)') || false;
      var $chartLightCircles = $('.chart-light .chart__circle:not(.rendered)') || false;
      var $chartTriangledCircles = $('.chart-triangled .chart__circle:not(.rendered)') || false;
      var $chartVertical = $('.chart-vertical .chart__circle:not(.rendered)') || false;
      var $chart2CirclesCircles = $('.chart-2circles .chart__circle:not(.rendered)') || false;
      var $chartIconCircles = $('.chart-icon .chart__circle:not(.rendered)') || false;

      if ($chartMinimalCircles.length) {
        $chartMinimalCircles.each(function () {
          $(this).addClass("rendered");
          a = new Progress($(this), {
            val: $(this).data('valuenow'),
            radius: 85,
            gradient: false,
            color: {
              start: $(this).data('color'),
              end: $(this).data('color-end') || false
            },
            strokeWidth: 12,
            doted: true,
            type: 'minimal',
            backStrokeColor: $(this).data('color-back') || 'rgba(0,0,0,.1)'
          }).render();
        });
      }

      if ($chartLightCircles.length) {
        $chartLightCircles.each(function () {
          $(this).addClass("rendered");
          a = new Progress($(this), {
            val: $(this).data('valuenow'),
            radius: 65,
            gradient: true,
            color: {
              start: $(this).data('color'),
              end: $(this).data('color-end') || false
            },
            strokeWidth: 12,
            doted: true,
            type: 'light',
            backStrokeColor: $(this).data('color-back') || 'rgba(0,0,0,.1)'
          }).render();
        });
      }

      if ($chartTriangledCircles.length) {
        $chartTriangledCircles.each(function () {
          $(this).addClass("rendered");
          a = new Progress($(this), {
            val: $(this).data('valuenow'),
            radius: 85,
            gradient: false,
            color: {
              start: $(this).data('color'),
              end: $(this).data('color-end') || false
            },
            strokeWidth: 4,
            doted: 'triangle',
            type: 'triangled',
            backStrokeColor: $(this).data('color-back') || 'rgba(0,0,0,.1)'
          }).render();
        });
      }

      if ($chartVertical.length) {
        $chartVertical.each(function () {
          $(this).addClass("rendered");
          a = new Progress($(this), {
            val: $(this).data('valuenow'),
            radius: 65,
            gradient: false,
            color: {
              start: $(this).data('color'),
              end: $(this).data('color-end') || false
            },
            strokeWidth: 4,
            doted: false,
            type: 'vertical',
            backStrokeColor: $(this).data('color-back') || '#e2ecff'
          }).render();
        });
      }

      if ($chart2CirclesCircles.length) {
        $chart2CirclesCircles.each(function () {
          $(this).addClass("rendered");
          a = new Progress($(this), {
            val: $(this).data('valuenow'),
            radius: 65,
            gradient: false,
            color: {
              start: $(this).data('color'),
              end: $(this).data('color-end') || false
            },
            strokeWidth: 4,
            doted: false,
            type: 'circles',
            backStrokeColor: $(this).data('color-back') || '#e2ecff'
          }).render();
        });
      }

      if ($chartIconCircles.length) {
        $chartIconCircles.each(function () {
          $(this).addClass("rendered");
          a = new Progress($(this), {
            val: $(this).data('valuenow'),
            radius: 85,
            gradient: true,
            color: {
              start: $(this).data('color'),
              end: $(this).data('color-end') || false
            },
            strokeWidth: 6,
            doted: false,
            type: 'icon',
            backStrokeColor: $(this).data('color-back') || 'rgba(0,0,0,.1)'
          }).render();
        });
      }

    }
  };
})(jQuery);