let eventsSlider = new Swiper(".js-events-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    
    grid: {
      rows: 1,
      fill: "row"
    },
    pagination: {
      el: ".js-events-pagination",
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: ".js-events-next",
      prevEl: ".js-events-prev",
      disabledClass: "nav-btn--disabled"
    },

    breakpoints: {

      611: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      971: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 27
      },

      1023: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27,
      },

      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }

      
    },

  })