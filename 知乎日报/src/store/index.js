import Vue from 'vue'
import Vuex from 'vuex'
// 引入小仓库
import detail from './detail'
import stories from './stories'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stories,
    detail
  }
})
