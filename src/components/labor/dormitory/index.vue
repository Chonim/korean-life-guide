<template>
  <div>
    <h1>
      {{ translates['외국인 기숙사 한 눈에 보기!'] }}
    </h1>
    <p>
      {{ translates[`서울지방고용노동청 고객상담실 02-2231-0009\n관할 노동청 또는 지원기관에 방문 또는 전화상담을 받을 수 있습니다.`] }}
    </p>
    <ol>
      <li>{{ translates['외국인 근로자의 기숙사는 근로기준법 제100조에서 정하는 기준을 준수해야 합니다.'] }}</li>
      <li>{{ translates['사용자가 기숙사를 제공(변경)하는 경우 기숙사 정보를 사전에 서면으로 제공하여야 합니다.'] }}</li>
      <li>{{ translates['사용자가 숙식비를 임금에서 공제하려면 공제동의서를 받아야 합니다.'] }}</li>
      {{ translates[''] }}
    </ol>
    <p>
      ▣ {{ translates['기숙사 기준(근로기준법 제100조)'] }}
    </p>
    <ol>
      <li>
        {{ translates['기숙사의 구조와 설비'] }}
        <ul>
          <li>{{ translates['침실당 15명 이하의 인원이 거주'] }}</li>
          <li>{{ translates['화장실, 세면시설, 목욕시설'] }}</li>
          <li>{{ translates['채광과 환기를 위한 적절한 설비'] }}</li>
          <li>{{ translates['적절한 냉방, 난방 설비'] }}</li>
          <li>{{ translates['화재 예방 및 화재 발생시 안전조치를 위한 설비'] }}</li>
        </ul>
      </li>

      <li class="margin-top">
        {{ translates['기숙사의 설치 장소 : 이런 곳은 피해야!'] }}
        <ul>
          <li>{{ translates['소음, 진동이 심한 장소'] }}</li>
          <li>{{ translates['산사태, 눈사태 등 자연재해 우려가 큰 장소'] }}</li>
          <li>{{ translates['습기가 많거나 침수의 위험이 있는 장소'] }}</li>
          <li>{{ translates['오물, 폐기물로 인한 오염의 우려가 큰 장소'] }}</li>
          <li>{{ translates['그 밖에 근로자의 안전하고 쾌적한 거주가 어려운 장소'] }}</li>
        </ul>
      </li>

      <li class="margin-top">
        {{ translates['기숙사의 주거 환경'] }}
        <ul>
          <li>{{ translates['남성과 여성이 같은 방에 거주하지 않도록 할 것'] }}</li>
          <li>{{ translates['작업시간을 달리하는 2개조 이상의 근로자가 같은 침실에 거주하지 않도록 할 것'] }}</li>
          <li>{{ translates['기숙사에 사는 근로자가 감염병에 걸린 경우, 침실, 공동으로 이용하는 곳, 침구, 개인용품 등에 소독 등 필요한 조치를 할 것'] }}</li>
        </ul>
      </li>

      <li class="margin-top">
        {{ translates['기숙사의 면적 : 1인당 2.5m2 이상'] }}
      </li>

      <li class="margin-top">
        {{ translates['기타'] }}
        <ul>
          <li>{{ translates['침실, 화장실, 목욕시설 등에 적절한 잠금장치'] }}</li>
          <li>{{ translates['근로자 개인용품을 위한 적절한 수납공간'] }}</li>
        </ul>
      </li>

      <p>
        {{ translates['참고 : 외국인근로자 기숙사 정보 제공에 관한 규정(고용노동부고시 제2019-38호)'] }}
      </p>
      <p>
        <a href="https://www.eps.go.kr/eo/FormDataR.eo?targetRow=&pageSpec=&bbswSn=2211&bbsCd=03006&sNm=" target="_blank">
          {{ translates['숙식비 공제동의서(16개 언어별 공제동의서 양식 다운로드)'] }}
        </a>
      </p>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'DormitoryRelated',
  computed: {
    translates () {
      return this.$store.getters['translates/translates']
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
