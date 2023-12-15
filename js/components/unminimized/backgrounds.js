(function ($) {
  'use strict';

  Berserk.behaviors.background_particleground_init = {
    attach: function (context, settings) {

      var particlesA = $(".brk-particles-standart:not(.rendered)", context);
      var particlesB = $(".brk-particles-fluid:not(.rendered)", context);

      if (particlesA.length || particlesB.length) {

        if (typeof $.fn.particleground === 'undefined') {
          console.log('Waiting for the particleground library');
          setTimeout(Berserk.behaviors.background_particleground_init.attach, settings.timeout_delay, context, settings);
          return;
        }

        particlesA.each(function () {
          if ($(this).length) {
            $(this).particleground({
              minSpeedX: 0.6,
              minSpeedY: 0.6,
              dotColor: 'rgba(255, 255, 255, .3)',
              lineColor: 'rgba(255, 255, 255, .12)',
              density: 10000,
              particleRadius: 8,
              parallaxMultiplier: 8,
              proximity: 80
            })
          }
        }).addClass("rendered");

        particlesB.each(function () {
          if ($(this).length) {
            $(this).particleground({
              minSpeedX: 0.6,
              minSpeedY: 0.6,
              dotColor: '#ffffff',
              lineColor: '#ffffff',
              density: 3000,
              particleRadius: 4,
              parallaxMultiplier: 8,
              proximity: 0
            });
          }
        }).addClass("rendered");
      }

    }
  };

  Berserk.behaviors.background_metaballs_and_dots_init = {
    attach: function (context, settings) {

      if ($('#brk-metaballs:not(.rendered)').length) {
        $("#brk-metaballs:not(.rendered)").addClass("rendered");
        var ge1doot = ge1doot || {
          screen: {
            elem: null,
            callback: null,
            ctx: null,
            width: 0,
            height: 0,
            left: 0,
            top: 0,
            init: function (id, callback, initRes) {
              this.elem = document.getElementById(id);
              this.callback = callback || null;
              if (this.elem.tagName === "CANVAS") this.ctx = this.elem.getContext("2d");
              window.addEventListener('resize', function () {
                this.resize();
              }.bind(this), false);
              this.elem.onselectstart = function () {
                return false;
              };
              this.elem.ondrag = function () {
                return false;
              };
              initRes && this.resize();
              return this;
            },
            resize: function () {
              var o = this.elem;
              this.width = o.offsetWidth;
              this.height = o.offsetHeight;
              for (this.left = 0, this.top = 0; o != null; o = o.offsetParent) {
                this.left += o.offsetLeft;
                this.top += o.offsetTop;
              }
              if (this.ctx) {
                this.elem.width = this.width;
                this.elem.height = this.height;
              }
              this.callback && this.callback();
            },
            pointer: {
              screen: null,
              elem: null,
              callback: null,
              pos: {
                x: 0,
                y: 0
              },
              mov: {
                x: 0,
                y: 0
              },
              drag: {
                x: 0,
                y: 0
              },
              start: {
                x: 0,
                y: 0
              },
              end: {
                x: 0,
                y: 0
              },
              active: false,
              touch: false,
              down: function (e, touch) {
                this.touch = touch;
                e.preventDefault();
                var pointer = touch ? e.touches[0] : e;
                (!touch && document.setCapture) && document.setCapture();
                this.pos.x = this.start.x = pointer.clientX - this.screen.left;
                this.pos.y = this.start.y = pointer.clientY - this.screen.top;
                this.active = true;
                this.callback.down && this.callback.down();
              },
              up: function (e, touch) {
                this.touch = touch;
                e.preventDefault();
                (!touch && document.releaseCapture) && document.releaseCapture();
                this.end.x = this.drag.x;
                this.end.y = this.drag.y;
                this.active = false;
                this.callback.up && this.callback.up();
              },
              move: function (e, touch) {
                this.touch = touch;
                e.preventDefault();
                var pointer = touch ? e.touches[0] : e;
                this.mov.x = pointer.clientX - this.screen.left;
                this.mov.y = pointer.clientY - this.screen.top;
                if (this.active) {
                  this.pos.x = this.mov.x;
                  this.pos.y = this.mov.y;
                  this.drag.x = this.end.x - (this.pos.x - this.start.x);
                  this.drag.y = this.end.y - (this.pos.y - this.start.y);
                  this.callback.move && this.callback.move();
                }
              },
              init: function (callback) {
                this.screen = ge1doot.screen;
                this.elem = this.screen.elem;
                this.callback = callback || {};
                if ('ontouchstart' in window) {
                  // touch
                  this.elem.ontouchstart = function (e) {
                    this.down(e, true);
                  }.bind(this);
                  this.elem.ontouchmove = function (e) {
                    this.move(e, true);
                  }.bind(this);
                  this.elem.ontouchend = function (e) {
                    this.up(e, true);
                  }.bind(this);
                  this.elem.ontouchcancel = function (e) {
                    this.up(e, true);
                  }.bind(this);
                }
                // mouse
                document.addEventListener("mousedown", function (e) {
                  this.down(e, false);
                }.bind(this), true);
                document.addEventListener("mousemove", function (e) {
                  this.move(e, false);
                }.bind(this), true);
                document.addEventListener("mouseup", function (e) {
                  this.up(e, false);
                }.bind(this), true);
                return this;
              }
            },
            loadImages: function (container) {
              var elem = document.getElementById(container),
                canvas = document.createElement('canvas'),
                ctx,
                init = false,
                complete = false,
                n = document.images.length;

              function arc(color, val, r) {
                ctx.beginPath();
                ctx.moveTo(50, 50);
                ctx.arc(50, 50, r, 0, val);
                ctx.fillStyle = color;
                ctx.fill();
                ctx.closePath();
              }

              function load() {
                if (complete) {
                  canvas.style.display = "none";
                  return;
                }
                var m = 0,
                  timer = 32;
                for (var i = 0; i < n; i++) m += (document.images[i].complete) ? 1 : 0;
                if (m < n) {
                  if (!init) {
                    init = true;
                    canvas.style.width = canvas.style.height = "100px";
                    canvas.width = canvas.height = 100;
                    canvas.style.position = "fixed";
                    canvas.style.left = canvas.style.top = "50%";
                    canvas.style.marginTop = canvas.style.marginLeft = "-50px";
                    canvas.style.zIndex = 10000;
                    ctx = canvas.getContext("2d");
                    arc('rgba(64,64,64, .1)', Math.PI * 2, 48);
                    elem.appendChild(canvas);
                  }
                  arc('rgb(255,255,255)', (m / n) * 2 * Math.PI, 50);
                } else {
                  if (init) {
                    arc('rgb(255,255,255)', 2 * Math.PI, 50);
                    timer = 300;
                  }
                  complete = true;
                }
                setTimeout(load, timer);
              }

              setTimeout(load, 32);
            }
          }
        };
        /* ===================================== */
        ! function () {
          "use strict";
          var lava0, lava1;
          // ==== Point constructor ====
          var Point = function (x, y) {
            this.x = x;
            this.y = y;
            this.magnitude = x * x + y * y;
            this.computed = 0;
            this.force = 0;
          };
          Point.prototype.add = function (p) {
            return new Point(this.x + p.x, this.y + p.y);
          };
          // ==== Ball constructor ====
          var Ball = function (parent) {
            this.vel = new Point(
              (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.25), (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 1)
            );
            this.pos = new Point(
              parent.width * 0 + Math.random() * parent.width * 0.5,
              parent.height * 0 + Math.random() * parent.height * 0.5
            );
            this.size = (parent.wh / 25) + Math.random() * (parent.wh / 30);
            this.width = parent.width;
            this.height = parent.height;
          };
          // ==== move balls ====
          Ball.prototype.move = function () {
            // ---- interact with pointer ----
            if (pointer.active) {
              var dx = pointer.pos.x - this.pos.x;
              var dy = pointer.pos.y - this.pos.y;
              var a = Math.atan2(dy, dx);
              var v = -Math.min(
                10,
                500 / Math.sqrt(dx * dx + dy * dy)
              );
              this.pos = this.pos.add(
                new Point(
                  Math.cos(a) * v,
                  Math.sin(a) * v
                )
              );
            }
            // ---- bounce borders ----
            if (this.pos.x >= this.width - this.size) {
              if (this.vel.x > 0) this.vel.x = -this.vel.x;
              this.pos.x = this.width - this.size;
            } else if (this.pos.x <= this.size) {
              if (this.vel.x < 0) this.vel.x = -this.vel.x;
              this.pos.x = this.size;
            }
            if (this.pos.y >= this.height - this.size) {
              if (this.vel.y > 0) this.vel.y = -this.vel.y;
              this.pos.y = this.height - this.size;
            } else if (this.pos.y <= this.size) {
              if (this.vel.y < 0) this.vel.y = -this.vel.y;
              this.pos.y = this.size;
            }
            // ---- velocity ----
            this.pos = this.pos.add(this.vel);
          };
          // ==== lavalamp constructor ====
          var LavaLamp = function (width, height, numBalls, c0, c1) {
            this.step = 5;
            this.width = width;
            this.height = height;
            this.wh = Math.min(width, height);
            this.sx = Math.floor(this.width / this.step);
            this.sy = Math.floor(this.height / this.step);
            this.paint = false;
            this.metaFill = createRadialGradient(width, height, width, c0, c1);
            this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0];
            this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
            this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0];
            this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1];
            this.grid = [];
            this.balls = [];
            this.iter = 0;
            this.sign = 1;
            // ---- init grid ----
            for (var i = 0; i < (this.sx + 2) * (this.sy + 2); i++) {
              this.grid[i] = new Point(
                (i % (this.sx + 2)) * this.step, (Math.floor(i / (this.sx + 2))) * this.step
              )
            }
            // ---- create metaballs ----
            for (var i = 0; i < numBalls; i++) {
              this.balls[i] = new Ball(this);
            }
          };
          // ==== compute cell force ====
          LavaLamp.prototype.computeForce = function (x, y, idx) {
            var force;
            var id = idx || x + y * (this.sx + 2);
            if (x === 0 || y === 0 || x === this.sx || y === this.sy) {
              var force = 0.6 * this.sign;
            } else {
              var cell = this.grid[id];
              var force = 0;
              var i = 0,
                ball;
              while (ball = this.balls[i++]) {
                force += ball.size * ball.size / (-2 * cell.x * ball.pos.x - 2 * cell.y * ball.pos.y + ball.pos.magnitude + cell.magnitude);
              }
              force *= this.sign
            }
            this.grid[id].force = force;
            return force;
          };
          // ---- compute cell ----
          LavaLamp.prototype.marchingSquares = function (next) {
            var x = next[0];
            var y = next[1];
            var pdir = next[2];
            var id = x + y * (this.sx + 2);
            if (this.grid[id].computed === this.iter) return false;
            var dir, mscase = 0;
            // ---- neighbors force ----
            for (var i = 0; i < 4; i++) {
              var idn = (x + this.ix[i + 12]) + (y + this.ix[i + 16]) * (this.sx + 2);
              var force = this.grid[idn].force;
              if ((force > 0 && this.sign < 0) || (force < 0 && this.sign > 0) || !force) {
                // ---- compute force if not in buffer ----
                force = this.computeForce(
                  x + this.ix[i + 12],
                  y + this.ix[i + 16],
                  idn
                );
              }
              if (Math.abs(force) > 1) mscase += Math.pow(2, i);
            }
            if (mscase === 15) {
              // --- inside ---
              return [x, y - 1, false];
            } else {
              // ---- ambiguous cases ----
              if (mscase === 5) dir = (pdir === 2) ? 3 : 1;
              else if (mscase === 10) dir = (pdir === 3) ? 0 : 2;
              else {
                // ---- lookup ----
                dir = this.mscases[mscase];
                this.grid[id].computed = this.iter;
              }
              // ---- draw line ----
              var ix = this.step / (
                Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 2]) + (y + this.ply[4 * dir + 2]) * (this.sx + 2)].force) - 1) /
                Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 3]) + (y + this.ply[4 * dir + 3]) * (this.sx + 2)].force) - 1) + 1
              );
              ctx.lineTo(
                this.grid[(x + this.plx[4 * dir + 0]) + (y + this.ply[4 * dir + 0]) * (this.sx + 2)].x + this.ix[dir] * ix,
                this.grid[(x + this.plx[4 * dir + 1]) + (y + this.ply[4 * dir + 1]) * (this.sx + 2)].y + this.ix[dir + 4] * ix
              );
              this.paint = true;
              // ---- next ----
              return [
                x + this.ix[dir + 4],
                y + this.ix[dir + 8],
                dir
              ];
            }
          };
          LavaLamp.prototype.renderMetaballs = function () {
            var i = 0,
              ball;
            while (ball = this.balls[i++]) ball.move();
            // ---- reset grid ----
            this.iter++;
            this.sign = -this.sign;
            this.paint = false;
            ctx.fillStyle = this.metaFill;
            ctx.beginPath();
            // ---- compute metaballs ----
            i = 0;
            ctx.shadowBlur = 15;
            ctx.shadowColor = "rgba(0, 0, 0, .2)";
            while (ball = this.balls[i++]) {
              // ---- first cell ----
              var next = [
                Math.round(ball.pos.x / this.step),
                Math.round(ball.pos.y / this.step), false
              ];
              // ---- marching squares ----
              do {
                next = this.marchingSquares(next);
              } while (next);
              // ---- fill and close path ----
              if (this.paint) {
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                this.paint = false;
              }
            }
          };
          // ---- gradients ----
          var createRadialGradient = function (w, h, r, c0, c1) {
            var gradient = ctx.createRadialGradient(
              w / 2, h / 2, 0,
              w / 2, h / 2, r
            );
            gradient.addColorStop(0, c0);
            gradient.addColorStop(1, c1);
            return gradient;
          };
          // ==== main loop ====
          var run = function () {
            requestAnimationFrame(run);
            ctx.clearRect(0, 0, screen.width, screen.height);
            lava0.renderMetaballs();
            lava1.renderMetaballs();
          };
          // ---- canvas ----
          var screen = ge1doot.screen.init("brk-metaballs", null, true),
            ctx = screen.ctx,
            pointer = screen.pointer.init();
          screen.resize();
          // ---- create LavaLamps ----
          lava0 = new LavaLamp(screen.width, screen.height, 10, "rgba(133, 21, 130, .8)", "rgba(241, 79, 107, .8)");
          lava1 = new LavaLamp(screen.width, screen.height, 10, "rgba(133, 21, 130, .8)", "rgba(241, 79, 107, .8)");
          // ---- start engine ----
          run();
        }();

      }

      // dot random moves
      $(".brk-animated-dot:not(.rendered)", context).each(function () {
        var dot = $(this).find(".brk-animated-dot__figure");

        function makeNewPosition($container) {
          // Get viewport dimensions (remove the dimension of the div)
          $container = ($container || $(window))
          var h = $container.height() - 50;
          var w = $container.width() - 50;

          var nh = Math.floor(Math.random() * h);
          var nw = Math.floor(Math.random() * w);

          return [nh, nw];

        }

        function animateDiv() {
          var newq = makeNewPosition(dot.parent());
          var oldq = dot.offset();
          var speed = calcSpeed([oldq.top, oldq.left], newq);

          dot.animate({
            top: newq[0],
            left: newq[1]
          }, speed, function () {
            animateDiv();
          });

        };

        function calcSpeed(prev, next) {

          var x = Math.abs(prev[1] - next[1]);
          var y = Math.abs(prev[0] - next[0]);

          var greatest = x > y ? x : y;

          var speedModifier = 1;

          var speed = Math.ceil(greatest / speedModifier);

          return speed;

        }
        animateDiv();
        $(this).addClass("rendered");
      }).addClass("rendered");
      // dot random moves end

    }
  };

  Berserk.behaviors.background_skrollr_init = {
    attach: function (context, settings) {
      if ($('[data-skrollr]:not(.rendered)').length) {
        if (typeof skrollr === 'undefined') {
          console.log('Waiting for the skrollr library');
          setTimeout(Berserk.behaviors.background_skrollr_init.attach, settings.timeout_delay, context, settings);
          return;
        }

        var windowWidth = window.innerWidth || $(window).width();
        if (windowWidth >= 992) {
          $('[data-skrollr]:not(.rendered)').addClass("rendered");
          var s = skrollr.init();
          console.log("skrollr init")
        }
      }
    }
  };

  Berserk.behaviors.background_paper_init = {
    attach: function (context, settings) {

      if (($('#brk-backgrounds__canvas-1:not(.rendered)').length != '') && ($('#brk-backgrounds__canvas-2:not(.rendered)').length != '')) {

        if (typeof paper === 'undefined') {
          console.log('Waiting for the paper library');
          setTimeout(Berserk.behaviors.background_paper_init.attach, settings.timeout_delay, context, settings);
          return;
        }

        $("#brk-backgrounds__canvas-1:not(.rendered)").addClass("rendered");
        $("#brk-backgrounds__canvas-2:not(.rendered)").addClass("rendered");

        (function () {
          paper.install(window);
          paper.setup('brk-backgrounds__canvas-1');

          var width, height, center;
          var points = 7;
          var smooth = true;
          var path = new paper.Path({
            fillColor: 'rgba(255,117,69,.98)'
          });
          var mousePos = view.center;
          var pathHeight = mousePos.y / 2;
          initializePath();

          function initializePath() {
            center = view.center;
            width = view.size.width;
            height = view.size.height / 1.1;
            path.segments = [];
            path.add(view.bounds.bottomLeft);
            for (var i = 1; i < points; i++) {
              var point = new paper.Point(width / points * i, center.y);
              path.add(point);
            }
            path.add(view.bounds.bottomRight);
            path.fullySelected = false;
          }

          view.onFrame = function (event) {
            pathHeight += (center.y - mousePos.y - pathHeight) / 10;
            for (var i = 1; i < points; i++) {
              var sinSeed = event.count + (i + i % 10) * 100;
              var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
              var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
              path.segments[i].point.y = yPos;
            }
            if (smooth)
              path.smooth({
                type: 'continuous'
              });
          };

          view.onMouseMove = function (event) {
            mousePos = event.point;
          };

          // Reposition the path whenever the window is resized:
          view.onResize = function (event) {
            initializePath();
          }
        })();

        (function () {
          paper.install(window);
          paper.setup('brk-backgrounds__canvas-2');

          var width, height, center;
          var points = 6;
          var smooth = true;
          var path = new paper.Path({
            fillColor: 'rgba(92,202,229,.96)'
          });
          var mousePos = view.center;
          var pathHeight = mousePos.y / 2;
          initializePath();

          function initializePath() {
            center = view.center;
            width = view.size.width;
            height = view.size.height / 6;
            path.segments = [];
            path.add(view.bounds.topLeft);
            for (var i = 1; i < points; i++) {
              var point = new paper.Point(width / points * i, center.y);
              path.add(point);
            }
            path.add(view.bounds.topRight);
            path.fullySelected = false;
          }

          view.onFrame = function (event) {
            pathHeight += (center.y - mousePos.y - pathHeight) / 10;
            for (var i = 1; i < points; i++) {
              var sinSeed = event.count + (i + i % 10) * 100;
              var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
              var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
              path.segments[i].point.y = yPos;
            }
            if (smooth)
              path.smooth({
                type: 'continuous'
              });
          };

          view.onMouseMove = function (event) {
            mousePos = event.point;
          };

          // Reposition the path whenever the window is resized:
          view.onResize = function (event) {
            initializePath();
          }
        })();
      }
    }
  };

  Berserk.behaviors.background_hexagons_init = {
    attach: function (context, settings) {

      if ($(".brk-playing-hexagons:not(.rendered)").length) {
        $('.brk-playing-hexagons:not(.rendered)').each(function (i) {
          var $this = $(this),
            $hexagon_radius = $this.data('hexagon-radius'),
            $hexagon_max_speed = $this.data('hexagon-max-speed'),
            $hexagon_between = $this.data('hexagon-between'),
            $hexagon_line_width = $this.data('hexagon-line-width'),
            $hexagon_color = $this.data('hexagon-color');

          var hexagon_radius = $hexagon_radius ? $hexagon_radius : 50,
            hexagon_max_absolute_speed = $hexagon_max_speed ? $hexagon_max_speed : 0.1,
            hexagon_space_between = $hexagon_between ? $hexagon_between : 2,
            hexagon_line_width = $hexagon_line_width ? $hexagon_line_width : 1,
            hexagon_color = $hexagon_color ? $hexagon_color : 'cyan',
            canvas, ctx,
            hexagons = [],
            s3p3 = Math.sqrt(3);

          $this.attr('id', 'brk-playing-hexagons-' + i);

          function init() {

            canvas = document.getElementById('brk-playing-hexagons-' + i);
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.width = canvas.width + 'px';
            canvas.style.height = canvas.height + 'px';
            ctx = canvas.getContext('2d');

            ctx.globalCompositeOperation = "source-over";

            var hw = Math.ceil(canvas.width / (1.5 * hexagon_radius + hexagon_space_between * 2)) + 1;
            var hh = Math.ceil(canvas.height / (s3p3 * hexagon_radius + hexagon_space_between * 2)) + 1;

            for (var x = 0; x < hw; x++)
              for (var y = 0; y < hh; y++)
                addHexagon(
                  hexagon_radius + hexagon_space_between + (1.5 * hexagon_radius + hexagon_space_between * 2) * x,
                  s3p3 * hexagon_radius / 2 + hexagon_space_between + (s3p3 * hexagon_radius + hexagon_space_between * 2) * y - (x % 2 ? s3p3 * hexagon_radius / 2 : 0), {
                    l: 0
                  }
                );

            ctx.lineWidth = hexagon_line_width;

            loop();

          }

          function loop() {
            requestAnimFrame(loop);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();

            for (var i = 0; i < hexagons.length; i++)
              drawHexagonPath(i);

            ctx.shadowColor = hexagon_color;
            ctx.shadowBlur = 20;
            ctx.strokeStyle = hexagon_color;
            ctx.stroke();

          }

          function addHexagon(x, y, opts) {
            var l = Math.floor(Math.random() * 6),
              p = Math.random();

            if (!opts) opts = {};

            hexagons.push({
              sl: opts.l || opts.l === 0 ? opts.l : l,
              p: opts.p || opts.p === 0 ? opts.p : p,
              x: x,
              y: y,
              speed: opts.speed || opts.speed === 0 ? opts.speed : (Math.random() * hexagon_max_absolute_speed * 2 - hexagon_max_absolute_speed)
            });
          }

          function drawHexagonPath(hex_index) {

            var hex = hexagons[hex_index];



            ctx.moveTo(
              hex.x + Math.cos(Math.PI / 3 * hex.sl) * hexagon_radius + Math.cos(Math.PI / 3 * (hex.sl + 2)) * hexagon_radius * hex.p,
              hex.y + Math.sin(Math.PI / 3 * hex.sl) * hexagon_radius + Math.sin(Math.PI / 3 * (hex.sl + 2)) * hexagon_radius * hex.p
            );

            //ctx.moveTo(hex.x, hex.y);

            ctx.lineTo(
              hex.x + Math.cos(Math.PI / 3 * (hex.sl + 1)) * hexagon_radius,
              hex.y + Math.sin(Math.PI / 3 * (hex.sl + 1)) * hexagon_radius
            );

            ctx.lineTo(
              hex.x + Math.cos(Math.PI / 3 * (hex.sl + 2)) * hexagon_radius,
              hex.y + Math.sin(Math.PI / 3 * (hex.sl + 2)) * hexagon_radius
            );

            ctx.lineTo(
              hex.x + Math.cos(Math.PI / 3 * (hex.sl + 3)) * hexagon_radius,
              hex.y + Math.sin(Math.PI / 3 * (hex.sl + 3)) * hexagon_radius
            );

            ctx.lineTo(
              hex.x + Math.cos(Math.PI / 3 * (hex.sl + 3)) * hexagon_radius + Math.cos(Math.PI / 3 * (hex.sl + 5)) * hexagon_radius * hex.p,
              hex.y + Math.sin(Math.PI / 3 * (hex.sl + 3)) * hexagon_radius + Math.sin(Math.PI / 3 * (hex.sl + 5)) * hexagon_radius * hex.p
            );

            hex.p += hex.speed;
            if (hex.p > 1 || hex.p < 0) {
              hex.p = hex.speed < 0 ? 1 : 0;
              hex.sl += hex.speed < 0 ? -1 : 1;
              hex.sl = hex.sl % 6;
              hex.sl = hex.sl < 0 ? 4 - hex.sl : hex.sl;
            }

            hexagons[hex_index] = hex;

          }

          window.onload = function () {
            init();
          };

          window.requestAnimFrame = (function () {
            return window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              function (callback) {
                window.setTimeout(callback, 1000 / 60);
              };
          })();
        }).addClass("rendered");
      }

      if ($("#hexagon-glow:not(.rendered)").length) {
        $("#hexagon-glow:not(.rendered)").addClass("rendered");

        Object.getOwnPropertyNames(Math).map(function (p) {
          window[p] = Math[p];
        });

        var HEX_CRAD = 32,
          HEX_BG = '#171717',
          HEX_HL = '#2a2a2a',
          HEX_HLW = 2,
          HEX_GAP = 4,
          NEON_PALETE = [
            '#cb3301', '#ff0066',
            '#ff6666', '#feff99',
            '#ffff67', '#ccff66',
            '#99fe00', '#fe99ff',
            '#ff99cb', '#fe349a',
            '#cc99fe', '#6599ff',
            '#00ccff', '#ffffff'
          ],
          T_SWITCH = 80,

          unit_x = 3 * HEX_CRAD + HEX_GAP * sqrt(3),
          unit_y = HEX_CRAD * sqrt(3) * .5 + .5 * HEX_GAP,
          off_x = 1.5 * HEX_CRAD + HEX_GAP * sqrt(3) * .5,

          /* extract a work palette */
          wp = NEON_PALETE.map(function (c) {
            var num = parseInt(c.replace('#', ''), 16);

            return {
              'r': num >> 16 & 0xFF,
              'g': num >> 8 & 0xFF,
              'b': num & 0xFF
            };
          }),
          nwp = wp.length,
          csi = 0,

          f = 1 / T_SWITCH,

          c = document.getElementById('hexagon-glow').querySelectorAll('canvas'),
          n = c.length,
          w, h, _min,
          ctx = [],
          grid, source = null,
          t = 0,
          request_id = null;

        var GridItem = function (x, y) {
          this.x = x || 0;
          this.y = y || 0;
          this.points = {
            'hex': [],
            'hl': []
          };

          this.init = function () {
            var x, y, a, ba = PI / 3,
              ri = HEX_CRAD - .5 * HEX_HLW;

            for (var i = 0; i < 6; i++) {
              a = i * ba;
              x = this.x + HEX_CRAD * cos(a);
              y = this.y + HEX_CRAD * sin(a);

              this.points.hex.push({
                'x': x,
                'y': y
              });

              if (i > 2) {
                x = this.x + ri * cos(a);
                y = this.y + ri * sin(a);

                this.points.hl.push({
                  'x': x,
                  'y': y
                });
              }
            }
          };

          this.draw = function (ct) {
            for (var i = 0; i < 6; i++) {
              ct[(i === 0 ? 'move' : 'line') + 'To'](
                this.points.hex[i].x,
                this.points.hex[i].y
              );
            }
          };

          this.highlight = function (ct) {
            for (var i = 0; i < 3; i++) {
              ct[(i === 0 ? 'move' : 'line') + 'To'](
                this.points.hl[i].x,
                this.points.hl[i].y
              );
            }
          };

          this.init();
        };

        var Grid = function (rows, cols) {
          this.cols = cols || 16;
          this.rows = rows || 16;
          this.items = [];
          this.n = this.items.length;

          this.init = function () {
            var x, y;

            for (var row = 0; row < this.rows; row++) {
              y = row * unit_y;

              for (var col = 0; col < this.cols; col++) {
                x = ((row % 2 == 0) ? 0 : off_x) + col * unit_x;

                this.items.push(new GridItem(x, y));
              }
            }

            this.n = this.items.length;
          };

          this.draw = function (ct) {
            ct.fillStyle = HEX_BG;
            ct.beginPath();

            for (var i = 0; i < this.n; i++) {
              this.items[i].draw(ct);
            }

            ct.closePath();
            ct.fill();

            ct.strokeStyle = HEX_HL;
            ct.beginPath();

            for (var i = 0; i < this.n; i++) {
              this.items[i].highlight(ct);
            }

            ct.closePath();
            ct.stroke();
          };

          this.init();
        };

        var init = function () {
          var s = getComputedStyle(c[0]),
            rows, cols;

          w = ~~s.width.split('px')[0];
          h = ~~s.height.split('px')[0];
          _min = .75 * min(w, h);

          rows = ~~(h / unit_y) + 2;
          cols = ~~(w / unit_x) + 2;

          for (var i = 0; i < n; i++) {
            c[i].width = w;
            c[i].height = h;
            ctx[i] = c[i].getContext('2d');
          }

          grid = new Grid(rows, cols);
          grid.draw(ctx[1]);

          if (!source) {
            source = {
              'x': ~~(w / 2),
              'y': ~~(h / 2)
            };
          }

          neon();
        };

        var neon = function () {
          var k = (t % T_SWITCH) * f,
            rgb = {
              'r': ~~(wp[csi].r * (1 - k) +
                wp[(csi + 1) % nwp].r * k),
              'g': ~~(wp[csi].g * (1 - k) +
                wp[(csi + 1) % nwp].g * k),
              'b': ~~(wp[csi].b * (1 - k) +
                wp[(csi + 1) % nwp].b * k)
            },
            rgb_str = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')',
            light = ctx[0].createRadialGradient(
              source.x, source.y, 0,
              source.x, source.y, .875 * _min
            ),
            stp;

          stp = .5 - .5 * sin(7 * t * f) * cos(5 * t * f) * sin(3 * t * f);

          light.addColorStop(0, rgb_str);
          light.addColorStop(stp, 'rgba(0,0,0,.03)');

          fillBackground('rgba(0,0,0,.02)');
          fillBackground(light);

          t++;

          if (t % T_SWITCH === 0) {
            csi++;

            if (csi === nwp) {
              csi = 0;
              t = 0;
            }
          }

          request_id = requestAnimationFrame(neon);
        };

        var fillBackground = function (bg_fill) {
          ctx[0].fillStyle = bg_fill;
          ctx[0].beginPath();
          ctx[0].rect(0, 0, w, h);
          ctx[0].closePath();
          ctx[0].fill();
        };

        init();

        addEventListener('resize', init, false);

        addEventListener('mousemove', function (e) {
          source = {
            'x': e.clientX,
            'y': e.clientY
          };
        }, false);
      }

    }
  }

})(jQuery);