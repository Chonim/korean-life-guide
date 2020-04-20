<template>
  <select
    @change="handleSelect(optionName, $event)"
  >
    <option
      v-for="option in optionList"
      :key="`${optionName}-${option.text}`"
      :value="getValue(option)"
    >
      {{ isNumber ? option.text : translates[option.text] }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectOption',
  props: {
    isNumber: {
      type: Boolean,
      default: false,
    },
    optionList: {
      type: Array,
      required: true,
    },
    optionName: {
      type: String,
      required: true,
    },
  },
  computed: {
    translates () {
      return this.$store.getters['translates/translates']
    },
  },
  methods: {
    handleSelect (key, event) {
      const value = JSON.parse(event.target.value)
      this.$emit('change', value)
    },
    getValue (jsonValue) {
      return JSON.stringify(jsonValue)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
