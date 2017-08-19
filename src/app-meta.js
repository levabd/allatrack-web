
export default {
  // if no subcomponents specify a metaInfo.title, this title will be used
  title: 'Allatrack',
  // all titles will be injected into this template
  titleTemplate: '%s',
  htmlAttrs: {
    lang: 'en',
    amp: undefined // "amp" has no value
  },
  meta: [
    {charset: 'utf-8'},
    {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
    {'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {name: 'description', content: ''},
    {name: 'author', content: 'Allatrack'},
    {name: 'X-UA-Compatible', content: 'IE=edge'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {property: 'og:locale', content: 'ru_RU'},
    {property: 'og:type', content: 'article'},
    {property: 'og:url', content: '//allatrack.com'},
    {property: 'og:site_name', content: 'Allatrack'},
// todo fix this
    {property: 'og:image', content: '//allatrack.com/img/logo192.png'},

    {name: 'twitter:card', content: 'summary'},
    {name: 'twitter:title', content: 'Allatrack'},
// todo fix this
    {name: 'twitter:image', content: '//allatrack.com/img/logo192.png'},

    {name: 'msapplication-TileColor', content: '#ffffff'},
    {name: 'msapplication-TileImage', content: require('./assets/img/ms-icon-144x144.png')},
    {name: 'theme-color', content: '#ffffff'}
  ],
  link: [
    {rel: 'profile', href: '//gmpg.org/xfn/11'},
    {rel: 'manifest', sizes: '16x16', href: require('./assets/img/manifest.json')},

    {rel: 'apple-touch-icon', sizes: '57x57', href: require('./assets/img/apple-icon-57x57.png')},
    {rel: 'apple-touch-icon', sizes: '60x60', href: require('./assets/img/apple-icon-60x60.png')},
    {rel: 'apple-touch-icon', sizes: '72x72', href: require('./assets/img/apple-icon-72x72.png')},
    {rel: 'apple-touch-icon', sizes: '76x76', href: require('./assets/img/apple-icon-76x76.png')},
    {rel: 'apple-touch-icon', sizes: '114x114', href: require('./assets/img/apple-icon-114x114.png')},
    {rel: 'apple-touch-icon', sizes: '120x120', href: require('./assets/img/apple-icon-120x120.png')},
    {rel: 'apple-touch-icon', sizes: '144x144', href: require('./assets/img/apple-icon-144x144.png')},
    {rel: 'apple-touch-icon', sizes: '152x152', href: require('./assets/img/apple-icon-152x152.png')},
    {rel: 'apple-touch-icon', sizes: '180x180', href: require('./assets/img/apple-icon-180x180.png')},

    {rel: 'icon', type: 'image/png', sizes: '192x192', href: require('./assets/img/android-icon-192x192.png')},
    {rel: 'icon', type: 'image/png', sizes: '32x32', href: require('./assets/img/favicon-32x32.png')},
    {rel: 'icon', type: 'image/png', sizes: '96x96', href: require('./assets/img/favicon-96x96.png')},
    {rel: 'icon', type: 'image/png', sizes: '16x16', href: require('./assets/img/favicon-16x16.png')},

    {rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'},
    {rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
    {rel: 'stylesheet', type: 'text/css', href: 'http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic'},
    {rel: 'stylesheet', type: 'text/css', href: 'http://fonts.googleapis.com/css?family=Roboto'}
  ]
}

