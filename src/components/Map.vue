<template>
  <div>
    <div id="mapContainer" class="map-container"></div>
  </div>
</template>

<script>
import api from '@/api'

const { H } = window

export default {
  data () {
    return {
      map: null,
      isNear: true,
      isPositionError: false,
      coords: {
        lat: 37,
        lng: 127
      }
    }
  },
  mounted () {
    this.initMap()
    api('getToilets').then((res) => {
      this.startClustering(this.map, res)
    })
  },
  methods: {
    initMap () {
      const platform = new H.service.Platform({
        app_id: '9cF8npu6Ni7Iu3RuF1a3',
        app_code: 'KsOrtYXB6gfyYH2hzax9tA',
        useHTTPS: true
      })
      const defaultLayers = platform.createDefaultLayers()
      this.map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.normal.map,
        {
          zoom: 9,
          center: {
            lat: this.coords.lat,
            lng: this.coords.lng
          }
        }
      )
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map))
      const ui = H.ui.UI.createDefault(this.map, defaultLayers)
      this.getCurrentPosition()
    },
    startClustering (map, data) {
      // First we need to create an array of DataPoint objects,
      // for the ClusterProvider
      var dataPoints = []
      data.forEach((item, index) => {
        const { lat, lng } = item
        if (!lat || !lng) {
          return
        }
        if (index > 25000) {
          return
        }
        // console.log(index)
        dataPoints.push(new H.clustering.DataPoint(item.lat, item.lng))
      })

      // Create a clustering provider with custom options for clusterizing the input
      var clusteredDataProvider = new H.clustering.Provider(dataPoints, {
        clusteringOptions: {
          // Maximum radius of the neighbourhood
          eps: 100,
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
    getCurrentPosition () {
      if (this.isNear) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position
            this.coords = {
              lat: coords.latitude,
              lng: coords.longitude
            }
            console.log(this.coords)
            this.map.setCenter(this.coords)
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
    }
  }
}
</script>

<style lang="scss" scoped>
.map-container {
  width: 100%;
  height: 640px;
}
</style>
