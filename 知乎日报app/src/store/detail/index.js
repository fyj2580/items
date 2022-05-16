import {
  reqGetDetail
} from '@/api'

const state = {
  detail: {}
}
const mutations = {
  GETDETAIL(state, detail) {
    state.detail = detail
  }
}
const actions = {
  async getDetail({
    commit
  }) {
    const result = await reqGetDetail()
    if (result.status === 200) {
      commit('GETDETAIL', result.data)
    }
  }
}
const getters = {
  detail(state) {
    return state.detail || {}
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
};
