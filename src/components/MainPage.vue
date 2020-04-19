<template>
  <div class="main-page">
    <p>Destination / Location</p>
    <div class="input-wrapper">
      <img class="loaction-icon" src="../assets/icons/location-icon.svg" alt="location">
      <input class="search-input" id="pac-input" type="text" placeholder="위치 입력">
    </div>
    <div class="option-wrapper">
      <div
        class="option-item"
        v-for="option in options"
        :key="option.value"
      >
        <label :for="option.value">
          <input
            type="checkbox"
            :id="option.value"
            name="feature"
            :ref="option.value"
            :value="option.value"
            v-model="checkedOptions"
          />
          {{translates[option.title]}}
        </label>
      </div>
    </div>
    <div class="button-wrapper">
      <button @click="openNearbySearch()">
        {{ translates['가까운 기관 찾기'] }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

const { google } = window

export default {
  name: 'MainPage',
  data () {
    return {
      location: '',
      options: [
        {
          title: '무료진료',
          value: 'medical'
        }, {
          title: '일반상담',
          value: 'consulting'
        }, {
          title: '법률상담',
          value: 'law'
        }, {
          title: '한국어교육',
          value: 'edu'
        }, {
          title: '출입국외국인사무소',
          value: 'immigration_offices'
        }, {
          title: '고용복지플러스센터',
          value: 'recruit_center'
        }
      ],
      checkedOptions: []
    }
  },
  computed: {
    translates () {
      return this.$store.getters['translates/translates']
    }
  },
  mounted () {
    this.initAutoComplete()
  },
  methods: {
    ...mapActions('location', {
      setLat: 'SET_LAT',
      setLng: 'SET_LNG',
      setAddress: 'SET_ADDRESS',
      setIsOptimalWaySearch: 'SET_IS_OPTIMAL_WAY_SEARCH',
      setCheckedFilters: 'SET_CHECKED_FILTERS'
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
        const fullAddress = place.address_components
          .map((addressComponent) => {
            return addressComponent.long_name
          })
          .reverse()
          .join(' ')
        this.setAddress(fullAddress)
        this.location = [location.lat(), location.lng()]
      })
    },
    openNearbySearch () {
      if (!this.checkedOptions.length) {
        alert(this.translates['기관을 1개 이상 선택해 주세요'])
        return
      }
      const [lat, lng] = this.location
      this.goNext(lat, lng)
      // this.goNext(37.566338, 126.977956)
    },
    goNext (lat, lng) {
      this.setLat(lat)
      this.setLng(lng)
      this.$router.push('/map')
    }
  },
  beforeDestroy () {
    this.setCheckedFilters(this.checkedOptions)
  }
}
</script>

<style lang="scss" scoped>
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
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-bottom: 10px;
}
.input-wrapper {
  display: flex;
  position: relative;
  .search-input {
    border: 1px solid #ededed;
    border-radius: 8px;
    padding: 12px 10px 12px 34px;
    font-size: 16px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 12px;
  }
  .loaction-icon {
    position: absolute;
    top: 12px;
    left: 28px;
    width: 20px;
  }
}
.option-item {
  margin-bottom: 10px;
  padding: 0 10px;
  .disabled-text {
    color: grey;
    .coming-soon {
      color: #fff;
      background-color: #2D343B;
      padding: 2px 10px;
      border-radius: 4px;
      margin-left: 10px;
      font-size: 14px;
    }
  }
}
label {
  font-weight: 400;
  border: 1px solid #ededed;
  padding:  10px;
  border-radius: 8px;
  width: 100%;
  display: inline-block;
  background-color: #fafafa;
  input {
    margin-right: 8px;
  }
}
.button-wrapper {
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin: 12px auto;
  > button {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    box-sizing: border-box;
    padding: 12px 16px;
    color: #ffffff;
    border-radius: 4px;
    font-size: 18px;
    margin-right: 12px;
    font-weight: 600;
    background-color: #ffaa22;
    border: none;
  }
  > button:last-child {
    margin-right: 0;
    background-color: #35a4ee;
  }
}
</style>
