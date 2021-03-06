import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return {selector: to.hash};
    if (savedPosition) return savedPosition;
    return {x: 0, y: 0};
  },
  base: process.env.BASE_URL,
  routes
})

export default router
