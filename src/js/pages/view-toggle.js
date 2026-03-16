document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-view]');
    const list = document.querySelector('.events__navigation');

    if (!buttons.length || !list) return;

    const selectorsConfig = [
        { selector: '.events__link-date-box', className: 'active' },
        { selector: '.events__navigation', className: 'active' },
        { selector: '.events__link', className: 'active' },
        { selector: '.events__link-date', className: 'active' },
        { selector: '.events__link_month-time', className: 'active' },
        { selector: '.events__link_month-time-span', className: 'active' },
        { selector: '.events__info', className: 'active' },
        { selector: '.events__info-span', className: 'active' },
        { selector: '.events__link-button', className: 'active' },
        { selector: '.events__button', className: 'active' }
    ];

    const savedView = localStorage.getItem('eventsView') || 'list';
    toggleView(savedView);

    buttons.forEach(btn => {
        btn.addEventListener('click', () => toggleView(btn.dataset.view));
    });

    function toggleView(view) {
        const isGridView = view === 'grid';

        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });

        list.classList.toggle('active', isGridView);

        updateListItems(isGridView);

        localStorage.setItem('eventsView', view);
    }

    function updateListItems(isGridView) {
        const items = document.querySelectorAll('.events__navigation_list');

        items.forEach(item => {
            selectorsConfig.forEach(({ selector, className }) => {
                const element = item.querySelector(selector);
                if (element) {
                    element.classList.toggle(className, isGridView);
                }
            });
        });
    }
});