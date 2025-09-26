document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.wallet__tabs button');
    const tabs = document.querySelectorAll('.wallet__contents-content');

    if (buttons.length > 0 && tabs.length > 0) {
        buttons[0].classList.add('active');
        const firstTabKey = buttons[0].dataset.tab;

        tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === firstTabKey);
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.dataset.tab;

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabs.forEach(tab => {
                tab.classList.toggle('active', tab.dataset.tab === target);
            });
        });
    });
});
