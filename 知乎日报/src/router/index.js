import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import Detail from '../views/Detail'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/detail/:keyword',
    component: Detail
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
