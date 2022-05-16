import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'swiper/css/swiper.css'

// 全局组件
import Topbar from '@/components/Topbar'
import Carousel from '@/components/Carousel'

Vue.component(Topbar.name, Topbar)
Vue.component(Carousel.name, Carousel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
