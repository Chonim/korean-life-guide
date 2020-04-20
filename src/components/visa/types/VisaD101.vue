<template>
  <div class="excel visa-d-10-1-container">
    <table>
      <thead>
        <tr>
          <th
            v-for="i in 12"
            :key="i"
          />
        </tr>
      </thead>

      <tbody>
        <tr>
          <td
            colspan="12"
            class="ba fwb dgbg tac"
          >
            {{ translates['점수제 구직비자(D-10-1) 항목별 심사표'] }}
          </td>
        </tr>
        <tr>
          <td
            class="ba gbg"
          >
            {{ translates['성명'] }}
          </td>
          <td
            colspan="6"
            class="bb"
          >
            {{ translates['홍길동'] }}
          </td>
          <td
            class="ba gbg"
          >
            {{ translates['등록번호'] }}
          </td>
          <td
            colspan="4"
            class="ba"
          />
        </tr>
        <tr>
          <td
            class="ba gbg"
          >
            {{ translates['회사명'] }}
          </td>
          <td
            colspan="6"
            class="bb"
          />
          <td
            class="ba gbg"
          >
            {{ translates['국적'] }}
          </td>
          <td
            colspan="4"
            class="ba"
          />
        </tr>
        <tr>
          <td rowspan="2" class="gbg tac ba">
            {{ translates['기본요건'] }}
          </td>
          <td colspan="11" class="ba">
            {{ translates['학사(국내 전문학사 포함)이상 학위를 소지하고 체류자격 중 E-1~E-7에 해당하는 분야에 구직을 하려는 사람*'] }}
          </td>
        </tr>
        <tr>
          <td colspan="11" class="ba">
            {{ translates['총 180점 중 기본항목이 20점 이상이면서 총 득점이 60점 이상인 사람*'] }}
          </td>
        </tr>

        <tr>
          <td></td>
        </tr>

        <tr>
          <td colspan="12" class="pre">
            {{ translates['*각 항목을 클릭하여 세부 기준을 확인하고 기입하세요.'] }}
          </td>
        </tr>
        <tr class="dgbg ba tac">
          <td colspan="4" class="fwb br">
            {{ translates['항목'] }}
          </td>
          <td colspan="4" class="br">
            {{ translates['선택'] }}
          </td>
          <td class="br">
            {{ translates['점수'] }}
          </td>
          <td class="br">
            {{ translates['최고점'] }}
          </td>
          <td colspan="2">
            {{ translates['관련링크'] }}
          </td>
        </tr>
        <tr>
          <td rowspan="2" class="ba tac dgbg">
            {{ translates['기본항목'] }}
          </td>
          <td colspan="3" class="ba tac gbg">
            {{ translates['연령(만)'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              :option-list="researchData.ages"
              option-name="ages"
              @change="handleSelect('ages', $event)"
            />
          </td>
          <td class="ba tar">
            {{ selectedValues.ages.score }}
          </td>
          <td class="ba tar">
            20
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg">
            {{ translates['최종학력*'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              :option-list="researchData.degrees"
              option-name="degrees"
              @change="handleSelect('degrees', $event)"
            />
          </td>
          <td class="ba tar">
            {{ selectedValues.degrees.score }}
          </td>
          <td class="ba tar">
            30
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td rowspan="5" class="ba dgbg tac">
            {{ translates['선택항목'] }}
          </td>
          <td rowspan="2" colspan="2" class="ba tac gbg">
            {{ translates['취업경력*'] }}
          </td>
          <td class="ba gbg tac">
            {{ translates['국내'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              :option-list="researchData.domesticWorkExperiences"
              option-name="domesticWorkExperiences"
              @change="handleSelect('domesticWorkExperiences', $event)"
            />
          </td>
          <td rowspan="2" class="ba tar">
            {{ workExperienceScore }}
          </td>
          <td rowspan="2" class="ba tar">
            15
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td class="ba gbg tac">
            {{ translates['국외'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              :option-list="researchData.foreignWorkExperiences"
              option-name="foreignWorkExperiences"
              @change="handleSelect('foreignWorkExperiences', $event)"
            />
          </td>
          <td colspan="2" class="ba">
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            {{ translates['국내유학*'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              :option-list="researchData.domesticStudies"
              option-name="domesticStudies"
              @change="handleSelect('domesticStudies', $event)"
            />
          </td>
          <td class="ba tar">
            {{ selectedValues.domesticStudies.score }}
          </td>
          <td class="ba tar">
            30
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            {{ translates['국내 연수경험*'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              :option-list="researchData.domesticTrainings"
              option-name="domesticTrainings"
              @change="handleSelect('domesticTrainings', $event)"
            />
          </td>
          <td class="ba tar">
            {{ selectedValues.domesticTrainings.score }}
          </td>
          <td class="ba tar">
            5
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            {{ translates['한국어 능력*'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              :option-list="researchData.koreanLevels"
              option-name="koreanLevels"
              @change="handleSelect('koreanLevels', $event)"
            />
          </td>
          <td class="ba tar">
            {{ selectedValues.koreanLevels.score }}
          </td>
          <td class="ba tar">
            20
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td rowspan="5" class="ba dgbg tac">
            {{ translates['가점'] }}
          </td>
          <td colspan="3" class="ba gbg tac">
            {{ translates['관계 중앙행정기관장, 재외공관장 구직비자 발급 추천'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              is-number
              :option-list="researchData.officialRecommendations"
              option-name="officialRecommendations"
              @change="handleSelect('officialRecommendations', $event)"
            />
          </td>
          <td class="ba tar">
            {{ selectedValues.officialRecommendations.score }}
          </td>
          <td class="ba tar">
            20
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            {{ translates['세계 우수대학 졸업자*'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              :option-list="researchData.globalUnivGraduations"
              option-name="globalUnivGraduations"
              @change="handleSelect('globalUnivGraduations', $event)"
            />
          </td>
          <td class="ba tar">
            {{ selectedValues.globalUnivGraduations.score }}
          </td>
          <td class="ba tar">
            20
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            {{ translates['글로벌기업근무 경력자*'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              :option-list="researchData.globalWorkExperiences"
              option-name="globalWorkExperiences"
              @change="handleSelect('globalWorkExperiences', $event)"
            />
          </td>
          <td class="ba tar">
            {{ selectedValues.globalWorkExperiences.score }}
          </td>
          <td class="ba tar">
            20
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            {{ translates['이공계 학사 학위 소지자*'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              :option-list="researchData.engineeringDegrees"
              option-name="engineeringDegrees"
              @change="handleSelect('engineeringDegrees', $event)"
            />
          </td>
          <td class="ba tar">
            {{ selectedValues.engineeringDegrees.score }}
          </td>
          <td class="ba tar">
            5
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            {{ translates['고소득(5만달러) 전문직 종사 경력자*'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              :option-list="researchData.highIncomes"
              option-name="highIncomes"
              @change="handleSelect('highIncomes', $event)"
            />
          </td>
          <td class="ba tar">
            {{ selectedValues.highIncomes.score }}
          </td>
          <td class="ba tar">
            5
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td rowspan="2" class="ba tac dgbg">
            {{ translates['감점'] }}
          </td>
          <td colspan="3" class="ba tac gbg">
            {{ translates['출입국관리법 위반*'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              :option-list="researchData.immigrationLawViolations"
              option-name="immigrationLawViolations"
              @change="handleSelect('immigrationLawViolations', $event)"
            />
          </td>
          <td class="ba tar">
            {{ selectedValues.immigrationLawViolations.score }}
          </td>
          <td class="ba tar">
            0
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg">
            {{ translates['기타 국내법 위반*'] }}
          </td>
          <td colspan="4" class="ba tac">
            <select-option
              :option-list="researchData.otherLawViolations"
              option-name="otherLawViolations"
              @change="handleSelect('otherLawViolations', $event)"
            />
          </td>
          <td class="ba tar">
            {{ selectedValues.otherLawViolations.score }}
          </td>
          <td class="ba tar">
            0
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td class="ba tac dgbg">
            {{ translates['결과'] }}
          </td>
          <td colspan="3" class="ba tac" :class="succeeded ? 'success' : 'fail'">
            {{ translates[succeeded ? '합격권' : '불합격권'] }}
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td
            class="ba tar"
            :class="succeeded ? 'success' : 'fail'"
          >
            {{ totalScore }}
          </td>
          <td class="ba tar">
            180
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import '@/assets/styles/excel.scss'

import researchData from '@/components/data/visa-d101'
import { createSelectedValues } from '@/utils/visaHelpers'

export default {
  name: 'VisaD101',
  components: {
    SelectOption: () => import('@/components/elements/SelectOption'),
  },
  data () {
    return {
      researchData,
      selectedValues: createSelectedValues(researchData),
    }
  },
  computed: {
    translates () {
      return this.$store.getters['translates/translates']
    },
    totalScore () {
      const totalSum = Object
        .keys(this.selectedValues)
        .filter(key => !(key === 'domesticWorkExperiences' || key === 'foreignWorkExperiences'))
        .map(key => this.selectedValues[key].score)
        .reduce((a, b) => a + b)
      return totalSum + this.workExperienceScore
    },
    succeeded () {
      const {
        ages,
        degrees,
      } = this.selectedValues
      const hasMinimumDegree = degrees.score !== 0
      const meetMinimumRequirements = ages.score + degrees.score >= 20
      const totalOverSixty = this.totalScore >= 60
      return hasMinimumDegree && meetMinimumRequirements && totalOverSixty
    },
    workExperienceScore () {
      const {
        domesticWorkExperiences,
        foreignWorkExperiences,
      } = this.selectedValues
      const sum = domesticWorkExperiences.score + foreignWorkExperiences.score
      const workExperienceScore = sum >= 15 ? 15 : sum
      return workExperienceScore
    },
  },
  methods: {
    handleSelect (key, value) {
      this.selectedValues = { ...this.selectedValues, [key]: value }
    },
  },
}
</script>

<style lang="scss" scoped>
.visa-d-10-1-container {
  > table {
    width: 805px;
  }
}
</style>
