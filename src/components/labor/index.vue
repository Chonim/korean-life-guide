<template>
  <div class="labor-iframe-wrapper">
    <component :is="currentComponent" />
  </div>
</template>

<script>
export default {
  name: 'LaborMain',
  components: {
    DormitoryRelated: () => import('./dormitory'),
    NannyHiring: () => import('./nanny-hiring'),
    WorkChange: () => import('./work-change'),
  },
  computed: {
    currentComponent () {
      const { laborType } = this.$route.params
      switch (laborType) {
        case 'dormitory':
          return 'DormitoryRelated'
        case 'nanny-hiring':
          return 'NannyHiring'
        case 'work-change':
          return 'WorkChange'
        default:
          return ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.labor-iframe-wrapper {
  max-height: 100vh;
  overflow-y: scroll;
  padding: 1rem;
}
</style>
