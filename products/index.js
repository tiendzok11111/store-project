let mainElement = document.querySelector('.main')
let result = document.querySelector('.result__money p ')
let btn = document.querySelector('.btn')
let showInfor = document.querySelector('.show__infor')
let showInforTable = document.querySelector('.show__infor-table')
let contactInput = document.querySelector('.contact__info-input')
let sentBtn = document.querySelector('.sent__btn')
let showInforDone = document.querySelector('.show__infor-done ')
let inputPhone = document.querySelector('.input__phone')
let spanInputPhone = document.querySelector('.contact__info-phone span')
let input__phone = document.querySelector('.input__phone')
let getTime = document.querySelector('.btn-getTime')
renderProduct = () => {
  let arrayDiscount = localStorage.getItem('arrayDiscount')
    ? JSON.parse(localStorage.getItem('arrayDiscount'))
    : []
  let products = localStorage.getItem('products')
    ? JSON.parse(localStorage.getItem('products'))
    : []
  console.log(arrayDiscount)
  let resutlt = products.map((item, index) => {
    let price = item.price - (item.price * arrayDiscount[index]) / 100
    console.log(price)
    let number = localStorage.getItem(`name${item.id}`)
      ? localStorage.getItem(`name${item.id}`)
      : 1
    return `<tr>
  <td>
    <img src=${item.image} /> 
  </td>
  <td class="price">${price} $</td>
  <td>${item.title} ${item.description.slice(0, 130)}</td>
  <td>
    <button onClick="upProduct(${item.id}, ${price})">+</button>
    <span class=name${item.id}>${number}</span>
    <button onClick="lowerProduct(${item.id}, ${price})">-</button>
  </td>
  
  <td class=total id=total${item.id}>${price} $</td>
</tr>`
  })
  mainElement.innerHTML = resutlt.join('')

  document.querySelectorAll('td:nth-child(5)').forEach((value) => {
    value.style.marginTop = '1000px'
  })
}
renderProduct()
function showTotalMoney() {
  let showTotalMoney1 = 0
  let totalMoney = document.querySelectorAll('td:nth-child(5)')
  totalMoney.forEach(
    (item) => (showTotalMoney1 += parseFloat(item.innerHTML.slice(0, -1))),
  )
  result.innerHTML = `${parseFloat(showTotalMoney1).toFixed(2)} $`
}
showTotalMoney()
upProduct = (id, price) => {
  let number = document.querySelector(`.name${id}`).innerHTML
  ++number
  document.querySelector(`.name${id}`).innerHTML = number
  document.querySelector(`#total${id}`).innerHTML = `${price * number} $`
  showTotalMoney()
  localStorage.setItem(`name${id}`, JSON.stringify(number < 1 ? 1 : number))
}
function lowerProduct(id, price) {
  let number = document.querySelector(`.name${id}`).innerHTML
  --number
  showTotalMoney()
  if (number === 0) {
    number = 1
    if (confirm('Muốn xóa hả bro, chắc chưa cha ???')) {
      let products = JSON.parse(localStorage.getItem('products'))
      let findIndex = products.findIndex((item) => item.id === id)
      products.splice(findIndex, 1)
      document.querySelector(`.name${id}`).innerHTML = number
      document.querySelector(`#total${id}`).innerHTML = `${price * number} $`
      localStorage.setItem('products', JSON.stringify(products))
      renderProduct()
      showTotalMoney()
    }
  }
  document.querySelector(`.name${id}`).innerHTML = number
  document.querySelector(`#total${id}`).innerHTML = `${price * number} $`
  showTotalMoney()
  localStorage.setItem(`name${id}`, JSON.stringify(number < 1 ? 1 : number))
}
btn.addEventListener('click', () => {
  showInfor.style.display = 'block'
  showInforTable.classList.add('show_table')
  contactInput.style.display = 'block'
  showInforDone.style.display = 'none'
})
sentBtn.addEventListener('click', () => {
  contactInput.style.display = 'none'
  showInforDone.style.display = 'block'
  setTimeout(() => {
    showInfor.style.display = 'none'
    showInforTable.classList.remove('show_table')
    renderProduct()
  }, 2000)
})
inputPhone.addEventListener('keyup', (e) => {
  let value = e.target.value
  if (isNaN(value)) {
    spanInputPhone.innerHTML = 'Phone must number !'
    spanInputPhone.style.color = 'red'
    input__phone.style.borderBottom = '1px red solid'
  } else if (value === '' || !isNaN(value)) {
    spanInputPhone.innerHTML = ''
    spanInputPhone.style.color = ''
    input__phone.style.borderBottom = '1px rgb(14, 184, 226)  solid'
  }
})
function showInfoOrder() {
  let inputData = document.querySelectorAll('input')
  inputData.forEach((element) => {
    let id = element.id
    let dataLocalStogre = localStorage.getItem(id)
    element.value = JSON.parse(dataLocalStogre)
  })
}
let count = 0
let countNumberHide = 0
showInfoOrder()
getTime.addEventListener('click', getTimeBuyProducts)
function getTimeBuyProducts() {
  count++
  countNumberHide++
  let time = new Date()
  let day = time.getDate()
  let month = time.getMonth()
  let hour = time.getHours()
  let minute = time.getMinutes()
  let year = time.getFullYear()
  objTime = [
    {
      count,
    },
    {
      year,
      month,
      day,
      hour,
      minute,
    },
  ]
  let products = localStorage.getItem('products')
    ? JSON.parse(localStorage.getItem('products'))
    : []
  let reciProducts = [
    {
      countNumberHide,
    },
    ...products,
  ]

  localStorage.setItem('time', JSON.stringify(objTime))
  localStorage.setItem('count', JSON.stringify(reciProducts))
}
ityped.init(document.querySelector('#ityped'), {
  showCursor: false,
  strings: ['Hello !', 'wellcome to cart'],
})
