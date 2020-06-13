import general from './general'
import visaE74 from './visa-e74'
import visaD101 from './visa-d101'
import visaF2 from './visa-f2'
import labor from './labor'

const words = [
  ...general,
  ...visaE74,
  ...visaD101,
  ...visaF2,
  ...labor,
]

const i18n = {}
words.forEach(word => {
  if (word && !i18n[word]) {
    i18n[word] = word
  }
})

export default i18n
