import Axios from '@/plugins/axios'

export default {
  getToilets () {
    return Axios.get('.json')
  }
}
