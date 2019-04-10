export const state = () => ({
  images: []
})

export const mutations = {
  ADD_IMAGE (state, payload) {
    state.images.push(payload)
  }
}

export const actions = {
  ADD_IMAGE ({ commit }, payload) {
    commit('ADD_IMAGE', '/api/images/' + payload)
  }
}
