<template>
    <header id='top' class='header'>
        <div id='carouselIndicators' class='carousel slide' data-ride='carousel'>
            <ol class='carousel-indicators'>
                <li data-target='#carouselIndicators' data-slide-to='0' class='active'></li>
                <li data-target='#carouselIndicators' data-slide-to='1'></li>
                <li data-target='#carouselIndicators' data-slide-to='2'></li>
            </ol>
            <div class='carousel-inner' role='listbox'>
                <div class='carousel-item active'>
                    <img class='d-block img-fluid' src='../assets/img/neural-network.jpg' alt='First slide'>
                    <div class='carousel-caption'>
                        <img class='shadowed' src='../assets/img/allatrack-logo-trnsprnt.png' alt='Allatrack'>
                        <h3 class='company-name'>Allatrack</h3>
                        <h3 class='caption-h3'
                            data-animation='animated bounceInLeft'
                            style='font-size: 4.5rem'
                            v-html="$t('landing.header.science.title')">
                        </h3>
                        <br/>
                        <h3 class='description-h3'
                            data-animation='animated bounceInRight'
                            style='font-size: 2rem'
                            v-html="$t('landing.header.science.description')">
                        </h3>
                        <br/>
                        <div class='next-icon' data-animation='animated bounceInUp'>
                            <a href='#solutions' @click.prevent="$root.goTo"><span class='fa-stack fa-lg'><i class='fa fa-stack-2x fa-angle-down'></i></span></a>
                        </div>
                    </div>
                </div>
                <div class='carousel-item'>
                    <img class='d-block img-fluid' src='../assets/img/drones.jpg' alt='Second slide'>
                    <div class='carousel-caption'>
                        <img class='shadowed' src='../assets/img/allatrack-logo-trnsprnt.png' alt='Allatrack'>
                        <h3 class='company-name'>Allatrack</h3>
                        <h3 class='caption-h3'
                            data-animation='animated lightSpeedIn'
                            style='font-size: 4.5rem'
                            v-html="$t('landing.header.hardware.title')">
                        </h3>
                        <br/>
                        <h3 class='description-h3'
                            data-animation='animated zoomInUp'
                            style='font-size: 2rem'
                            v-html="$t('landing.header.hardware.description')">
                        </h3>
                        <br/>
                        <div class='next-icon' data-animation='animated bounceInUp'>
                            <a href='#solutions' @click.prevent="$root.goTo"><span class='fa-stack fa-lg'><i
                                    class='fa fa-stack-2x fa-angle-down'></i></span></a>
                        </div>
                    </div>
                </div>
                <div class='carousel-item'>
                    <img class='d-block img-fluid' src='../assets/img/mobile-wireframes.jpg' alt='Third slide'>
                    <div class='carousel-caption'>
                        <img class='shadowed' src='../assets/img/allatrack-logo-trnsprnt.png' alt='Allatrack'>
                        <h3 class='company-name'>Allatrack</h3>
                        <h3 class='caption-h3'
                            data-animation='animated flipInX'
                            style='font-size: 4.5rem'
                            v-html="$t('landing.header.web.title')">
                        </h3>
                        <br/>
                        <h3 class='description-h3'
                            data-animation='animated zoomInRight'
                            style='font-size: 2rem'
                            v-html="$t('landing.header.web.description')">
                        </h3>
                        <br/>
                        <div class='next-icon' data-animation='animated bounceInUp'>
                            <a href='#solutions' @click.prevent="$root.goTo">
                                <span class='fa-stack fa-lg'>
                                    <i class='fa fa-stack-2x fa-angle-down'></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class='carousel-control-prev' href='#carouselIndicators' role='button' data-slide='prev'>
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='sr-only' v-html="$t('landing.header.previous')"></span>
        </a>
        <a class='carousel-control-next' href='#carouselIndicators' role='button' data-slide='next'>
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='sr-only' v-html="$t('landing.header.next')"></span>
        </a>
    </header>
</template>
<script>


    export default{
        props: ['windowHeight'],
        mounted(){

            // Base carousel
            var $item = $('.carousel .carousel-item');
            var $wHeight = this.windowHeight || $(window).height();
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

                    // Add `.css classes to
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

        }
    }
</script>
<style>

    .next-icon i {
        display: inline-block;
        -webkit-border-radius: 42px;
        -moz-border-radius: 42px;
        border-radius: 42px;
        box-shadow: 0px 0px 3px white, 0px 0px 3px white;
        color: white;
        transition: .3s ease-in-out;
        -webkit-transition: .3s ease-in-out;
        -moz-transition: .3s ease-in-out;
        -o-transition: .3s ease-in-out;
    }

    .next-icon i:hover {
        background-color: #fff;
        color: black;
    }
</style>