import Vue from 'vue'
import LanguageModule from '@/assets/js/LanguageModule'
import { getCookie, deleteCookie } from '@/assets/js/helpers'

describe('Allatrack i18n module', () => {
  it('Module has ALLATRACK_LNG_COOKIE const', () => {
    expect(LanguageModule.ALLATRACK_LNG_COOKIE).to.be.a('string')
  })
  it('Module ALLATRACK_LNG_COOKIE === allatrack_lng', () => {
    expect(LanguageModule.ALLATRACK_LNG_COOKIE).to.equal('allatrack_lng')
  })
  it('Module method getLangByLogic returns systemLanguage|language|userLanguage|en if none given', () => {
    let lng = navigator.systemLanguage || navigator.language || navigator.userLanguage || 'en'
    expect(LanguageModule.getLangByLogic()).to.equal(lng.substring(0, 2))
  })
  it('Module method getLangByLogic returns ru if sng iso code given', () => {
    const sngIsoCodes = ['az', 'hy', 'be', 'kk', 'ky', 'mn', 'ru-RU', 'ru', 'tg', 'tk', 'uz']
    sngIsoCodes.forEach(code => {
      deleteCookie(LanguageModule.ALLATRACK_LNG_COOKIE)
      expect(LanguageModule.getLangByLogic(code)).to.equal('ru')
    })
  })
  it('Module method getLangByLogic returns ua if ua given', () => {
    deleteCookie(LanguageModule.ALLATRACK_LNG_COOKIE)
    expect(LanguageModule.getLangByLogic('ua')).to.equal('ua')
  })
  it('Module method getLangByLogic stores in cookie after choice', () => {
    deleteCookie(LanguageModule.ALLATRACK_LNG_COOKIE)
    LanguageModule.getLangByLogic('ua')
    expect(getCookie(LanguageModule.ALLATRACK_LNG_COOKIE)).to.equal('ua')
  })
  it('Module method getCountryCode return valid country code', async () => {
    const result = await LanguageModule.getCountryCode()
    expect(result).to.equal('KZ')
  })
  it('Module method setLocale sets locale', async () => {
    deleteCookie(LanguageModule.ALLATRACK_LNG_COOKIE)

    /* eslint-disable no-new */
    const run = async () => {
      Vue.use(LanguageModule)
      const countryCode = await LanguageModule.getCountryCode()
      return new LanguageModule({
        locale: LanguageModule.getLangByLogic(countryCode),
        fallbackLocale: 'en',
        messages: {
          ua: require('@/assets/locales/ua').default,
          ru: require('@/assets/locales/ru').default,
          en: require('@/assets/locales/en').default
        }
      })
    }

    const languageModule = await run()
    languageModule.setLocale('ru')
    expect(languageModule.t('phone')).to.equal('Телефон:')
    expect(getCookie(LanguageModule.ALLATRACK_LNG_COOKIE)).to.equal('ru')
    languageModule.setLocale('ua')
    expect(languageModule.t('phone')).to.equal('Телефон:')
    expect(getCookie(LanguageModule.ALLATRACK_LNG_COOKIE)).to.equal('ua')
    languageModule.setLocale('en')
    expect(languageModule.t('phone')).to.equal('Phone:')
    expect(getCookie(LanguageModule.ALLATRACK_LNG_COOKIE)).to.equal('en')
  })
})

