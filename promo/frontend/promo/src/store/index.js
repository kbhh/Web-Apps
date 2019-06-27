import Vue from 'vue'
import Vuex from 'vuex'
import feathersClient from '../api/feathers-api'
import feathersVuex from 'feathers-vuex'
import persState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

const {service, auth} = feathersVuex(feathersClient, {idField: '_id'})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    service('product'),
    service('task'),
    service('diary'),
    service('event'),
    service('users'),
    persState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    }),
    auth({userService: 'users'})
  ]
})
