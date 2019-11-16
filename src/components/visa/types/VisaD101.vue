<template>
  <div class="excel visa-d-10-1-container">
    {{ $_excelMixin_selectedValues }}
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
            점수제 구직비자(D-10-1) 항목별 심사표
          </td>
        </tr>
        <tr>
          <td
            class="ba gbg"
          >
            성명
          </td>
          <td
            colspan="6"
            class="bb"
          >
            홍길동
          </td>
          <td
            class="ba gbg"
          >
            등록번호
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
            회사명
          </td>
          <td
            colspan="6"
            class="bb"
          />
          <td
            class="ba gbg"
          >
            국적
          </td>
          <td
            colspan="4"
            class="ba"
          />
        </tr>
        <tr>
          <td rowspan="2" class="gbg tac ba">
            기본요건
          </td>
          <td colspan="11" class="ba">
            학사(국내 전문학사 포함)이상 학위를 소지하고 체류자격 중 E-1~E-7에 해당하는 분야에 구직을 하려는 사람*
          </td>
        </tr>
        <tr>
          <td colspan="11" class="ba">
            총 180점 중 기본항목이 20점 이상이면서 총 득점이 60점 이상인 사람*
          </td>
        </tr>

        <tr>
          <td></td>
        </tr>

        <tr>
          <td colspan="12" class="pre">
            *각 항목을 클릭하여 세부 기준을 확인하고 기입하세요.
          </td>
        </tr>
        <tr class="dgbg ba tac">
          <td colspan="4" class="fwb br">
            항목
          </td>
          <td colspan="4" class="br">
            선택
          </td>
          <td class="br">
            점수
          </td>
          <td class="br">
            최고점
          </td>
          <td colspan="2">
            관련링크
          </td>
        </tr>
        <tr>
          <td rowspan="2" class="ba tac dgbg">
            기본항목
          </td>
          <td colspan="3" class="ba tac gbg">
            연령(만)
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg">
            최종학력*
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td rowspan="5" class="ba dgbg tac">
            선택항목
          </td>
          <td rowspan="2" colspan="2" class="ba tac gbg">
            취업경력*
          </td>
          <td class="ba gbg tac">
            국내
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td rowspan="2" class="ba tar">
            <!--  -->
          </td>
          <td rowspan="2" class="ba tar">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td class="ba gbg tac">
            국외
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            국내유학*
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            국내 연수경험*
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            한국어 능력*
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td rowspan="5" class="ba dgbg tac">
            가점
          </td>
          <td colspan="3" class="ba gbg tac">
            관계 중앙행정기관장, 재외공관장 구직비자 발급 추천
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            세계 우수대학 졸업자*
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            글로벌기업근무 경력자*
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            이공계 학사 학위 소지자*
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba gbg tac">
            고소득(5만달러) 전문직 종사 경력자*
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td rowspan="2" class="ba tac dgbg">
            감점
          </td>
          <td colspan="3" class="ba tac gbg">
            출입국관리법 위반*
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg">
            기타 국내법 위반*
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td colspan="2" class="ba">
            <!--  -->
          </td>
        </tr>
        <tr>
          <td class="ba tac dgbg">
            결과
          </td>
          <td colspan="3" class="ba tac">
            합격권
          </td>
          <td colspan="4" class="ba tac">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
          </td>
          <td class="ba tar">
            <!--  -->
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

export default {
  name: 'VisaD101',
  data () {
    return {
      researchData
    }
  }
}
</script>

<style lang="scss" scoped>
.visa-d-10-1-container {
  > table {
    width: 805px;
  }
}
</style>
