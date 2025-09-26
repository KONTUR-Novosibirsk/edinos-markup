// Имитация поиска
document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.faq__search-form input');
    const resultBox = document.querySelector('.faq__search-result');
    const resultList = document.querySelector('.faq__search-result-list');

    const allFaq = Array.from(document.querySelectorAll('.faq__item-list li'))
        .map(li => li.textContent.trim());

    if (!input || !resultBox || !resultList) return

    let debounceTimer;

    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);

        const query = input.value.trim().toLowerCase();

        if (!query) {
            resultBox.classList.remove('active');
            resultList.innerHTML = '';
            return;
        }

        debounceTimer = setTimeout(() => {
            const results = allFaq.filter(item =>
                item.toLowerCase().includes(query)
            );

            if (results.length) {
                resultList.innerHTML = results.map(item => {
                    const highlighted = item.replace(
                        new RegExp(query, 'gi'),
                        match => `<span>${match}</span>`
                    );
                    return `<li>${highlighted}</li>`;
                }).join('');

                resultBox.classList.add('active');

            } else {
                resultList.innerHTML = '<li>Ничего не найдено</li>';
                resultBox.classList.add('active');
            }
        }, 500);
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.faq__search')) {
            resultBox.classList.remove('active');
            resultList.innerHTML = '';
        }
    });
});


//Скрытие или показ остальных вопрос
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const list = item.querySelector('.faq__item-list');
        const moreBtn = item.querySelector('.faq__item-more');
        const listItems = Array.from(list.querySelectorAll('li'));

        if (listItems.length <= 4) {
            moreBtn.style.display = 'none';
            return;
        }

        listItems.forEach((li, index) => {
            if (index >= 4) li.style.display = 'none';
        });

        let visibleCount = 4;
        const total = listItems.length;

        moreBtn.textContent = `Ещё ${total - visibleCount} тем ↓`;

        moreBtn.addEventListener('click', () => {
            if (visibleCount < total) {
                const nextVisible = Math.min(visibleCount + 4, total);
                listItems.forEach((li, index) => {
                    if (index < nextVisible) li.style.display = 'list-item';
                });
                visibleCount = nextVisible;

                if (visibleCount === total) {
                    moreBtn.textContent = 'Свернуть ↑';
                } else {
                    moreBtn.textContent = `Ещё ${total - visibleCount} тем ↓`;
                }
            } else {
                listItems.forEach((li, index) => {
                    if (index >= 4) li.style.display = 'none';
                });
                visibleCount = 4;
                moreBtn.textContent = `Ещё ${total - visibleCount} тем ↓`;
            }
        });
    });
});
