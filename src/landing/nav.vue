<template>
    <nav class='navbar navbar-toggleable-md fixed-top navbar-inverse' id='navbar'>
        <button class='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse'
                data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
        </button>
        <a href='#' class='navbar-brand'><img src='../assets/img/favicon-32x32.png' width='32' height='32'
                                              class='d-inline-block'/>Allatrack</a>
        <div class='collapse navbar-collapse' id='navbarNav'>
            <ul class='navbar-nav mx-auto'>
                <li class='nav-item text-center'>
                    <a class='nav-link' href='#' v-html="$t('landing.nav.home')"></a>
                </li>
                <li class='nav-item text-center'>
                    <a class='nav-link' href='#solutions' v-html="$t('landing.nav.solutions')"></a>
                </li>
                <li class='nav-item text-center'>
                    <a class='nav-link' href='#clients' v-html="$t('landing.nav.clients')"></a>
                </li>
                <li class='nav-item text-center'>
                    <a class='nav-link' href='#contact' v-html="$t('landing.nav.contact')"></a>
                </li>
                <li class='nav-item text-center dropdown'>
                    <a class='nav-link dropdown-toggle'
                       href='http://example.com'
                       id='navbarDropdownMenuLink'
                       data-toggle='dropdown'
                       aria-haspopup='true'
                       aria-expanded='false'
                       v-html="$t('landing.nav.language')">
                    </a>
                    <div class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                        <a class='dropdown-item' href='#' @click.prevent="languageModule.setLang('uk')" v-html="$t('landing.nav.languages.uk')"></a>
                        <a class='dropdown-item' href='#' @click.prevent="languageModule.setLang('ru')" v-html="$t('landing.nav.languages.ru')"></a>
                        <a class='dropdown-item' href='#' @click.prevent="languageModule.setLang('en')" v-html="$t('landing.nav.languages.en')"></a>
                    </div>
                </li>
            </ul>

            <ul class='nav navbar-nav navbar-toggler-right socials'>
                <li>
                    <a href='//www.facebook.com/allatrack/' class='nav-item'>
                        <span class='fa-stack'>
                            <i class='fa fa-circle fa-stack-2x text-primary'></i>
                            <i class='fa fa-facebook fa-stack-1x fa-inverse'></i>
                        </span>
                    </a>
                    <a href='//www.linkedin.com/company/allatrack-it' class='nav-item'>
                        <span class='fa-stack'>
                            <i class='fa fa-circle fa-stack-2x text-primary'></i>
                            <i class='fa fa-linkedin fa-stack-1x fa-inverse'></i>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import languageModule from '../localizations'

    export default {
        data(){
            return {
                languageModule: languageModule
            }
        },
        mounted () {

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
                $(`a[href*='#']:not([href='#'],[data-toggle],[data-target],[data-slide])`).click(function () {
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

                $(`ul.navbar-nav.mx-auto>li.nav-item.text-center:first`).click(function () {

                        $('html,body').animate({
                            scrollTop: 0
                        }, 1000);
                        return false;
                });
            });
        }
    }
</script>
<style>

    .nav-link:focus,
    .nav-link:hover,
    .navbar-brand:hover {
        background-color: transparent;
        opacity: 1 !important;
        color: #fff;
    }

    #navbarNav {
        border-left: thin solid rgba(255, 255, 255, .3);
    }

    .navbar li.active a {
        text-decoration: underline;
    }

    .navbar-brand > img {
        display: inline-block;
        margin-right: 10px;
        margin-top: -3px;
    }

    a.navbar-brand {
        font-size: 16px;
        margin-left: 20px;
        margin-right: 50px;
    }

    .navbar .navbar-toggler {
        border: none;
    }

    .navbar .navbar-nav .nav-link,
    .navbar-brand {
        color: #fff;
        opacity: 0.8;
    }

    .navbar {
        background: none;
        border-bottom: thin solid rgba(255, 255, 255, .3);
        font-size: 14px;
        transition: .85s ease-in-out;
        -webkit-transition: .85s ease-in-out;
        -moz-transition: .85s ease-in-out;
        -o-transition: .85s ease-in-out;
    }

    .navbar a {
        opacity: 0.8;
    }

</style>