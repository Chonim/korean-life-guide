import _ from 'lodash'
import Toliets from './toilets'

function api (method, ...args) {
  const path = _.extend({}, Toliets)
  return path[method](...args)
    .then(response => response.data)
    .catch((error) => {
      throw error
    })
}

export default api
