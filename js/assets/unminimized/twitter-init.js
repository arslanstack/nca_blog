(function ($) {
  'use strict';

  Berserk.behaviors.twitter_init = {
    attach: function (context, settings) {

      // Twitter init
      if ($(".twitter-timeline").length) {
        window.twttr = (function (d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function (f) {
            t._e.push(f);
          };

          return t;
        }(document, "script", "twitter-wjs"));
      }
      // Twitter init end


      var styledTwitter1 = $('.brk-styled-twitter:not(.rendered)', context);
      styledTwitter1.each(function () {
        var twitterEmbed = $(this);
        isTwitterReady();
        function isTwitterReady () {
          var head = twitterEmbed.find('.twitter-timeline').contents().find('head');
          if (head.length) {
            $('<link/>', {
              rel: "stylesheet",
              type: "text/css",
              href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400"
            }).appendTo(head);
          }
          if (head.get(0) === undefined) {
            setTimeout(function(){
              isTwitterReady();
            },500)
          }
        }
        twitterEmbed.delegate('.twitter-timeline', 'DOMSubtreeModified propertychange', function () {
          var singleTwits = twitterEmbed.find('.twitter-timeline').contents().find('.timeline-TweetList-tweet');
          singleTwits.each(function () {
            $(this).find('.timeline-Tweet').css("background-color", "rgba(256,256,256, 0)");
            $(this).find('.timeline-Tweet-author').css("display", "none");
            $(this).find('.timeline-Viewport').css("overflow", "visible");
            $(this).find('.timeline-Tweet-inReplyTo').css("display", "none");
            $(this).find('.timeline-Tweet-text').css({
              marginLeft: "20px",
              fontSize: "18px",
              lineHeight: "30px",
              fontFamily: '"Open Sans", sans-serif',
              fontWeight: "300"
            });
            $(this).find('time').css("display", "none");
            $(this).find('.timeline-Tweet-media').css("display", "none");
            $(this).find('.timeline-Tweet-actions').css("display", "none");
            $(this).css("position", "relative");
            $(this).find('.timeline-Tweet-metadata').find('a').css({
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
            });
            $(this).find('.timeline-Tweet-brand').css({
              position: "absolute",
              left: "-5px",
              top: "-8px",
              fontSize: "46px",
              zIndex: "-1",
              opacity: "0.2",
            });
            $(this).find('.timeline-Tweet-brand .Icon').css({
              backgroundImage: "url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23F5F8FA%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E)"
            })
          });
          if (twitterEmbed.hasClass('brk-styled-twitter_dark-color')) {
            twitterEmbed.find('.twitter-timeline').contents().find('.timeline-Tweet-text').css({
              color: "#ffffff",
              marginLeft: "20px",
              fontSize: "18px",
              lineHeight: "30px",
              fontFamily: '"Open Sans", sans-serif',
              fontWeight: "300"
            });
          }
          if (twitterEmbed.hasClass('brk-styled-twitter_white-color')) {
            twitterEmbed.find('.twitter-timeline').contents().find('.timeline-Tweet-text').css({
              color: "#ffffff",
              marginLeft: "20px",
              fontSize: "18px",
              lineHeight: "30px",
              fontFamily: '"Open Sans", sans-serif',
              fontWeight: "300"
            });
          }
          if (twitterEmbed.hasClass('brk-styled-twitter_dark-color') || twitterEmbed.hasClass('brk-styled-twitter_white-color')) {
            twitterEmbed.find('.twitter-timeline').contents().find('.link').css({
              color: "#ffffff"
            })
            twitterEmbed.find('.twitter-timeline').contents().find('.hashtag').css({
              color: "#ffffff"
            })
          }
          if (twitterEmbed.hasClass('brk-styled-twitter_horizontal')) {
            twitterEmbed.find('.twitter-timeline').contents().find('.timeline-TweetList').css({
              display: "flex",
              flexWrap: "wrap"
            });
            twitterEmbed.find('.twitter-timeline').contents().find('.timeline-TweetList-tweet').css({
              width: "calc(100%/3)",
              position: "relative",
              minWidth: "300px",
              flexGrow: "1"
            });
          }
        });
        $(this).addClass("rendered");
      });

      var styledTwitter2 = $('.brk-styled-twitter-2:not(.rendered)', context);
      styledTwitter2.each(function () {
        var twitterEmbed = $(this);
        isTwitterReady();
        function isTwitterReady () {
          var head = twitterEmbed.find('.twitter-timeline').contents().find('head');
          if (head.length) {
            $('<link/>', {
              rel: "stylesheet",
              type: "text/css",
              href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400|Montserrat:400,700"
            }).appendTo(head);
          }
          if (head.get(0) === undefined) {
            setTimeout(function(){
              isTwitterReady();
            },500)
          }
        }
        twitterEmbed.delegate('.twitter-timeline', 'DOMSubtreeModified propertychange', function () {
          var singleTwits = twitterEmbed.find('.twitter-timeline').contents().find('.timeline-TweetList-tweet');
          singleTwits.each(function () {
            $(this).find('.timeline-Tweet').css("background-color", "rgba(256,256,256, 0)");
            $(this).find('.TweetAuthor-avatar').css("display", "none");
            $(this).find('.timeline-Viewport').css("overflow", "visible");
            $(this).find('.timeline-Tweet-inReplyTo').css("display", "none");
            $(this).find('.timeline-Tweet-author').css("padding-left", "21px");
            $(this).find('.TweetAuthor-link').css("width", "100%");
            $(this).find('.TweetAuthor-name').css({
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "16px",
              fontWeight: "700",
              color: "#ffffff",
            });
            $(this).find('.TweetAuthor-screenName').css({
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "16px",
              fontWeight: "400",
              color: "#636566",
              float: "left",
              display: "inline-block"

            });
            $(this).find('.TweetAuthor-decoratedName').css({
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "16px",
              fontWeight: "700",
              color: "#ffffff",
              display: "inline-block",
              float: "left"
            });
            $(this).find('.timeline-Tweet-text').css({
              fontSize: "14px",
              lineHeight: "21px",
              fontFamily: '"Open Sans", sans-serif',
              color: "#8d8e8f",
              marginLeft: "21px"
            });
            $(this).find('.link').css({
              color: "#8d8e8f"
            });
            $(this).find('.hashtag').css({
              color: "#8d8e8f"
            });
            $(this).find('time').css("display", "none");
            $(this).find('.timeline-Tweet-media').css("display", "none");
            $(this).find('.timeline-Tweet-actions').css("display", "none");
            $(this).css("position", "relative");
            $(this).find('.timeline-Tweet-metadata').find('a').css({
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
            });
            $(this).find('.timeline-Tweet-brand').css({
              position: "absolute",
              left: "0",
              top: "12px",
              fontSize: "13px"
            });
            $(this).find('.Icon').css('background-image', 'url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23F5F8FA%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E)');
          });
          if (twitterEmbed.hasClass('brk-styled-twitter-slide-2')) {
            twitterEmbed.find('.twitter-timeline').contents().find('.timeline-TweetList-tweet:nth-child(1)').css({
              'display': 'none'
            });
          }
          if (twitterEmbed.hasClass('brk-styled-twitter-slide-3')) {
            twitterEmbed.find('.twitter-timeline').contents().find('.timeline-TweetList-tweet:nth-child(1), .timeline-TweetList-tweet:nth-child(2)')
              .css({
                'display': 'none'
            });
          }
        });
        $(this).addClass("rendered");
      });

      var styledTwitter3 = $('.brk-styled-twitter-3:not(.rendered)', context);
      styledTwitter3.each(function () {
        var twitterEmbed = $(this);
        isTwitterReady();
        function isTwitterReady () {
          var head = twitterEmbed.find('.twitter-timeline').contents().find('head');
          if (head.length) {
            $('<link/>', {
              rel: "stylesheet",
              type: "text/css",
              href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400|Montserrat:400,700"
            }).appendTo(head);
          }
          if (head.get(0) == undefined) {
            setTimeout(function(){
              isTwitterReady();
            },500)
          }
        }
        twitterEmbed.delegate('.twitter-timeline', 'DOMSubtreeModified propertychange', function () {
          var singleTwits = twitterEmbed.find('.twitter-timeline').contents().find('.timeline-TweetList-tweet');
          singleTwits.each(function () {
            $(this).find('.timeline-Tweet').css({
              padding: "10px 0 10px 10px",
              backgroundColor: "rgba(256,256,256, 0)"
            });
            $(this).find('.link').css({
              color: "#fff"
            });
            $(this).find('.hashtag').css({
              color: "#fff"
            });
            $(this).find('.TweetAuthor-avatar').css("display", "none");
            $(this).find('.timeline-Viewport').css("overflow", "visible");
            $(this).find('.timeline-Tweet-inReplyTo').css("display", "none");
            $(this).find('.timeline-Tweet-author').css("padding-left", "21px");
            $(this).find('.TweetAuthor-link').css("width", "100%");
            $(this).find('.TweetAuthor-name').css({
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "16px",
              fontWeight: "700",
              color: "#ffffff",
            });
            $(this).find('.TweetAuthor-screenName').css({
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "14px",
              fontWeight: "400",
              color: "#fff",
              float: "left",
              display: "inline-block",
              lineHeight: "18px"

            });
            $(this).find('.TweetAuthor-decoratedName').css({
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "16px",
              fontWeight: "700",
              color: "#fff",
              display: "inline-block",
              float: "left",
              lineHeight: "22px"
            });
            $(this).find('.timeline-Tweet-text').css({
              fontSize: "14px",
              lineHeight: "21px",
              fontFamily: '"Open Sans", sans-serif',
              color: "#fff",
              marginLeft: "21px",
              marginTop: "10px",
              marginBottom: "5px"
            });
            $(this).find('time').css("display", "none");
            $(this).find('.timeline-Tweet-media').css("display", "none");
            $(this).find('.timeline-Tweet-actions').css("display", "none");
            $(this).css("position", "relative");
            $(this).find('.timeline-Tweet-metadata').find('a').css({
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
            });
            $(this).find('.timeline-Tweet-brand').css({
              position: "absolute",
              left: "0",
              top: "9px",
              fontSize: "13px"
            });
            $(this).find('.Icon').css('background-image', 'url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23F5F8FA%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E)');

            if(twitterEmbed.hasClass('brk-styled-twitter-3_primary')){
              var color = window.getComputedStyle(document.documentElement).getPropertyValue('--text-base-color-2');
              $(this).find('.timeline-Tweet-text').css({
                fontSize: "14px",
                lineHeight: "21px",
                fontFamily: '"Open Sans", sans-serif',
                color: color,
                marginLeft: "21px",
                marginTop: "10px",
                marginBottom: "5px"
              });
              $(this).find('.link.customisable').css({
                color: '#ffffff'
              });
              $(this).find('.TweetAuthor-screenName').css({
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "14px",
                fontWeight: "400",
                color: color,
                float: "left",
                display: "inline-block",
                lineHeight: "18px"
  
              });
            }
          })
        });
        $(this).addClass("rendered");
      });

    }
  }
})(jQuery);