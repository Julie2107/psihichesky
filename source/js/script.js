const header = document.querySelector('.main-header');
const button = header.querySelector('.main-header__menu-button');
const menu = header.querySelector('.main-header__nav');

button.addEventListener('click', function(evt) {
  evt.preventDefault();

  !button.classList.contains('active') ? button.classList.add('active') :
    button.classList.remove('active');

})