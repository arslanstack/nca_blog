(function ($) {
  'use strict';

  $.fn.brk_hover3d = function (animation, animatedElements) {
    // Effects
    var effect1 = {
      movement: {
        imgWrapper: {
          translation: {
            x: 10,
            y: 10,
            z: 30
          },
          rotation: {
            x: 0,
            y: -10,
            z: 0
          },
          reverseAnimation: {
            duration: 200,
            easing: 'easeOutQuad'
          }
        },
        lines: {
          translation: {
            x: 10,
            y: 10,
            z: [0, 70]
          },
          rotation: {
            x: 0,
            y: 0,
            z: -2
          },
          reverseAnimation: {
            duration: 2000,
            easing: 'easeOutExpo'
          }
        },
        caption: {
          rotation: {
            x: 0,
            y: 0,
            z: 2
          },
          reverseAnimation: {
            duration: 200,
            easing: 'easeOutQuad'
          }
        },
        overlay: {
          translation: {
            x: 10,
            y: -10,
            z: 0
          },
          rotation: {
            x: 0,
            y: 0,
            z: 2
          },
          reverseAnimation: {
            duration: 2000,
            easing: 'easeOutExpo'
          }
        },
        shine: {
          translation: {
            x: 100,
            y: 100,
            z: 0
          },
          reverseAnimation: {
            duration: 200,
            easing: 'easeOutQuad'
          }
        }
      }
    };
    var effect2 = {
      movement: {
        imgWrapper: {
          rotation: {
            x: -10,
            y: 10,
            z: 1
          },
          reverseAnimation: {
            duration: 900,
            easing: 'easeOutCubic'
          }
        },
        caption: {
          translation: {
            x: 20,
            y: 20,
            z: [0, 30]
          },
          rotation: {
            x: [0, 15],
            y: 0,
            z: 0
          },
          reverseAnimation: {
            duration: 1200,
            easing: 'easeOutExpo'
          }
        },
        overlay: {
          translation: {
            x: 10,
            y: 10,
            z: [0, 20]
          },
          reverseAnimation: {
            duration: 1000,
            easing: 'easeOutExpo'
          }
        },
        shine: {
          translation: {
            x: 100,
            y: 100,
            z: 0
          },
          reverseAnimation: {
            duration: 900,
            easing: 'easeOutCubic'
          }
        }
      }
    };
    var effect3 = {
      movement: {
        imgWrapper: {
          rotation: {
            x: -5,
            y: 10,
            z: 0
          },
          reverseAnimation: {
            duration: 50,
            easing: 'easeOutQuad'
          }
        },
        caption: {
          translation: {
            x: 20,
            y: 20,
            z: 0
          },
          reverseAnimation: {
            duration: 200,
            easing: 'easeOutQuad'
          }
        },
        overlay: {
          translation: {
            x: 5,
            y: -5,
            z: 0
          },
          rotation: {
            x: 0,
            y: 0,
            z: 6
          },
          reverseAnimation: {
            duration: 1000,
            easing: 'easeOutQuad'
          }
        },
        shine: {
          translation: {
            x: 50,
            y: 50,
            z: 0
          },
          reverseAnimation: {
            duration: 50,
            easing: 'easeOutQuad'
          }
        }
      }
    };
    var effect4 = {
      movement: {
        imgWrapper: {
          translation: {
            x: 0,
            y: -8,
            z: 0
          },
          rotation: {
            x: 3,
            y: 3,
            z: 0
          },
          reverseAnimation: {
            duration: 1200,
            easing: 'easeOutExpo'
          }
        },
        lines: {
          translation: {
            x: 15,
            y: 15,
            z: [0, 15]
          },
          reverseAnimation: {
            duration: 1200,
            easing: 'easeOutExpo'
          }
        },
        overlay: {
          translation: {
            x: 0,
            y: 8,
            z: 0
          },
          reverseAnimation: {
            duration: 600,
            easing: 'easeOutExpo'
          }
        },
        caption: {
          translation: {
            x: 10,
            y: -15,
            z: 0
          },
          reverseAnimation: {
            duration: 900,
            easing: 'easeOutExpo'
          }
        },
        shine: {
          translation: {
            x: 50,
            y: 50,
            z: 0
          },
          reverseAnimation: {
            duration: 1200,
            easing: 'easeOutExpo'
          }
        }
      }
    };
    var effect5 = {
      movement: {
        lines: {
          translation: {
            x: -5,
            y: 5,
            z: 0
          },
          reverseAnimation: {
            duration: 1000,
            easing: 'easeOutExpo'
          }
        },
        caption: {
          translation: {
            x: 15,
            y: 15,
            z: 0
          },
          rotation: {
            x: 0,
            y: 0,
            z: 3
          },
          reverseAnimation: {
            duration: 1500,
            easing: 'easeOutElastic',
            elasticity: 700
          }
        },
        overlay: {
          translation: {
            x: 15,
            y: -15,
            z: 0
          },
          reverseAnimation: {
            duration: 500,
            easing: 'easeOutExpo'
          }
        },
        shine: {
          translation: {
            x: 50,
            y: 50,
            z: 0
          },
          reverseAnimation: {
            duration: 500,
            easing: 'easeOutExpo'
          }
        }
      }
    };
    var effect6 = {
      movement: {
        imgWrapper: {
          translation: {
            x: 5,
            y: 5,
            z: 0
          },
          reverseAnimation: {
            duration: 800,
            easing: 'easeOutQuart'
          }
        },
        caption: {
          translation: {
            x: 10,
            y: 10,
            z: [0, 50]
          },
          reverseAnimation: {
            duration: 1000,
            easing: 'easeOutQuart'
          }
        },
        shine: {
          translation: {
            x: 50,
            y: 50,
            z: 0
          },
          reverseAnimation: {
            duration: 800,
            easing: 'easeOutQuart'
          }
        }
      }
    };
    var effect7 = {
      movement: {
        lines: {
          translation: {
            x: 40,
            y: 40,
            z: 0
          },
          reverseAnimation: {
            duration: 1500,
            easing: 'easeOutElastic'
          }
        },
        caption: {
          translation: {
            x: 20,
            y: 20,
            z: 0
          },
          rotation: {
            x: 0,
            y: 0,
            z: -5
          },
          reverseAnimation: {
            duration: 1000,
            easing: 'easeOutExpo'
          }
        },
        overlay: {
          translation: {
            x: -30,
            y: -30,
            z: 0
          },
          rotation: {
            x: 0,
            y: 0,
            z: 3
          },
          reverseAnimation: {
            duration: 750,
            easing: 'easeOutExpo'
          }
        },
        shine: {
          translation: {
            x: 100,
            y: 100,
            z: 0
          },
          reverseAnimation: {
            duration: 750,
            easing: 'easeOutExpo'
          }
        }
      }
    };

    function extend(a, b) {
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
      return a;
    }

    function getMousePos(e) {
      var posx = 0,
        posy = 0;
      if (!e) var e = window.event;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      return {
        x: posx,
        y: posy
      }
    }

    function TiltFx(el, options) {
      this.DOM = {};
      this.DOM.el = el;
      this.options = extend({}, this.options);
      extend(this.options, options);
      this._init();
    }

    TiltFx.prototype.options = {
      movement: {
        imgWrapper: {
          translation: {
            x: 0,
            y: 0,
            z: 0
          },
          rotation: {
            x: -5,
            y: 5,
            z: 0
          },
          reverseAnimation: {
            duration: 1200,
            easing: 'easeOutElastic',
            elasticity: 600
          }
        },
        lines: {
          translation: {
            x: 10,
            y: 10,
            z: [0, 10]
          },
          reverseAnimation: {
            duration: 1000,
            easing: 'easeOutExpo',
            elasticity: 600
          }
        },
        caption: {
          translation: {
            x: 20,
            y: 20,
            z: 0
          },
          rotation: {
            x: 0,
            y: 0,
            z: 0
          },
          reverseAnimation: {
            duration: 1500,
            easing: 'easeOutElastic',
            elasticity: 600
          }
        },
        /*
        overlay : {
            translation : {x: 10, y: 10, z: [0,50]},
            reverseAnimation : {
                duration : 500,
                easing : 'easeOutExpo'
            }
        },
        */
        shine: {
          translation: {
            x: 50,
            y: 50,
            z: 0
          },
          reverseAnimation: {
            duration: 1200,
            easing: 'easeOutElastic',
            elasticity: 600
          }
        }
      }
    };

    TiltFx.prototype._init = function () {
      this.DOM.animatable = {};
      this.DOM.animatable.imgWrapper = this.DOM.el.querySelector(animatedElements.imgWrapper);
      this.DOM.animatable.lines = this.DOM.el.querySelector(animatedElements.lines);
      this.DOM.animatable.caption = this.DOM.el.querySelector(animatedElements.caption);
      this.DOM.animatable.overlay = this.DOM.el.querySelector(animatedElements.overlay);
      this.DOM.animatable.shine = this.DOM.el.querySelector(animatedElements.shine);
      this._initEvents();
    };

    TiltFx.prototype._initEvents = function () {
      var self = this;

      this.mouseenterFn = function () {
        for (var key in self.DOM.animatable) {
          anime.remove(self.DOM.animatable[key]);
        }
      };

      this.mousemoveFn = function (ev) {
        requestAnimationFrame(function () {
          self._layout(ev);
        });
      };

      this.mouseleaveFn = function (ev) {
        requestAnimationFrame(function () {
          for (var key in self.DOM.animatable) {
            if (self.options.movement[key] == undefined) {
              continue;
            }
            anime({
              targets: self.DOM.animatable[key],
              duration: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.duration || 0 : 1,
              easing: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.easing || 'linear' : 'linear',
              elasticity: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.elasticity || null : null,
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1,
              translateX: 0,
              translateY: 0,
              translateZ: 0,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0
            });
          }
        });
      };

      this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
      this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
      this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
    };

    TiltFx.prototype._layout = function (ev) {
      // Mouse position relative to the document.
      var mousepos = getMousePos(ev),
        // Document scrolls.
        docScrolls = {
          left: document.body.scrollLeft + document.documentElement.scrollLeft,
          top: document.body.scrollTop + document.documentElement.scrollTop
        },
        bounds = this.DOM.el.getBoundingClientRect(),
        // Mouse position relative to the main element (this.DOM.el).
        relmousepos = {
          x: mousepos.x - bounds.left - docScrolls.left,
          y: mousepos.y - bounds.top - docScrolls.top
        };

      // Movement settings for the animatable elements.
      for (var key in this.DOM.animatable) {
        if (this.DOM.animatable[key] == undefined || this.options.movement[key] == undefined) {
          continue;
        }
        var t = this.options.movement[key] != undefined ? this.options.movement[key].translation || {
            x: 0,
            y: 0,
            z: 0
          } : {
            x: 0,
            y: 0,
            z: 0
          },
          r = this.options.movement[key] != undefined ? this.options.movement[key].rotation || {
            x: 0,
            y: 0,
            z: 0
          } : {
            x: 0,
            y: 0,
            z: 0
          },
          setRange = function (obj) {
            for (var k in obj) {
              if (obj[k] == undefined) {
                obj[k] = [0, 0];
              } else if (typeof obj[k] === 'number') {
                obj[k] = [-1 * obj[k], obj[k]];
              }
            }
          };

        setRange(t);
        setRange(r);

        var transforms = {
          translation: {
            x: (t.x[1] - t.x[0]) / bounds.width * relmousepos.x + t.x[0],
            y: (t.y[1] - t.y[0]) / bounds.height * relmousepos.y + t.y[0],
            z: (t.z[1] - t.z[0]) / bounds.height * relmousepos.y + t.z[0],
          },
          rotation: {
            x: (r.x[1] - r.x[0]) / bounds.height * relmousepos.y + r.x[0],
            y: (r.y[1] - r.y[0]) / bounds.width * relmousepos.x + r.y[0],
            z: (r.z[1] - r.z[0]) / bounds.width * relmousepos.x + r.z[0]
          }
        };

        this.DOM.animatable[key].style.WebkitTransform = this.DOM.animatable[key].style.transform = 'translateX(' + transforms.translation.x + 'px) translateY(' + transforms.translation.y + 'px) translateZ(' + transforms.translation.z + 'px) rotateX(' + transforms.rotation.x + 'deg) rotateY(' + transforms.rotation.y + 'deg) rotateZ(' + transforms.rotation.z + 'deg)';
      }
    };

    var elms = $(this).get();

    //If single animation for all element

    switch (animation) {
      case 'animation1':
      {
        for (var i = 0; i < elms.length; i++) {
          new TiltFx(elms[i], effect1)
        }
        break;
      }
      case 'animation2':
      {
        for (var i = 0; i < elms.length; i++) {
          new TiltFx(elms[i], effect2)
        }
        break;
      }
      case 'animation3':
      {
        for (var i = 0; i < elms.length; i++) {
          new TiltFx(elms[i], effect3)
        }
        break;
      }
      case 'animation4':
      {
        for (var i = 0; i < elms.length; i++) {
          new TiltFx(elms[i], effect4)
        }
        break;
      }
      case 'animation5':
      {
        for (var i = 0; i < elms.length; i++) {
          new TiltFx(elms[i], effect5)
        }
        break;
      }
      case 'animation6':
      {
        for (var i = 0; i < elms.length; i++) {
          new TiltFx(elms[i], effect6)
        }
        break;
      }
      case 'animation7':
      {
        for (var i = 0; i < elms.length; i++) {
          new TiltFx(elms[i], effect7)
        }
        break;
      }
      default:
      {
        for (var i = 0; i < elms.length; i++) {
          new TiltFx(elms[i], effect1)
        }
      }
    }

    //If element has some class with animation name

    for (var i = 0; i < elms.length; i++) {
      if (elms[i].classList.contains('brk_hover3d_1')) {
        new TiltFx(elms[i], effect1)
      }
      if (elms[i].classList.contains('brk_hover3d_2')) {
        new TiltFx(elms[i], effect2)
      }
      if (elms[i].classList.contains('brk_hover3d_3')) {
        new TiltFx(elms[i], effect3)
      }
      if (elms[i].classList.contains('brk_hover3d_4')) {
        new TiltFx(elms[i], effect4)
      }
      if (elms[i].classList.contains('brk_hover3d_5')) {
        new TiltFx(elms[i], effect5)
      }
      if (elms[i].classList.contains('brk_hover3d_6')) {
        new TiltFx(elms[i], effect6)
      }
      if (elms[i].classList.contains('brk_hover3d_7')) {
        new TiltFx(elms[i], effect7)
      }
    }
    return this
  };


  Berserk.behaviors.image_caption_init = {
    attach: function (context, settings) {

      if (typeof $.fn.brk_hover3d !== 'function' || typeof anime !== 'function') {
        console.log('Waiting for the brk_hover3d && anime library');
        setTimeout(Berserk.behaviors.image_caption_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      var defaults = {
        imgWrapper: '',
        caption: ''
      };

      $(context).parent().find('[data-brk-hover3d]:not(.rendered)').addClass('rendered').each(function () {
        var $this   = $(this),
          params    = $this.data('brk-hover3d'),
          animationData = $this.data('brk-hover3d-animation');

        var options = $.extend({}, defaults, params),
          animation = animationData ? animationData : 'animation2';


        $(this).brk_hover3d(animation, options)
      });

    }
  }

})(jQuery);
