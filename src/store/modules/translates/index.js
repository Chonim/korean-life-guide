const actions = {
  fetchTranslates ({ getters, commit }) {
    const currentTranslates = getters.translates
    const wordsToTranslates = Object.keys(currentTranslates)
    console.log(wordsToTranslates.join())
    console.log(currentTranslates)
    const newTranslates = {}
    wordsToTranslates.forEach((word, i) => {
      newTranslates[word] = i
    })
    commit('updateTranslates', newTranslates)
    console.log(newTranslates)
  }
}

const mutations = {
  updateTranslates (state, translates) {
    state.translates = translates
  }
}

const state = {
  translates: {
    '무료진료': '무료진료',
    '일반상담': '일반상담',
    '법률상담': '법률상담',
    '한국어교육': '한국어교육',
    '출입국관리사무소': '출입국관리사무소',
    '고용복지플러스센터': '고용복지플러스센터'
  }
}

const getters = {
  translates: state => state.translates
}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
