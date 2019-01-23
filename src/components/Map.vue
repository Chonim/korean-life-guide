<template>
  <div class="map-wrapper">
    <div class="spinner-container" v-if="isLoading">
      <spinner></spinner>
    </div>
    <div class="loading-dimer" v-if="isLoading"></div>
    <div class="current-location" @click="getCurrentPosition()">
      <i class="fas fa-bullseye"></i>
    </div>
    <map-header :currentPosition="currentPosition"></map-header>
    <div id="mapContainer" class="map-container"></div>
    <div class="center-crosshair">+</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Spinner from 'vue-simple-spinner'

import api from '@/api'
import config from '@/config'

import MapHeader from './Header'
import WarningMessage from './WarningMessage'

const { daum, google } = window

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
      // latRadius: 0.02,
      // lngRadius: 0.02,
      newLat: 0,
      latRadius: 0.2,
      lngRadius: 0.2,
      ui: null,
      selectedBubble: null,
      markerVisibleZoom: 15,
      centerMarker: null,
      markers: [],
      points: [],
      currentPosition: '',
      infowindow: null,
      prevInfowindow: null,
      coords: {
        lat: 37,
        lng: 127
      }
    }
  },
  async mounted () {
    await this.initMap()
    this.controlSearchPoints()
    // this.addMarkersToMap()
  },
  computed: {
    ...mapGetters('location', {
      savedLat: 'LAT',
      savedLng: 'LNG',
      checkedFilters: 'CHECKED_FILTERS'
    })
  },
  methods: {
    async controlSearchPoints () {
      this.points = []
      this.setMarkers(null)
      this.markers = []
      const checkFilter = (filter) => this.checkedFilters.some(checkedFilterEl => checkedFilterEl === filter)
      let isImmigratsSupport = false
      this.isLoading = true
      for (const checkedFilter of this.checkedFilters) {
        switch (checkedFilter) {
          case 'recruit_center':
          case 'immigration_offices':
            await this.searchPoints(checkedFilter)
            continue
          default:
            if (isImmigratsSupport) {
              continue
            }
            await this.searchPoints('immigrants_support')
            isImmigratsSupport = true
            continue
        }
      }
      this.setMarkers(this.map)
      this.isLoading = false
    },
    async searchPoints (table) {
      const { minLat, maxLat } = this.getMinMaxLat()
      const results = await api('getPoints', table, minLat, maxLat)
      const resultsArr = await Object.keys(results).map(index => results[index])
      const newPoints = this.filterPoints(table, resultsArr)
      const newMarkers = this.createMarkers(newPoints)
      this.markers = [
        ...this.markers,
        ...newMarkers
      ]
      return resultsArr
    },
    filterPoints (table, points) {
      const filteredPoints = points.filter((result) => {
        let isIncludedInFilter = true
        if (table === 'immigrants_support') {
          this.checkedFilters.forEach((checkedFilter) => {
            switch (checkedFilter) {
              case 'medical':
              case 'consulting':
              case 'law':
              case 'edu':
                if (result[checkedFilter]) {
                  isIncludedInFilter = true
                }
                break
              default:
                isIncludedInFilter = false
                break
            }
          })
        }
        return !this.isLngOutOfBounds(result.lng) && isIncludedInFilter
      })
      return filteredPoints
    },
    createMarkers (pointsArr) {
      return pointsArr.map((point) => {
        this.points.push(point)
        const {
          lat,
          lng,
          name,
          addr,
          tel,
          time,
          lang,
          url
        } = point
        const marker = new daum.maps.Marker({
          position: new daum.maps.LatLng(lat, lng)
        })
        // add infowindow
        const addrEl = addr ? `<div>주소: ${addr}</div>` : ''
        const timeEl = time ? `<div>운영시간: ${time}</div>` : ''
        const langEl = lang ? `<div>지원언어: ${lang}</div>` : ''
        const linkEl = url ? `
          <div>
            <a target="_blank" href="${url}">홈페이지 바로가기</a>
          </div>
        ` : ''
        const iwContent = `
          <div
            style="
              text-align: center;
              height: auto;
              min-height: 100px;
              max-width: 240px;
              font-size: 14px;
              padding: 4px;
          ">
            <div>기관명: ${name}</div>
            ${addrEl}
            <div>전화번호: ${tel}</div>
            ${timeEl}
            ${langEl}
            ${linkEl}
          </div>
        `
        const infowindow = new daum.maps.InfoWindow({
          content: iwContent,
          removable: true
        })
        daum.maps.event.addListener(marker, 'click', () => {
          if (this.prevInfowindow) {
            this.prevInfowindow.close(this.map, marker)
          }
          infowindow.open(this.map, marker)
          const newCenter = marker.getPosition()
          this.map.panTo(newCenter)
          this.geocodeLatLng(newCenter)
          this.prevInfowindow = infowindow
        })
        return marker
      })
    },
    setPosition (lat, lng, mode) {
      const latLng = {lat, lng}
      if (!this.centerMarker) {
        this.map.addObject(this.centerMarker)
      } else {
        this.centerMarker.setPosition(latLng)
      }
      this.map.setCenter(latLng)
      this.geocodeLatLng(latLng)
    },
    geocodeLatLng (latLng) {
      const geocoder = new daum.maps.services.Geocoder()
      geocoder.coord2Address(latLng.getLng(), latLng.getLat(), (result) => {
        try {
          this.currentPosition = result[0].address.address_name
        } catch (error) {
          console.error(error)
        } finally {
          this.newLat = latLng.getLat()
          this.controlSearchPoints()
        }
      })
    },
    initMap () {
      const { savedLat, savedLng } = this
      const container = document.getElementById('mapContainer')
      const options = {
        center: new daum.maps.LatLng(savedLat, savedLng),
        level: 3
      }
      this.map = new daum.maps.Map(container, options)

      const mapTypeControl = new daum.maps.MapTypeControl()
      this.map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT)

      const zoomControl = new daum.maps.ZoomControl()
      this.map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT)

      daum.maps.event.addListener(this.map, 'dragend', () => {
        this.geocodeLatLng(this.map.getCenter())
      })
      daum.maps.event.addListener(this.map, 'zoom_changed', () => {
        this.geocodeLatLng(this.map.getCenter())
      })
    },
    isLngOutOfBounds (lng) {
      const centerLng = this.map.getCenter().getLng()
      const { lngRadius } = this
      return lng < centerLng - lngRadius || lng > centerLng + lngRadius
    },
    getMinMaxLat () {
      const lat = this.newLat || this.savedLat
      const { latRadius } = this
      const minLat = lat - latRadius
      const maxLat = lat + latRadius
      return { minLat, maxLat }
    },
    setMarkers (map) {
      if (!this.markers.length) {
        return
      }
      for (const marker of this.markers) {
        marker.setMap(this.map)
      }
    },
    getCurrentPosition () {
      if (!navigator.geolocation) {
        return
      }
      this.isLoading = true
      navigator.geolocation.getCurrentPosition((position) => {
        this.isLoading = false
        const { coords } = position
        // this.coords = {
        //   lat: coords.latitude,
        //   lng: coords.longitude
        // }
        const newCoords = new daum.maps.LatLng(coords.latitude, coords.longitude)
        this.map.panTo(newCoords)
      }, (err) => {
        this.isLoading = false
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
  }
}
</script>

<style lang="scss">
.H_ib_body {
  background-color: #fff;
  width: 240px;
  padding: 0;
  border-radius: 10px;
  .H_ib_close {
    background-color: rgba($color: #000000, $alpha: 0.1);
    border-radius: 24px;
  }
  .H_ib_content {
    padding: 20px 16px;
    color: #666;
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
<style lang="scss" scoped>
.map-wrapper {
  height: 100%;
  .current-location {
    position: fixed;
    top: 80px;
    left: 10px;
    padding: 8px;
    z-index: 9;
    border-radius: 20px;
    border: 2px solid #000;
    background-color: rgba(31, 38, 42, 0.2);
  }
  .loading-dimer {
    position: fixed;
    pointer-events: none;
    width: 100%;
    height: 100%;
    margin-top: 70px;
    background-color: #ffffff;
    opacity: .3;
    z-index: 8;
  }
  .spinner-container {
    position: absolute;
    z-index: 9;
    transform: translateX(-50%);
    left: 50%;
    top: 50%;
  }
  .map-container {
    width: 100%;
    height: calc(100vh - 70px);
    min-height: 480px;
  }
  .center-crosshair {
    position: absolute;
    color: #34A4EE;
    z-index: 9999;
    top: calc(50% + 26px);
    left: calc(50% - 4px);
  }
}
</style>
