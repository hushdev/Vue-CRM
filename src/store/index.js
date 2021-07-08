import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import errors from './errors'
import info from './info'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth, errors, info
  }
})
