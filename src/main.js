// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import initRouter from './router'
import methods from './methods'
import LanguageModule from '@/assets/js/LanguageModule'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
OfflinePluginRuntime.install()

/* eslint-disable no-new */
const initApp = (countryCode) => {
  Vue.config.productionTip = false
  Vue.use(LanguageModule)
  const initialLocale = LanguageModule.getLangByLogic(countryCode)
  const router = initRouter()
  new Vue({
    el: '#app',
    methods: methods,
    router: router,
    i18n: new LanguageModule({
      locale: initialLocale,
      fallbackLocale: 'en',
      messages: {
        ua: require('@/assets/locales/ua').default,
        ru: require('@/assets/locales/ru').default,
        en: require('@/assets/locales/en').default
      }
    }),
    mounted () {
      this.$el.style.display = 'block'
    },
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
