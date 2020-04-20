<template>
  <div class="excel visa-e-7-4-container">
    <!-- title -->
    <table>
      <thead>
        <tr>
          <th
            v-for="i in 7"
            :key="i"
          />
        </tr>
      </thead>
      <tbody>

        <!-- title -->
        <tr>
          <td />
          <td
            colspan="3"
          >
            {{ t['점수제 숙련기능인력 전환(E-7-4) 항목별 심사표'] }}
          </td>
        </tr>

        <!-- name and registration number -->
        <tr>
          <td class="ba gbg">
            {{ t['성명'] }}
          </td>
          <td
            colspan="3"
            class="bt bb"
          >
            {{ t['홍길동'] }}
          </td>
          <td class="ba gbg">
            {{ t['등록번호'] }}
          </td>
          <td
            colspan="3"
            class="bt bb br"
          >
          </td>
        </tr>

        <!-- company name and nationality -->
        <tr>
          <td class="ba gbg">
            {{ t['회사명'] }}
          </td>
          <td
            colspan="3"
            class="bt bb"
          >
          </td>
          <td class="ba gbg">
            {{ t['국적'] }}
          </td>
          <td
            colspan="3"
            class="bt bb br"
          >
          </td>
        </tr>

        <!-- basic requirement -->
        <tr>
          <td class="ba">
            {{ t['기본요건'] }}
          </td>
          <td
            colspan="6"
            class="bt bb br"
          >
            {{ t['최근 10년이내 5년이상 E-9 국내 정상 취업 여부'] }} (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
          </td>
        </tr>

        <!-- score requirement -->
        <tr>
          <td class="bl br">
            {{ t['점수요건'] }}
          </td>
          <td colspan="2">
            {{ t['숙련도 10점이상 총 득점 52점이상'] }}
          </td>
          <td dir="right">
            ({{ t['불합격'] }})
          </td>
          <td colspan="3" class="br">
            {{ t['(숙련도 충족, 총점 미달)'] }}
          </td>
        </tr>

        <!-- score requirement second row -->
        <tr>
          <td class="bl br bb">
          </td>
          <td colspan="2" class="bb">
            {{ t['기본항목 합계 35점이상 총득점 72점 이상'] }}
          </td>
          <td dir="right" class="bb">
            ({{ t[succeeded ? '합격' : '불합격'] }})
          </td>
          <td colspan="3" class="br bb">
            ({{ t['기본항목 점수'] }} {{ t[basicItemsScoreSucceeded ? '충족' : '미달'] }}, {{ t['총점'] }} {{ t[succeeded ? '충족' : '미달'] }})
          </td>
        </tr>

        <!-- blank row -->
        <tr />

        <!-- table content header -->
        <tr>
          <td class="bl bt bb br gbg" colspan="3">
            {{ t['구분'] }}
          </td>
          <td class="bt bb gbg"></td>
          <td class="bt bb br gbg">
            {{ t['평가점수'] }}
          </td>
          <td class="bt bb br gbg" colspan="2">
            {{ t['심사내용(입증서류 등)'] }}
          </td>
        </tr>

        <!-- basic items -->
        <tr>
          <td class="bl br gbg">{{ t['기본항목'] }}</td>
          <td class="bl br gbg">{{ t['산업기여가치'] }}</td>
          <td class="bl br bb gbg long-col">{{ t['연간소득'] }}</td>
          <td class="br bb ordinary-col">
            <select-option
              :option-list="researchData.annualIncomes"
              option-name="annualIncomes"
              @change="handleSelect('annualIncomes', $event)"
            />
          </td>
          <td class="br bb rbg ar">
            {{ selectedValues.annualIncomes.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="bl br gbg"></td>
          <td class="bl br bb gbg">{{ t['자격증소지'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.licences"
              option-name="licences"
              @change="handleSelect('licences', $event)"
            />
          </td>
          <td class="br bb rbg ar">
            {{ selectedValues.licences.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="bl br gbg"></td>
          <td class="bl br bb gbg">{{ t['기량검증'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.skillVerifications"
              option-name="skillVerifications"
              @change="handleSelect('skillVerifications', $event)"
            />
          </td>
          <td class="br bb ar">
            {{ selectedValues.skillVerifications.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="bl br bt gbg">{{ t['미래기여가치'] }}</td>
          <td class="bl br bb gbg">{{ t['학력'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.educations"
              option-name="educations"
              @change="handleSelect('educations', $event)"
            />
          </td>
          <td class="br bb rbg ar">
            {{ selectedValues.educations.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="bl br gbg"></td>
          <td class="bl br bb gbg">{{ t['연령'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.ages"
              option-name="ages"
              @change="handleSelect('ages', $event)"
            />
          </td>
          <td class="br bb rbg ar">
            {{ selectedValues.ages.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br bb gbg"></td>
          <td class="bl br bb gbg"></td>
          <td class="bl br bb gbg">{{ t['한국어 능력'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.koreanAbilities"
              option-name="koreanAbilities"
              @change="handleSelect('koreanAbilities', $event)"
            />
          </td>
          <td class="br bb rbg ar">
            {{ selectedValues.koreanAbilities.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>

        <!-- optinoal items -->
        <tr>
          <td class="bl br gbg">{{ t['선택항목'] }}</td>
          <td class="br gbg">{{ t['보유자산'] }}*</td>
          <td class="bl br bb gbg">{{ t['정기적금'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.periodics"
              option-name="periodics"
              @change="handleSelect('periodics', $event)"
            />
          </td>
          <td class="br bb rbg ar">
            {{ selectedValues.periodics.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br bb gbg"></td>
          <td class="bl br bb gbg">{{ t['국내자산'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.domesticAssets"
              option-name="domesticAssets"
              @change="handleSelect('domesticAssets', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.domesticAssets.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>

        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg">{{ t['근무경력'] }}</td>
          <td class="bl br bb gbg">{{ t['뿌리산업분야/농축산어업 분야'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.rootIndustries"
              option-name="rootIndustries"
              @change="handleSelect('rootIndustries', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.rootIndustries.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br bb gbg"></td>
          <td class="bl br bb gbg">{{ t['일반제조업, 건설업 분야 등'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.manufactoringAndConstructions"
              option-name="manufactoringAndConstructions"
              @change="handleSelect('manufactoringAndConstructions', $event)"
            />
          </td>
          <td class="br bb ar">
            {{ selectedValues.manufactoringAndConstructions.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>

        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg">{{ t['교육, 연수'] }}</td>
          <td class="bl br bb gbg">{{ t['국내 교육경험'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.domesticEducations"
              option-name="domesticEducations"
              @change="handleSelect('domesticEducations', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.domesticEducations.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br bb gbg"></td>
          <td class="bl br bb gbg">{{ t['국내 연수경험'] }}*</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.domesticTrainings"
              option-name="domesticTrainings"
              @change="handleSelect('domesticTrainings', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.domesticTrainings.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>

        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg">{{ t['가점'] }}</td>
          <td class="bl br bb gbg">{{ t['국내유학경험'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.domesticStudies"
              option-name="domesticStudies"
              @change="handleSelect('domesticStudies', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.domesticStudies.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg"></td>
          <td class="bl br bb gbg">{{ t['부처 추천'] }}</td>
          <td class="br bb">
            <select-option
              is-number
              :option-list="researchData.departmentRecommendations"
              option-name="departmentRecommendations"
              @change="handleSelect('departmentRecommendations', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.departmentRecommendations.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg"></td>
          <td class="bl br bb gbg">{{ t['읍면지역 근무'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.ruralExperiences"
              option-name="ruralExperiences"
              @change="handleSelect('ruralExperiences', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.ruralExperiences.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg"></td>
          <td class="bl br bb gbg">{{ t['사회공헌'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.socialContributions"
              option-name="socialContributions"
              @change="handleSelect('socialContributions', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.socialContributions.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br bb gbg"></td>
          <td class="bl br bb gbg">{{ t['납세실적'] }}</td>
          <td class="br bb">
            <select-option
              is-number
              :option-list="researchData.taxPayments"
              option-name="taxPayments"
              @change="handleSelect('taxPayments', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.taxPayments.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>

        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg">{{ t['감점'] }}</td>
          <td class="bl br bb gbg">{{ t['출입국관리법 위반'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.immigrationLawViolations"
              option-name="immigrationLawViolations"
              @change="handleSelect('immigrationLawViolations', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.immigrationLawViolations.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl bb br gbg"></td>
          <td class="br bb gbg"></td>
          <td class="bl br bb gbg">{{ t['기타 국내법 위반'] }}</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.otherDomesticLawViolations"
              option-name="otherDomesticLawViolations"
              @change="handleSelect('otherDomesticLawViolations', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.otherDomesticLawViolations.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>

        <!-- blank row -->
        <tr />

        <!-- total -->
        <tr>
          <td class="bt bl bb gbg"></td>
          <td class="bt bb br gbg" colspan="2">{{ t['총점'] }}</td>
          <td class="bt bb br"></td>
          <td
            class="bt bb br"
            :class="succeeded ? 'success' : 'fail'"
          >
            {{ totalScore }}
          </td>
          <td class="bt bb br" colspan="2"></td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import '@/assets/styles/excel.scss'

import researchData from '@/components/data/visa-e74'
import { createSelectedValues } from '@/utils/visaHelpers'

export default {
  name: 'VisaE74',
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
    t () {
      return this.$store.getters['translates/translates']
    },
    totalScore () {
      return Object
        .keys(this.selectedValues)
        .map(key => this.selectedValues[key].score)
        .reduce((a, b) => a + b)
    },
    basicItemsScoreSucceeded () {
      const keys = [
        'annualIncomes',
        'licences',
        'skillVerifications',
        'educations',
        'ages',
        'koreanAbilities',
      ]
      let sum = 0
      for (const key of keys) {
        sum += this.selectedValues[key].score
      }
      return sum >= 35
    },
    succeeded () {
      return this.basicItemsScoreSucceeded && this.totalScore >= 72
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
.visa-e-7-4-container {
  > table {
    width: 800px;
  }
}
</style>
