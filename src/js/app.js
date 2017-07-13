(function() {
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
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

    $('.carousel img.img-fluid').each(function() {
        var $src = $(this).attr('src');
        var $color = $(this).attr('data-color');
        $(this).parent().css({
            'background-image': 'url(' + $src + ')',
            'background-color': $color
        });
        $(this).remove();
    });

    // Resize first images
    $(window).on('resize', function() {
        $wHeight = $(window).height();
        $item.height($wHeight);
    });
	

	$(".nav-link").hover(function(e) {
        $(this).css("color", "#fff")
    })

    $(".nav-brand").hover(function(e) {
        $(this).css("color", "#fff")
    })

    // Scrolling navbar effects
    var fixed = false;
    $(document).scroll(function() {
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
				
				$(".nav-link").hover(function(e) {
					$(this).css("color", "#333")
				})

				$(".nav-brand").hover(function(e) {
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
				
				$(".nav-link").hover(function(e) {
					$(this).css("color", "#fff")
				})

				$(".nav-brand").hover(function(e) {
					$(this).css("color", "#fff")
				})
            }
        }
    });

    // Carousel animations
    function doAnimations(elems) {
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function() {
            var $this = $(this),
                $animationType = $this.data('animation');

            // Add animate.css classes to
            // the elements to be animated 
            // Remove animate.css classes
            // once the animation event has ended
            $this.addClass($animationType).one(animEndEv, function() {
                $this.removeClass($animationType);
            });
        });
    }

    var $firstAnimatingElems = $('#carouselIndicators').find('.item:first').find('[data-animation ^= "animated"]');

    doAnimations($firstAnimatingElems);

    // Carousel
    $('#carouselIndicators').on('slide.bs.carousel', function(e) {
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
    var onMapMouseleaveHandler = function(event) {
        var that = $(this);
        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }
    var onMapClickHandler = function(event) {
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

    // Solutions
    // init Isotope
    $(document).ready(function() {
        var $grid = $('.grid').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });
		
		// bind filter button click
		$('#filters').on('click', 'a', function() {
			var filterValue = $(this).attr('data-filter');
			// use filterFn if matches value
			$grid.isotope({ filter: filterValue });
			return false;
		});

    })

    // change is-checked class on buttons
    $('#filters').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function() {
            $buttonGroup.find('.active').removeClass('active');
            $(this).parent().addClass('active');
        });
    });

    // Feedback
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    
    $('body').on('click', '#feedback-popup button', function(e) {
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
            success: function() {
                $('#modal-contact-form').modal('toggle');
                bootbox.alert('<b>Thanks for contacting us!</b> <br />We will get back to you very soon.');
            }
        });
    });

    $('#feedback button').click(function(e) {
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
            success: function() {
                bootbox.alert('<b>Thanks for contacting us!</b> <br />We will get back to you very soon.');
            }
        });
    })
})();