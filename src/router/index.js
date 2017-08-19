import Vue from 'vue'
import Router from 'vue-router'
import LandingHome from '@/landing/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingHome
    }
  ]
})
