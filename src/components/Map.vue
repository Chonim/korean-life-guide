<template>
  <div>
    <div>
      <button class="back-button" @click="$router.go(-1)">Back</button>
    </div>
    <div id="mapContainer" class="map-container"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '@/api'

const { H } = window

export default {
  data () {
    return {
      map: null,
      isNear: true,
      isCurrentLocationSearch: false,
      isPositionError: false,
      latRadius: 0.04,
      lngRadius: 0.04,
      coords: {
        lat: 37,
        lng: 127
      }
    }
  },
  mounted () {
    this.initMap()
  },
  computed: {
    ...mapGetters('location', {
      savedLat: 'LAT',
      savedLng: 'LNG'
    })
  },
  methods: {
    initMap () {
      const platform = new H.service.Platform({
        // app_id: '9cF8npu6Ni7Iu3RuF1a3',
        // app_code: 'KsOrtYXB6gfyYH2hzax9tA',
        app_id: 'eJBbvmVzCel4EqtBmISb',
        app_code: 'CvN3VyRHj5orQg2-DtvDEg',
        useHTTPS: true
      })
      const defaultLayers = platform.createDefaultLayers()
      this.map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.normal.map,
        {
          zoom: 14,
          center: {
            lat: this.coords.lat,
            lng: this.coords.lng
          }
        }
      )
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map))
      const ui = H.ui.UI.createDefault(this.map, defaultLayers)

      const { savedLat, savedLng } = this

      if (savedLat && savedLng) {
        this.isCurrentLocationSearch = true
        this.map.setCenter({ lat: savedLat, lng: savedLng })
        this.getToilet(savedLat)
      } else {
        this.getCurrentPosition()
      }
    },
    getCurrentPosition () {
      if (this.isNear) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position
            this.coords = {
              lat: coords.latitude,
              lng: coords.longitude
            }
            this.map.setCenter(this.coords)
            this.getToilet(this.coords.lat)
          }, (err) => {
            this.isPositionError = true
            switch (err.code) {
              case err.PERMISSION_DENIED:
                this.geolocationErrorMessage = 'Please allow geolocation permission, and refresh this webpage'
                break
              case err.POSITION_UNAVAILABLE:
              case err.TIMEOUT:
                this.geolocationErrorMessage = 'Position unavailable, please check your device setting.'
                break
              default:
                break
            }
          })
        } else {
          this.geolocationErrorMessage = null
        }
      } else {
      }
    },
    addMarkersToMap (map, data) {
      const dataPoints = []
      // console.log(Object.keys(data).length)
      Object.keys(data).forEach((index) => {
        const { lat, lng, child_toilet } = data[index]
        if (!(lat && lng) || this.isLngOutOfBounds(lng)) {
          return
        }

        // const marker = new H.map.Marker({lat, lng})
        const markerStyle = this.getMarkerStyle(child_toilet)
        const icon = new H.map.Icon(markerStyle)
        const marker = new H.map.Marker({lat, lng}, {icon})

        map.addObject(marker)
      })
    },
    getMarkerStyle (isChildToilet) {
      // const fill = isChildToilet ? 'red' : 'blue'
      // const stroke = isChildToilet ? 'red' : 'blue'
      const color = isChildToilet ? 'blue' : '#A0D8F1'
      const stroke = 'white'

      const svgMarkup = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <rect stroke="${color}" fill="${color}" x="0.1" y="0.1" width="22" height="22" />
        <text x="12" y="18" font-size="12pt" font-family="Arial" font-weight="bold" 
        text-anchor="middle" fill="${stroke}" >T</text></svg>
      `
      return svgMarkup
    },
    startClustering (map, data) {
      // First we need to create an array of DataPoint objects,
      // for the ClusterProvider
      const dataPoints = []
      // console.log(Object.keys(data).length)
      Object.keys(data).forEach((index) => {
        const { lat, lng } = data[index]
        if (!(lat && lng) || this.isLngOutOfBounds(lng)) {
          return
        }
        dataPoints.push(new H.clustering.DataPoint(lat, lng))
      })

      // Create a clustering provider with custom options for clusterizing the input
      var clusteredDataProvider = new H.clustering.Provider(dataPoints, {
        clusteringOptions: {
          // Maximum radius of the neighbourhood
          eps: 20,
          // minimum weight of points required to form a cluster
          minWeight: 10
        }
      })

      // Create a layer tha will consume objects from our clustering provider
      const clusteringLayer = new H.map.layer.ObjectLayer(clusteredDataProvider)

      // To make objects from clustering provder visible,
      // we need to add our layer to the map
      this.map.addLayer(clusteringLayer)
    },
    isLngOutOfBounds (lng) {
      const centerLng = this.isCurrentLocationSearch ? this.savedLng : this.coords.lng
      return lng < centerLng - this.lngRadius || lng > centerLng + this.lngRadius
    },
    getToilet (lat) {
      const minLat = lat - this.latRadius
      const maxLat = lat + this.latRadius
      api('getToilets', minLat, maxLat).then((res) => {
        // this.startClustering(this.map, res)
        this.addMarkersToMap(this.map, res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.back-button {
  position: absolute;
  background-color: aqua;
  z-index: 999;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 20px;
}
.map-container {
  width: 100%;
  height: 640px;
}
</style>
