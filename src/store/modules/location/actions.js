export default {
  SET_LAT: ({ commit }, lat) => { commit('SET_LAT', lat) },
  SET_LNG: ({ commit }, lng) => { commit('SET_LNG', lng) },
  SET_ADDRESS: ({ commit }, address) => { commit('SET_ADDRESS', address) },
  SET_IS_OPTIMAL_WAY_SEARCH: ({ commit }, isOptimalWaySearch) => { commit('SET_IS_OPTIMAL_WAY_SEARCH', isOptimalWaySearch) },
  SET_CHECKED_FILTERS: ({ commit }, checkedFilters) => { commit('SET_CHECKED_FILTERS', checkedFilters) }
}
