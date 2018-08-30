export default {
  SET_LAT: ({ commit }, lat) => { commit('SET_LAT', lat) },
  SET_LNG: ({ commit }, lng) => { commit('SET_LNG', lng) },
  SET_ADDRESS: ({ commit }, address) => { commit('SET_ADDRESS', address) },
  SET_IS_TOILET_CHECKED: ({ commit }, isToiletChecked) => { commit('SET_IS_TOILET_CHECKED', isToiletChecked) },
  SET_IS_ER_CHECKED: ({ commit }, isErChecked) => { commit('SET_IS_ER_CHECKED', isErChecked) }
}
