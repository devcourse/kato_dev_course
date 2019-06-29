import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AppHeader from './views/layout/AppHeader.vue'
import AppFooter from './views/layout/AppFooter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        header: AppHeader,
        default: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        footer: AppFooter 
      },
    }
  ]
})
