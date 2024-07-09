import Swiper from './vendor/swiper-bundle';
import { Navigation } from './vendor/modules';

const initSwiper = () => {
  new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation],

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    loop: true,

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 40,

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
        allowTouchMove: true
      },

      560: {
        slidesPerView: 2,
        spaceBetween: 40,
        allowTouchMove: true
      },

      1160: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false
      }
    },

    breakpointsBase: 'container'
  });
};

export { initSwiper };
