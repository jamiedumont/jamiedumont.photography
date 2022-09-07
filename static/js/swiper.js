import Swiper from "./vendor/swiper/8.3.2/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper('.swiper', {
    autoplay: {
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: {
        loadPrevNext: true
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
});