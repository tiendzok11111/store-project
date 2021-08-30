let productNoti = document.querySelector('.product__noti')
let btn = document.querySelector('button')
btn.addEventListener('click', () => {
  alert(1)
  productNoti.classList.add('product__noti-show')
  setTimeout(() => {
    productNoti.classList.remove('product__noti-show')
  }, 3000)
})
