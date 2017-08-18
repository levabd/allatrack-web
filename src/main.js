// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import Meta from 'vue-meta'
import languageModule from './localizations'

Vue.config.productionTip = false
Vue.use(Meta)

const i18n = languageModule.i18n

new Vue({
  el: '#app',
  i18n,
  template: '<App/>',
  components: { App }
})
