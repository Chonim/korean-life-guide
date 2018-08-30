<template>
  <div class="warning-container">
    <div class="warning-message">Please zoom in to see markers</div>
  </div>
</template>

<style lang="scss" scoped>
.warning-container {
  .warning-message {
    position: absolute;
    bottom: 40px;
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.2);
    width: 240px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    text-align: center;
    font-weight: 500;
    color: #fff;
  }
}
</style>
