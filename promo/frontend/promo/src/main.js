// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import locale from 'element-ui/lib/locale/lang/en'
import DateFilter from './filters/date'
import StringFilter from './filters/minify'
import StatusFilter from './filters/status'

Vue.config.productionTip = false
Vue.use(ElementUI, {locale})
Vue.filter('date', DateFilter)
Vue.filter('min', StringFilter)
Vue.filter('stat', StatusFilter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
