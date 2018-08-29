<template>
  <div>
    <div class="spinner-container" v-if="isLoading">
      <spinner></spinner>
    </div>
    <div>
      <button class="back-button" @click="$router.go(-1)">Back</button>
    </div>
    <div id="mapContainer" class="map-container"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Spinner from 'vue-simple-spinner'

import api from '@/api'

const { H } = window

export default {
  name: 'Map',
  components: {
    Spinner
  },
  data () {
    return {
      map: null,
      isNear: true,
      isLoading: false,
      isCurrentLocationSearch: false,
      isPositionError: false,
      latRadius: 0.03,
      lngRadius: 0.03,
      ui: null,
      selectedBubble: null,
      currentZoom: 14,
      centerMarker: null,
      group: null,
      clusteringLayer: null,
      clusterRadius: 0.2,
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
    setPosition (lat, lng, mode) {
      if (!this.centerMarker) {
        this.centerMarker = new H.map.Marker({lat, lng})
        this.map.addObject(this.centerMarker)
      } else {
        this.centerMarker.setPosition({lat, lng})
      }
      this.map.setCenter({ lat, lng })
      this.getToilet(lat, mode)
    },
    initMap () {
      const platform = new H.service.Platform({
        app_id: '9cF8npu6Ni7Iu3RuF1a3',
        app_code: 'KsOrtYXB6gfyYH2hzax9tA',
        // app_id: 'eJBbvmVzCel4EqtBmISb',
        // app_code: 'CvN3VyRHj5orQg2-DtvDEg',
        useHTTPS: true
      })
      const defaultLayers = platform.createDefaultLayers()
      this.map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.normal.map,
        {
          zoom: this.currentZoom,
          center: {
            lat: this.coords.lat,
            lng: this.coords.lng
          }
        }
      )
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map))
      this.ui = H.ui.UI.createDefault(this.map, defaultLayers)

      const { savedLat, savedLng } = this

      this.map.addEventListener('mapviewchangeend', () => {
        this.handleMapViewChange()
      })

      if (savedLat && savedLng) {
        this.isCurrentLocationSearch = true
        this.setPosition(savedLat, savedLng)
      } else {
        this.getCurrentPosition()
      }
    },
    handleMapViewChange () {
      const center = this.map.getCenter()
      const zoom = this.map.getZoom()
      const { lat, lng } = center
      if (this.currentZoom !== zoom) {
        this.currentZoom = zoom
      }
      if (zoom < 14) {
        this.setPosition(lat, lng, 'cluster')
        return
      }
      this.setPosition(lat, lng)
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
            this.setPosition(this.coords.lat, this.coords.lng)
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
    removeGroup () {
      if (this.group) {
        this.map.removeObject(this.group)
        this.group = null
      }
    },
    addMarkersToMap (map, data) {
      if (this.group) {
        this.removeGroup()
      }
      this.group = new H.map.Group()
      map.addObject(this.group)

      Object.keys(data).forEach((index) => {
        const toilet = data[index]
        const { lat, lng, child_toilet } = toilet
        if (!(lat && lng) || this.isLngOutOfBounds(lng)) {
          return
        }

        const markerStyle = this.getMarkerStyle(child_toilet)
        const icon = new H.map.Icon(markerStyle)
        const marker = new H.map.Marker({lat, lng}, {icon})
        marker.setData(this.setBubbleContent(toilet))

        this.group.addObject(marker)

        marker.addEventListener('tap', (evt) => {
          // event target is the marker itself, group is a parent event target
          // for all objects that it contains
          const bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
            // read custom data
            content: evt.target.getData()
          })
          // show info bubble
          const { selectedBubble } = this
          if (selectedBubble) {
            this.ui.removeBubble(selectedBubble)
          }
          this.selectedBubble = bubble
          this.ui.addBubble(bubble)
        }, false)

      })
    },
    setBubbleContent (toilet) {
      const {
        addr,
        child_toilet,
        name,
        open,
        update_dt
      } = toilet
      const content = `
        Name: ${name}
        Address: ${addr}
        Open: ${open}
        Child Toilet: ${child_toilet ? 'Y' : 'N'}
        Updated Date: ${update_dt}
      `
      return content
    },
    getMarkerStyle (isChildToilet) {
      const color = isChildToilet ? 'blue' : '#A0D8F1'
      const stroke = 'white'

      const svgMarkup = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <rect stroke="${color}" fill="${color}" x="0.1" y="0.1" width="22" height="22" />
        <text x="12" y="18" font-size="12pt" font-family="Arial" font-weight="bold" 
        text-anchor="middle" fill="${stroke}" >T</text></svg>
      `
      return svgMarkup
    },
    removeClusteringLayer () {
      if (this.clusteringLayer) {
        this.map.removeLayer(this.clusteringLayer)
        this.clusteringLayer = null
      }
    },
    startClustering (map, data) {
      this.removeClusteringLayer()
      const dataPoints = []
      Object.keys(data).forEach((index) => {
        const { lat, lng } = data[index]
        if (!(lat && lng) || this.isLngOutOfBounds(lng, 'cluster')) {
          return
        }
        dataPoints.push(new H.clustering.DataPoint(lat, lng))
      })

      const clusteredDataProvider = new H.clustering.Provider(dataPoints, {
        clusteringOptions: {
          // Maximum radius of the neighbourhood
          eps: 100,
          // minimum weight of points required to form a cluster
          minWeight: 4
        }
      })

      this.clusteringLayer = new H.map.layer.ObjectLayer(clusteredDataProvider)

      this.map.addLayer(this.clusteringLayer)
    },
    isLngOutOfBounds (lng, mode) {
      const centerLng = this.map.getCenter().lng
      const lngRadius = mode === 'cluster' ? this.clusterRadius : this.lngRadius
      return lng < centerLng - lngRadius || lng > centerLng + lngRadius
    },
    getToilet (lat, mode) {
      this.isLoading = true
      const latRadius = mode === 'cluster' ? this.clusterRadius : this.latRadius
      const maxLat = lat + latRadius
      const minLat = lat - latRadius
      api('getToilets', minLat, maxLat).then((res) => {
        if (mode === 'cluster') {
          this.removeGroup()
          this.startClustering(this.map, res)
        } else {
          this.removeClusteringLayer()
          this.addMarkersToMap(this.map, res)
        }
        this.isLoading = false
      })
    }
  }
}
</script>

<style lang="scss">
.H_ib_body {
  background-color: #fff;
  width: 140px;
  padding: 0;
  .H_ib_close {
    background-color: rgba($color: #000000, $alpha: 0.1);
  }
  .H_ib_content {
    padding-top: 20px;
    color: #000;
    font-size: 10px;
  }
}
</style>
<style lang="scss" scoped>
.spinner-container {
  position: absolute;
  z-index: 9;
  left: 48%;
  top: 48%;
}
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
