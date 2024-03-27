const swiper = new Swiper('.swiper', {

    effect: 'fade',
      autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  var swiperAbout = new Swiper(".about__mySwiper", {
    
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  
   function updateSwiper() {
    console.log("Window width:", window.innerWidth);
    if (window.innerWidth >= 1440) {
      swiperAbout.params.slidesPerView = 3;
    } else if (window.innerWidth >= 940) {
      swiperAbout.params.slidesPerView = 2;
    } else {
      swiperAbout.params.slidesPerView = 1;
    }
    console.log("Slides per view:", swiperAbout.params.slidesPerView);
    swiperAbout.update(); // Обновляем Swiper
  }
  
  // Обработчик события resize
  window.addEventListener('resize', updateSwiper);
  
  // Вызываем обновление Swiper при загрузке страницы
  updateSwiper();