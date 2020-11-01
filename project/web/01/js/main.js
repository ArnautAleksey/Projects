const header = document.querySelector('.header');
const button = document.querySelector('.menu__button');
const menu = document.querySelector('.burger-menu');
const links = document.querySelectorAll('.header__link');
const body = document.querySelector('body');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = link.getAttribute('href');
        
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        button.classList.toggle('menu__button_active');
        menu.classList.toggle('burger-menu_active');
        body.style.overflow = 'visible';
      });
});

window.onscroll = () => {
    if(window.pageYOffset > 100) {
        header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    };
};

button.onclick = () => {
    button.classList.toggle('menu__button_active');
    menu.classList.toggle('burger-menu_active');
    if(button.classList.contains('menu__button_active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'visible';
    };
};

