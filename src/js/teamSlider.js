document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.team__navigation_list')
    const sliderItems = document.querySelectorAll('.team__navigation_item')
    const prevBtn = document.querySelector('.team__arrow-left')
    const nextBtn = document.querySelector('.team__arrow-right')

    if (!sliderContainer || !sliderItems.length) return;

    const itemsPerView = 4
    let currentIndex = 0
    const totalItems = sliderItems.length

    const gapFlexContainer = parseInt(getComputedStyle(sliderContainer).gap);

    function moveSlider(delta) {
        currentIndex += delta;

        const itemWidth = sliderItems[0].offsetWidth
        const translateX = -(currentIndex * (itemWidth + gapFlexContainer))

        sliderContainer.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        sliderContainer.style.transform = `translateX(${translateX}px)`

        updateButtonsState()
    }

    function setButtonState(btn, isActive) {
        btn.classList.toggle('btn--active', isActive);
        btn.disabled = !isActive;
    }

    function updateButtonsState() {
        const maxIndex = Math.max(0, totalItems - itemsPerView)
        setButtonState(prevBtn, currentIndex > 0);
        setButtonState(nextBtn, currentIndex < maxIndex);
    }

    prevBtn.addEventListener('click', function() {
        moveSlider('prev');
    })

    nextBtn.addEventListener('click', function() {
        moveSlider('next');
    })

    updateButtonsState();
})