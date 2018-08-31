<template>
  <div class="main-page">
    <h1><span class="title-1">Travel </span><span class="title-2">With </span><span class="title-3">kids</span></h1>
    <p>Destination / Location</p>
    <div class="input-wrapper">
      <img class="loaction-icon" src="../assets/icons/location-icon.svg" alt="location">
      <input class="search-input" id="pac-input" type="text">
    </div>
    <div class="button-wrapper">
      <button @click="getOptimalWay()">Optimal Way Search</button>
      <button @click="openNearbySearch()">Facilities Nearby</button>
    </div>
    <div class="option-wrapper">
      <div class="option-item">
        <label for="KidsToilet">
          <input type="checkbox"
                 id="KidsToilet"
                 name="feature"
                 ref="kidsToilet"
                 value="KidsToilet" checked />
          Kids Toilet
        </label>
      </div>
      <div class="option-item">
        <label for="EmergencyRoom">
          <input type="checkbox"
                 id="EmergencyRoom"
                 name="feature"
                 ref="emergencyRoom"
                 value="EmergencyRoom" checked />
          Emergency Room (Pediatric Doctor)
        </label>
      </div>
      <div class="option-item">
        <label for="ChildcareRoom" class="disabled-text">
          <input type="checkbox"
                 id="ChildcareRoom"
                 name="feature"
                 ref="childcareRoom"
                 value="ChildcareRoom" disabled />
          Childcare Room
          <span class="coming-soon">Coming soon</span>
        </label>
      </div>
      <div class="option-item">
        <label for="Stroller" class="disabled-text">
          <input type="checkbox"
                 id="Stroller"
                 name="feature"
                 ref="stroller"
                 value="Stroller" disabled />
          Stroller (Barrier-free)
          <span class="coming-soon">Coming soon</span></label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

const { google } = window

export default {
  name: 'MainPage',
  mounted () {
    this.initAutoComplete()
  },
  methods: {
    ...mapActions('location', {
      setLat: 'SET_LAT',
      setLng: 'SET_LNG',
      setIsOptimalWaySearch: 'SET_IS_OPTIMAL_WAY_SEARCH',
      setIsToiletChecked: 'SET_IS_TOILET_CHECKED',
      setIsErChecked: 'SET_IS_ER_CHECKED'
    }),
    initAutoComplete () {
      const input = document.getElementById('pac-input')
      const autocomplete = new google.maps.places.Autocomplete(input)

      autocomplete.setFields(['address_components', 'geometry', 'icon', 'name'])
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'")
          return
        }

        const { location } = place.geometry
        this.openPlaceSearch(location)
      })
    },
    openPlaceSearch (location) {
      this.goNext(location.lat(), location.lng(), false)
    },
    openNearbySearch () {
      this.goNext(0, 0, false)
    },
    getOptimalWay () {
      this.goNext(0, 0, true)
    },
    goNext (lat, lng, isOptimalWaySearch) {
      this.setLat(lat)
      this.setLng(lng)
      this.setIsOptimalWaySearch(isOptimalWaySearch)
      this.$router.push('/map')
    }
  },
  beforeDestroy () {
    const {
      kidsToilet,
      childcareRoom,
      stroller,
      emergencyRoom
    } = this.$refs
    const isToiletChecked = kidsToilet.checked
    const isErChecked = emergencyRoom.checked
    this.setIsToiletChecked(isToiletChecked)
    this.setIsErChecked(isErChecked)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-page {
  padding: 50px 12px 0 12px;
}
h1 {
  font-family: 'Luckiest Guy';
  font-weight: 400;
  font-size: 38px;
  text-align: center;
  margin-bottom: 30px;
}
h1 .title-1 {
  color: #ffaa22;
}
h1 .title-2 {
  color: #2D343B;
}
h1 .title-3 {
  color: #35a4ee;
}
p {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-bottom: 10px;
}
.search-input {
  border: 1px solid #ededed;
  border-radius: 8px;
  padding: 12px 10px 12px 34px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 40px;
}
.option-item {
  margin-bottom: 10px;
  margin-left: 10px;
  .disabled-text {
    color: grey;
    .coming-soon {
      color: #fff;
      background-color: #ffaa22;
      padding: 2px 10px;
      margin-left: 10px;
      font-size: 14px;
    }
  }
}
label {
  font-weight: 400;
  border: 1px solid #ededed;
  padding:  20px 10px 20px 20px;
  margin-left: 8px;
  border-radius: 8px;
  width: calc(100% - 26px);
  display: inline-block;
  background-color: #fafafa;
}
.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
}
button {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 16px 20px;
  color: #ffffff;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 12px;
  font-weight: 600;
  background-color: #ffaa22;
  border: none;
}
button:last-child {
  margin-right: 0;
  background-color: #35a4ee;
}
.input-wrapper {
  position: relative;
}
.loaction-icon {
  position: absolute;
  top: 12px;
  left: 10px;
  width: 20px;
}
</style>
