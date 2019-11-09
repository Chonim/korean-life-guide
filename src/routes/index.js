/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  {
    path: '/',
    name: 'MainPage',
    component: () =>
      import('@/components/MainPage')
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: () =>
      import('@/components/about')
  },
  {
    path: '/visa/:visaType',
    name: 'Visa',
    component: () => import('@/components/visa')
  },
  {
    path: '/visa-temp',
    name: 'VisaTemp',
    component: () =>
      import('@/components/VisaTemp')
  },
  {
    path: '/dormitory',
    name: 'DormitoryRelated',
    component: () =>
      import('@/components/DormitoryRelated')
  },
  {
    path: '/map',
    name: 'Map',
    component: () =>
      import('@/components/Map')
  }
]
