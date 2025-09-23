document.addEventListener('DOMContentLoaded', () => {
    const tabButtons  = document.querySelectorAll('.tariffs__tabs-inner-tab');
    const tabContents = document.querySelectorAll('.tariffs__tabs-contents-content');

    if (!tabButtons.length || !tabContents.length) return;

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target  = btn.dataset.tab;
            const content = document.querySelector(`.tariffs__tabs-contents-content[data-tab="${target}"]`);

            if (!content) return;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(ctx => ctx.classList.remove('active'));

            btn.classList.add('active');
            content.classList.add('active');
        });
    });
});
