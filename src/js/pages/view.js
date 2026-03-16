export class View {
    constructor () {
        this.elements = {
            productList: document.querySelector('.events__navigation'),
            sortCategorySelect: document.querySelector('#sortCategory'),
            sortOrderSelect: document.querySelector('#sortOrder'),
            itemsPerPageValue: document.querySelector('.events__sort-value .value'),
            increaseBtn: document.querySelector('.events__sort-btn-plus'),
            decreaseBtn: document.querySelector('.events__sort-btn-min'),
            searchForm: document.querySelector('.events__sort-search-form'),
            searchInput: document.querySelector('#filterInput')
        };

        this.itemsPerPage = 9;
        this.searchQuery = '';

        this.monthMap = {
            'January': 'Jan', 'February': 'Feb', 'March': 'Mar',
            'April': 'Apr', 'May': 'May', 'June': 'Jun',
            'July': 'Jul', 'August': 'Aug', 'September': 'Sep',
            'October': 'Oct', 'November': 'Nov', 'December': 'Dec'
        };
    }

    renderProducts(arrData){
        this.elements.productList.innerHTML = '';

        let filteredData = arrData;
        if (this.searchQuery) {
            filteredData = this.filterBySearch(arrData, this.searchQuery);
        }

        const itemsToShow = filteredData.slice(0, this.itemsPerPage);

        if (itemsToShow.length === 0) {
            this.showNoResults();
            return;
        }

        const currentView = localStorage.getItem('eventsView') || 'list';
        const isGridView = currentView === 'grid';

        this.elements.productList.classList.toggle('active', isGridView);

        this.updateViewButtons(currentView);

        itemsToShow.forEach((product) => {
            const formattedProduct = this.formatProductForView(product, isGridView);

            const markup = this.createProductMarkup(formattedProduct, isGridView);
            this.elements.productList.insertAdjacentHTML('beforeend', markup);
        });

        this.updateCounter(itemsToShow.length, filteredData.length);
    }

    formatProductForView(product, isGridView) {
        return {
            ...product,
            month: isGridView ? this.getShortMonth(product.month) : product.month
        };
    }

    getShortMonth(fullMonth) {
        return this.monthMap[fullMonth] || fullMonth.substring(0, 3);
    }
    createProductMarkup(product, isGridView) {
        const activeClass = isGridView ? 'active' : '';

        return `
            <li class="events__navigation_list">
                <div class="events__link ${activeClass}">
                    <div class="events__link-date ${activeClass}">
                        <time>${product.date}</time>
                        <div class="events__link-date-box ${activeClass}">
                            <time class="events__link_month-time ${activeClass}">
                                <span class="events__link_month-time-span ${activeClass}">
                                    ${product.month}
                                </span>
                                ${product.time}
                            </time>
                        </div>
                    </div>
                    <div class="events__info ${activeClass}">
                        <span class="events__info-span ${activeClass}">
                            ${product.description}
                        </span>
                        ${product.category}
                    </div>
                    <div class="events__link-button ${activeClass}">
                        <button class="events__button ${activeClass}">
                            View More
                        </button>
                    </div>
                </div>
            </li>
        `;
    }

    updateViewButtons(view) {
        const buttons = document.querySelectorAll('[data-view]');
        if (buttons.length) {
            buttons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.view === view);
            });
        }
    }

    restoreView() {
        const currentView = localStorage.getItem('eventsView') || 'list';
        const isGridView = currentView === 'grid';

        this.elements.productList.classList.toggle('active', isGridView);

        this.updateViewButtons(currentView);

        const items = this.elements.productList.querySelectorAll('.events__navigation_list');

        items.forEach(item => {
            const selectors = [
                '.events__link',
                '.events__link-date',
                '.events__link-date-box',
                '.events__link_month-time',
                '.events__link_month-time-span',
                '.events__info',
                '.events__info-span',
                '.events__link-button',
                '.events__button'
            ];

            selectors.forEach(selector => {
                const element = item.querySelector(selector);
                if (element) {
                    element.classList.toggle('active', isGridView);
                }
            });

            if (isGridView) {
                const monthSpan = item.querySelector('.events__link_month-time-span');
                if (monthSpan) {
                    const currentText = monthSpan.textContent;
                    if (currentText.length > 3 && !Object.values(this.monthMap).includes(currentText)) {
                        monthSpan.textContent = this.getShortMonth(currentText);
                    }
                }
            }
        });
    }

    filterBySearch(data, query) {
        const lowerQuery = query.toLowerCase();
        return data.filter(product => {
            return product.description.toLowerCase().includes(lowerQuery) ||
                product.category.toLowerCase().includes(lowerQuery) ||
                product.month.toLowerCase().includes(lowerQuery);
        });
    }

    showNoResults() {
        const markup = `
            <li class="events__no-results">
                <div class="events__link">
                    <div class="events__info">
                        <span>No events found for "${this.searchQuery}"</span>
                    </div>
                </div>
            </li>
        `;
        this.elements.productList.innerHTML = markup;
    }

    updateCounter(shown, total) {
        console.log(`Showing ${shown} of ${total} events`);
    }

    getItemsPerPage() {
        return this.itemsPerPage;
    }

    setItemsPerPage(value) {
        this.itemsPerPage = value;
        this.elements.itemsPerPageValue.textContent = value;
    }

    setSearchQuery(query) {
        this.searchQuery = query;
    }

    getSearchQuery() {
        return this.searchQuery;
    }

    sortingElementsValue() {
        return {
            sortCategory: this.elements.sortCategorySelect.value,
            sortOrder: this.elements.sortOrderSelect.value,
            itemsPerPage: this.itemsPerPage,
            searchQuery: this.searchQuery
        };
    }
}