<template>
  <div class="">
    <component :is="visaType" />
  </div>
</template>

<script>
export default {
  name: 'VisaMain',
  components: {
    VisaE74: () => import('./types/VisaE74'),
    VisaD101: () => import('./types/VisaD101'),
    VisaF2: () => import('./types/VisaF2'),
  },
  computed: {
    visaType () {
      const { visaType } = this.$route.params
      return `Visa${visaType.toUpperCase()}`
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
