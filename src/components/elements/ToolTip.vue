<template>
  <div :data-tooltip-text="toopTipContent">
    *
  </div>
</template>

<script>
export default {
  name: 'ToolTip',
  props: {
    toopTipContent: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
[data-tooltip-text] {
  display: inline;
  &:hover {
    position: relative;
    &:after {
      position: absolute;
      content: attr(data-tooltip-text);
      white-space: pre-wrap;
      top: 0;
      left: 0;
      width: max-content;
      text-align: left;
      background-color: rgba(0, 0, 0, 0.8);
      color: #FFFFFF;
      font-size: 12px;
      z-index: 1;
    }
  }
}
</style>
