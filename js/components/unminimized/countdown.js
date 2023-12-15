// =================================================================================
// Countdown
// =================================================================================
(function ($) {
  'use strict';

  Berserk.behaviors.countodwn_init = {
    attach: function (context, settings) {

      if (typeof $.fn.countdown === 'undefined') {
        console.log('Waiting for the countdown library');
        setTimeout(Berserk.behaviors.countodwn_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      var newTime = new Date(),
        curMonth = newTime.getMonth() + 1,
        curDay = newTime.getDate(),
        curYear = newTime.getFullYear(),
        curHour = newTime.getHours() > 12 ? newTime.getHours() - 12 : (newTime.getHours() < 10 ? "0" + newTime.getHours() : newTime.getHours()),
        curMinute = newTime.getMinutes() < 10 ? "0" + newTime.getMinutes() : newTime.getMinutes();

      var newNexTime;


      if (curDay >= 28 && curMonth <= 11) {
        curMonth = parseInt(curMonth) + 1;
        newNexTime = curYear + '/' + curMonth + '/' + curDay + ' ' + curHour + ':' + curMinute;
      }
      if (curDay < 28) {
        curDay = parseInt(curDay) + 1;
        newNexTime = curYear + '/' + curMonth + '/' + curDay + ' ' + curHour + ':' + curMinute;
      }
      if (curDay >= 28 && curMonth === 12) {
        curYear = parseInt(curYear) + 1;
        newNexTime = curYear + 1 + '/' + curMonth + '/' + curDay + ' ' + curHour + ':' + curMinute;
      }


      var countDown = $(context).parent().find('.countdown:not(.rendered)');
      if (countDown.length) {
        countDown.each(function () {
          var it = $(this);
          var time = it.data("time");
          var format = it.data("format");


          if (time) {
            it.countdown(time, function (event) {
              it.html(event.strftime(format));
              it.addClass("rendered");
            });
          } else {
            it.countdown(newNexTime, function (event) {
              it.html(event.strftime(format));
              it.addClass("rendered");
            });
          }

        });
      }

      // Countdown Circles
      var cd__big = $(context).parent().find(".countdown__circle:not(.rendered)");
      var stroke_dasharray = '';
      if (cd__big.length) {
        cd__big.each(function () {
          requestAnimationFrame(function circle_anim() {
            if ($(window).width() > 768) {
              stroke_dasharray = 651;
            } else {
              stroke_dasharray = 469;
            }
            // secs
            var cd__s = parseInt(cd__big.find(".sec").text());
            var cd__s_c = cd__big.find(".sec circle");
            var cd__s_proc = cd__s * 100 / 60;
            var cd__s_c_proc = stroke_dasharray - (cd__s_proc * stroke_dasharray / 100);
            cd__s_c.css({
              "stroke-dashoffset": cd__s_c_proc,
            });
            // mins
            var cd__m = parseInt(cd__big.find(".min").text());
            var cd__m_c = cd__big.find(".min circle");
            var cd__m_proc = cd__m * 100 / 60;
            var cd__m_c_proc = stroke_dasharray - (cd__m_proc * stroke_dasharray / 100);
            cd__m_c.css({
              "stroke-dashoffset": cd__m_c_proc,
            });
            // hours
            var cd__h = parseInt(cd__big.find(".hour").text());
            var cd__h_c = cd__big.find(".hour circle");
            var cd__h_proc = cd__h * 100 / 24;
            var cd__h_c_proc = stroke_dasharray - (cd__h_proc * stroke_dasharray / 100);
            cd__h_c.css({
              "stroke-dashoffset": cd__h_c_proc,
            });
            // days
            var cd__d = parseInt(cd__big.find(".day").text());
            var cd__d_c = cd__big.find(".day circle");
            var cd__d_proc = cd__d * 100 / 365;
            var cd__d_c_proc = stroke_dasharray - (cd__d_proc * stroke_dasharray / 100);
            cd__d_c.css({
              "stroke-dashoffset": cd__d_c_proc,
            });

            requestAnimationFrame(circle_anim);

          });
          $(this).addClass("rendered")
        })
      }

      // Countdown Flip
      var countdown__flip = $(context).parent().find('.countdown__flip:not(.rendered), .countdown__flip-2:not(.rendered)');
      if (countdown__flip.length) {
        countdown__flip.each(function () {
          var countdown__flip = $(this);
          var labels = ['Days', 'Hours', 'Minutes', 'Seconds'],
            template = _.template(countdown__flip.data("format")),
            currDate = '00:00:00:00',
            nextDate = '00:00:00:00',
            parser = /([0-9]{2})/gi;
          var cf_time;
          if (countdown__flip.data("time")) {
            cf_time = countdown__flip.data("time")
          } else {
            cf_time = newNexTime;
          }

          // Parse countdown string to an object
          var strfobj = function (str) {
            var parsed = str.match(parser),
              obj = {};
            labels.forEach(function (label, i) {
              obj[label] = parsed[i]
            });
            return obj;
          };
          // Return the time components that diffs
          var diff = function (obj1, obj2) {
            var diff = [];
            labels.forEach(function (key) {
              if (obj1[key] !== obj2[key]) {
                diff.push(key);
              }
            });
            return diff;
          };
          // Build the layout
          var initData = strfobj(currDate);
          labels.forEach(function (label, i) {
            countdown__flip.append(template({
              curr: initData[label],
              next: initData[label],
              label: label
            }));
          });
          // Starts the countdown
          countdown__flip.countdown(cf_time, function (event) {
            var newDate = event.strftime('%D:%H:%M:%S'),
              data;
            if (newDate !== nextDate) {
              currDate = nextDate;
              nextDate = newDate;
              // Setup the data
              data = {
                'curr': strfobj(currDate),
                'next': strfobj(nextDate)
              };
              // Apply the new values to each node that changed
              diff(data.curr, data.next).forEach(function (label) {
                var selector = '.%s'.replace(/%s/, label),
                  $node = countdown__flip.find(selector);
                // Update the node
                $node.removeClass('flip');
                $node.find('.curr').text(data.curr[label]);
                $node.find('.next').text(data.next[label]);
                // Wait for a repaint to then flip
                _.delay(function ($node) {
                  $node.addClass('flip');
                }, 50, $node);
              });
            }
          });
          $(this).addClass("rendered");
        })
      }

    }
  }
})(jQuery);