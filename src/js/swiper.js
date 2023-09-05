const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 400,
  spaceBetween: 30,
  centeredSlides:true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});
