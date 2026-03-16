(function() {
    'use strict';

    class FastViewRestorer {
        constructor() {
            this.currentView = localStorage.getItem('eventsView') || 'list';
            this.isGridView = this.currentView === 'grid';
            this.list = null;
            this.buttons = null;
            this.init();
        }

        init() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.setup());
            } else {
                this.setup();
            }
        }

        setup() {
            this.list = document.querySelector('.events__navigation');
            this.buttons = document.querySelectorAll('[data-view]');

            if (!this.list) return;
            this.applyImmediately();

            this.setupObserver();

            this.bindButtons();
        }

        applyImmediately() {
            requestAnimationFrame(() => {
                this.list.classList.toggle('active', this.isGridView);

                this.buttons.forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.view === this.currentView);
                });

                this.applyToExistingElements();
            });
        }

        applyToExistingElements() {
            const selectors = [
                '.events__link-date-box',
                '.events__link',
                '.events__link-date',
                '.events__link_month-time',
                '.events__link_month-time-span',
                '.events__info',
                '.events__info-span',
                '.events__link-button',
                '.events__button'
            ];

            selectors.forEach(selector => {
                const elements = this.list.querySelectorAll(selector);
                elements.forEach(el => {
                    el.classList.toggle('active', this.isGridView);
                });
            });
        }

        setupObserver() {
            const observer = new MutationObserver((mutations) => {
                const hasAddedNodes = mutations.some(mutation =>
                    mutation.type === 'childList' && mutation.addedNodes.length > 0
                );

                if (hasAddedNodes) {
                    requestAnimationFrame(() => {
                        this.applyToExistingElements();
                    });
                }
            });

            observer.observe(this.list, {
                childList: true,
                subtree: true
            });

            this.observer = observer;
        }

        bindButtons() {
            this.buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.currentView = btn.dataset.view;
                    this.isGridView = this.currentView === 'grid';
                    localStorage.setItem('eventsView', this.currentView);
                    this.applyImmediately();
                });
            });
        }

        refresh() {
            this.applyImmediately();
        }
    }

    window.fastViewRestorer = new FastViewRestorer();

    window.restoreGridViewFast = () => {
        if (window.fastViewRestorer) {
            window.fastViewRestorer.refresh();
        }
    };
})();