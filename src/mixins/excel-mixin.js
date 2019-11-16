import {
  createAnswerObj
} from '@/utils/visaHelpers'

export default {
  data () {
    return {
      $_excelMixin_selectedValues: {},
      $_excelMixin_researchData: null,
      $_excelMixin_showTable: false
    }
  },
  computed: {
    $_excelMixin_totalScore () {
      if (!this.$_excelMixin_showTable) {
        return 0
      }
      return Object.keys(this.$_excelMixin_selectedValues)
        .map(key => this.$_excelMixin_selectedValues[key].score)
        .reduce((a, b) => a + b)
    },
    $_excelMixin_backgroundColor () {
      if (this.$_excelMixin_totalScore < 80) {
        return '#F4CCCC'
      } else {
        return '#D9EAD3'
      }
    }
  },
  methods: {
    $_excelMixin_handleSelect (key, value) {
      this.$_excelMixin_selectedValues = {
        ...this.$_excelMixin_selectedValues,
        [key]: value
      }
    },
    $_excelMixin_initSelectedValues () {
      this.$_excelMixin_selectedValues = {}
      Object.keys(this.$_excelMixin_researchData).forEach((key) => {
        this.$_excelMixin_selectedValues[key] = createAnswerObj()
      })
      this.$_excelMixin_showTable = true
    }
  }
}
