document.addEventListener('DOMContentLoaded', () => {
    const tabButtons  = document.querySelectorAll('.equipment__tabulations-tabs-tab');
    const tabContents = document.querySelectorAll('.equipment__tabulations-contents-content');

    if (!tabButtons.length || !tabContents.length) return;

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target  = btn.dataset.tab;
            const content = document.querySelector(`.equipment__tabulations-contents-content[data-tab="${target}"]`);

            if (!content) return;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(ctx => ctx.classList.remove('active'));

            btn.classList.add('active');
            content.classList.add('active');
        });
    });
});
