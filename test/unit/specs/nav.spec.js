import nav from '@/landing/nav.vue'
import Vue from 'vue'
import LanguageModule from '@/assets/js/LanguageModule'
import { mount } from 'avoriaz'

Vue.use(LanguageModule)

describe('nav.vue', () => {
  const i18n = new LanguageModule({
    locale: 'en',
    messages: {
      uk: require('@/assets/locales/uk').default,
      ru: require('@/assets/locales/ru').default,
      en: require('@/assets/locales/en').default
    }
  })

  const wrapper = mount(nav, {
    i18n
  })

  it('renders a nav with class navbar', () => {
    expect(wrapper.is('nav')).to.equal(true)
    expect(wrapper.hasClass('navbar')).to.equal(true)
  })

  it('renders Allatrack title', () => {
    expect(wrapper.find('a.navbar-brand')[0].text().trim()).to.equal('Allatrack')
  })

  it('renders 6 list elements inside .navbar-nav', () => {
    const listElements = wrapper.find('ul.navbar-nav.mx-auto > li')
    expect(listElements.length).to.equal(6)
  })

  it('links locales = en', () => {
    const listElements = wrapper.find('ul.navbar-nav.mx-auto > li')
    expect(listElements[0].find('a')[0].text().trim()).to.equal('Home')
    expect(listElements[1].find('a')[0].text().trim()).to.equal('Solutions')
    expect(listElements[2].find('a')[0].text().trim()).to.equal('Clients')
    expect(listElements[3].find('a')[0].text().trim()).to.equal('Recommendations')
    expect(listElements[4].find('a')[0].text().trim()).to.equal('Contact us')
  })

  it('links changes when language changes', () => {
    const listElements = wrapper.find('ul.navbar-nav.mx-auto > li')
    const languagesDropdown = wrapper.find('ul.navbar-nav.mx-auto > li:last-child>a')[0]
    expect(languagesDropdown.text().trim()).to.equal('Eng')

    const ruButton = wrapper.find('ul.navbar-nav.mx-auto > li:last-child > div.dropdown-menu > a')[1]
    ruButton.trigger('click')

    expect(listElements[0].find('a')[0].text().trim()).to.equal('Домой')
    expect(listElements[1].find('a')[0].text().trim()).to.equal('Решения')
    expect(listElements[2].find('a')[0].text().trim()).to.equal('Наши клиенты')
    expect(listElements[3].find('a')[0].text().trim()).to.equal('Нас рекомендуют')
    expect(listElements[4].find('a')[0].text().trim()).to.equal('Контакты')
  })
})
