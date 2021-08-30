let inputPass = document.querySelector('.form__login-pass input')
let inputGmail = document.querySelector('.form__login-email input')
inputPass.addEventListener('change', e => {
  value = e.target.value;
  localStorage.setItem('pass', JSON.stringify(value))
})
inputGmail.addEventListener('change', e => {
  value = e.target.value;
  localStorage.setItem('gmail', JSON.stringify(value))
})


ityped.init(document.querySelector('#ityped'), {
  showCursor: false,
  strings: ['Foundation for sublimation!', 'Yeah!', 'Lover from the inside !'],
})

