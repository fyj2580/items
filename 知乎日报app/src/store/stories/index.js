import {
  reqGetstories
} from '@/api'

const state = {
  stories: {}
}
const mutations = {
  GETSTORIES(state, stories) {
    state.stories = stories
  }
}
const actions = {
  async getStories({
    commit
  }) {
    const result = await reqGetstories()
    console.log(result.data);
    if (result.status === 200) {
      commit('GETSTORIES', result.data)
    }
  }
}
const getters = {
  stories(state) {
    return state.stories.stories || []
  },
  top_stories(state) {
    return state.stories.top_stories || []
  },
  date(state) {
    return state.stories.date || ''
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
};
