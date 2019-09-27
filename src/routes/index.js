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
      import('@/components/About')
  },
  {
    path: '/visa',
    name: 'Visa',
    component: () =>
      import('@/components/Visa')
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
