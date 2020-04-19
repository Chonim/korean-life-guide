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
    path: '/labor/:laborType',
    name: 'Labor',
    component: () => import('@/components/labor')
  },
  {
    path: '/dormitory',
    name: 'DormitoryRelated',
    component: () =>
      import('@/components/DormitoryRelated')
  },
  {
    path: '/life-guide',
    name: 'LifeGuide',
    component: () =>
      import('@/components/life-guide')
  },
  {
    path: '/map',
    name: 'Map',
    component: () =>
      import('@/components/Map')
  }
]
