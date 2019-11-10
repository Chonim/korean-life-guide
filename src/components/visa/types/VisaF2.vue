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
            개요
          </td>
        </tr>
        <tr class="ba dgbg tac fwb">
          <td rowspan="2" class="ba">
            구분
          </td>
          <td colspan="4" class="ba">
            공통항목(90점)
          </td>
          <td colspan="2" class="ba">
            가감점항목(<span>35</span>점)
          </td>
          <td rowspan="2" class="ba">
            총배점
          </td>
          <td rowspan="2" class="ba">
            기준점수
          </td>
        </tr>
        <tr>
          <td class="ba tac dgbg">연령</td>
          <td class="ba tac dgbg">학력</td>
          <td class="ba tac dgbg">한국어능력</td>
          <td class="ba tac dgbg">현소득</td>
          <td class="ba tac dgbg">가점</td>
          <td class="ba tac dgbg">감점</td>
        </tr>
        <tr>
          <td class="ba tac">배점</td>
          <td class="ba tac">25</td>
          <td class="ba tac">35</td>
          <td class="ba tac">20</td>
          <td class="ba tac">10</td>
          <td class="ba tac">35</td>
          <td class="ba tac">-5</td>
          <td class="ba tac">125</td>
          <td class="ba tac">80점 이상</td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td colspan="9" class="ba tac fwb dgbg">
            점수제에 의한 전문인력의 거주자격 변경허가(F2)
          </td>
        </tr>
        <tr>
          <td class="ba gbg">성명</td>
          <td colspan="2" class="ba" />
          <td class="ba gbg">기존비자*</td>
          <td colspan="3" class="ba">
            <!--  -->
          </td>
          <td class="ba gbg">등록번호</td>
          <td class="ba" />
        </tr>
        <tr>
          <td class="ba gbg">회사명</td>
          <td colspan="2" class="ba" />
          <td class="ba gbg">주소</td>
          <td colspan="3" class="ba" />
          <td class="ba gbg">국적</td>
          <td class="ba" />
        </tr>
        <tr>
          <td class="ba gbg">허가요건</td>
          <td colspan="8" class="ba">
            점수표에 의한 평가항목별 취득 점수의 합계가 기준점수 이상이어야 함 <br>
            - 평가항목별 배점(총 125점) 및 기준 점수(80점)
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
        <tr class="ba tac dgbg fwb">
          <td colspan="4" class="ba">항목</td>
          <td colspan="2" class="ba">선택</td>
          <td class="ba">점수</td>
          <td class="ba">최고점</td>
          <td class="ba">관련링크</td>
        </tr>
        <tr>
          <td rowspan="4" class="ba tac dgbg fwb">
            공통요건
          </td>
          <td colspan="3" class="ba tac gbg fwb">
            연령*
          </td>
          <td colspan="2" class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            연령*
          </td>
          <td colspan="2" class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            한국어*
          </td>
          <td colspan="2" class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            연간소득(원)*
          </td>
          <td colspan="2" class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td rowspan="5" class="ba tac dgbg fwb">
            가점
          </td>
          <td colspan="3" class="ba tac gbg fwb">
            사회통합*
          </td>
          <td colspan="2" class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            연간 소득세 납세실적(원)*
          </td>
          <td colspan="2" class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            한국 유학 경험*
          </td>
          <td colspan="2" class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            국내 사회봉사활동*
          </td>
          <td colspan="2" class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            해외전문취업경력*
          </td>
          <td colspan="2" class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td rowspan="3" class="ba tac dgbg fwb">
            감점
          </td>
          <td colspan="3" class="ba tac gbg fwb">
            신청인 벌금(원)*
          </td>
          <td colspan="2" class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            동반가족/피초청인벌금*
          </td>
          <td colspan="2" class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td colspan="3" class="ba tac gbg fwb">
            불법체류*
          </td>
          <td colspan="2" class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
        </tr>
        <tr>
          <td class="ba tac dgbg fwb">결과</td>
          <td colspan="3" class="ba tac fwb">
            합격권
          </td>
          <td colspan="2" class="ba"></td>
          <td class="ba"></td>
          <td class="ba"></td>
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

export default {
  name: 'VisaF2'
}
</script>

<style lang="scss" scoped>
.visa-f-2-container {
  > table {
    width: 555px;
    td > span {
      color: blue;
    }
  }
}
</style>
