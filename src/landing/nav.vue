<template>
    <nav class='navbar navbar-toggleable-md fixed-top navbar-inverse' id='navbar'>
        <button class='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse'
                data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
        </button>
        <a href='#' class='navbar-brand'>
            <img src='../assets/img/favicon-32x32.png'
                 width='32'
                 height='32'
                 class='d-inline-block'/>
            Allatrack
        </a>
        <div class='collapse navbar-collapse' id='navbarNav'>
            <ul class='navbar-nav mx-auto'>
                <li class='nav-item text-center'>
                    <a class='nav-link' href='#top' v-html="$t('landing.nav.home')" @click.prevent="$root.goTo"></a>
                </li>
                <li class='nav-item text-center'>
                    <a class='nav-link' href='#solutions' v-html="$t('landing.nav.solutions')"
                       @click.prevent="$root.goTo"></a>
                </li>
                <li class='nav-item text-center'>
                    <a class='nav-link' href='#clients' v-html="$t('landing.nav.clients')" @click.prevent="$root.goTo"></a>
                </li>
                <li class='nav-item text-center'>
                    <a class='nav-link' href='#recommendations' v-html="$t('landing.nav.recommendations')"
                       @click.prevent="$root.goTo"></a>
                </li>
                <li class='nav-item text-center'>
                    <a class='nav-link' href='#contact' v-html="$t('landing.nav.contact')" @click.prevent="$root.goTo"></a>
                </li>
                <li class='nav-item text-center dropdown'>
                    <a class='nav-link dropdown-toggle'
                       href='http://example.com'
                       id='navbarDropdownMenuLink'
                       data-toggle='dropdown'
                       aria-haspopup='true'
                       aria-expanded='false'
                       v-html="$t('landing.nav.languages.' + $i18n.locale)">
                    </a>
                    <div class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                        <a class='dropdown-item' href='#' @click.prevent="$i18n.setLocale('ua')"
                           v-html="$t('landing.nav.languages.ua')"></a>
                        <a class='dropdown-item' href='#' @click.prevent="$i18n.setLocale('ru')"
                           v-html="$t('landing.nav.languages.ru')"></a>
                        <a class='dropdown-item' href='#' @click.prevent="$i18n.setLocale('en')"
                           v-html="$t('landing.nav.languages.en')"></a>
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
  export default {
    mounted () {
      // Closes the sidebar menu
      $('#menu-close').click(function (e) {
        e.preventDefault()
      })
      // Opens the sidebar menu
      $('#menu-toggle').click(function (e) {
        e.preventDefault()
      })
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