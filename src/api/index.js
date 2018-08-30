import _ from 'lodash'
import Toilets from './toilets'
import Emergency from './emergency'

function api (method, ...args) {
  const path = _.extend({}, Toilets, Emergency)
  return path[method](...args)
    .then(response => response.data)
    .catch((error) => {
      throw error
    })
}

export default api
