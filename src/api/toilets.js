import Axios from '@/plugins/axios'

export default {
  getToilets (minLat, maxLat) {
    return Axios.get(`toilets.json?orderBy="lat"&startAt=${minLat}&endAt=${maxLat}`)
  },
}
