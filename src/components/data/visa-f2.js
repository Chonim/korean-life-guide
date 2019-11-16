export const prevVisa = [{
  text: 'E-1 ~ E-5, E-7',
  score: 0
}, {
  text: 'D-5, D-6, D-7, D-8, D-9',
  score: 0
}, {
  text: 'E-6 (E-6-2는 제외)',
  score: 0
}, {
  text: 'D-2, D-10',
  score: 0
}]

export const ages = [{
  text: '해당없음',
  score: 0
}, {
  text: '18-24세',
  score: 20
}, {
  text: '25-29세',
  score: 23
}, {
  text: '30-34세',
  score: 25
}, {
  text: '35-39세',
  score: 23
}, {
  text: '40-44세',
  score: 20
}, {
  text: '45-50세',
  score: 18
}, {
  text: '51세 이상',
  score: 15
}]

export const degrees = [{
  text: '해당없음',
  score: 0
}, {
  text: '박사-B',
  score: 35
}, {
  text: '박사-A',
  score: 33
}, {
  text: '석사-B',
  score: 32
}, {
  text: '석사-A',
  score: 30
}, {
  text: '학사-B',
  score: 28
}, {
  text: '학사-A',
  score: 26
}, {
  text: '전문학사-B',
  score: 25
}, {
  text: '인문계',
  score: 23
}, {
  text: '고졸',
  score: 15
}]

export const koreanLevels = [{
  text: '해당없음',
  score: 0
}, {
  text: '6급',
  score: 20
}, {
  text: '5급/5단계',
  score: 18
}, {
  text: '4급/4단계',
  score: 16
}, {
  text: '3급/3단계',
  score: 14
}, {
  text: '2급/2단계',
  score: 12
}, {
  text: '1급/1단계',
  score: 10
}]

export const annualIncomes = [{
  text: '해당없음',
  score: 0
}, {
  text: '1억이상',
  score: 10
}, {
  text: '9천만-1억미만',
  score: 9
}, {
  text: '8천만-9천만미만',
  score: 8
}, {
  text: '7천만-8천만미만',
  score: 7
}, {
  text: '6천만-7천만미만',
  score: 6
}, {
  text: '5천만-6천만미만',
  score: 5
}, {
  text: '4천만-5천만미만',
  score: 4
}, {
  text: '3천만-4천만미만',
  score: 3
}, {
  text: '2천만-3천만미만',
  score: 2
}, {
  text: '2천만미만',
  score: 1
}]

export const societyIntegrations = [{
  text: '이수',
  score: 10
}, {
  text: '미이수',
  score: 0
}]

export const taxPayments = [{
  text: '해당없음',
  score: 0
}, {
  text: '500만이상',
  score: 5
}, {
  text: '400만이상 500만미만',
  score: 4
}, {
  text: '300만이상 400만미만',
  score: 3
}, {
  text: '200만이상 300만미만',
  score: 2
}, {
  text: '100만이상 200만미만',
  score: 1
}]

export const koreaStudyExperiences = [{
  text: '해당없음',
  score: 0
}, {
  text: '일/학습 연계유학',
  score: 10
}, {
  text: '박사',
  score: 5
}, {
  text: '석사',
  score: 4
}, {
  text: '학사',
  score: 3
}, {
  text: '전문학사',
  score: 2
}, {
  text: '한국어연수',
  score: 1
}]

export const domesticVolunteers = [{
  text: '해당없음',
  score: 0
}, {
  text: '3년이상',
  score: 5
}, {
  text: '2-3년미만',
  score: 3
}, {
  text: '1-2년미만',
  score: 1
}]

export const overseaExperiences = [{
  text: '해당없음',
  score: 0
}, {
  text: '3년이상',
  score: 5
}, {
  text: '2-3년미만',
  score: 3
}, {
  text: '1-2년미만',
  score: 1
}]

export const penalties = [{
  text: '해당없음',
  score: 0
}, {
  text: '2회/총300만이상',
  score: -3
}, {
  text: '1회(100-300만미만)',
  score: -2
}, {
  text: '1회(100만미만)',
  score: -1
}]

export const familyMembers = [{
  text: '해당없음',
  score: 0
}, {
  text: '2회/총300만이상',
  score: -1
}]

export const illegalStayings = [{
  text: '해당없음',
  score: 0
}, {
  text: '해당있음',
  score: -1
}]

export default {
  prevVisa,
  ages,
  degrees,
  koreanLevels,
  annualIncomes,
  societyIntegrations,
  taxPayments,
  koreaStudyExperiences,
  domesticVolunteers,
  overseaExperiences,
  penalties,
  familyMembers,
  illegalStayings
}
