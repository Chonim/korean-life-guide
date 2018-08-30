<template>
  <div class="map-wrapper">
    <div class="spinner-container" v-if="isLoading">
      <spinner></spinner>
    </div>
    <map-header :currentPosition="currentPosition"></map-header>
    <div id="mapContainer" class="map-container"></div>
    <warning-message v-show="!IsOptimalWaySearch && currentZoom < markerVisibleZoom"></warning-message>
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
      isLoading: false,
      latRadius: 0.02,
      lngRadius: 0.02,
      ui: null,
      selectedBubble: null,
      currentZoom: 6,
      markerVisibleZoom: 15,
      centerMarker: null,
      group: null,
      clusteringLayer: null,
      clusterRadius: 0.2,
      points: {},
      currentPosition: '',
      coords: {
        lat: 37,
        lng: 127
      },
      sampleData: {
        addr: '臺北市中山區中山北路2段92號',
        childCare: 1,
        country: 'Taiwan',
        lat: 24.991262,
        lng: 121.539893,
        name: '台灣基督長老?會馬偕醫療財團法人馬偕兒童醫院',
        phone: '02-25433535'
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
      IsOptimalWaySearch: 'IS_OPTIMAL_WAY_SEARCH',
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
      const geocoder = new google.maps.Geocoder()
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

      this.map.addEventListener('mapviewchange', () => {
        if (!this.centerMarker) {
          return
        }
        this.centerMarker.setPosition(this.map.getCenter())
      })

      this.map.addEventListener('mapviewchangeend', () => {
        this.handleMapViewChange()
      })

      if (this.IsOptimalWaySearch) {
        this.initRouting(platform)
        return
      }

      if (savedLat && savedLng) {
        this.setZoom()
        this.setPosition(savedLat, savedLng)
      } else {
        this.getCurrentPosition()
      }
    },
    setZoom () {
      this.currentZoom = this.markerVisibleZoom
      this.map.setZoom(this.currentZoom)
    },
    handleMapViewChange () {
      const center = this.map.getCenter()
      const zoom = this.map.getZoom()
      const { lat, lng } = center
      if (this.currentZoom !== zoom) {
        this.currentZoom = zoom
      }
      if (zoom < this.markerVisibleZoom) {
        this.setPosition(lat, lng, 'cluster')
        return
      }
      this.setPosition(lat, lng)
    },
    getCurrentPosition () {
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
          switch (err.code) {
            case err.PERMISSION_DENIED:
              alert('Please allow geolocation permission and refresh this webpage')
              break
            case err.POSITION_UNAVAILABLE:
            case err.TIMEOUT:
              alert('Position unavailable. please check your device setting.')
              break
            default:
              break
          }
        })
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
          const bubble = new H.ui.InfoBubble(evt.target.getPosition(), {
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
    addWarningInfoBubble (startPoint, endPoint) {
      const bubbleArray = [
        {
          point: startPoint,
          content: `
            南京三民站 Elevator :<br>
            Exit 1,2
          `
        },
        {
          point: endPoint,
          content: `
            萬隆站 Elevator :<br>
            Out of service (as of 31 Aug 2018)
          `
        }
      ]
      bubbleArray.forEach((el) => {
        const bubble = new H.ui.InfoBubble(el.point, {
          content: el.content
        })
        this.ui.addBubble(bubble)
      })
    },
    initRouting (platform) {
      const router = platform.getRoutingService()
      const { sampleData } = this
      const startPoint = {
        lat: '25.048855',
        lng: '121.561709'
      }
      const routeRequestParams = {
        // mode: 'shortest;pedestrian',
        mode: 'fastest;publicTransport',
        avoidTransportTypes: 'busPublic',
        representation: 'display',
        // language: 'zh-tw',
        waypoint0: `${startPoint.lat},${startPoint.lng}`,
        waypoint1: `${sampleData.lat},${sampleData.lng}`,
        routeattributes: 'waypoints,summary,shape,legs',
        maneuverattributes: 'direction,action'
      }
      const onSuccess = (result) => {
        const route = result.response.route[0]
        this.addRouteShapeToMap(route)
        this.addManueversToMap(route)
        console.log(route)
      }
      const onError = (error) => {
        console.log(error)
      }
      this.addWarningInfoBubble(startPoint, sampleData)
      router.calculateRoute(
        routeRequestParams,
        onSuccess,
        onError
      )
    },
    addRouteShapeToMap (route) {
      const lineString = new H.geo.LineString()
      const routeShape = route.shape
      let polyline

      routeShape.forEach((point) => {
        const parts = point.split(',')
        lineString.pushLatLngAlt(parts[0], parts[1])
      })

      polyline = new H.map.Polyline(lineString, {
        style: {
          lineWidth: 4,
          strokeColor: 'rgba(0, 128, 255, 0.7)'
        }
      })
      // Add the polyline to the map
      this.map.addObject(polyline)
      // And zoom to its bounding rectangle
      this.map.setViewBounds(polyline.getBounds(), true)
    },
    addManueversToMap (route) {
      const svgMarkup = '<svg width="18" height="18" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="8" cy="8" r="8" ' +
          'fill="#1b468d" stroke="white" stroke-width="1"  />' +
        '</svg>'
      const dotIcon = new H.map.Icon(svgMarkup, {anchor: { x: 8, y: 8 }})
      const group = new H.map.Group()

      // Add a marker for each maneuver
      for (let i = 0; i < route.leg.length; i += 1) {
        for (let j = 0; j < route.leg[i].maneuver.length; j += 1) {
          // Get the next maneuver.
          const maneuver = route.leg[i].maneuver[j]
          // Add a marker to the maneuvers group
          const marker = new H.map.Marker({
            lat: maneuver.position.latitude,
            lng: maneuver.position.longitude
          }, {
            icon: dotIcon
          })
          marker.instruction = maneuver.instruction
          group.addObject(marker)
        }
      }

      const { map } = this
      let bubble = null
      const openBubble = (position, text) => {
        if (!bubble) {
          bubble = new H.ui.InfoBubble(
            position,
            // The FO property holds the province name.
            {content: text})
          this.ui.addBubble(bubble)
        } else {
          bubble.setPosition(position)
          bubble.setContent(text)
          bubble.open()
        }
      }

      group.addEventListener('tap', (evt) => {
        map.setCenter(evt.target.getPosition())
        openBubble(
          evt.target.getPosition(), evt.target.instruction)
      }, false)

      // Add the maneuvers group to the map
      this.map.addObject(group)
    },
    getLocations (lat, mode) {
      const latRadius = mode === 'cluster' ? this.clusterRadius : this.latRadius
      const maxLat = lat + latRadius
      const minLat = lat - latRadius
      this.points = {}
      if (this.IsOptimalWaySearch) {
        return
      }
      this.isLoading = true
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
  border-radius: 10px;
  .H_ib_close {
    background-color: rgba($color: #000000, $alpha: 0.1);
    border-radius: 24px;
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
    min-height: 480px;
  }
}
</style>
