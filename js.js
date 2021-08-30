let h2Elemment = document.querySelector('.dir h2 ')
let spanElement = document.querySelector('.dir span')
let btnElement = document.querySelector('.content__btn')
let account = document.querySelector('.account')
let icon = document.querySelector('.far')
let account__user = document.querySelector('.account__user')
let a1Elelment = document.querySelector('#nickname')
let after = document.querySelector('.account__user::after ')
let noi = document.querySelector('.noi')
console.log(after)
ityped.init(document.querySelector('#ityped'), {
  showCursor: false,
  strings: ['Foundation for sublimation!', 'Yeah!', 'Lover from the inside !'],
})

ityped.init('#placeholder', {
  placeholder: true,
  showCursor: false,
})
// ;((function () {
//
// ;(() => {
//   console.log(1)
// }, 2000)()
function reader() {
  setTimeout(() => {
    h2Elemment.style.left = '0px'
    spanElement.style.right = '0px'
    btnElement.style.top = '650px'
  }, 1000)
}
reader()

let passFromLocal = localStorage.getItem('gmail')
if (!passFromLocal || passFromLocal === '') {
  account.style.display = 'none'
} else {
  account.style.display = 'block'
}
icon.addEventListener('mouseover', () => {
  account__user.style.transform = 'scale(1)'
  account__user.style.opacity = '1'
  noi.style.display = 'block'
})
account__user.addEventListener('mouseleave', () => {
    account__user.style.opacity = '0'
  account__user.style.transform = 'scale(0)'

  noi.style.display = 'none'
})
a1Elelment.innerHTML = `${JSON.parse(passFromLocal).slice(
  0,
  JSON.parse(passFromLocal).indexOf('@'),
)
} = )))`