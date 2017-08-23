import Vue from 'vue'
import Router from 'vue-router'
import LandingHome from '@/landing/home'

function initRouter (initialLocale) {
  console.log('initialLocale', initialLocale)
  Vue.use(Router)
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: `/${initialLocale}`
      },
      {
        path: '/:lang',
        props: {default: 'en'},
        component: LandingHome
      }
    ]
  })
}

export default initRouter
