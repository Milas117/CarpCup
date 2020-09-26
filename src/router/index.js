import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/prijava',
    name: 'prijava',
    component: () => import(/* webpackChunkName: "login" */ '../views/prijava.vue')
  },
  {
    path: '/unos',
    name: 'unos',
    component: () => import(/* webpackChunkName: "unos" */ '../views/unos.vue')
  },
  {
    path: '/natjecatelji',
    name: 'natjecatelji',
    component: () => import(/* webpackChunkName: "natjecatelji" */ '../views/natjecatelji.vue')
  },
  {
    path: '/registracija',
    name: 'registracija',
    component: () => import(/* webpackChunkName: "registracija" */ '../views/registracija.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
