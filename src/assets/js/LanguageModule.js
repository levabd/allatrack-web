import VueI18n from 'vue-i18n'
import { httpGet, getCookie, setCookie } from './helpers'

// noinspection JSUnusedGlobalSymbols
export default class LanguageModule extends VueI18n {

  static get ALLATRACK_LNG_COOKIE () {
    return 'allatrack_lng'
  }

  static async getCountryCode () {
    let lang = null
    try {
      const geoData = JSON.parse(await httpGet('http://ip-api.com/json'))
      lang = geoData.countryCode
    } catch (e) {
      lang = navigator.systemLanguage || navigator.language || navigator.userLanguage || 'en'
      console.error('Error while getting country code')
    }
    return lang
  }

  static getLangByLogic (_lng) {
    if (!_lng) {
      _lng = navigator.systemLanguage || navigator.language || navigator.userLanguage || 'en'
    }
    _lng = _lng.toLowerCase()
    // SNG iso codes
    // Order from TZ
    // ISO Codes from https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    // | Azerbaijani | Armenian | Belarusian | Kazakh | Kirghiz | Mongolian | Russia | Tajik | Turkmen | Uzbek |
    const sngIsoCodes = ['az', 'hy', 'be', 'kz', 'ky', 'mn', 'ru-ru', 'ru', 'tg', 'tk', 'uz']
    const localeFromCookie = getCookie(LanguageModule.ALLATRACK_LNG_COOKIE)

    const getLocaleInUrl = () => {
      // eslint-disable-next-line
      const re = /\/(en|ru|ua|az|hy|be|kz|ky|mn|ru-ru|tg|tk|uz)\/?/g
      const result = re.exec(location.pathname)
      return result !== null ? result[1] : null
    }
    const localeFromUrl = getLocaleInUrl()

    if (localeFromUrl) {
      if (sngIsoCodes.indexOf(localeFromUrl) !== -1) {
        _lng = 'ru'
      } else if (localeFromUrl === 'ua') {
        _lng = 'ua'
      } else {
        _lng = 'en'
      }
    } else if (localeFromCookie) {
      _lng = localeFromCookie
    } else {
      if (sngIsoCodes.indexOf(_lng) !== -1) {
        _lng = 'ru'
      } else if (_lng === 'ua') {
        _lng = 'ua'
      } else {
        _lng = 'en'
      }
    }
    history.pushState({}, null, _lng)
    setCookie(LanguageModule.ALLATRACK_LNG_COOKIE, _lng)
    return _lng
  }

  setLocale (locale = 'en') {
    this.locale = locale
    history.pushState({}, null, locale)
    setCookie(LanguageModule.ALLATRACK_LNG_COOKIE, locale)
  }
}
