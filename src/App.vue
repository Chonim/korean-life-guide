<template>
  <div id="app">
    <template v-if="isNotInMap">
      <side-menu />
      <compass-logo />
    </template>
    <router-view />
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import CompassLogo from '@/components/Logo'

export default {
  name: 'App',
  components: {
    SideMenu,
    CompassLogo
  },
  computed: {
    isNotInMap () {
      return this.$route.name !== 'Map'
    }
  }
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
