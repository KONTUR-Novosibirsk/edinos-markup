//Открытие списка меню для выбора города
document.addEventListener('DOMContentLoaded', () => {
    const btnSelect = document.querySelector('.header__identity-cities-select')
    const selectList = document.querySelector('.header__identity-cities-list')
    const btnCitySpan = btnSelect.querySelector('.header__identity-cities-select-city');
    const listItems = selectList.querySelectorAll('.header__identity-cities-list-item');

    if (!btnSelect || !selectList || !btnCitySpan || !listItems.length) return;


    const highlightActiveCity = (cityName) => {
        listItems.forEach((item) => {
            const itemName = item.textContent.trim();
            item.classList.toggle('active', itemName === cityName);
        });
    };

    highlightActiveCity(btnCitySpan.textContent.trim());


    btnSelect.addEventListener('click', (e) => {
        e.stopPropagation();
        selectList.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        selectList.classList.remove('active');
    });

    listItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            const selectedCity = e.currentTarget.textContent.trim();

            btnCitySpan.textContent = selectedCity;

            highlightActiveCity(selectedCity);

            selectList.classList.remove('active');
        });
    });

})
// Открытие поиска
document.addEventListener('DOMContentLoaded', () => {
    const formBtn = document.querySelector('.header__navigation-search-button')
    const form = document.querySelector('.header__navigation-search-form')
    if (!formBtn || !form) return

    formBtn.addEventListener('click', () => {
        form.classList.toggle('active')
    })
})

//Открытие бокового меню
document.addEventListener('DOMContentLoaded', () => {
    const asideBar = document.querySelector('.header__navigation-sidebar')
    const asideOpenBtn = document.querySelector('.header__navigation-sidebar-burger')
    const asideCloseBtn = document.querySelector('.header__navigation-sidebar-content-close')

    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;


    if (!asideBar || !asideOpenBtn || !asideCloseBtn) return

    const openAside = () => {
        const scrollbarWidth = getScrollbarWidth();
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        asideBar.classList.add('active');
    }

    const closeAside = () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        asideBar.classList.remove('active');
    }

    asideOpenBtn.addEventListener('click',()=> {
        openAside()
    })
    asideCloseBtn.addEventListener('click',()=> {
        closeAside()
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAside();
    });
})