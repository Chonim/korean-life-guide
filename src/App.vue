<template>
  <div id="app">
    <template v-if="isNotInMap">
      <side-menu />
      <main-header />
      <p
        v-show="$route.name === 'MainPage'"
        class="covid-notification"
        @click="openCovidLink()"
      >
        ▶ {{ translates['외국인을 위한 COVID-19 무료검사 안내'] }}
      </p>
      <compass-logo />
    </template>
    <router-view />
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import MainHeader from '@/components/MainHeader'
import CompassLogo from '@/components/Logo'

export default {
  name: 'App',
  components: {
    SideMenu,
    MainHeader,
    CompassLogo,
  },
  computed: {
    translates () {
      return this.$store.getters['translates/translates']
    },
    isNotInMap () {
      return this.$route.name !== 'Map'
    },
  },
  methods: {
    openCovidLink () {
      window.open('http://www.immigration.go.kr/immigration/1473/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGaW1taWdyYXRpb24lMkY0NyUyRjUyNDM4OCUyRmFydGNsVmlldy5kbyUzRg%3D%3D')
    },
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
Html, body {
  height: 100%;
}
body{
  width: 100%;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
p, ol, ul {
  margin-top: 1rem;
  white-space: break-spaces;
}
ol {
  padding-left: 1rem;
}
.margin-top {
  margin-top: 1rem;
}
</style>

<style lang="scss" scoped>
.covid-notification {
  background-color: rgb(226, 233, 243);
  padding: .25rem .5rem;
  cursor: pointer;
}
</style>
