const setToiletBubbleContent = (toilet) => {
  const {
    addr,
    name,
    open
  } = toilet

  const childToilet = toilet.child_toilet
  const updateDt = toilet.update_dt

  const content = `
        Name: ${name}
        Address: ${addr}
        Open: ${open}
        Child Toilet: ${childToilet ? 'Y' : 'N'}
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
        Name: ${name}
        Address: ${addr}
        Phone: ${phone}
        Child Treatment: ${childCare ? 'Y' : 'N'}
      `
  return content
}

const getMarkerStyle = (colorType) => {
  let color = ''
  let text = ''
  // const toilet = '🚽'
  // const toilet = '🚾'
  const toilet = '🚻'
  // const er = '🏥'
  const er = '+'

  const stroke = 'white'
  switch (colorType) {
    case 'toiletY':
      color = 'blue'
      text = toilet
      break
    case 'toiletN':
      color = '#A0D8F1'
      text = toilet
      break
    case 'childCareY':
      color = 'green'
      text = er
      break
    case 'childCareN':
      color = '#90EE90'
      text = er
      break
    default:
      break
  }

  const svgMarkup = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <rect stroke="${color}" fill="${color}" x="0.1" y="0.1" width="22" height="22" />
        <text x="12" y="18" font-size="12pt" font-family="Arial" font-weight="bold" 
        text-anchor="middle" fill="${stroke}" >${text}</text></svg>
      `
  return svgMarkup
}

export default {
  setToiletBubbleContent,
  setErBubbleContent,
  getMarkerStyle
}
