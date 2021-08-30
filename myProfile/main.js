let nameLogin = document.querySelector('.contact__info-name input')
let mailLogin = document.querySelector('.contact__info-mail input')
let inputData = document.querySelectorAll('input')
let gmail = localStorage.getItem('gmail')
let productNoti = document.querySelector('.product__noti')
let btn = document.querySelector('button')

nameLogin.value = JSON.parse(gmail).slice(0, JSON.parse(gmail).indexOf('@'))
mailLogin.value = JSON.parse(gmail)

inputData.forEach((element) => {
  element.addEventListener('change', (e) => {
    let id = e.target.id
    let element = document.querySelector(`#${id}`)
    let value = element.value
    localStorage.setItem(id, JSON.stringify(value))
  })
})
ityped.init(document.querySelector('#ityped'), {
  showCursor: false,
  strings: ['Hello !', 'wellcome  your profile'],
})
btn.addEventListener('click', () => {
  productNoti.classList.add('product__noti-show')
  setTimeout(() => {
    productNoti.classList.remove('product__noti-show')
  }, 3000)
})
