import Vue from 'vue'
import Vuex from 'vuex'
import feathersClient from '../api/feathers_api'
import feathersVuex from 'feathers-vuex'
import persState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

const {service, auth} = feathersVuex(feathersClient, {idField: '_id'})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  plugins: [
    service('comment'),
    service('upload'),
    service('account'),
    service('archive'),
    persState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    }),
    auth({userService: 'account'})
  ]
})
