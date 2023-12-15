! function(w) {
    "use strict";
    Berserk.behaviors.swiper_slider_init = {
        attach: function(e, i) {
            if ("undefined" == typeof Swiper) return console.log("Waiting for the swiper library"), void setTimeout(Berserk.behaviors.swiper_slider_init.attach, i.timeout_delay, e, i);
            w(e).parent().find(".filmstrip-slider:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this),
                    i = e.find(".filmstrip-slider-container"),
                    n = e.find(".brk-scrollbar"),
                    t = n.find(".brk-scrollbar-track"),
                    a = (n.find(".brk-scrollbar-drag"), e.data("perwiew")),
                    s = e.data("spacebetween");
                switch (a = a || "auto", !0) {
                    case 0 <= e.attr("class").indexOf("timeline--strict"):
                    case 0 <= e.attr("class").indexOf("timeline--masonry"):
                        var r = "",
                            d = 0;
                        void 0 !== s && "" !== s || (s = 76);
                        var l = new Swiper(i, {
                                init: !1,
                                freeMode: !1,
                                slidesPerView: a,
                                resistance: !0,
                                spaceBetween: s,
                                resistanceRatio: 0,
                                pagination: {
                                    el: ".swiper-pagination",
                                    type: "bullets",
                                    clickable: !0,
                                    renderBullet: function(e, i) {
                                        return d++, r = w(this.slides[e]).data("caption") ? "<strong>" + w(this.slides[e]).data("caption") + "</strong>" : "", '<span class="' + i + '" style="width: ' + 100 / this.slides.length + '%;">' + r + "</span>"
                                    }
                                },
                                watchSlidesProgress: !0,
                                watchSlidesVisibility: !0,
                                on: {
                                    transitionStart: function() {
                                        c()
                                    },
                                    resize: function() {
                                        p(this)
                                    }
                                }
                            }),
                            o = w('<span class="swiper-progress__bar"></span>'),
                            c = function() {
                                l.pagination.bullets.each(function(e) {
                                    w(this).hasClass("swiper-pagination-bullet-active") && o.css("transform", "translate3d(" + (w(this).width() / 2 + w(this).offset().left - w(window).width() / 2) + "px, 0px, 0px)")
                                })
                            },
                            p = function(e) {
                                e.$el.find(".swiper-pagination > .swiper-pagination-bullet").each(function() {
                                    w(this).width(100 / d + "%")
                                })
                            };
                        window.addEventListener("load", function() {
                            setTimeout(function() {
                                l.init(), o.appendTo(l.pagination.$el), p(l)
                            }, 300), setTimeout(function() {
                                c()
                            }, 350)
                        }), w(window).on("resize", function() {
                            p(l)
                        });
                        break;
                    case 0 <= e.attr("class").indexOf("slider--scroll"):
                        void 0 !== s && "" !== s || (s = 0);
                        var u = new Swiper(i, {
                            init: !1,
                            freeMode: !0,
                            slidesPerView: a,
                            spaceBetween: s,
                            resistance: !1,
                            resistanceRatio: 0,
                            scrollbar: {
                                el: n,
                                draggable: !0,
                                snapOnRelease: !1,
                                dragSize: 8,
                                dragClass: "brk-scrollbar-drag"
                            },
                            on: {
                                setTranslate: function() {
                                    var e = this.progress;
                                    t.css({
                                        width: 100 * e + "%"
                                    })
                                },
                                setTransition: function(e) {
                                    t.css({
                                        "transition-duration": e + "ms"
                                    })
                                }
                            }
                        });
                        w(window).on("load", function() {
                            setTimeout(function() {
                                u.init()
                            }, 350)
                        })
                }
            }), w(e).parent().find(".staff-slider:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this),
                    i = e.children(".staff-slider-container"),
                    n = e.children(".dots-base-staff-skin"),
                    t = e.data("perwiew"),
                    a = n.children(".pagination"),
                    s = n.children(".button-next"),
                    r = n.children(".button-prev");
                t = t || "auto";
                var d = new Swiper(i, {
                    init: !1,
                    slidesPerView: t,
                    spaceBetween: 30,
                    loop: !0,
                    loopFillGroupWithBlank: !0,
                    centeredSlides: !0,
                    slidesPerGroup: 3,
                    speed: 700,
                    pagination: {
                        el: a,
                        clickable: !0,
                        renderBullet: function(e, i) {
                            return '<li class="' + i + '"></li>'
                        }
                    },
                    navigation: {
                        nextEl: s,
                        prevEl: r
                    },
                    breakpoints: {
                        480: {
                            slidesPerGroup: 1,
                            spaceBetween: 10,
                            slidesPerView: "auto"
                        },
                        992: {
                            slidesPerGroup: 1,
                            slidesPerView: "auto"
                        },
                        1680: {
                            slidesPerView: "auto"
                        }
                    }
                });
                window.addEventListener("load", function(e) {
                    setTimeout(function() {
                        d.init()
                    }, 300)
                })
            }), w(e).parent().find(".colored-slider:not(.rendered)").addClass("rendered").each(function() {
                var e, i = w(this);
                e = new Swiper(i, {
                    init: !1,
                    slidesPerView: 3,
                    spaceBetween: 0,
                    loop: !0,
                    loopedSlides: 4,
                    speed: 1e3,
                    centeredSlides: !0,
                    loopFillGroupWithBlank: !0,
                    navigation: {
                        nextEl: ".button-next",
                        prevEl: ".button-prev"
                    },
                    breakpoints: {
                        991: {
                            slidesPerView: 2
                        },
                        767: {
                            slidesPerView: 1
                        }
                    }
                }), w(window).on("load", function() {
                    setTimeout(function() {
                        e.init()
                    }, 350)
                })
            }), w(e).parent().find(".dash-one-slider:not(.rendered)").addClass("rendered").each(function() {
                var e, i = w(this);
                e = new Swiper(i, {
                    init: !1,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: !0,
                    speed: 800,
                    autoHeight: !0,
                    navigation: {
                        nextEl: ".button-next",
                        prevEl: ".button-prev"
                    }
                }), w(document).ready(function() {
                    setTimeout(function() {
                        e.init()
                    }, 300)
                })
            }), w(e).parent().find(".brk-testimonials-dash-two:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this),
                    i = e.children(".dash-two-slider"),
                    a = e.children(".dash-two-pagination"),
                    s = new Swiper(i, {
                        init: !1,
                        spaceBetween: 0,
                        speed: 1e3,
                        initialSlide: 2,
                        autoHeight: !0,
                        pagination: {
                            el: a,
                            bulletClass: "dash-two-pagination-bullet",
                            bulletActiveClass: "dash-two-pagination-bullet-active",
                            clickable: !0,
                            dynamicBullets: !0
                        }
                    });
                setTimeout(function() {
                    s.init();
                    var e = s.slides.children(".brk-testimonials-dash-two__text-reviews"),
                        n = a.children(".dash-two-pagination-bullet"),
                        t = 0;
                    e.each(function() {
                        var e = w(this).data("img"),
                            i = n[t];
                        w(i).css("backgroundImage", "url(" + e + ")"), t++
                    })
                }, 300)
            }), w(e).parent().find(".dash-three-slider:not(.rendered)").addClass("rendered").each(function() {
                var e;
                e = w(this).hasClass("dash-three-slider_single") ? new Swiper(w(this), {
                    init: !1,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    centeredSlides: !0,
                    loopedSlides: 2,
                    loop: !0,
                    speed: 800,
                    autoplay: {
                        delay: 8e3
                    },
                    pagination: {
                        el: ".swiper-pagination-base",
                        dynamicBullets: !0,
                        clickable: !0
                    },
                    breakpoints: {
                        992: {
                            slidesPerView: 1,
                            loopedSlides: 2,
                            spaceBetween: 0
                        }
                    }
                }) : new Swiper(w(this), {
                    init: !1,
                    slidesPerView: 3,
                    spaceBetween: 20,
                    centeredSlides: !0,
                    loopedSlides: 5,
                    loop: !0,
                    speed: 800,
                    pagination: {
                        el: ".swiper-pagination-base",
                        dynamicBullets: !0,
                        clickable: !0
                    },
                    breakpoints: {
                        992: {
                            slidesPerView: 1,
                            loopedSlides: 2,
                            spaceBetween: 0
                        }
                    }
                }), setTimeout(function() {
                    e.init()
                }, 300)
            }), w(e).parent().find(".brk-testimonials-dash-four:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this),
                    i = e.children(".dash-four-slider"),
                    n = e.children(".dash-four-pagination"),
                    t = new Swiper(i, {
                        spaceBetween: 0,
                        speed: 800,
                        pagination: {
                            el: n,
                            bulletClass: "dash-four-pagination-bullet",
                            bulletActiveClass: "dash-four-pagination-bullet-active",
                            clickable: !0
                        }
                    }).slides.children(".brk-testimonials-dash-four__item"),
                    a = n.children(".dash-four-pagination-bullet"),
                    s = 0;
                t.each(function() {
                    var e = w(this).data("img"),
                        i = a[s];
                    w(i).css("backgroundImage", "url(" + e + ")"), s++
                })
            }), w(e).parent().find(".dash-five-slider:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this);
                new Swiper(e, {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    loop: !0,
                    loopedSlides: 4,
                    centeredSlides: !0,
                    speed: 1e3,
                    pagination: {
                        el: ".pagination",
                        clickable: !0,
                        renderBullet: function(e, i) {
                            return '<li class="' + i + '"></li>'
                        }
                    },
                    navigation: {
                        nextEl: ".button-next",
                        prevEl: ".button-prev"
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 1,
                            loopedSlides: 2
                        },
                        992: {
                            slidesPerView: 2,
                            loopedSlides: 3
                        }
                    }
                })
            }), w(e).parent().find(".dash-six-slider:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this);
                new Swiper(e, {
                    slidesPerView: 3,
                    spaceBetween: 0,
                    speed: 800,
                    navigation: {
                        nextEl: ".dash-six-arrow-next",
                        prevEl: ".dash-six-arrow-prev"
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 1
                        },
                        992: {
                            slidesPerView: 2
                        }
                    }
                })
            }), w(e).parent().find(".brk-testimonials-double__slider:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this),
                    i = e.find(".double-slider"),
                    n = e.find(".double-pagination"),
                    t = new Swiper(i, {
                        init: !1,
                        slidesPerView: 1,
                        spaceBetween: 0,
                        speed: 800,
                        autoplay: {
                            delay: 1e4
                        },
                        pagination: {
                            el: n,
                            clickable: !0,
                            bulletClass: "double-pagination-bullet",
                            bulletActiveClass: "double-pagination-bullet-active"
                        }
                    });
                window.addEventListener("load", function() {
                    t.init()
                })
            }), w(e).parent().find(".brk-testimonials-layered-horizontal__container:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this),
                    i = e.children(".layered-horizontal-slider"),
                    n = e.children(".button-prev"),
                    t = e.children(".button-next"),
                    a = e.children(".overlay-horizontal"),
                    s = new Swiper(i, {
                        init: !1,
                        effect: "cube",
                        spaceBetween: 0,
                        loop: !1,
                        loopedSlides: 2,
                        autoHeight: !0,
                        speed: 900,
                        cubeEffect: {
                            shadow: !1,
                            slideShadows: !1,
                            shadowOffset: 20,
                            shadowScale: .94
                        },
                        navigation: {
                            nextEl: t,
                            prevEl: n
                        },
                        pagination: {
                        el: ".swiper-pagination-base-reviews",
                        clickable: !0,
                        renderBullet: function(e, i) {
                            return '<li class="' + i + '"></li>'
                        }
                    }

                    });
                window.addEventListener("load", function() {
                    s.init(), s.on("touchStart", function() {
                        a.hasClass("deactive") ? a.removeClass("deactive") : (a.addClass("deactive"), setTimeout(function() {
                            a.removeClass("deactive")
                        }, 500))
                    })
                }), w(n).on("click", function() {
                    a.hasClass("deactive") ? a.removeClass("deactive") : (a.addClass("deactive"), setTimeout(function() {
                        a.removeClass("deactive")
                    }, 500))
                }), w(t).on("click", function() {
                    a.hasClass("deactive") ? a.removeClass("deactive") : (a.addClass("deactive"), setTimeout(function() {
                        a.removeClass("deactive")
                    }, 500))
                })
            }), w(e).parent().find(".brk-testimonials-layered-vertical__container:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this),
                    i = e.children(".layered-vertical-slider"),
                    n = e.children(".button-prev"),
                    t = e.children(".button-next"),
                    a = e.children(".overlay-vertical"),
                    s = new Swiper(i, {
                        init: !1,
                        effect: "flip",
                        direction: "vertical",
                        spaceBetween: 0,
                        autoHeight: !0,
                        loop: !0,
                        speed: 900,
                        navigation: {
                            nextEl: t,
                            prevEl: n
                        }
                    });
                window.addEventListener("load", function() {
                    s.init(), s.on("touchStart", function() {
                        a.hasClass("deactive") ? a.removeClass("deactive") : (a.addClass("deactive"), setTimeout(function() {
                            a.removeClass("deactive")
                        }, 400))
                    })
                }), w(n).on("click", function() {
                    a.hasClass("deactive") ? a.removeClass("deactive") : (a.addClass("deactive"), setTimeout(function() {
                        a.removeClass("deactive")
                    }, 400))
                }), w(t).on("click", function() {
                    a.hasClass("deactive") ? a.removeClass("deactive") : (a.addClass("deactive"), setTimeout(function() {
                        a.removeClass("deactive")
                    }, 400))
                })
            }), w(e).parent().find(".brk-testimonials-circle:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this),
                    i = e.children(".circle-slider"),
                    a = e.children(".circle-pagination"),
                    s = new Swiper(i, {
                        init: !1,
                        spaceBetween: 0,
                        speed: 800,
                        parallax: !0,
                        pagination: {
                            el: a,
                            bulletClass: "circle-pagination-bullet",
                            bulletActiveClass: "circle-pagination-bullet-active",
                            clickable: !0
                        }
                    });
                window.addEventListener("load", function() {
                    s.init();
                    var e = s.slides.children(".brk-testimonials-circle__item"),
                        n = a.children(".circle-pagination-bullet"),
                        t = 0;
                    e.each(function() {
                        var e = w(this).data("img"),
                            i = n[t];
                        w(i).css("backgroundImage", "url(" + e + ")"), t++
                    })
                })
            }), w(e).parent().find(".brk-sc-row-three:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this),
                    i = e.find(".swiper-container"),
                    n = e.find(".brk-sc-row-three__pagination");
                new Swiper(i, {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 800,
                    autoplay: {
                        delay: 5e3
                    },
                    pagination: {
                        el: n,
                        clickable: !0,
                        renderBullet: function(e, i) {
                            return '<span class="' + i + '">0' + (e + 1) + "</span>"
                        }
                    }
                })
            }), w(e).parent().find(".brk-sc-row-four:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this),
                    i = e.find(".swiper-container"),
                    n = e.find(".brk-sc-row-four-pagination");
                new Swiper(i, {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 1200,
                    autoHeight: !0,
                    autoplay: {
                        delay: 5e3
                    },
                    pagination: {
                        el: n,
                        clickable: !0,
                        bulletClass: "brk-sc-row-four-pagination-bullet",
                        bulletActiveClass: "brk-sc-row-four-pagination-bullet-active"
                    }
                })
            }), w(e).parent().find(".brk-swiper-default:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this),
                    i = e.find(".swiper-container"),
                    n = e.find(".brk-swiper-default-nav-next"),
                    t = e.find(".brk-swiper-default-nav-prev"),
                    a = e.find(".brk-swiper-default-pagination"),
                    s = e.data("brk-swiper") ? e.data("brk-swiper") : {},
                    r = {
                        init: !1,
                        slidesPerView: 1,
                        spaceBetween: 0,
                        speed: 1e3,
                        loop: !0,
                        autoHeight: !0,
                        autoplay: {
                            delay: 3e3
                        },
                        navigation: {
                            nextEl: n,
                            prevEl: t
                        },
                        pagination: {
                            el: a,
                            clickable: !0,
                            bulletClass: "brk-swiper-default-pagination-bullet",
                            bulletActiveClass: "brk-swiper-default-pagination-bullet-active"
                        }
                    },
                    d = w.extend({}, r, s),
                    l = new Swiper(i, d);
                window.addEventListener("load", function() {
                    l.init()
                })
            }), w(e).parent().find(".slider-thumbnailed-full:not(.rendered)").addClass("rendered").each(function() {
                var e = w(this),
                    i = e.find(".slider-thumbnailed-full-for"),
                    n = e.find(".slider-thumbnailed-full-nav"),
                    t = e.find(".slider-thumbnailed-full-prev"),
                    a = e.find(".slider-thumbnailed-full-next"),
                    s = i.data("brk-swiper") ? i.data("brk-swiper") : {},
                    r = n.data("brk-swiper") ? n.data("brk-swiper") : {},
                    d = w.extend({}, {
                        init: !1,
                        spaceBetween: 6,
                        slidesPerView: 5,
                        loop: !0,
                        centeredSlides: !0,
                        loopedSlides: 5,
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        breakpoints: {
                            576: {
                                slidesPerView: 3
                            },
                            768: {
                                slidesPerView: 4
                            },
                            992: {
                                slidesPerView: 3
                            }
                        }
                    }, r),
                    l = new Swiper(n.find(".swiper-container"), d),
                    o = {
                        init: !1,
                        spaceBetween: 0,
                        loop: !0,
                        speed: 800,
                        effect: "fade",
                        loopedSlides: 5,
                        navigation: {
                            nextEl: a,
                            prevEl: t
                        },
                        thumbs: {
                            swiper: l
                        },
                        preloadImages: !1,
                        lazy: {
                            loadPrevNext: !0
                        }
                    },
                    c = w.extend({}, o, s),
                    p = new Swiper(i, c);
                window.addEventListener("load", function() {
                    l.init(), p.init()
                })
            })
        }
    }
}(jQuery);