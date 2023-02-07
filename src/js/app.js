import * as flsFunctions from "./modules/functions.js";
import { rightMenu } from "./modules/right-menu.js";
import { calc } from "./modules/calc.js";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui"
import Swiper, { Pagination } from 'swiper';

window.addEventListener('load', (event) => {
   flsFunctions.isWebp();
   rightMenu()
   calc()

   const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'horizontal',
      // loop: true,
      modules: [Pagination],
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });

});





