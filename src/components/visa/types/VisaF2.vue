<template>
  <div class="excel visa-f-2-container">
    <table>
      <thead>
        <tr>
          <th
            v-for="i in 9"
            :key="i"
          />
        </tr>
      </thead>

      <tbody>
        <tr>
          <td
            colspan="9"
            class=""
          >
            {{ t['개요'] }}
          </td>
        </tr>
        <tr class="ba dgbg tac fwb overview">
          <td rowspan="2" class="ba">
            {{ t['구분'] }}
          </td>
          <td colspan="4" class="ba">
            {{ t['공통항목(90점)'] }}
          </td>
          <td colspan="2" class="ba">
            {{ t['가감점항목'] }}(<span>35</span>{{ t['점'] }})
          </td>
          <td rowspan="2" class="ba">
            {{ t['총배점'] }}
          </td>
          <td rowspan="2" class="ba">
            {{ t['기준점수'] }}
          </td>
        </tr>
        <tr>
          <td class="ba tac dgbg">{{t['연령']}}</td>
          <td class="ba tac dgbg">{{t['학력']}}</td>
          <td class="ba tac dgbg">{{t['한국어능력']}}</td>
          <td class="ba tac dgbg">{{t['현소득']}}</td>
          <td class="ba tac dgbg">{{t['가점']}}</td>
          <td class="ba tac dgbg">{{t['감점']}}</td>
        </tr>
        <tr>
          <td class="ba tac">{{ t['배점'] }}</td>
          <td class="ba tac">25</td>
          <td class="ba tac">35</td>
          <td class="ba tac">20</td>
          <td class="ba tac">10</td>
          <td class="ba tac">35</td>
          <td class="ba tac">-5</td>
          <td class="ba tac">125</td>
          <td class="ba tac">{{ t['80점 이상'] }}</td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td colspan="9" class="ba tac fwb dgbg">
            {{ t['점수제에 의한 전문인력의 거주자격 변경허가(F2)'] }}
          </td>
        </tr>
        <tr>
          <td class="ba gbg">{{ t['성명'] }}</td>
          <td colspan="2" class="ba" />
          <td class="ba gbg">{{ t['기존비자'] }}*</td>
          <td colspan="3" class="ba">
            <select-option
              :option-list="researchData.prevVisa"
              option-name="prevVisa"
              @change="handleSelect('prevVisa', $event)"
            />
          </td>
          <td class="ba gbg">{{ t['등록번호'] }}</td>
          <td class="ba" />
        </tr>
        <tr>
          <td class="ba gbg">{{ t['회사명'] }}</td>
          <td colspan="2" class="ba" />
          <td class="ba gbg">{{ t['주소'] }}</td>
          <td colspan="3" class="ba" />
          <td class="ba gbg">{{ t['국적'] }}</td>
          <td class="ba" />
        </tr>
        <tr>
          <td class="ba gbg">{{ t['허가요건'] }}</td>
          <td colspan="8" class="ba">
            {{ t['점수표에 의한 평가항목별 취득 점수의 합계가 기준점수 이상이어야 함'] }} <br>
            - {{ t['평가항목별 배점(총 125점) 및 기준 점수(80점)'] }}
          </td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td colspan="12" class="pre">
            *{{ t['각 항목을 클릭하여 세부 기준을 확인하고 기입하세요.'] }}
          </td>
        </tr>
        <tr class="ba tac dgbg fwb">
          <td colspan="4" class="ba">{{ t['항목'] }}</td>
          <td colspan="2" class="ba">{{ t['선택'] }}</td>
          <td class="ba">{{ t['점수'] }}</td>
          <td class="ba">{{ t['최고점'] }}</td>
          <td class="ba">{{ t['관련링크'] }}</td>
        </tr>
        <tr>
          <td rowspan="4" class="ba tac dgbg fwb">
            {{ t['공통요건'] }}
          </td>
          <td colspan="3" class="ba tac gbg fwb">
            {{ t['연령'] }}
            <tool-tip
              :toop-tip-content="`∙ ${t['여권상 생년월일 (평가일 기준)']}`"
            />
          </td>
          <td colspan="2" class="ba">
            <select-option
              :option-list="researchData.ages"
              option-name="ages"
              @change="handleSelect('ages', $event)"
            />
          </td>
          <td class="ba">
            {{ selectedValues.ages.score }}
          </td>
          <td class="ba">25</td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            {{ t['학력'] }}
            <tool-tip
              :toop-tip-content="`∙ ${ t['학위증 또는 졸업증명서 (고등학교졸업자만 해당) \n A : 인문계/B : 이공계 또는 2개 이상의 인문계 학위'] }`"
            />
          </td>
          <td colspan="2" class="ba">
            <select-option
              :option-list="researchData.degrees"
              option-name="degrees"
              @change="handleSelect('degrees', $event)"
            />
          </td>
          <td class="ba">
            {{ selectedValues.degrees.score }}
          </td>
          <td class="ba">35</td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            {{ t['한국어'] }}
            <tool-tip
              :toop-tip-content="`∙ ${ t['국립국제교육원장 발급 한국어능력시험(TOPIK) 성적표상의 급수 \n 또는 사회통합프로그램 교육확인서 상의 수료단계(1~5단계)'] }`"
            />
          </td>
          <td colspan="2" class="ba">
            <select-option
              :option-list="researchData.koreanLevels"
              option-name="koreanLevels"
              @change="handleSelect('koreanLevels', $event)"
            />
          </td>
          <td class="ba">
            {{ selectedValues.koreanLevels.score }}
          </td>
          <td class="ba">20</td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            {{ t['연간소득(원)'] }}
            <tool-tip
              :toop-tip-content="`∙${ t['소속 근무처에서 원본 확인하여 제출한 근로소득원천징수영수증사본 상의 최근 1년간의 명목상 총소득'] }`"
            />
          </td>
          <td colspan="2" class="ba">
            <select-option
              :option-list="researchData.annualIncomes"
              option-name="annualIncomes"
              @change="handleSelect('annualIncomes', $event)"
            />
          </td>
          <td class="ba">
            {{ selectedValues.annualIncomes.score }}
          </td>
          <td class="ba">10</td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td rowspan="5" class="ba tac dgbg fwb">
            {{ t['가점'] }}
          </td>
          <td colspan="3" class="ba tac gbg fwb">
            {{ t['사회통합'] }}
            <tool-tip
              :toop-tip-content="` ∙ ‘${ t['사회통합프로그램 운영 지침’에 따라 관할 출입국관리사무소장이 발급한 사회통합프로그램 이수증 \n (자세한 사항은 사회통합정보망 www.socinet.go.kr 참조)'] }`"
            />
          </td>
          <td colspan="2" class="ba">
            <select-option
              :option-list="researchData.societyIntegrations"
              option-name="societyIntegrations"
              @change="handleSelect('societyIntegrations', $event)"
            />
          </td>
          <td class="ba">
            {{ selectedValues.societyIntegrations.score }}
          </td>
          <td class="ba">10</td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            {{ t['연간 소득세 납세실적(원)'] }}
            <tool-tip
              :toop-tip-content="`∙ ${ t['국세청 발급 전년도 소득세 납세실적 증명서'] }`"
            />
          </td>
          <td colspan="2" class="ba">
            <select-option
              :option-list="researchData.taxPayments"
              option-name="taxPayments"
              @change="handleSelect('taxPayments', $event)"
            />
          </td>
          <td class="ba">
            {{ selectedValues.taxPayments.score }}
          </td>
          <td class="ba">5</td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            {{ t['한국 유학 경험'] }}
            <tool-tip
              :toop-tip-content="`∙ ${ t['학위증 또는 수료증(한국어연수만 해당), 출입국관리정보시스템, 유학생정보시스템'] }`"
            />
          </td>
          <td colspan="2" class="ba">
            <select-option
              :option-list="researchData.koreaStudyExperiences"
              option-name="koreaStudyExperiences"
              @change="handleSelect('koreaStudyExperiences', $event)"
            />
          </td>
          <td class="ba">
            {{ selectedValues.koreaStudyExperiences.score }}
          </td>
          <td class="ba">10</td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            {{ t['국내 사회봉사활동'] }}
            <tool-tip
              :toop-tip-content="`∙ ${ t['해당 공공기관, 사회단체 등에서 발급한 사회봉사활동증명서 \n (최근 3년간의 활동내역을 합산하고 연간 최소 6회 총 50시간 이상 활동 시 인정)'] }`"
            />
          </td>
          <td colspan="2" class="ba">
            <select-option
              :option-list="researchData.domesticVolunteers"
              option-name="domesticVolunteers"
              @change="handleSelect('domesticVolunteers', $event)"
            />
          </td>
          <td class="ba">
            {{ selectedValues.domesticVolunteers.score }}
          </td>
          <td class="ba">5</td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            {{ t['해외전문취업경력'] }}
            <tool-tip
              :toop-tip-content="`∙ ${ t['해당 분야의 해외 공공기관․단체․업체 등의 대표자가 발급한 경력증명서 \n  (정규직원으로 재직한 기간만 인정)'] }`"
            />
          </td>
          <td colspan="2" class="ba">
            <select-option
              :option-list="researchData.overseaExperiences"
              option-name="overseaExperiences"
              @change="handleSelect('overseaExperiences', $event)"
            />
          </td>
          <td class="ba">
            {{ selectedValues.overseaExperiences.score }}
          </td>
          <td class="ba">5</td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td rowspan="3" class="ba tac dgbg fwb">
            {{ t['감점'] }}
          </td>
          <td colspan="3" class="ba tac gbg fwb">
            {{ t['신청인 벌금(원)'] }}
            <tool-tip
              :toop-tip-content="`∙ ${ t['2회 \'또는\' 총 300만 원 이상의 벌금'] }`"
            />
          </td>
          <td colspan="2" class="ba">
            <select-option
              :option-list="researchData.penalties"
              option-name="penalties"
              @change="handleSelect('penalties', $event)"
            />
          </td>
          <td class="ba">
            {{ selectedValues.ages.score }}
          </td>
          <td class="ba">0</td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            {{ t['동반가족/피초청인벌금'] }}
            <tool-tip
              :toop-tip-content="`∙ ${ t['2회 \'또는\' 총 300만 원 이상의 벌금'] }`"
            />
          </td>
          <td colspan="2" class="ba">
            <select-option
              :option-list="researchData.familyMembers"
              option-name="familyMembers"
              @change="handleSelect('familyMembers', $event)"
            />
          </td>
          <td class="ba">
            {{ selectedValues.familyMembers.score }}
          </td>
          <td class="ba">0</td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            {{ t['불법체류'] }}
            <tool-tip
              :toop-tip-content="`∙ ${ t['동반가족이나 피초청자 중 현 불법체류자 또는 최근 2년 이내 3개월 이상 불법체류 후 출국자'] }`"
            />
          </td>
          <td colspan="2" class="ba">
            <select-option
              :option-list="researchData.illegalStayings"
              option-name="illegalStayings"
              @change="handleSelect('illegalStayings', $event)"
            />
          </td>
          <td class="ba">
            {{ selectedValues.ages.score }}
          </td>
          <td class="ba">0</td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td class="ba tac dgbg fwb">{{ t['결과'] }}</td>
          <td colspan="3" class="ba tac fwb" :class="succeeded ? 'success' : 'fail'">
            {{ t[succeeded ? '합격권' : '불합격권'] }}
          </td>
          <td colspan="2" class="ba"></td>
          <td
            class="ba total-score"
            :class="succeeded ? 'success' : 'fail'"
          >
            {{ totalScore }}
          </td>
          <td class="ba">125</td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import '@/assets/styles/excel.scss'

import researchData from '@/components/data/visa-f2'
import { createSelectedValues } from '@/utils/visaHelpers'

export default {
  name: 'VisaF2',
  components: {
    SelectOption: () => import('@/components/elements/SelectOption'),
    ToolTip: () => import('@/components/elements/ToolTip'),
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
    succeeded () {
      return this.totalScore >= 80
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
.visa-f-2-container {
  > table {
    width: 555px;
    .overview > td > span {
      color: blue;
    }
  }
}
</style>
