import Swiper from 'swiper';
import {Navigation, Pagination,Thumbs} from 'swiper/modules';


//Слайдер базовый
document.addEventListener('DOMContentLoaded', () => {
    const sliderBanner = document.querySelector('.base__slider-banner');
    if (!sliderBanner) return;

    new Swiper(sliderBanner, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        navigation: {
            nextEl: '.banner__next',
            prevEl: '.banner__prev',
        },
        pagination: {
            el: '.banner__pagination',
            clickable: true,
        },
    });
});

//Слайдер для тарифов
document.addEventListener('DOMContentLoaded', () => {
    const sliderTariffs = document.querySelector('.tariffs__slider');
    if (!sliderTariffs) return;

    new Swiper(sliderTariffs, {
        modules: [Navigation, Pagination],
        slidesPerView: 'auto',
        watchOverflow: true,
        spaceBetween: 22,
        pagination: {
            el: '.tariffs__slider-pagination',
            clickable: true,
        },

    });
});

//Слайдер для секции Акции и спецпредложения
document.addEventListener('DOMContentLoaded', () => {
    const sliderPromotions = document.querySelector('.promotion__slider');
    if (!sliderPromotions) return;

    new Swiper(sliderPromotions, {
        modules: [Navigation],
        slidesPerView: 2,
        spaceBetween:20,
        watchOverflow: true,
        navigation: {
            nextEl: '.promotion__next',
            prevEl: '.promotion__prev',
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            360: {
                slidesPerView: 1.2,
                spaceBetween: 8,
            },
        }
    });
});

//Слайдер для оборудования
document.addEventListener('DOMContentLoaded', () => {
    const sliderEquipment = document.querySelector('.equipment__slider');
    if (!sliderEquipment) return;

    new Swiper(sliderEquipment, {
        slidesPerView: 'auto',
        watchOverflow: true,
        spaceBetween: 20,
        breakpoints: {
            0: {
                spaceBetween: 8,
            },
            481: {
                spaceBetween: 20,
            },
        },

    });
});

//Два слайдера каналов и контента для них
document.addEventListener('DOMContentLoaded', () => {
    const tabsSlider = new Swiper('.tabs__slider', {
        slidesPerView: 'auto',
        modules: [Navigation],
        spaceBetween: 46,
        watchOverflow: true,


    });

    document.querySelectorAll('.content__slider').forEach(el => {
        new Swiper(el, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            watchOverflow: true,

        });
    });
    const tabs = document.querySelectorAll('.tabs__slider-slide');
    const contents = document.querySelectorAll('.content__slider');
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
    }
    contents.forEach((slider, i) => {
        slider.style.display = i === 0 ? 'block' : 'none';
    });
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            contents.forEach(content => {
                content.style.display = content.dataset.tab === target ? 'block' : 'none';
            });
        });
    });
});

//Слайдер для вакансий
document.addEventListener('DOMContentLoaded', () => {
    const sliderVacancy = document.querySelector('.base__slider-vacancy');
    if (!sliderVacancy) return;

    new Swiper(sliderVacancy, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        navigation: {
            nextEl: '.vacancy__next',
            prevEl: '.vacancy__prev',
        },
        pagination: {
            el: '.vacancy__pagination',
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
            nextEl: '.news__next',
            prevEl: '.news__prev',
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
            0: {
                slidesPerView: 1.2,
                spaceBetween: 8,
            },
        }

    });
});

//Слайдер внутри страници оборудования

document.addEventListener('DOMContentLoaded', () => {
    const mainSliderEl = document.querySelector('.equipment__item-slider-main .swiper');
    const thumbsSliderEl = document.querySelector('.equipment__item-slider-thumbs .swiper');

    if (!mainSliderEl) return;

    let mainSwiper;
    let thumbsSwiper;

    const mediaQuery = window.matchMedia('(min-width: 992px)');

    function initSliders(e) {
        // если десктоп
        if (e.matches) {
            if (!thumbsSwiper && thumbsSliderEl) {
                thumbsSwiper = new Swiper(thumbsSliderEl, {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    watchOverflow: true,
                });
            }

            if (mainSwiper) mainSwiper.destroy(true, true);
            mainSwiper = new Swiper(mainSliderEl, {
                modules: [Navigation, Thumbs],
                slidesPerView: 1,
                spaceBetween: 10,

                thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : {},
            });
        } else {
            if (thumbsSwiper) {
                thumbsSwiper.destroy(true, true);
                thumbsSwiper = null;
            }

            if (mainSwiper) mainSwiper.destroy(true, true);
            mainSwiper = new Swiper(mainSliderEl, {
                modules: [Navigation,Pagination],
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: '.equipment__item-slider-pagination',
                    clickable: true,
                },

            });
        }
    }

    initSliders(mediaQuery);
    mediaQuery.addEventListener('change', initSliders);
});