<template>
  <div class="">
    <component :is="visaType" />
  </div>
</template>

<script>
export default {
  name: 'VisaMain',
  components: {
    VisaE74: () => import('./types/VisaE74')
  },
  computed: {
    visaType () {
      const { visaType } = this.$route.params
      return `Visa${visaType.toUpperCase()}`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
