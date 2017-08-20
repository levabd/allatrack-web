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

    // SNG iso codes
    // Order from TZ
    // ISO Codes from https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    // | Azerbaijani | Armenian | Belarusian | Kazakh | Kirghiz | Mongolian | Russia | Tajik | Turkmen | Uzbek |
    const sngIsoCodes = ['az', 'hy', 'be', 'kk', 'ky', 'mn', 'ru-RU', 'ru', 'tg', 'tk', 'uz']
    const allatrackLngCookie = getCookie(LanguageModule.ALLATRACK_LNG_COOKIE)

    if (allatrackLngCookie) {
      _lng = allatrackLngCookie
    } else if (sngIsoCodes.indexOf(_lng) !== -1) {
      _lng = 'ru'
      setCookie(LanguageModule.ALLATRACK_LNG_COOKIE, _lng)
    } else if (_lng === 'uk') {
      _lng = 'uk'
      setCookie(LanguageModule.ALLATRACK_LNG_COOKIE, _lng)
    } else {
      _lng = 'en'
      setCookie(LanguageModule.ALLATRACK_LNG_COOKIE, _lng)
    }
    return _lng
  }

  setLocale (locale = 'en') {
    this.locale = locale
    setCookie(LanguageModule.ALLATRACK_LNG_COOKIE, locale)
  }
}
