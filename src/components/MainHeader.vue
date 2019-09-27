<template>
  <header class="main-header-wrapper">
    <select @change="fetchTranslates($event.target.value)">
      <option value="ko">한국어</option>
      <option value="vi">베트남어 (Tiếng việt nam)</option>
      <option value="th">태국어 (ไทย)</option>
      <option value="mn">몽골어 (Монгол)</option>
      <option value="ms">말레이어 (Melayu)</option>
      <option value="hi">힌디어 (हिन्दी)</option>
      <option value="id">인도네시아어 (Orang indonesia)</option>
      <option value="ru">러시아어 (русский)</option>
      <option value="en">영어 (English)</option>
      <option value="es">스페인어 (Espanol)</option>
      <option value="de">독일어 (Deutsch)</option>
      <option value="ar">아랍어 (العربية)</option>
      <option value="ja">일본어 (日本語)</option>
      <option value="zh-CN">중국어(간체) (繁體中文)</option>
      <option value="zh-TW">중국어(번체) (简体中文)</option>
    </select>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  methods: {
    fetchTranslates (target) {
      this.$store.dispatch('translates/fetchTranslates', target)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-header-wrapper {
  height: 70px;
  width: 100vw;
  text-align: right;
  padding: 16px;
  select {
  }
}
</style>
