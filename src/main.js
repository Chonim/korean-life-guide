import Vue from 'vue'
import lodash from 'lodash'
import './registerServiceWorker'

import '@/plugins/ga'
import '@/plugins/vuex'
import '@/plugins/axios'
import { router } from './plugins/vue-router'
import '@/assets/styles/common.scss'

import App from './App'
import store from './store'

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
