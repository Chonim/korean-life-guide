<template>
  <div class="work-change__wrapper">
    <h1>
      {{ translates['외국인 사업장변경 한 눈에 보기!'] }}
    </h1>
    <p>
      {{ translates['서울지방고용노동청 고객상담실 02-2231-0009'] }}
    </p>
    <p>
      {{ translates['관할 노동청 또는 지원기관에 방문 또는 전화하여 상담을 받을 수 있습니다.'] }}
    </p>
    <p v-html="translates['최초 고용계약을 체결한 후 <u>입국한 사업장에서 근무하는 것이 원칙</u>입니다. \n다만, <u>법에 정해진 사유에 해당하는 경우에는 ‘사업장 변경’을 하여 재취업</u>을 할 수 있습니다.']" />

    <ol>
      <li v-html="translates['적법한 사업장 변경 <b>사유</b>에 해당할 것']" />
      <p>
        {{ translates['(「외국인근로자의 고용 등에 관한 법률」 제25조 제1항)'] }}
      </p>
      <ul>
        <li v-html="translates['사용자가 정당한 사유로 <b>근로계약기간 중</b> 근로계약을 <b>해지</b>하려고 하는 경우']" />
        <li v-html="translates['근로계약이 만료된 후 사용자가 <b>갱신을 거절</b>하는 경우']" />
        <li v-html="translates['외국인근로자의 고용 등에 관한 법률 제19조 제1항에 따른 <b>고용허가의 취소</b> 또는 제20조 제1항에 따른 <b>고용의 제한</b>이 있는 경우']" />
        <li v-html="translates['제22조의 2를 <b>위반한 기숙사</b>를 제공받은 경우']" />
        <li v-html="translates['<b>외국인근로자의 책임 아닌 사유</b>로 사회통념상 그 사업 또는 사업장에서 근로를 계속할 수 없게 되었다고 인정되는 경우']" />
        <li v-html="translates['<b>상해 등</b>으로 외국인근로자가 해당 사업/사업장에서 계속 근무하기는 부적합하나 다른 사업/사업장에서 근무하는 것은 가능하다고 인정될 때 (시행령 제30조 제1항)']" />
      </ul>

      <li v-html="translates['사업장 변경 <b>횟수</b>가 규정을 초과하지 않을 것']" />
      <p>
        {{ translates['(「외국인근로자의 고용 등에 관한 법률」 제25조 제4항)'] }}
      </p>
      <p v-html="translates['<b>최초</b> 입국 이후 허용된 취업활동 기간 내 : <b>3번</b>까지 사업장 변경이 가능합니다']" />
      <p v-html="translates['<b>재고용</b>으로 취업활동 기간이 연장된 경우 : 2번까지 사업장 변경이 가능합니다']" />
      <ul>
        <li v-html="translates['<span>제25조 제1항 제2호</span>의 사유에 의한 변경은 변경한 횟수에 포함되지 않습니다.']" />
        <li v-html="translates['재고용 전후 사업장 변경 횟수는 서로 구분하여 계산합니다.']" />
        <li v-html="translates['규정된 사업장 변경 횟수 초과시에는 새로 변경이 불가능합니다.']" />
      </ul>

      <li v-html="translates['기간 내 사업장 변경을 <b>신청</b>하고 변경 <b>허가</b>를 받을 것']" />
      <p v-html="translates['<u>계약만료 이후</u> (1) <u>1개월 이내</u>에 사업장 변경을 <u>신청</u>해야 하고 (2) <u>3개월 이내</u>에 사업장 변경 허가를 받아 <u>재취업</u>하여야 합니다. 그렇지 못한 경우에는 출국해야 합니다. 단, 변경허가를 받지 못하거나 변경신청을 하지 못할 사유가 있는 경우에는 기간을 별도로 계산합니다.']" />
      <p class="bold">
        {{ translates['사업장 변경 신청 안내'] }}
      </p>
      <p class="bold">
        {{ translates['누가? 본인 또는 대리인'] }}
      </p>
      <p class="bold">
        {{ translates['어디에서? 사업장 관할 고용복지플러스센터 방문 (가까운 기관 찾기에서 검색 가능)'] }}
      </p>
      <p class="bold">
        {{ translates['무엇을? 사업자변경신청서 및 기타 필요서류'] }}
      </p>

      <li v-html="translates['변경 가능한 <b>업종</b>일 것']" />
      <p v-html="translates['원칙적으로 업종간 이동은 제한되므로 <u>같은 업종</u>으로 이동해야 하나, (1) 예외적으로 <u>제조업에서 농축산 및 어업, 건설업 등</u>으로 변경하고자 하는 경우에는 이동이 가능합니다. (2) <u>외국국적동포</u>인 경우에는 자유로운 업종간 이동이 가능합니다.']" />
    </ol>
  </div>
</template>

<script>
export default {
  name: 'WorkChange',
  computed: {
    translates () {
      return this.$store.getters['translates/translates']
    },
  },
}
</script>

<style lang="scss">
.work-change__wrapper {
  u, b {
    color: red;
    font-weight: bold;
  }
  span {
    color: blue;
    font-weight: bold;
  }
  ol > li {
    margin-top: 2rem;
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
