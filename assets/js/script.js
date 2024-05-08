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

  // скрипт для двойного слайдера на странице пансионата
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
  // скрипт для  слайдера на странице пансионата
  const otherPensionSliderWrap = document.querySelector(".otherPensionSlider");
  if (otherPensionSliderWrap) {
    const otherPensionSlider = new Swiper(".otherPensionSlider", {
      spaceBetween: 20,
      slidesPerView: 1,
      freeMode: true,
      watchSlidesProgress: true,
      mousewheel: true,
      navigation: {
        nextEl: ".otherPensionSlider-button-next",
        prevEl: ".otherPensionSlider-button-prev",
      },

      breakpoints: {
        550: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }

  // скрипт для відображення табів на сторінці пансіонатів

  const serviceSinglePage = document.querySelector(".single__container-tabs");
  if (serviceSinglePage) {
    const servicesSingleTabs = document.querySelectorAll(
      ".single__container-tabs-btn"
    );
    const servicesContentBlock = document.querySelectorAll(
      ".single__container-tabs-content"
    );

    function showServicesContent(servicesContentName) {
      servicesContentBlock.forEach((content) => {
        let contentDataName = content.dataset.name;
        if (contentDataName === servicesContentName) {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });
    }

    function activeServicesTabs() {
      servicesSingleTabs.forEach((content) => {
        let contentDataName = content.dataset.name;

        content.addEventListener("click", () => {
          servicesSingleTabs.forEach((t) => t.classList.remove("active-tab"));
          content.classList.add("active-tab");
          showServicesContent(contentDataName);
        });

        if (contentDataName === "description") {
          showServicesContent(contentDataName);
        }
      });
    }

    activeServicesTabs();
  }
});
