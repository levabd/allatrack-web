(function () {
    // Closes the sidebar menu
    $("#menu-close").click(function (e) {
        e.preventDefault();
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
    });
    // Scrolls to the selected menu item on the page
    $(function () {
        $('a[href*=#]').not('[href=#]').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 60
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // Base carousel
    var $item = $('.carousel .carousel-item');
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight + 70 + 65);
    $item.addClass('full-screen');

    $('.carousel img.img-fluid').each(function () {
        var $src = $(this).attr('src');
        var $color = $(this).attr('data-color');
        $(this).parent().css({
            'background-image': 'url(' + $src + ')',
            'background-color': $color
        });
        $(this).remove();
    });

    // Resize first images
    $(window).on('resize', function () {
        $wHeight = $(window).height();
        $item.height($wHeight);
    });


    $(".nav-link").hover(function () {
        $(this).css("color", "#fff")
    });

    $(".nav-brand").hover(function () {
        $(this).css("color", "#fff")
    });

    // Scrolling navbar effects
    var fixed = false;
    $(document).scroll(function () {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                $('#navbar').css({
                    "background-color": '#fff',
                    "border-bottom": 'thin solid rgba(40, 40, 40, .3)'
                });
                $('#navbarNav').css({
                    "border-left": 'thin solid rgba(40, 40, 40, .3)'
                });
                $('.socials:before').css({
                    "border-left": 'thin solid rgba(40, 40, 40, .3)'
                });
                $('.socials').addClass("socials-black");
                $('#navbar').addClass("navbar-light");
                $('#navbar').removeClass("navbar-inverse");
                $('.navbar .navbar-nav .nav-link, .navbar-brand').css({
                    color: '#333'
                })

                $(".nav-link").hover(function (e) {
                    $(this).css("color", "#333")
                })

                $(".nav-brand").hover(function (e) {
                    $(this).css("color", "#333")
                })

            }
        } else {
            if (fixed) {
                fixed = false;
                $('#navbar').css({
                    "background-color": 'transparent',
                    "border-bottom": 'thin solid rgba(255, 255, 255, .3)'
                });
                $('#navbarNav').css({
                    "border-left": 'thin solid rgba(255, 255, 255, .3)'
                });
                $('.socials').removeClass("socials-black");
                $('#navbar').addClass("navbar-inverse");
                $('#navbar').removeClass("navbar-light");
                $('.navbar .navbar-nav .nav-link, .navbar-brand').css({
                    color: '#fff'
                })

                $(".nav-link").hover(function (e) {
                    $(this).css("color", "#fff")
                })

                $(".nav-brand").hover(function (e) {
                    $(this).css("color", "#fff")
                })
            }
        }
    });

    // Carousel animations
    function doAnimations(elems) {
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');

            // Add animate.css classes to
            // the elements to be animated 
            // Remove animate.css classes
            // once the animation event has ended
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    var $firstAnimatingElems = $('#carouselIndicators').find('.item:first').find('[data-animation ^= "animated"]');

    doAnimations($firstAnimatingElems);

    // Carousel
    $('#carouselIndicators').on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    })

    $("#clientsCarousel").flexisel({
        visibleItems: 5,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        }
    });

    // Disable Google Maps scrolling
    // See http://stackoverflow.com/a/25904582/1607849
    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function (event) {
        var that = $(this);
        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }
    var onMapClickHandler = function (event) {
        var that = $(this);
        // Disable the click handler until the user leaves the map area
        that.off('click', onMapClickHandler);
        // Enable scrolling zoom
        that.find('iframe').css("pointer-events", "auto");
        // Handle the mouse leave event
        that.on('mouseleave', onMapMouseleaveHandler);
    }
    // Enable map zooming with mouse scroll when the user clicks the map
    $('.map').on('click', onMapClickHandler);

    // LandingSolutions
    // init Isotope
    $(document).ready(function () {
        var $grid = $('.grid').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });

        // bind filter button click
        $('#filters').on('click', 'a', function () {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            $grid.isotope({filter: filterValue});
            return false;
        });

    })

    // change is-checked class on buttons
    $('#filters').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function () {
            $buttonGroup.find('.active').removeClass('active');
            $(this).parent().addClass('active');
        });
    });

    // Feedback
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    $('body').on('click', '#feedback-popup button', function (e) {
        e.preventDefault();
        var form = $('#feedback-popup');

        if (!isEmail(form.find('input[name="email"]').val())) {
            bootbox.alert("Please fill out the email address field correctly");
            return false;
        }

        $.ajax({
            url: "https://formspree.io/oleg@allatrack.com",
            method: "POST",
            data: {
                name: form.find('input[name="name"]').val(),
                email: form.find('input[name="email"]').val(),
                message: form.find('textarea[name="message"]').val()
            },
            dataType: "json",
            success: function () {
                $('#modal-contact-form').modal('toggle');
                bootbox.alert('<b>Thanks for contacting us!</b> <br />We will get back to you very soon.');
            }
        });
    });

    $('#feedback button').click(function (e) {
        e.preventDefault();
        var form = $('#feedback');

        if (!isEmail(form.find('input[name="email"]').val())) {
            bootbox.alert("Please fill out the email address field correctly");
            return false;
        }

        $.ajax({
            url: "https://formspree.io/oleg@allatrack.com",
            method: "POST",
            data: {
                name: form.find('input[name="name"]').val(),
                email: form.find('input[name="email"]').val(),
                message: form.find('textarea[name="message"]').val()
            },
            dataType: "json",
            success: function () {
                bootbox.alert('<b>Thanks for contacting us!</b> <br />We will get back to you very soon.');
            }
        });
    })
    
    function LanguageModule(){

        var self = this;

        Object.defineProperty( self, "ALLATRACK_LNG_COOKIE", {value: "allatrack_lng", writable: false, enumerable: true, configurable: true});
        Object.defineProperty( self, "SUPPORTED_LANGUAGES", {value: ['ru', 'uk', 'en'], writable: false, enumerable: true, configurable: true});
        Object.defineProperty( self, "I18N_PATH_ON_VIEW", {value: 'nav.languages', writable: false, enumerable: true, configurable: true});

        this.init = function(){

            i18next
                .use(i18nextXHRBackend)
                .init({
                    lng: getInitialLanguage(),
                    detection: {
                        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
                    },
                    fallbackLng: 'en',
                    debug: true,
                    ns: ['common'],
                    defaultNS: 'common',
                    backend: {
                        // load from i18next-gitbook repo
                        loadPath: 'locales/{{lng}}/{{ns}}.json',
                        //loadPath: '../locales/{{lng}}/translation.json',
                        crossDomain: true
                    }
                }, function (err, t) {
                    // init set content
                    $("body").localize();
                });

            jqueryI18next.init(i18next, $, {
                tName: 't', // --> appends $.t = i18next.t
                i18nName: 'i18n', // --> appends $.i18n = i18next
                handleName: 'localize', // --> appends $(selector).localize(opts);
                selectorAttr: 'data-i18n', // selector for translating elements
                targetAttr: 'i18n-target', // data-() attribute to grab target element to translate (if diffrent then itself)
                optionsAttr: 'i18n-options', // data-() attribute that contains options, will load/set if useOptionsAttr = true
                useOptionsAttr: false, // see optionsAttr
                parseDefaultValueFromContent: true // parses default values from content ele.val or ele.text
            });

            i18next.on('languageChanged', function () {
                $("body").localize();
            });

            $(".nav-item.dropdown > div.dropdown-menu > a.dropdown-item").each(function (i, e) {

                var i18nPath = $(e).data('i18n');

                if (!i18nPath) {
                    return
                }

                self.SUPPORTED_LANGUAGES.forEach(function (lng) {
                    var localePath = self.I18N_PATH_ON_VIEW + '.' + lng;
                    if (localePath === i18nPath) {
                        $(e).on('click', function (e) {
                            e.preventDefault(e);
                            i18next.changeLanguage(lng);
                            setCookie(self.ALLATRACK_LNG_COOKIE, lng)
                        });
                    }
                });
            });
        }

        function getInitialLanguage(){

            var _lng = navigator.language || navigator.userLanguage || 'en';

            // SNG iso codes
            // Order from TZ
            // ISO Codes from https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
            // | Azerbaijani | Armenian | Belarusian | Kazakh | Kirghiz | Mongolian | Russia | Tajik | Turkmen | Uzbek |
            var sng_iso_codes = ['az','hy', 'be', 'kk', 'ky', '	mn',  'ru-RU', 'ru', 'tg',  'tk', 'uz'];
            var allatrack_lng_cookie = getCookie(self.ALLATRACK_LNG_COOKIE);

            if (allatrack_lng_cookie) {
                _lng = allatrack_lng_cookie
            } else if (sng_iso_codes.indexOf(_lng) != -1) {
                _lng = 'ru';
                setCookie(self.ALLATRACK_LNG_COOKIE, _lng)
            } else if (_lng === 'uk') {
                _lng = 'uk';
                setCookie(self.ALLATRACK_LNG_COOKIE, _lng)
            } else {
                _lng = 'en';
                setCookie(self.ALLATRACK_LNG_COOKIE, _lng)
            }

            return _lng;
        }

        setCookie = function (name, value, options) {
            options = options || {};

            var expires = options.expires;

            if (typeof expires == "number" && expires) {
                var d = new Date();
                d.setTime(d.getTime() + expires * 1000);
                expires = options.expires = d;
            }
            if (expires && expires.toUTCString) {
                options.expires = expires.toUTCString();
            }

            value = encodeURIComponent(value);

            var updatedCookie = name + "=" + value;

            for (var propName in options) {
                updatedCookie += "; " + propName;
                var propValue = options[propName];
                if (propValue !== true) {
                    updatedCookie += "=" + propValue;
                }
            }

            document.cookie = updatedCookie;
        };

        getCookie = function (name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }
    }

    (new  LanguageModule()).init();
})();
