let productElement = document.querySelector('.product')
let productNoti = document.querySelector('.product__noti')
let productTotal = document.querySelector('.product-total')
let headerElement = document.querySelector('header')
let btnElement = document.querySelectorAll('.btn button')
let btn = document.querySelector('.btn')
let cusBtn = document.querySelectorAll('.btn button')
let xText = document.querySelector('.xText')
let linkItemElement = document.querySelectorAll('.link-item a')
let input = document.querySelector('input')
let contactElement = document.querySelector('.contact')
let optionElement = document.querySelector('#input')
let logoSpan = document.querySelector('.logo span')
let dataContaienr = []
showData = (data) => {
  let resutlt = data.map((item) => {
    let numberRadom = Math.floor(Math.random() * 19 + 5)

    return `<div class="product__item">
                ${discount(item, numberRadom)}
                <div class="product__img">
                    <img src=${item.image}>
                </div>
                 ${count(item)}

                <div class="product__price">
                    ${
                      item.price > 100
                        ? item.price - (item.price * numberRadom) / 100
                        : item.price
                    }$
                </div>
                <div class="product__dict">
                    ${item.description.slice(0, 130)}
                </div>
                <div class="product__btn-buy">
                    <button onClick="buyProducts(${
                      item.id
                    }, ${numberRadom})">Buy</button>
                </div>
          </div>`
  })
  productElement.innerHTML = resutlt.join('')
  // *********************************************Input data

  optionElement.addEventListener('change', (e) => {
    let value = e.target.value
    console.log(value)
    if (value === 'Tang') {
      let result = data.sort((a, b) => a.price - b.price)
      let sortUp = result.map((item) => {
        let numberRadom = Math.floor(Math.random() * 19 + 5)
        return `<div class="product__item">
                ${discount(item, numberRadom)}
                <div class="product__img">
                    <img src=${item.image}>
                </div>
                 ${count(item)}
                <div class="product__price">
                     ${
                       item.price > 100
                         ? item.price - (item.price * numberRadom) / 100
                         : item.price
                     }$
                </div>
                <div class="product__dict">
                    ${item.description.slice(0, 130)}
                </div>
                <div class="product__btn-buy">
                    <button onClick="buyProducts(${item.id})">Buy</button>
                </div>
          </div>`
      })
      productElement.innerHTML = sortUp.join('')
    } else if (value === 'Giam ') {
      let result = data.sort((a, b) => b.price - a.price)
      let numberRadom = Math.floor(Math.random() * 19 + 5)
      let sortLow = result.map((item) => {
        return `<div class="product__item">
                ${discount(item, numberRadom)}
                <div class="product__img">
                    <img src=${item.image}>
                </div>
                ${count(item)}
                <div class="product__price">
                    ${
                      item.price > 100
                        ? item.price - (item.price * numberRadom) / 100
                        : item.price
                    }$
                </div>
                <div class="product__dict">
                    ${item.description.slice(0, 130)}
                </div>
                <div class="product__btn-buy">
                    <button onClick="buyProducts(${item.id})">Buy
                    </button>
                </div>
          </div>`
      })
      productElement.innerHTML = sortLow.join('')
    } else {
      console.log(1)
      let sortLow = data.map((item) => {
        return `<div class="product__item">
                <div class="product__img">
                    <img src=${item.image}>
                </div>
                <div class="product__price">
                    ${item.price}$
                </div>
                <div class="product__dict">
                    ${item.description.slice(0, 130)}
                </div>
                <div class="product__btn-buy">
                    <button onClick="buyProducts(${item.id})">Buy</button>
                </div>
          </div>`
      })
      productElement.innerHTML = sortLow.join('')
    }
  })
  input.onkeyup = (e) => {
    let value = e.target.value
    let resutltValue = data.filter((data) => {
      if (value) {
        if (value.includes('>') === true) {
          return parseInt(value.slice(1)) < data.price
        } else if (!isNaN(value)) {
          console.log('number')
          return value > data.price
        } else if (isNaN(value)) {
          return data.description.includes(value) === true
        }
      } else {
        return data
      }
    })
    let mapValue = resutltValue.map((item) => {
      return `<div class="product__item">
                <div class="product__img">
                    <img src=${item.image}>
                </div>
                <div class="product__price">
                    ${item.price}$
                </div>
                <div class="product__dict">
                    ${item.description.slice(0, 130)}
                </div>
                <div class="product__btn-buy">
                    <button onClick="buyProducts(${item.id})">Buy</button>
                </div>
          </div>`
    })
    productElement.innerHTML = mapValue.join('')
  }

  btnElement.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.preventDefault()
      let className = e.target.className
      let resutlt = data.filter((item) => {
        if (className === item.category) {
          return item
        } else if (className === 'all') {
          return item
        }
      })
      let resultElement = resutlt.map((item) => {
        return `<div class="product__item">
                <div class="product__img">
                    <img src=${item.image}>
                </div>
                <div class="product__price">
                    ${Math.round(item.price)}$
                </div>
                <div class="product__dict">
                    ${item.description.slice(0, 130)}
                </div>
                <div class="product__btn-buy">
                    <button onClick="buyProducts(${item.id})">Buy
                    </button>
                </div>
          </div>`
      })
      productElement.innerHTML = resultElement.join('')
    })
  })
  return data
}

// FETCH PRODUTS
;(function () {
  let urls = 'https://fakestoreapi.com/products/'
  fetch(urls, {
    method: 'GET',
  })
    .then(function (response) {
      return response.json()
    })
    .then(showData)
    .then((data) => {
      let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
      let newArrayDiscount = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('arrayDiscount')) : []
      let arrayDiscount = [...newArrayDiscount]
      let productArray = [...products]
      let countProducts = products.length
      buyProducts = (id, numberRadom) => {
        productNoti.classList.add('product__noti-show')
        setTimeout(() => {
          productNoti.classList.remove('product__noti-show')
        }, 3000)
        productTotal.innerHTML = ++countProducts
        localStorage.setItem('numberProducts', JSON.stringify(countProducts))
        let result = data.filter((item) => {
          return item.id === id
        })
        for (let i = 0; i < result.length; i++) {
          productArray.push(result[i])
          arrayDiscount.push(result[i].price > 100 ? numberRadom : 1)
        }
        localStorage.setItem('products', JSON.stringify(productArray))
        localStorage.setItem('arrayDiscount', JSON.stringify(arrayDiscount))
        console.log(arrayDiscount)
        console.log(productArray)
      }
    })
    .catch(function (err) {
      console.log('Error:' + err)
    })
  productTotal.innerHTML = JSON.parse(localStorage.getItem('numberProducts'))
})()
window.addEventListener('scroll', function () {
  if (this.pageYOffset > headerElement.getBoundingClientRect().height) {
    btn.classList.add('fixed')
    cusBtn.forEach((cusBtn) => {
      cusBtn.classList.add('cus-btn')
    })
    headerElement.classList.add('header')
    xText.style.color = 'rgb(14, 184, 226)'
    logoSpan.style.color = 'white'
    linkItemElement.forEach((link) => {
      link.style.color = 'white'
    })
    contactElement.style.top = '450px'
  } else {
    headerElement.classList.remove('header')
    btn.classList.remove('fixed')
    xText.style.color = ''
    logoSpan.style.color = ''

    cusBtn.forEach((cusBtn) => {
      cusBtn.classList.remove('cus-btn')
    })
    linkItemElement.forEach((link) => {
      link.style.color = ''
    })
    contactElement.style.top = '780px'
  }
})
let products = JSON.parse(localStorage.getItem('products'))
;(() => {
  productTotal.innerHTML = products ? products.length : 0
})()
let productArray = products ? [...products] : []
let countProducts = products ? products.length : 0

function discount(item, numberRadom) {
  let time = new Date()
  let hour = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()

  if (item.price > 100) {
    return `<i class="fas fa-tags">${numberRadom} % </i>`
  } else {
    return ''
  }
}
function count(item) {
  if (item.price > 100) {
    return `<strike>${item.price}$</strike>`
  } else {
    return ''
  }
}
