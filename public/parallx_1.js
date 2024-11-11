let text = document.getElementById('text')
let leaf = document.getElementById('leaf')
let hill1 = document.getElementById('hill1')
let hill4 = document.getElementById('hill4')
let hill5 = document.getElementById('hill5')
let text2 = document.getElementById('text2')
let text22 = document.getElementById('text22')
let text23 = document.getElementById('text23')
let text11 = document.getElementById('text11')
let text12 = document.getElementById('text12')
let text13 = document.getElementById('text13')

window.addEventListener ('scroll', () => {
  let value = window.scrollY
  let textHeight = text.offsetHeight

  text.style.marginTop = value > 300 ? 900+'px' : value * 2.5 + 'px'
  text2.style.marginTop = value *  'px'
  leaf.style.left = value > 200 ? 0+'px' : value * 1.5 + 'px'
  hill5.style.left = value > 200 ? 0+'px' :value * 1.5 + 'px'
  hill4.style.left = value > 200 ? 0+'px' :value * -1.5 + 'px'
  leaf.style.top = value > 300 ? 900+'px' : value * -1.5 + 'px'
  hill1.style.top = value > 300 ? 900+'px' :value * 1 + 'px'
  text22.style.marginTop = value > 300 ? 900+'px' : value * 3.5 + 'px'
  text23.style.marginTop = value > 300 ? 900+'px' : value * 3.5 + 'px'
  text11.style.marginTop = value > 300 ? 900+'px' : value * 3.5 + 'px'
  text12.style.marginTop = value > 300 ? 900+'px' : value * 3.5 + 'px'
  text13.style.marginTop = value > 300 ? 900+'px' : value * 3.5 + 'px'

  if ( value >= textHeight) {
    text2.style.color = '#003329'
  }

  if ( value <= textHeight) {
    text2.style.color = '#fff'
  }
})
export default parallx