//Открытие списка меню для выбора города
document.addEventListener('DOMContentLoaded', () => {
    const citiesBlocks = document.querySelectorAll('.cities');

    citiesBlocks.forEach((block) => {
        const btnSelect = block.querySelector('.cities__select');
        const selectList = block.querySelector('.cities__list');
        const btnCitySpan = btnSelect?.querySelector('.cities__select-city');
        const listItems = selectList?.querySelectorAll('.cities__list-item');

        if (!btnSelect || !selectList || !btnCitySpan || !listItems?.length) return;

        const highlightActiveCity = (cityName) => {
            listItems.forEach((item) => {
                const itemName = item.textContent.trim();
                item.classList.toggle('active', itemName === cityName);
            });
        };

        highlightActiveCity(btnCitySpan.textContent.trim());

        btnSelect.addEventListener('click', (e) => {
            e.stopPropagation();

            document.querySelectorAll('.cities__list.active').forEach((list) => {
                if (list !== selectList) list.classList.remove('active');
            });

            selectList.classList.toggle('active');
        });

        listItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                const selectedCity = e.currentTarget.textContent.trim();
                btnCitySpan.textContent = selectedCity;
                highlightActiveCity(selectedCity);
                selectList.classList.remove('active');
            });
        });

        // Закрытие при клике вне конкретного блока
        document.addEventListener('click', (e) => {
            if (!block.contains(e.target)) {
                selectList.classList.remove('active');
            }
        });
    });
});

// Открытие поиска
document.addEventListener('DOMContentLoaded', () => {
    const formBtn = document.querySelector('.header__navigation-search-button')
    const form = document.querySelector('.search__header-form')
    if (!formBtn || !form) return

    formBtn.addEventListener('click', () => {
        form.classList.toggle('active')
    })
})
//Открытие мобильного меню
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.header__mobile-burger')
    const mobileMenu = document.querySelector('.header__mobile-content')
    const headerWrapper = document.querySelector('.header__wrapper')

    if (!mobileBtn || !mobileMenu || !headerWrapper) return
    const toggleMenu = () => {
        mobileMenu.classList.toggle('active')
        mobileBtn.classList.toggle('active')
        headerWrapper.classList.toggle('active')

    }

    const closeMenu = () => {
        mobileMenu.classList.remove('active');
        mobileBtn.classList.remove('active');
        headerWrapper.classList.remove('active');
    };


    mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', (e) => {
        if (!mobileMenu.classList.contains('active')) return;

        if (mobileBtn.contains(e.target) || mobileMenu.contains(e.target)) return;

        closeMenu();
    });
})

//Отрытие бокового меню
document.addEventListener('DOMContentLoaded', () => {
    const asideMenu = document.querySelector('.aside__menu')
    const asideBtnOpen = document.querySelector('.header__navigation-aside')
    const asideBtnClose = document.querySelector('.aside__menu-close')
    const asideMenuContent = document.querySelector('.aside__menu-nav')
    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

    if (!asideMenu || !asideBtnOpen || !asideBtnClose || !asideMenuContent) return

    const openAside = () => {
        const scrollbarWidth = getScrollbarWidth();
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        asideMenu.classList.add('active')
        asideMenuContent.classList.add('active')
    }

    const closeAside = () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        asideMenu.classList.remove('active');
        asideMenuContent.classList.remove('active');
    }

    asideBtnOpen.addEventListener('click', () => {
        openAside()
    })
    asideBtnClose.addEventListener('click', () => {
        closeAside()
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAside();
    });
})

