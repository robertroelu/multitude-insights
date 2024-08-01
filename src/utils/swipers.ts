import 'swiper/css/bundle';

import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export const swipers = () => {
  const swiperModules = [Navigation, Pagination];

  //Product swiper
  const swiperEl = document.querySelector('[swiper-option="testimonial"]') as HTMLElement;
  if (!swiperEl) return;

  const elPrev = document.querySelector('[swiper-prev="testimonial"]') as HTMLElement;
  const elNext = document.querySelector('[swiper-next="testimonial"]') as HTMLElement;

  let swiper = new Swiper(swiperEl, {
    modules: swiperModules,
    speed: 500,
    slidesPerView: 1,
    allowTouchMove: true,
    navigation: {
      nextEl: elNext,
      prevEl: elPrev,
    },
    pagination: {
      el: '.product_testimonials_paggination',
      bulletClass: 'product_testimonials_paggination-dot',
      bulletActiveClass: 'product_testimonials_paggination-dot-active',
      clickable: true,
    },
  });
};
