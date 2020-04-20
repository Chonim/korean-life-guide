import Axios from '@/plugins/axios'
import i18n from '@/i18n'

const actions = {
  async fetchTranslates ({ getters, commit }, target) {
    const currentTranslates = getters.translates
    const words = Object.keys(currentTranslates)

    let translateResult = []
    if (target === 'ko') {
      translateResult = words
    } else {
      var i; var j; var chunk = 128
      for (i = 0, j = words.length; i < j; i += chunk) {
        const wordsChunk = words.slice(i, i + chunk)
        // const endpoint = 'http://localhost:8080/translate'
        const endpoint = 'https://translate-test-1565259631382.appspot.com/translate'
        const payload = {
          target,
          q: wordsChunk,
        }
        const { data } = await Axios.post(endpoint, payload)
        translateResult = [
          ...translateResult,
          ...data.translateResult,
        ]
      }
    }
    const newTranslates = {}
    words.forEach((word, i) => {
      newTranslates[word] = translateResult[i]
    })
    commit('updateTranslates', newTranslates)
  },
}

const mutations = {
  updateTranslates (state, translates) {
    state.translates = translates
  },
}

const state = {
  translates: i18n,
}

const getters = {
  translates: state => state.translates,
}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
}
