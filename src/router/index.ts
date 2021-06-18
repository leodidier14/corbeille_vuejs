import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Tableau from '../views/Tableau.vue'
import Formes from '../views/Formes.vue'
import Stats from '../views/Stats.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path : '/tableau',
    name: 'Tableau',
    component: Tableau
  }, 
  {
    path : '/formes',
    name: 'Formes',
    component: Formes
  }

  , 
  {
    path : '/stats',
    name: 'Stats',
    component: Stats
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
