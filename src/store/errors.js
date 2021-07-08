export default {
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = null
      setTimeout(()=>{
        state.error = error
      }, 10)
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  actions: {}
}