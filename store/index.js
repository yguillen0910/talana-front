const state = () => ({
  token: null,
  user: null
})

const mutations = {
  saveUser(state, user) {
    state.user = user
  },
  saveToken(state, token) {
    state.token = token
  }
}

export default {
  state,
  mutations
}
