// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import Meta from 'vue-meta'
import router from './router'

import languageModule from './localizations'

Vue.config.productionTip = false
Vue.use(Meta)

const i18n = languageModule.i18n

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
