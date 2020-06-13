<template>
  <div id="app">
    <template v-if="isNotInMap">
      <side-menu />
      <main-header />
      <p class="covid-notification">
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
}
</script>

<style>
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
</style>

<style lang="scss" scoped>
.covid-notification {
  background-color: rgb(226, 233, 243);
  padding: .25rem .5rem;
}
</style>
