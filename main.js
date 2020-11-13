let mySwiper = new Swiper('.js-slider', {
    loop: true,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    }
})

let menuItems = document.querySelectorAll('.menu__item')

if (menuItems !== undefined) {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
      let menuItemActive = document.querySelector('.menu__item--active');
      menuItemActive.classList.remove('menu__item--active');
      menuItems[i].classList.add('menu__item--active');
    })
  }
}

let upButton = document.querySelector('.button--up');

if (upButton !== undefined) {
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 750) {
      upButton.classList.add('button--up-visible');
    } else {
      upButton.classList.remove('button--up-visible');
    }
  });
}
