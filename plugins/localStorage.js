import createPersistedState from 'vuex-persistedstate'
import * as Cookie from 'js-cookie'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'wyLogined',
      paths: ['email', 'userId'],
      getState: key => Cookie.getJSON(key),
      setState: (key, state) =>
        Cookie.set(key, state, { expires: 1, secure: false })
    })(store)
  })
}
