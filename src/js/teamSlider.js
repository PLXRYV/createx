document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.team__navigation_list')
    const sliderItems = document.querySelectorAll('.team__navigation_item')
    const prevBtn = document.querySelector('.team__arrow-left')
    const nextBtn = document.querySelector('.team__arrow-right')


    let itemsPerView = 4
    let currentIndex = 0
    let totalItems = sliderItems.length

    function updateItemsPerView() {
        const containerWidth = sliderContainer.parentElement.offsetWidth
        const itemWidth = sliderItems[0]?.offsetWidth || 300

        itemsPerView = Math.floor(containerWidth / itemWidth)

        itemsPerView = Math.max(1, Math.min(4, itemsPerView))
    }

    function moveSlider(direction) {

        const maxIndex = Math.max(0, totalItems - itemsPerView)

        if (direction === 'next') {
            currentIndex = Math.min(currentIndex + 1, maxIndex)
        } else if (direction === 'prev') {
            currentIndex = Math.max(currentIndex - 1, 0)
        }

        const itemWidth = sliderItems[0].offsetWidth
        const gap = 20
        const translateX = -(currentIndex * (itemWidth + gap))

        sliderContainer.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        sliderContainer.style.transform = `translateX(${translateX}px)`

        updateButtonsState()
    }

    function updateButtonsState() {
        const maxIndex = Math.max(0, totalItems - itemsPerView)

        if (currentIndex === 0) {
            prevBtn.style.opacity = '0.5';
            prevBtn.style.cursor = 'not-allowed';
            prevBtn.disabled = true;
        } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.cursor = 'pointer';
            prevBtn.disabled = false;
        }

        if (currentIndex >= maxIndex) {
            nextBtn.style.opacity = '0.5';
            nextBtn.style.cursor = 'not-allowed';
            nextBtn.disabled = true;
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
            nextBtn.disabled = false;
        }
    }

    prevBtn.addEventListener('click', function() {
        if (!this.disabled) {
            moveSlider('prev');
        }
    })

    nextBtn.addEventListener('click', function() {
        if (!this.disabled) {
            moveSlider('next');
        }
    })

    window.addEventListener('resize', function() {
        updateItemsPerView();
        const itemWidth = sliderItems[0]?.offsetWidth || 300;
        const gap = 20;
        const translateX = -(currentIndex * (itemWidth + gap));
        sliderContainer.style.transform = `translateX(${translateX}px)`;
        updateButtonsState();
    })

    updateItemsPerView();
    updateButtonsState();

    function calculateGap() {
        const computedStyle = window.getComputedStyle(sliderContainer);
        return parseFloat(computedStyle.gap) || 20;
    }
})