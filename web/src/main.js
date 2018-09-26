import '@babel/polyfill'
import 'jquery'
import 'popper.js'
import 'bootstrap'

import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import router from './router'
import store from './store'
import * as filters from './filters'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  filters: {
    filters
  },
  render: h => h(App)
}).$mount('#app')
