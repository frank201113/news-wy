import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      userId: '',
      email: ''
    },
    mutations: {
      save: (state, data) => {
        state.userId = data.userId
        state.email = data.email
      },
      remove: state => {
        state.userId = ''
        state.email = ''
      }
    }
  })
}

export default createStore
