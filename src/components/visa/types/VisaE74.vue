<template>
  <div class="excel visa-temp-container">
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
            점수제 숙련기능인력 전환(E-7-4) 항목별 심사표
          </td>
        </tr>

        <!-- name and registration number -->
        <tr>
          <td class="ba gbg">
            성명
          </td>
          <td
            colspan="3"
            class="bt bb"
          >
            홍길동
          </td>
          <td class="ba gbg">
            등록번호
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
            회사명
          </td>
          <td
            colspan="3"
            class="bt bb"
          >
          </td>
          <td class="ba gbg">
            국적
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
            기본요건
          </td>
          <td
            colspan="6"
            class="bt bb br"
          >
            최근 10년이내 5년이상 E-9 국내 정상 취업 여부 (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
          </td>
        </tr>

        <!-- score requirement -->
        <tr>
          <td class="bl br">
            점수요건
          </td>
          <td colspan="2">
            숙련도 10점이상 총 득점 52점이상
          </td>
          <td dir="right">
            (불합격)
          </td>
          <td colspan="3" class="br">
            (숙련도 충족, 총점 미달)
          </td>
        </tr>

        <!-- score requirement second row -->
        <tr>
          <td class="bl br bb">
          </td>
          <td colspan="2" class="bb">
            기본항목 합계 35점이상 총득점 72점 이상
          </td>
          <td dir="right" class="bb">
            (불합격)
          </td>
          <td colspan="3" class="br bb">
            (기본항목 점수 미달, 총점 미달)
          </td>
        </tr>

        <!-- blank row -->
        <tr />

        <!-- table content header -->
        <tr>
          <td class="bl bt bb br gbg" colspan="3">
            구분
          </td>
          <td class="bt bb gbg"></td>
          <td class="bt bb br gbg">
            평가점수
          </td>
          <td class="bt bb br gbg" colspan="2">
            심사내용(입증서류 등)
          </td>
        </tr>

        <!-- basic items -->
        <tr>
          <td class="bl br gbg">기본항목</td>
          <td class="bl br gbg">산업기여가치</td>
          <td class="bl br bb gbg long-col">연간소득</td>
          <td class="br bb ordinary-col">
            <select-option
              :option-list="researchData.annualIncomes"
              option-name="annualIncome"
              @change="handleSelect('annualIncome', $event)"
            />
          </td>
          <td class="br bb rbg ar">
            {{ selectedValues.annualIncome.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="bl br gbg"></td>
          <td class="bl br bb gbg">자격증소지</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.licences"
              option-name="licence"
              @change="handleSelect('licence', $event)"
            />
          </td>
          <td class="br bb rbg ar">
            {{ selectedValues.licence.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="bl br gbg"></td>
          <td class="bl br bb gbg">기량검증</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.skillVerifications"
              option-name="skillVerification"
              @change="handleSelect('skillVerification', $event)"
            />
          </td>
          <td class="br bb ar">
            {{ selectedValues.skillVerification.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="bl br bt gbg">미래기여가치</td>
          <td class="bl br bb gbg">학력</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.educations"
              option-name="education"
              @change="handleSelect('education', $event)"
            />
          </td>
          <td class="br bb rbg ar">
            {{ selectedValues.education.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="bl br gbg"></td>
          <td class="bl br bb gbg">연령</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.ages"
              option-name="age"
              @change="handleSelect('age', $event)"
            />
          </td>
          <td class="br bb rbg ar">
            {{ selectedValues.age.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br bb gbg"></td>
          <td class="bl br bb gbg"></td>
          <td class="bl br bb gbg">한국어 능력</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.koreanAbilities"
              option-name="koreanAbility"
              @change="handleSelect('koreanAbility', $event)"
            />
          </td>
          <td class="br bb rbg ar">
            {{ selectedValues.koreanAbility.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>

        <!-- optinoal items -->
        <tr>
          <td class="bl br gbg">선택항목</td>
          <td class="br gbg">보유자산*</td>
          <td class="bl br bb gbg">정기적금</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.periodics"
              option-name="pediodic"
              @change="handleSelect('pediodic', $event)"
            />
          </td>
          <td class="br bb rbg ar">
            {{ selectedValues.pediodic.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br bb gbg"></td>
          <td class="bl br bb gbg">국내자산</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.domesticAssets"
              option-name="domesticAsset"
              @change="handleSelect('domesticAsset', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.domesticAsset.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>

        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg">근무경력</td>
          <td class="bl br bb gbg">뿌리산업분야/농축산어업 분야</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.rootIndustries"
              option-name="rootIndustry"
              @change="handleSelect('rootIndustry', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.rootIndustry.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br bb gbg"></td>
          <td class="bl br bb gbg">일반제조업, 건설업 분야 등</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.manufactoringAndConstructions"
              option-name="manufactoringAndConstruction"
              @change="handleSelect('manufactoringAndConstruction', $event)"
            />
          </td>
          <td class="br bb ar">
            {{ selectedValues.manufactoringAndConstruction.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>

        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg">교육, 연수</td>
          <td class="bl br bb gbg">국내 교육경험</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.domesticEducations"
              option-name="domesticEducation"
              @change="handleSelect('domesticEducation', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.domesticEducation.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br bb gbg"></td>
          <td class="bl br bb gbg">국내 연수경험*</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.domesticTrainings"
              option-name="domesticTraining"
              @change="handleSelect('domesticTraining', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.domesticTraining.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>

        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg">가점</td>
          <td class="bl br bb gbg">국내유학경험</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.domesticStudies"
              option-name="domesticStudy"
              @change="handleSelect('domesticStudy', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.domesticStudy.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg"></td>
          <td class="bl br bb gbg">부처 추천</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.departmentRecommendations"
              option-name="departmentRecommendation"
              @change="handleSelect('departmentRecommendation', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.departmentRecommendation.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg"></td>
          <td class="bl br bb gbg">읍면지역 근무</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.ruralExperiences"
              option-name="ruralExperience"
              @change="handleSelect('ruralExperience', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.ruralExperience.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg"></td>
          <td class="bl br bb gbg">사회공헌</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.socialContributions"
              option-name="socialContribution"
              @change="handleSelect('socialContribution', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.socialContribution.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl br gbg"></td>
          <td class="br bb gbg"></td>
          <td class="bl br bb gbg">납세실적</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.taxPayments"
              option-name="taxPayment"
              @change="handleSelect('taxPayment', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.taxPayment.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>

        <tr>
          <td class="bl br gbg"></td>
          <td class="br gbg">감점</td>
          <td class="bl br bb gbg">출입국관리법 위반</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.immigrationLawViolations"
              option-name="immigrationLawViolation"
              @change="handleSelect('immigrationLawViolation', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.immigrationLawViolation.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>
        <tr>
          <td class="bl bb br gbg"></td>
          <td class="br bb gbg"></td>
          <td class="bl br bb gbg">기타 국내법 위반</td>
          <td class="br bb">
            <select-option
              :option-list="researchData.otherDomesticLawViolations"
              option-name="otherDomesticLawViolation"
              @change="handleSelect('otherDomesticLawViolation', $event)"
            />
          </td>
          <td class="br bb ar rbg">
            {{ selectedValues.otherDomesticLawViolation.score }}
          </td>
          <td class="br bb"></td>
          <td class="br bb"></td>
        </tr>

        <!-- blank row -->
        <tr />

        <!-- total -->
        <tr>
          <td class="bt bl bb gbg"></td>
          <td class="bt bb br gbg" colspan="2">총점</td>
          <td class="bt bb br"></td>
          <td class="bt bb br">
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

import SelectOption from '@/components/elements/SelectOption'
import researchData from '@/components/data/research-data'

export default {
  name: 'VisaE74',
  components: {
    SelectOption: () => import('@/components/elements/SelectOption')
  },
  data () {
    return {
      researchData,
      selectedValues: {
        annualIncome: {
          text: '',
          score: 0
        },
        licence: {
          text: '',
          score: 0
        },
        skillVerification: {
          text: '',
          score: 0
        },
        education: {
          text: '',
          score: 0
        },
        age: {
          text: '',
          score: 0
        },
        koreanAbility: {
          text: '',
          score: 0
        },
        pediodic: {
          text: '',
          score: 0
        },
        domesticAsset: {
          text: '',
          score: 0
        },
        rootIndustry: {
          text: '',
          score: 0
        },
        manufactoringAndConstruction: {
          text: '',
          score: 0
        },
        domesticEducation: {
          text: '',
          score: 0
        },
        domesticTraining: {
          text: '',
          score: 0
        },
        domesticStudy: {
          text: '',
          score: 0
        },
        departmentRecommendation: {
          text: '',
          score: 0
        },
        ruralExperience: {
          text: '',
          score: 0
        },
        socialContribution: {
          text: '',
          score: 0
        },
        socialVolunteer: {
          text: '',
          score: 0
        },
        taxPayment: {
          text: '',
          score: 0
        },
        immigrationLawViolation: {
          text: '',
          score: 0
        },
        otherDomesticLawViolation: {
          text: '',
          score: 0
        }
      }
    }
  },
  computed: {
    totalScore () {
      return Object
        .keys(this.selectedValues)
        .map(key => this.selectedValues[key].score)
        .reduce((a, b) => a + b)
    }
  },
  methods: {
    handleSelect (key, value) {
      this.selectedValues[key] = value
    }
  }
}
</script>

<style lang="scss" scoped>
.visa-temp-container {
}
</style>
