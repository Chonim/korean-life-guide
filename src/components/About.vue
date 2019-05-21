<template>
  <article class="about-us-wrapper">
    <h1>함께 하는 사람들</h1>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/compass-93de8.appspot.com/o/compass-members.jpeg?alt=media&token=852c082c-2324-4792-821a-107fa52d819f"
      alt="Compass member group picture"
      class="compass-group-pic"
    >
    <section class="compass-brief">
      <p>
        COMPASS는 우리 사회의 일원으로 살아가는 이주민의 한국생활에 도움이 되고자 성균관대 법학전문대학원 학생들이 관리하고 있는 생활정보 플랫폼입니다.
        각종 문의, 제안, 수정요청은 <a href="mailto:compass.skku@skku.edu">compass.skku@skku.edu</a> 로 보내주시기 바랍니다.
      </p>
    </section>
    <section>
      <p>기획 및 자료관리 : 강영준, 구본석, 김동현, 박산, 임주연</p>
      <p>개발 : 윤치호</p>
      <p>후원 : 재단법인 동천, 이주민센터 친구</p>
    </section>
  </article>
</template>

<script>
import CompassLogo from './Logo'

export default {
  name: 'AboutUs',
  components: {
    CompassLogo
  }
}
</script>

<style lang="scss" scoped>
.about-us-wrapper {
  width: calc(100vw - 32px);
  margin-left: 16px;
  h1 {
    margin-top: 16px;
    margin-bottom: 8px;
    font-size: 32px;
  }

  .compass-group-pic {
    width: 100%;
    margin-bottom: 8px
  }

  .compass-brief {
    margin-bottom: 16px;
  }
}
</style>
