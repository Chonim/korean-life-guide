<template>
  <div class="side-menu-wrapper">
    <div id="mySidenav" class="sidenav">
      <div class="closebtn" @click="closeNav()">&times;</div>
      <ul>
        <li
          v-for="menu in menus"
          :key="menu.pageName"
        >
          <a @click="routerPush(menu.route)">
            {{ translates[menu.pageName] }}
          </a>
          <ul>
            <li
              v-for="child in menu.children"
              :key="child.pageName"
              class="child-route"
            >
              <a @click="routerPush(child.route)">
                - {{ translates[child.pageName] }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="sidenav-toggle" @click="openNav()">&#9776;</div>
    <div
      v-show="isNavOpen"
      class="mask"
      @click="closeNav()"
    />
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {
      isNavOpen: false,
      menus: [{
        pageName: '가까운 기관 찾기',
        route: '/',
      }, {
        pageName: '비자',
        route: '',
        children: [{
          pageName: 'E-7-4',
          route: '/visa/e74',
        }, {
          pageName: 'D-10-1',
          route: '/visa/d101',
        }, {
          pageName: 'F-2',
          route: '/visa/f2',
        }],
      }, {
        pageName: '노동',
        route: '',
        children: [{
          pageName: '기숙사',
          route: '/labor/dormitory',
        }, {
          pageName: '사업장 변경',
          route: '/labor/work-change',
        }, {
          pageName: '육아도우미 채용절차',
          route: '/labor/nanny-hiring',
        }],
      }, {
        pageName: '외국인 생활안내',
        route: '/life-guide',
      }, {
        pageName: '함께 하는 사람들',
        route: '/about',
      }],
    }
  },
  computed: {
    translates () {
      return this.$store.getters['translates/translates']
    },
  },
  methods: {
    routerPush (route) {
      if (!route) {
        return
      }
      this.$router.push(route).catch(() => '')
      this.closeNav()
    },
    openNav () {
      document.getElementById('mySidenav').style.left = '0px'
      this.isNavOpen = true
    },
    closeNav () {
      document.getElementById('mySidenav').style.left = '-250px'
      this.isNavOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
.side-menu-wrapper {
  position: absolute;
  .sidenav {
    z-index: 2;
    height: 100%;
    width: 250px;
    position: fixed;
    top: 0;
    left: -250px;
    background-color: #fff;
    overflow-x: hidden;
    transition: left 0.3s ease-out;
    padding-top: 60px;
    a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 16px;
      color: #202020;
      &:active {
        background: none;
      }
    }
    ul {
      li:hover {
        background-color: #fff;
      }
      a {
        display: block;
        transition: 0.3s;
        &:hover {
          background-color: #f6f6f6;
        }
      }
      .child-route {
        a {
          padding-left: 48px;
        }
      }
    }
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
  }
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

.mask {
  z-index: 1;
  position: fixed;
  top: 0;
  width: 2000px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
}

</style>
