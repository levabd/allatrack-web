// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import Meta from 'vue-meta'
import router from './router'
import methods from './methods'
import LanguageModule from '@/assets/js/LanguageModule'

/* eslint-disable no-new */
const initApp = (countryCode) => {
  Vue.config.productionTip = false
  Vue.use(Meta)
  Vue.use(LanguageModule)

  new Vue({
    el: '#app',
    methods: methods,
    router: router,
    i18n: new LanguageModule({
      locale: LanguageModule.getLangByLogic(countryCode),
      fallbackLocale: 'en',
      messages: {
        uk: require('@/assets/locales/uk').default,
        ru: require('@/assets/locales/ru').default,
        en: require('@/assets/locales/en').default
      }
    }),
    render: h => h(App)
  })
}

const run = async function () {
  try {
    return initApp(await LanguageModule.getCountryCode())
  } catch (err) {
    console.log(err)
    return initApp('en')
  }
}

run()
