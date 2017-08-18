import Vue from 'vue'
import VueI18n from 'vue-i18n'
import uk from './assets/locales/uk'
import ru from './assets/locales/ru'
import en from './assets/locales/en'

class LanguageModule {

  constructor () {

    Object.defineProperty(this, 'ALLATRACK_LNG_COOKIE', {
      value: 'allatrack_lng',
      writable: false,
      enumerable: true,
      configurable: true
    })
    Object.defineProperty(this, 'SUPPORTED_LANGUAGES', {
      value: ['ru', 'uk', 'en'],
      writable: false,
      enumerable: true,
      configurable: true
    })
    Object.defineProperty(this, 'I18N_PATH_ON_VIEW', {
      value: 'nav.languages',
      writable: false,
      enumerable: true,
      configurable: true
    })

    Vue.use(VueI18n)

    const messages = {
      uk: uk,
      ru: ru,
      en: en
    }

    this.i18n = new VueI18n({
      locale: this.getInitialLanguage(),
      fallbackLocale: 'en',
      messages
    })
  }

  getInitialLanguage () {

    var _lng = navigator.language || navigator.userLanguage || 'en';

    // SNG iso codes
    // Order from TZ
    // ISO Codes from https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    // | Azerbaijani | Armenian | Belarusian | Kazakh | Kirghiz | Mongolian | Russia | Tajik | Turkmen | Uzbek |
    var sngIsoCodes = ['az', 'hy', 'be', 'kk', 'ky', '	mn', 'ru-RU', 'ru', 'tg', 'tk', 'uz'];
    var allatrackLngCookie = this.getCookie(this.ALLATRACK_LNG_COOKIE);

    if (allatrackLngCookie) {
      _lng = allatrackLngCookie
    } else if (sngIsoCodes.indexOf(_lng) !== -1) {
      _lng = 'ru';
      this.setCookie(this.ALLATRACK_LNG_COOKIE, _lng)
    } else if (_lng === 'uk') {
      _lng = 'uk';
      this.setCookie(this.ALLATRACK_LNG_COOKIE, _lng)
    } else {
      _lng = 'en';
      this.setCookie(this.ALLATRACK_LNG_COOKIE, _lng)
    }

    return _lng;
  }

  setCookie (name, value, options) {
    options = options || {}

    var expires = options.expires

    if (typeof expires === 'number' && expires) {
      var d = new Date()
      d.setTime(d.getTime() + expires * 1000)
      expires = options.expires = d
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString()
    }

    value = encodeURIComponent(value)

    var updatedCookie = name + '=' + value

    for (var propName in options) {
      updatedCookie += '; ' + propName
      var propValue = options[propName]
      if (propValue !== true) {
        updatedCookie += '=' + propValue
      }
    }

    document.cookie = updatedCookie
  }

  getCookie (name) {
    var matches = document.cookie.match(new RegExp(
      '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
  }

  setLang (locale = 'en') {
    this.i18n.locale = locale
    this.setCookie(this.ALLATRACK_LNG_COOKIE, locale)
  }
}

const languageModule = new LanguageModule()

export default languageModule
