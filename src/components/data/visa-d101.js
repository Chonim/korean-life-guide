export const ages = [{
  text: '해당없음',
  score: 0
}, {
  text: '20-24세',
  score: 10
}, {
  text: '25-29세',
  score: 15
}, {
  text: '30-34세',
  score: 20
}, {
  text: '35-39세',
  score: 15
}, {
  text: '40-49세',
  score: 5
}]

export const degrees = [{
  text: '해당없음',
  score: 0
}, {
  text: '국내 전문학사',
  score: 15
}, {
  text: '국내/국외 학사',
  score: 15
}, {
  text: '국내/국외 석사',
  score: 20
}, {
  text: '국내/국외 박사',
  score: 30
}]

export const domesticWorkExperiences = [{
  text: '해당없음',
  score: 0
}, {
  text: '국내 1-2년',
  score: 5
}, {
  text: '국내 3-4년',
  score: 10
}, {
  text: '국내 5년 이상',
  score: 15
}]

export const foreignWorkExperiences = [{
  text: '해당없음',
  score: 0
}, {
  text: '국외 3-4년',
  score: 5
}, {
  text: '국외 5-6년',
  score: 10
}, {
  text: '국외 7년 이상',
  score: 15
}]

export const domesticStudies = [{
  text: '해당없음',
  score: 0
}, {
  text: '국외 7년 이상',
  score: 5
}, {
  text: '학사',
  score: 10
}, {
  text: '석사',
  score: 15
}, {
  text: '박사',
  score: 20
}, {
  text: '전문학사(졸업 후 3년 이내)',
  score: 30
}, {
  text: '학사(졸업 후 3년 이내)',
  score: 30
}, {
  text: '석사(졸업 후 3년 이내)',
  score: 30
}, {
  text: '박사(졸업 후 3년 이내)',
  score: 30
}]

export const domesticTrainings = [{
  text: '해당없음',
  score: 0
}, {
  text: '대학 연구생(D-2-5)12-18개월',
  score: 3
}, {
  text: '대학 연구생(D-2-5)19개월 이상',
  score: 5
}, {
  text: '교환학생(D-2-6)12-18개월',
  score: 3
}, {
  text: '교환학생(D-2-6)19개월 이상',
  score: 5
}, {
  text: '국공립 기관 연수(D-4-2)12-18개월',
  score: 3
}, {
  text: '국공립 기관 연수(D-4-2)19개월 이상',
  score: 5
}, {
  text: '어학연수(D-4-1)12-18개월',
  score: 3
}, {
  text: '어학연수(D-4-1)19개월 이상',
  score: 3
}, {
  text: '우수사설 기관 연수(D-4-6)12-18개월',
  score: 3
}, {
  text: '우수사설 기관 연수(D-4-6)19개월 이상',
  score: 5
}, {
  text: '목록에서 2개 이상 충족',
  score: 5
}]

export const koreanLevels = [{
  text: '해당없음',
  score: 0
}, {
  text: '2급/2단계 이상',
  score: 5
}, {
  text: '3급/3단계 이상',
  score: 10
}, {
  text: '4급/4단계 이상',
  score: 15
}, {
  text: '5급/5단계 이상',
  score: 20
}]

export const officialRecommendations = [...Array(21).keys()].map((num) => ({
  score: num,
  text: num.toString()
}))

export const globalUnivGraduations = [{
  text: '해당없음',
  score: 0
}, {
  text: '해당있음',
  score: 20
}]

export const globalWorkExperiences = [{
  text: '해당없음',
  score: 0
}, {
  text: '해당있음',
  score: 20
}]

export const engineeringDegrees = [{
  text: '해당없음',
  score: 0
}, {
  text: '해당있음',
  score: 5
}]

export const highIncomes = [{
  text: '해당없음',
  score: 0
}, {
  text: '해당있음',
  score: 5
}]

export const immigrationLawViolations = [{
  text: '해당없음',
  score: 0
}, {
  text: '1회',
  score: -5
}, {
  text: '2회',
  score: -10
}, {
  text: '3회 이상',
  score: -30
}]

export const otherLawViolations = [{
  text: '해당없음',
  score: 0
}, {
  text: '1회',
  score: -5
}, {
  text: '2회',
  score: -10
}, {
  text: '3회 이상',
  score: -30
}]

export default {
  ages,
  degrees,
  domesticWorkExperiences,
  foreignWorkExperiences,
  domesticStudies,
  domesticTrainings,
  koreanLevels,
  officialRecommendations,
  globalUnivGraduations,
  globalWorkExperiences,
  engineeringDegrees,
  highIncomes,
  immigrationLawViolations,
  otherLawViolations
}
