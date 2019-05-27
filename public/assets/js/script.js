const hamburgerButton = document.getElementById('hamburgerButton')

hamburgerButton.addEventListener('click', e => {
  document.getElementById('mainMenu').classList.toggle('is-show-hb')
})