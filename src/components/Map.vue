<template>
  <div class="map-wrapper">
    <div class="spinner-container" v-if="isLoading">
      <spinner></spinner>
    </div>
    <map-header :currentPosition="currentPosition"></map-header>
    <div id="mapContainer" class="map-container"></div>
    <warning-message v-show="currentZoom < 14"></warning-message>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Spinner from 'vue-simple-spinner'

import api from '@/api'
import config from '@/config'
import mapHelpers from '@/utils/mapHelpers'

import MapHeader from './Header'
import WarningMessage from './WarningMessage'

const { H, google } = window

export default {
  name: 'Map',
  components: {
    Spinner,
    MapHeader,
    WarningMessage
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
      currentZoom: 6,
      centerMarker: null,
      group: null,
      clusteringLayer: null,
      clusterRadius: 0.2,
      points: {},
      currentPosition: '',
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
      savedLng: 'LNG',
      isToiletChecked: 'IS_TOILET_CHECKED',
      isErChecked: 'IS_ER_CHECKED'
    })
  },
  methods: {
    setPosition (lat, lng, mode) {
      const latLng = {lat, lng}
      if (!this.centerMarker) {
        this.centerMarker = new H.map.Marker(latLng)
        this.map.addObject(this.centerMarker)
      } else {
        this.centerMarker.setPosition(latLng)
      }
      this.map.setCenter(latLng)
      this.geocodeLatLng(latLng)
      this.getLocations(lat, mode)
    },
    geocodeLatLng (latLng) {
      const geocoder = new google.maps.Geocoder
      let address = ''
      geocoder.geocode({location: latLng}, (results, status) => {
        if (status === 'OK') {
          const result = results[0]
          if (result) {
            this.currentPosition = results[0].formatted_address
          } else {
            this.currentPosition = 'Unknown location'
          }
        } else {
          this.currentPosition = 'Failed to get address'
        }
      })
    },
    initMap () {
      const platform = new H.service.Platform({
        app_id: config.HERE_ID,
        app_code: config.HERE_CODE,
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
        this.setZoom()
        this.setPosition(savedLat, savedLng)
      } else {
        this.getCurrentPosition()
      }
    },
    setZoom () {
      this.currentZoom = 14
      this.map.setZoom(this.currentZoom)
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
            this.setZoom()
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
        const location = data[index]
        const { lat, lng, childCare } = location
        const childToilet = location.child_toilet
        if (!(lat && lng) || this.isLngOutOfBounds(lng)) {
          return
        }

        let colorType = ''
        if (childToilet !== undefined) {
          if (childToilet) {
            colorType = 'toiletY'
          } else {
            colorType = 'toiletN'
          }
        } else {
          if (childCare) {
            colorType = 'childCareY'
          } else {
            colorType = 'childCareN'
          }
        }

        const markerStyle = mapHelpers.getMarkerStyle(colorType)
        const icon = new H.map.Icon(markerStyle, {size: {w: 32, h: 32}})
        const marker = new H.map.Marker({lat, lng}, {icon})
        const isToilet = colorType.includes('toilet')
        const bubbleContent = isToilet ? mapHelpers.setToiletBubbleContent(location) : mapHelpers.setErBubbleContent(location)
        marker.setData(bubbleContent)

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
    getToilets (minLat, maxLat, mode) {
      api('getToilets', minLat, maxLat).then((res) => {
        this.concatPoints(res)
        if (!this.isErChecked) {
          this.getLocationsCallback(mode)
        } else {
          this.getErs(minLat, maxLat, mode)
        }
      })
    },
    getErs (minLat, maxLat, mode) {
      api('getEmergencyRooms', minLat, maxLat).then((res) => {
        this.concatPoints(res)
        this.getLocationsCallback(mode)
      })
    },
    concatPoints (res) {
      this.points = Object.assign(this.points, res)
    },
    getLocationsCallback (mode) {
      if (mode === 'cluster') {
        this.removeGroup()
        this.startClustering(this.map, this.points)
      } else {
        this.removeClusteringLayer()
        this.addMarkersToMap(this.map, this.points)
      }
      this.isLoading = false
    },
    getLocations (lat, mode) {
      this.isLoading = true
      const latRadius = mode === 'cluster' ? this.clusterRadius : this.latRadius
      const maxLat = lat + latRadius
      const minLat = lat - latRadius
      this.points = {}
      if (this.isToiletChecked) {
        this.getToilets(minLat, maxLat, mode)
        return
      }
      if (this.isErChecked) {
        this.getErs(minLat, maxLat, mode)
      }
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
.map-wrapper {
  height: 100%;
  .spinner-container {
    position: absolute;
    z-index: 9;
    left: 48%;
    top: 58%;
  }
  .map-container {
    width: 100%;
    height: calc(100% - 70px);
  }
}
</style>
