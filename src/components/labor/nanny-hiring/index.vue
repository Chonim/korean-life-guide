<template>
  <div class="nanny-hiring__wrapper">
    <h1>
      {{ translates['H-2 비자 소지 재외동포 육아도우미(베이비시터) 채용절차'] }}
    </h1>

    <p v-html="translates[procedureSumamry]" />

    <ol>
      <li v-html="translates[domesticRecruitment]" />
      <ul>
        <li v-html="translates['H-2 비자 소지 육아도우미 채용을 위해서는 우선 2주간 한국인 구인노력을 하였다는 전제조건이 필요']" />
        <li v-html="translates['사업장이 아닌 일반 가정에서는 주소지 담당 고용복지플러스센터에 방문 또는 팩스로만 신청가능']" />
        <li v-html="translates[workNetProcedure]" />
        <li v-html="translates['2주 이상 공고 후 재외동포 육아도우미 채용 가능']" />
      </ul>

      <li v-html="translates['채용희망 육아도우미 선정']" />
      <ul>
        <li v-html="translates['육아도우미 구인 사이트, 소개 등을 통해 채용희망 육아도우미 선정 및 조건 협의(휴일, 급여 등)']" />
        <li v-html="translates['채용대상자의 여권, 외국인등록증, 건강진단서(보건소), 범죄경력조회회보서(경찰서), 취업교육 이수여부 확인']" />
      </ul>

      <li v-html="translates['채용신고(준비서류 : 세대주 및 본인 신분증, 주민등록등본, 채용대상자 여권, 외국인등록증)']" />
      <ul>
        <li v-html="translates['고용센터 방문하여 신고 및 계약서 작성']" />
      </ul>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'NannyHiring',
  data: () => ({
    procedureSumamry: '본 채용절차는 현재 H-2 비자를 소지하고 있는 재외동포(조선족 등)를 육아/가사도우미(베이비시터)로 채용할 때 필요한 사항을 안내하는 사항입니다. 자세한 사항은 ‘외국인 고용관리시스템(<a href="https://www.eps.go.kr" target="_blank">https://www.eps.go.kr</a>)-고용허가제정보-고용취업절차-사업주-특례외국인구인절차’에서 확인하실 수 있습니다.',
    domesticRecruitment: '내국인 구인노력(준비서류 : 주민등록등본, 세대주 신분증, 구인표(<a href="https://drive.google.com/file/d/1ltG_aCYSoYiQ81JY09xIBk7aOMoHPV_x/view/?usp=sharing" target="_blank">다운로드</a>))',
    workNetProcedure: '팩스로 보낼 경우, 거주하고 있는 지역 관할 고용복지플러스센터 담당자와 통화 후, 전화해서 ‘가정집’에서 ‘H-2 비자소지 육아도우미 채용’애 앞서 워크넷(<a href="https://www.work.go.kr" target="_blank">https://www.work.go.kr</a>)에 구인 공고를 올리려 한다고 설명(팩스 신청시 담당자 팩스번호 확인 필요)',
  }),
  computed: {
    translates () {
      return this.$store.getters['translates/translates']
    },
  },
}
</script>

<style lang="scss" scoped>
.nanny-hiring__wrapper {}
</style>
