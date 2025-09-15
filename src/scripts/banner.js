
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


document.addEventListener('DOMContentLoaded', () => {
    const sliderBanner = document.querySelector('.banner__slider');
    if (!sliderBanner) return;

    new Swiper(sliderBanner, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        navigation: {
            nextEl: '.banner__slider-controls-next',
            prevEl: '.banner__slider-controls-prev',
        },
        pagination: {
            el: '.banner__slider-pagination',
            clickable: true,
        },
    });
});
