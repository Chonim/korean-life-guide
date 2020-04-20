export default {
  SET_LAT: (state, lat) => { state.lat = lat },
  SET_LNG: (state, lng) => { state.lng = lng },
  SET_ADDRESS: (state, address) => { state.address = address },
  SET_IS_OPTIMAL_WAY_SEARCH: (state, isOptimalWaySearch) => { state.isOptimalWaySearch = isOptimalWaySearch },
  SET_CHECKED_FILTERS: (state, checkedFilters) => { state.checkedFilters = checkedFilters },
}
