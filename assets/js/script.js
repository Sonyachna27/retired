document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burgerBtn");
  const content = document.querySelector(
    ".header__container-navigation-wrapper .menu"
  );
  const htmlElement = document.querySelector("html");
  burgerMenu.addEventListener("click", () =>
    htmlElement.classList.toggle("open")
  );

  //скрипт для header-mobile, когда открівается меню и навиагция имеет суб-меню

  const navBarItem = document.querySelectorAll(
    ".header__container-navigation-wrapper .menu li:has(.sub-menu)"
  );

  if (navBarItem) {
    navBarItem.forEach((navLink) => {
      navLink.addEventListener("click", () => navLink.classList.toggle("show"));
    });
  }
  //скрипт для footer-mobile, когда открівается меню и навиагция имеет суб-меню

  const footerBarItem = document.querySelectorAll(
    ".footer__container-top .menu li:has(.sub-menu)"
  );

  if (footerBarItem) {
    footerBarItem.forEach((footerLink) => {
      footerLink.addEventListener("click", () =>
        footerLink.classList.toggle("show")
      );
    });
  }

  // скрипт для слайдера на странице пансионата
  const pensionSliderWrap = document.querySelector(".pensionSlider");
  if (pensionSliderWrap) {
    const pensionSliderRight = new Swiper(".pensionSliderRight", {
      spaceBetween: 20,
      slidesPerView: 2,
      freeMode: true,
      watchSlidesProgress: true,
      mousewheel: true,
      navigation: {
        nextEl: ".pensionSliderRight-button-next",
        prevEl: ".pensionSliderRight-button-prev",
      },
      autoHeight: true,
      direction: "vertical",
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        550: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
    const pensionSlider = new Swiper(".pensionSlider", {
      spaceBetween: 10,

      thumbs: {
        swiper: pensionSliderRight,
      },
    });
  }
});
