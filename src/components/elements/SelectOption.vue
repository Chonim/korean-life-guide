<template>
  <select
    @change="handleSelect(optionName, $event)"
  >
    <option
      v-for="option in optionList"
      :key="`${optionName}-${option.text}`"
      :value="getValue(option)"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectOption',
  props: {
    optionList: {
      type: Array,
      required: true
    },
    optionName: {
      type: String,
      required: true
    }
  },
  methods: {
    handleSelect (key, event) {
      const value = JSON.parse(event.target.value)
      this.$emit('change', value)
    },
    getValue (jsonValue) {
      return JSON.stringify(jsonValue)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
