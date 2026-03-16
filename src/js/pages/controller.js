import { Model } from "/src/js/pages/model.js";
import { View } from "/src/js/pages/view.js";

const model = new Model();
const view = new View();

init();

async function init() {
    try {
        await model.loadingData();
        console.log('Data loaded:', model.data);
        view.renderProducts(model.data);
        addEventListeners();
    } catch (error) {
        console.error('Initialization error:', error);
    }
}

function addEventListeners() {
    view.elements.sortCategorySelect.addEventListener("change", updateDisplay);
    view.elements.sortOrderSelect.addEventListener("change", updateDisplay);

    view.elements.increaseBtn.addEventListener("click", increaseItemsPerPage);
    view.elements.decreaseBtn.addEventListener("click", decreaseItemsPerPage);

    view.elements.searchForm.addEventListener("submit", handleSearch);
    view.elements.searchInput.addEventListener("input", handleSearchInput);
}

function handleSearch(e) {
    e.preventDefault();
    const query = view.elements.searchInput.value.trim();
    view.setSearchQuery(query);
    updateDisplay();
}

function handleSearchInput(e) {
    const query = e.target.value.trim();
    view.setSearchQuery(query);

    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
        updateDisplay();
    }, 300);
}

function increaseItemsPerPage() {
    const current = view.getItemsPerPage();
    const newValue = Math.min(current + 1, 12);
    view.setItemsPerPage(newValue);
    updateDisplay();
}

function decreaseItemsPerPage() {
    const current = view.getItemsPerPage();
    const newValue = Math.max(current - 1, 3);
    view.setItemsPerPage(newValue);
    updateDisplay();
}

function updateDisplay() {
    view.elements.productList.innerHTML = '';

    const sortingValue = view.sortingElementsValue();
    console.log('Display with values:', sortingValue);

    const sortedData = model.sortingProducts(sortingValue);
    console.log('Sorted data:', sortedData);

    view.renderProducts(sortedData);

    if (window.restoreGridView) {
        setTimeout(() => window.restoreGridView(), 0);
    }
}