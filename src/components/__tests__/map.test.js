import { shallowMount } from '@vue/test-utils'
import MapComponent from '../Map'

const createWrapper = (checkedFilters) => {
  return shallowMount(MapComponent, {
    computed: {
      savedLat: () => 37.589116,
      savedLng: () => 127.01821459999996,
      checkedFilters: () => checkedFilters,
    },
  })
}

describe('Map', () => {
  it('should have result', async () => {
    const { vm } = createWrapper(['immigration_offices', 'recruit_center', 'consulting'])
    // await vm.controlSearchPoints()
    const results = await vm.searchPoints('immigrants_support')
    // const result = await vm.controlSearchPoints()
    // expect(vm.map).toEqual({})
    // expect(typeof vm.map.addControl).toBe('function')
    // console.log(Array.isArray(results))
    // console.log(results[0])
    // console.log(results.length)
    expect(results.length).toBeGreaterThan(0)
    expect(vm.points).toEqual([])
    // expect(vm.points.length).toBeGreaterThan(0)
    expect(vm.markers).toEqual([])
  })
  it('should filter correctly', async () => {
    const { vm } = createWrapper(['immigration_offices', 'recruit_center', 'consulting', 'law'])
    const immigrantsSupport = await vm.searchPoints('immigrants_support')
    console.log(immigrantsSupport.length)
    const filteredImmigrantsSupport = vm.filterPoints('immigrants_support', immigrantsSupport)
    console.log(filteredImmigrantsSupport.length)
    console.log(vm.checkedFilters)
    const results = [
      ...filteredImmigrantsSupport,
      ...await vm.searchPoints('recruit_center'),
      ...await vm.searchPoints('immigration_offices'),
    ]
    const locationWithAddress = results.filter(location => location.addr)
    // expect(locationWithAddress.length).toBe(results.length)
    expect(locationWithAddress.length).toBeGreaterThan(0)
  })
})
