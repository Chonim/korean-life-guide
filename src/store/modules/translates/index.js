import Axios from '@/plugins/axios'

const actions = {
  async fetchTranslates ({ getters, commit }, target) {
    const currentTranslates = getters.translates
    const wordsToTranslates = Object.keys(currentTranslates)

    let translateResult
    if (target === 'ko') {
      translateResult = wordsToTranslates
    } else {
      const endpoint = 'https://translate-test-1565259631382.appspot.com/translate'
      let params = `?target=${target}`
      wordsToTranslates.forEach((word) => {
        params += `&q=${word}`
      })
      const { data } = await Axios.get(`${endpoint}${params}`)
      translateResult = data.translateResult
    }
    const newTranslates = {}
    wordsToTranslates.forEach((word, i) => {
      newTranslates[word] = translateResult[i]
    })
    commit('updateTranslates', newTranslates)
  }
}

const mutations = {
  updateTranslates (state, translates) {
    state.translates = translates
  }
}

const state = {
  translates: {
    '가까운 기관 찾기': '가까운 기관 찾기',
    '함께 하는 사람들': '함께 하는 사람들',
    '무료진료': '무료진료',
    '일반상담': '일반상담',
    '법률상담': '법률상담',
    '한국어교육': '한국어교육',
    '출입국관리사무소': '출입국관리사무소',
    '고용복지플러스센터': '고용복지플러스센터',
    '주소': '주소',
    '운영시간': '운영시간',
    '지원언어': '지원언어',
    '기관명': '기관명',
    '전화번호': '전화번호',
    '홈페이지 바로가기': '홈페이지 바로가기',
    'COMPASS는 우리 사회의 일원으로 살아가는 이주민의 한국생활에 도움이 되고자 성균관대 법학전문대학원 학생들이 관리하고 있는 생활정보 플랫폼입니다. 각종 문의, 제안, 수정요청은 <a href="mailto:compass.skku@gmail.com">compass.skku@gmail.com</a> 로 보내주시기 바랍니다.': 'COMPASS는 우리 사회의 일원으로 살아가는 이주민의 한국생활에 도움이 되고자 성균관대 법학전문대학원 학생들이 관리하고 있는 생활정보 플랫폼입니다. 각종 문의, 제안, 수정요청은 <a href="mailto:compass.skku@gmail.com">compass.skku@gmail.com</a> 로 보내주시기 바랍니다.',
    '기획 및 자료관리 : 강영준, 구본석, 김동현, 박산, 임주연, 강준희, 예윤지, 이시원, 이유진': '기획 및 자료관리 : 강영준, 구본석, 김동현, 박산, 임주연, 강준희, 예윤지, 이시원, 이유진',
    '개발 : 윤치호': '개발 : 윤치호',
    '후원 : 재단법인 동천, 이주민센터 친구': '후원 : 재단법인 동천, 이주민센터 친구'
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
