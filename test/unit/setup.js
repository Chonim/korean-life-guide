import Vue from 'vue'

Vue.config.productionTip = false

window.daum = {
  maps: {
    LatLng: () => '',
    MapTypeControl: () => '',
    ZoomControl: () => '',
    InfoWindow: () => '',
    Map: () => ({
      addControl: () => '',
      getCenter: () => ({
        getLng: () => ''
      })
    }),
    Marker: () => ({
      setMap: () => ''
    }),
    ControlPosition: {
      TOPRIGHT: () => '',
      RIGHT: () => ''
    },
    event: {
      addListener: () => ''
    }
  }
}
