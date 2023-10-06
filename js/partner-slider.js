let gallerySlider = new Swiper(".js-partner-slider", {
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
      nextEl: ".js-partner-next",
      prevEl: ".js-partner-prev",
      disabledClass: "swiper-button-disabled"
    },

    breakpoints: {

      611: {
        slidesPerView: 2,
        spaceBetween: 34
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 50
      },

      1281: {
        slidesPerView: 3,
        spaceBetween: 50
      },
    },
});