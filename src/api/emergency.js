import Axios from '@/plugins/axios'

export default {
  getEmergencyRooms (minLat, maxLat) {
    return Axios.get(`emergency.json?orderBy="lat"&startAt=${minLat}&endAt=${maxLat}`)
  }
}
