import Axios from '@/plugins/axios'

export default {
  getPoints (type, minLat, maxLat) {
    return Axios.get(`${type}.json?orderBy="lat"&startAt=${minLat}&endAt=${maxLat}`)
  }
}
