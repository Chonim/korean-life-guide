<template>
  <div class="side-menu-wrapper">
    <div id="mySidenav" class="sidenav">
      <a href="#" class="closebtn" @click="closeNav()">&times;</a>
      <a
        v-for="menu in menus"
        :key="menu.route"
        @click="routerPush(menu.route)"
      >
        {{ translates[menu.pageName] }}
      </a>
    </div>
    <div class="sidenav-toggle" @click="openNav()">&#9776;</div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {
      menus: [{
        pageName: '가까운 기관 찾기',
        route: '/'
      }, {
        pageName: '함께 하는 사람들',
        route: '/about'
      }, {
        pageName: '비자',
        route: '/visa'
      }, {
        pageName: '기숙사 관련',
        route: '/dormitory'
      }]
    }
  },
  computed: {
    translates () {
      return this.$store.getters['translates/translates']
    }
  },
  methods: {
    routerPush (route) {
      this.$router.push(route)
      this.closeNav()
    },
    openNav () {
      document.getElementById('mySidenav').style.left = '0px'
    },
    closeNav () {
      document.getElementById('mySidenav').style.left = '-250px'
    }
  }
}
</script>

<style lang="scss" scoped>
.side-menu-wrapper {
  position: absolute;
  .sidenav {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: -250px;
    background-color: #111;
    overflow-x: hidden;
    transition: left 0.3s ease-in-out;
    padding-top: 60px;
  }

  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .sidenav a:hover {
    color: #f1f1f1;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  .sidenav-toggle {
    margin-top: 8px;
    margin-left: 20px;
    font-size: 30px;
    cursor: pointer;
  }
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

</style>
