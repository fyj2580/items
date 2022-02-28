import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../views/All.vue'
import Active from '../views/Active.vue'
import Completed from '../views/Completed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/All',
    name: 'All',
    component: All
  },
  {
    path: '/Active',
    name: 'Active',
    component: Active
  },
  {
    path: '/Completed',
    name: 'Completed',
    component: Completed
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
