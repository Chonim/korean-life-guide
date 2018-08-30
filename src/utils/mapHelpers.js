import icons from './iconHelpers'

const setToiletBubbleContent = (toilet) => {
  const {
    addr,
    name,
    open
  } = toilet

  const childToilet = toilet.child_toilet
  const updateDt = toilet.update_dt

  const content = `
        Name: ${name} <br>
        Address: ${addr} <br>
        Open: ${open} <br>
        Child Toilet: ${childToilet ? 'Y' : 'N'} <br>
        Updated Date: ${updateDt}
      `
  return content
}

const setErBubbleContent = (er) => {
  const {
    addr,
    name,
    phone,
    childCare
  } = er

  const content = `
        Name: ${name} <br>
        Address: ${addr} <br>
        Phone: ${phone} <br>
        Child Treatment: ${childCare ? 'Y' : 'N'}
      `
  return content
}

const getMarkerStyle = (colorType) => {
  const {
    childToilet,
    toilet,
    childEr,
    er
  } = icons
  let svg = ''
  switch (colorType) {
    case 'toiletY':
      svg = childToilet
      break
    case 'toiletN':
      svg = toilet
      break
    case 'childCareY':
      svg = childEr
      break
    case 'childCareN':
      svg = er
      break
    default:
      break
  }

  return svg
}

export default {
  setToiletBubbleContent,
  setErBubbleContent,
  getMarkerStyle
}
