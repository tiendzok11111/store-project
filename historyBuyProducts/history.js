let mainElement = document.querySelector('.main')
let result = document.querySelector('.result__money p ')
let btn = document.querySelector('.btn')
let showInfor = document.querySelector('.show__infor')
let showInforTable = document.querySelector('.show__infor-table')
let contactInput = document.querySelector('.contact__info-input')
let sentBtn = document.querySelector('.sent__btn')
let showInforDone = document.querySelector('.show__infor-done button')
let inputPhone = document.querySelector('.input__phone')
let input__phone = document.querySelector('.input__phone')
renderProduct = () => {
  let products = localStorage.getItem('count')
    ? JSON.parse(localStorage.getItem('count'))
    : []
  let time = localStorage.getItem('time')
    ? JSON.parse(localStorage.getItem('time'))
    : []
    console.log(time)
  let newProducts = products.slice(1).map((products) => {
    return( `<tr>
            <td>
              <img src=${products.image} />
            </td>
            <td class="price">${products.price} $</td>
            <td>${products.title} ${products.description.slice(0, 130)}</td>
            <td>
              ${time[1].hour} : ${time[1].minute} - ${time[1].day}/${time[1].month}/${time[1].year}
            </td>
          </tr>`)
  })
  mainElement.innerHTML = newProducts.join('')
  //   let products = localStorage.getItem('products')
  //     ? JSON.parse(localStorage.getItem('products'))
  //     : []
  //     console.log(products)
  //   let resutlt = products.map((item) => {
  //     let number = localStorage.getItem(`name${item.id}`)
  //       ? localStorage.getItem(`name${item.id}`)
  //       : 1
  //     return
  //   })
  //   mainElement.innerHTML = resutlt.join('')

  //   document.querySelectorAll('td:nth-child(5)').forEach((value) => {
  //     value.style.marginTop = '1000px'
  //   })
}
renderProduct()
ityped.init(document.querySelector('#ityped'), {
  showCursor: false,
  strings: ['Hello !', 'wellcome to Payment history'],
})