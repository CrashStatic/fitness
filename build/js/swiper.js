import Swiper from './vendor/swiper-bundle';
import { Navigation } from './vendor/modules';

const initSwiperJuri = () => {
  new Swiper('.juri__swiper', {
    // configure Swiper to use modules
    modules: [Navigation],

    // Navigation arrows
    navigation: {
      nextEl: '.juri__button-next',
      prevEl: '.juri__button-prev',
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

const initSwiperReviews = () => {
  new Swiper('.reviews__swiper', {

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },

    loop: false,

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

      500: {
        slidesPerView: 1,
        spaceBetween: 40,
        allowTouchMove: true
      },

      560: {
        slidesPerView: 1,
        spaceBetween: 40,
        allowTouchMove: false
      }
    },

    breakpointsBase: 'container'
  });
};

export { initSwiperJuri, initSwiperReviews };
