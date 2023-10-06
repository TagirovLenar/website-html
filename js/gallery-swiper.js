document.addEventListener("DOMContentLoaded", () => {

// const galleryChoicesSelect = document.querySelector('.js-gallery-choices');
// const galleryChoices = new galleryChoicesSelect(galleryChoicesSelect, {
// shouldSort: false,
// searchEnabled: false,
// itemSelectText: '',
// position: 'bottom',
// });

let gallerySlider = new Swiper(".gallery__slides", {
      slidesPerView: 1,
      
      grid: {
        rows: 1,
        fill: "row"
      },
      spaceBetween: 20,
      pagination: {
        el: ".gallery .gallery__pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".gallery__nav-next",
        prevEl: ".gallery__nav-prev"
      },
  
      breakpoints: {
        441: {
          slidesPerView: 1,
          spaceBetween: 30
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 38
        },

        1024: {
          slidesPerView: 2,
          spaceBetween: 34
        },
  
        1280: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50
        }
      },
  
      a11y: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      }, // можно управлять с клавиатуры стрелками влево/вправо
  
      // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slideVisibleClass: "slide-visible",
  
      on: {
        init: function () {
          this.slides.forEach((slide) => {
            if (!slide.classList.contains("slide-visible")) {
              slide.tabIndex = "-1";
            } else {
              slide.tabIndex = "";
            }
          });
        },
        slideChange: function () {
          this.slides.forEach((slide) => {
            if (!slide.classList.contains("slide-visible")) {
              slide.tabIndex = "-1";
            } else {
              slide.tabIndex = "";
            }
          });
        }
      }
  
      // on: {
      //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
      //   beforeResize: function () {
      //     this.slides.forEach((el) => {
      //       el.style.marginTop = "";
      //     });
      //   }
      // }
    });
  });
  