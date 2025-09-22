//Открытие модалки "Подлкючиться"
document.addEventListener('DOMContentLoaded', () => {
    const bannerBtn = document.querySelector('.banner__slider-slide-content-info-btn');
    const promoBtn = document.querySelector('.promo__left-link');
    const tariffsBtns = document.querySelectorAll('.tariffs__item-content-connect');
    const modalShadow = document.querySelector('.modal__connect');
    const modalWrapper = document.querySelector('.modal__connect-wrapper');
    const modalClose = document.querySelector('.modal__connect-close');

    if (!modalShadow || !modalWrapper || !modalClose) return;


    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

    const openModal = () => {
        const scrollbarWidth = getScrollbarWidth();
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        modalShadow.classList.add('active');
        modalWrapper.classList.add('active');
    };

    const closeModal = () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        modalShadow.classList.remove('active');
        modalWrapper.classList.remove('active');
    };

    if (bannerBtn) bannerBtn.addEventListener('click', openModal);
    if (promoBtn) promoBtn.addEventListener('click', openModal);

    if (tariffsBtns.length) {
        tariffsBtns.forEach(btn => btn.addEventListener('click', openModal));
    }

    modalClose.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});

//Открытие модалки вакансий
document.addEventListener('DOMContentLoaded', () => {
    // ======= МОДАЛКА =======
    const vacancyBtn = document.querySelector('.vacancy__slider-slide-content-link');
    const modalShadow = document.querySelector('.modal__vacancy');
    const modalWrapper = document.querySelector('.modal__vacancy-wrapper');
    const modalClose = document.querySelector('.modal__vacancy-close');

    if (!vacancyBtn || !modalShadow || !modalWrapper || !modalClose) return;

    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

    const openModal = () => {
        const scrollbarWidth = getScrollbarWidth();
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        modalShadow.classList.add('active');
        modalWrapper.classList.add('active');
    };

    const closeModal = () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        modalShadow.classList.remove('active');
        modalWrapper.classList.remove('active');
    };

    vacancyBtn.addEventListener('click', openModal);
    modalClose.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // ======= ВЫБОР ФАЙЛА ВНУТРИ МОДАЛКИ =======
    const uploadWrapper = document.querySelector('.modal__vacancy-form-pin');
    if (!uploadWrapper) return;

    const fileInput = uploadWrapper.querySelector('#vacancy_file');
    const uploadBtn = uploadWrapper.querySelector('.modal__vacancy-form-pin-upload');
    const previewBox = uploadWrapper.querySelector('.modal__vacancy-form-pin-preview');
    const fileName = uploadWrapper.querySelector('.modal__vacancy-form-pin-preview-name');
    const removeBtn = uploadWrapper.querySelector('.modal__vacancy-form-pin-preview-remove');

    // Скрываем превью при загрузке
    previewBox.style.display = 'none';

    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            fileName.textContent = fileInput.files[0].name;
            uploadBtn.style.display = 'none';
            previewBox.style.display = 'flex';
        }
    });

    removeBtn.addEventListener('click', () => {
        fileInput.value = '';
        previewBox.style.display = 'none';
        uploadBtn.style.display = 'block';
    });
});

//Открытие модалки для покупки оборудования
document.addEventListener('DOMContentLoaded', () => {
    const equipmentBtns = document.querySelectorAll('.equipment__item-content-btn')
    const modalShadow = document.querySelector('.modal__buy')
    const modalWrapper = document.querySelector('.modal__buy-wrapper')
    const modalClose = document.querySelector('.modal__buy-close')

    if (!equipmentBtns.length || !modalShadow || !modalWrapper || !modalClose) return

    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;


    const openModal = () => {
        const scrollbarWidth = getScrollbarWidth();
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        modalShadow.classList.add('active')
        modalWrapper.classList.add('active')
    }

    const closeModal = () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        modalShadow.classList.remove('active')
        modalWrapper.classList.remove('active')
    }

    equipmentBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalClose.addEventListener('click', () => {
        closeModal()
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
})