export const createAnswerObj = () => ({
  text: '',
  score: 0,
})

export const createSelectedValues = (researchData) => {
  const selectedValues = {}
  Object.keys(researchData).forEach((key) => {
    selectedValues[key] = createAnswerObj()
  })
  return selectedValues
}
