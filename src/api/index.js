import _ from 'lodash'
import Points from './Points'

function api (method, ...args) {
  const path = _.extend({}, Points)
  return path[method](...args)
    .then(response => response.data)
    .catch((error) => {
      throw error
    })
}

export default api
