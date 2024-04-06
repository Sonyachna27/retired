document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector('.burgerBtn');
    const content = document.querySelector('.header__container-navigation-wrapper .menu');
    const htmlElement = document.querySelector('html');
    burgerMenu.addEventListener('click' , () => htmlElement.classList.toggle('open'));

//скрипт для header-mobile, когда открівается меню и навиагция имеет суб-меню

const navBarItem = document.querySelectorAll('.header__container-navigation-wrapper .menu li:has(.sub-menu)');
      
     if(navBarItem){
      navBarItem.forEach((navLink) =>{
        navLink.addEventListener('click', () => navLink.classList.toggle('show'));
    })
     }
//скрипт для footer-mobile, когда открівается меню и навиагция имеет суб-меню

const footerBarItem = document.querySelectorAll('.footer__container-top .menu li:has(.sub-menu)');
      
     if(footerBarItem){
        footerBarItem.forEach((footerLink) =>{
            footerLink.addEventListener('click', () => footerLink.classList.toggle('show'));
    })
     }


});