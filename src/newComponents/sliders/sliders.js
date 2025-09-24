import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';


//Слайдер для баннера
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
        navigation: {
            nextEl: '.tabs__slider-next',
            prevEl: '.tabs__slider-prev',
        }

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
