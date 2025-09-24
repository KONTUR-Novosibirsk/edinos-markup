import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

//Слайдер для баннера
// document.addEventListener('DOMContentLoaded', () => {
//     const sliderBanner = document.querySelector('.banner__slider');
//     if (!sliderBanner) return;
//
//     new Swiper(sliderBanner, {
//         modules: [Navigation, Pagination],
//         slidesPerView: 1,
//         navigation: {
//             nextEl: '.banner__slider-controls-next',
//             prevEl: '.banner__slider-controls-prev',
//         },
//         pagination: {
//             el: '.banner__slider-pagination',
//             clickable: true,
//         },
//     });
// });

// //Слайдер для тарифов
// document.addEventListener('DOMContentLoaded', () => {
//     const sliderTariffs = document.querySelector('.tariffs__slider');
//     if (!sliderTariffs) return;
//
//     new Swiper(sliderTariffs, {
//         modules: [Navigation, Pagination],
//         slidesPerView: 'auto',
//         watchOverflow: true,
//         spaceBetween: 22,
//         pagination: {
//             el: '.tariffs__slider-pagination',
//             clickable: true,
//         },
//
//     });
// });

//Слайдер для вакансий
document.addEventListener('DOMContentLoaded', () => {
    const sliderVacancy = document.querySelector('.vacancy__slider');
    if (!sliderVacancy) return;

    new Swiper(sliderVacancy, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        navigation: {
            nextEl: '.banner__slider-controls-next',
            prevEl: '.banner__slider-controls-prev',
        },
        pagination: {
            el: '.vacancy__slider-pagination',
            clickable: true,
        },
    });
});

//Слайдер для новостей
document.addEventListener('DOMContentLoaded', () => {
    const sliderNews = document.querySelector('.news__slider');
    if (!sliderNews) return;

    new Swiper(sliderNews, {
        modules: [Navigation, Pagination],
        slidesPerView: 4,
        watchOverflow: true,
        spaceBetween: 18,
        navigation: {
            nextEl: '.news__heading-controls-next',
            prevEl: '.news__heading-controls-prev',
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
                spaceBetween: 18,
            },
            1100: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            360: {
                slidesPerView: 1.2,
                spaceBetween: 8,
            },
        }

    });
});



