<template>
  <div class="header">
    <div class="back-button" @click="$router.push('/')">
      <i class="fas fa-chevron-left fa-2x"></i>
    </div>
    <div class="current-position">
      {{ currentPosition }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    currentPosition: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 70px;
  background-color: #262626;
  display: flex;
  padding-top: 10px;
  color: #fff;
  .back-button {
    padding-top: 10px;
    margin-left: 10px;
    width: 40px;
    height: 20px;
  }
  .current-position {
    align-self: center;
    margin-top: -8px;
    width: 82%;
    font-weight: 600;
  }
}
</style>
