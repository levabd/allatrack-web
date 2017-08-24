import Vue from 'vue'
import Router from 'vue-router'
import LandingHome from '@/landing/home'

function initRouter (initialLocale) {
  Vue.use(Router)
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/:lang',
        props: {default: initialLocale},
        redirect: '/'
      },
      {
        path: '/public/prerendered/en',
        props: {default: initialLocale},
        redirect: '/'
      },
      {
        path: '/public/prerendered/ru',
        props: {default: initialLocale},
        redirect: '/'
      },
      {
        path: '/public/prerendered/ua',
        props: {default: initialLocale},
        redirect: '/'
      },
      {
        path: '/',
        component: LandingHome
      }
    ]
  })
}

export default initRouter
