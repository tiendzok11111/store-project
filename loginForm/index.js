let inputGmail = document.querySelector('.form__login-email input')
let inputPass = document.querySelector('.form__login-pass input')
let pGmailElement = document.querySelector('.form__login-email p ')
let pPassElement = document.querySelector('.form__login-pass p ')
inputGmail.addEventListener('change', (e) => {
  let valueGmailFromLocal = JSON.parse(localStorage.getItem('gmail'))
  let value = e.target.value
  if (value === valueGmailFromLocal || value == '') {
    pGmailElement.innerHTML = ''
    inputGmail.style.borderColor = ''
  }
   else if (!valueGmailFromLocal) {
    pGmailElement.innerHTML = 'Do not have an account ? !'
    inputGmail.style.borderColor = 'red'
  }
  else if (value != valueGmailFromLocal) {
    pGmailElement.innerHTML = 'Email is incorrect ! !'
    inputGmail.style.borderColor = 'red'
  }
 
  
})
inputPass.addEventListener('change', (e) => {
  let valuePassFromLocal = JSON.parse(localStorage.getItem('pass'))
  let value = e.target.value
  console.log(value)
  console.log(valuePassFromLocal)

  if (value.length === 0 || value === valuePassFromLocal) {
    pPassElement.innerHTML = ''
    inputPass.style.borderColor = ''
    console.log(value.lenght)
  } else if (value != valuePassFromLocal) {
    pPassElement.innerHTML = 'Incorrect password !'
    inputPass.style.borderColor = 'red'
  }
})

ityped.init(document.querySelector('#ityped'), {
  showCursor: false,
  strings: ['Foundation for sublimation!', 'Yeah!', 'Lover from the inside !'],
})
let btnElement = document.querySelector('a')
