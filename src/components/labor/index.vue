<template>
  <!-- <div class=""> -->
  <div class="labor-iframe-wrapper">
    <!-- <component :is="currentComponent" /> -->
      <iframe
        :src="iframeSrc"
      />
  </div>
</template>

<script>
export default {
  name: 'LaborMain',
  // components: {
  //   DormitoryRelated: () => import('./dormitory'),
  //   NannyHiring: () => import('./nanny-hiring'),
  //   WorkChange: () => import('./work-change')
  // },
  computed: {
    // currentComponent () {
    //   const { laborType } = this.$route.params
    //   switch (laborType) {
    //     case 'dormitory':
    //       return 'DormitoryRelated'
    //     case 'nanny-hiring':
    //       return 'NannyHiring'
    //     case 'work-change':
    //       return 'WorkChange'
    //     default:
    //       return ''
    //   }
    // }
    iframeSrc () {
      const { laborType } = this.$route.params
      switch (laborType) {
        case 'dormitory':
          return 'https://docs.google.com/document/d/e/2PACX-1vQ4E3--Twg96jOVlBnA3tGrReb3_0FS_C51FaALtXALuhaziumd72-LQvHmk61j7YhT9a9y4kD0noH-/pub?embedded=true'
        case 'nanny-hiring':
          return 'https://docs.google.com/document/d/e/2PACX-1vS46_XsEddK04ZPkLU8zUv3eIKnFIRK_soavYHMkoEAarSsBuXtnwD19kq6wplok7YB6qYc_ww29hZf/pub?embedded=true'
        case 'work-change':
          return 'https://docs.google.com/document/d/e/2PACX-1vR1sOTfyy4VQU-06pFxl_QhUgyX2IG-Itq80lroOBaKJrsm5U9aolHeJLI8xoV9FUmO9t06U37HWrvU/pub?embedded=true'
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.labor-iframe-wrapper {
  max-height: 100vh;
  overflow-y: hidden;
  iframe {
    border: none;
    width: 800px;
    height: -webkit-fill-available;
  }
}
</style>
