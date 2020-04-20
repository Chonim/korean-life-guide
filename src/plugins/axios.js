/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

import Vue from 'vue'
import Axios from 'axios'
import appConfig from '../config'

Axios.defaults.baseURL = appConfig.BASEURL
Axios.defaults.headers.common.Accept = 'application/json'
Axios.interceptors.response.use(
  response => response,
  (error) => {
    if (!error.response) {
      if (Axios.isCancel(error)) {
        return Promise.reject(error.message)
      }
    }
    if (error.response.states === 404) {
      Vue.$route.push('/')
    }

    return Promise.reject(error)
  })

// Bind Axios to Vue.
Vue.$http = Axios
Object.defineProperty(Vue.prototype, '$http', {
  get () {
    return Axios
  },
})

export default Axios
