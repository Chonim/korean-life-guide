<template>
  <header class="main-header-wrapper">
    <select @change="fetchTranslates($event.target.value)">
      <option value="ko">한국어</option>
      <option value="vi">베트남어</option>
      <option value="th">태국어</option>
      <option value="mn">몽골어</option>
      <option value="ms">말레이어</option>
      <option value="hi">힌디어</option>
      <option value="id">인도네시아어</option>
      <option value="ru">러시아어</option>
      <option value="en">영어</option>
      <option value="es">스페인어</option>
      <option value="ar">아랍어</option>
      <option value="ja">일본어</option>
      <option value="zh-CN">중국어(간체)</option>
      <option value="zh-TW">중국어(번체)</option>
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
