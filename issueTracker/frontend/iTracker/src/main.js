// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'
import store from './store'
import DateFilter from './filters/date'
import StatusFilter from './filters/status'
import Minfy from './filters/minify'
Vue.use(Vuetify, {
  theme: {
    primary: '#E91E63',
    secondary: '#EC407A',
    accent: '#9c27b0',
    error: '#F44336',
    warning: '#ffeb3b',
    info: '#2196F3',
    success: '#4CAF50'
  }
})
Vue.filter('date', DateFilter)
Vue.filter('status', StatusFilter)
Vue.filter('minify', Minfy)
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
