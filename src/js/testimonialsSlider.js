document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider__container')
    const sliderItems = document.querySelectorAll('.slider__content-box')
    const prevBtn = document.querySelector('.testimonials__arrow-left')
    const nextBtn = document.querySelector('.testimonials__arrow-right')
    const indicators = document.querySelectorAll('.rectangle__horizon')

    let currentSlide = 0
    const totalSlides = sliderItems.length

    function updateSlider() {
        sliderItems.forEach(item => {
            item.style.display = 'none'
        })

        sliderItems[currentSlide].style.display = 'block'

        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.style.opacity = '1'
            } else {
                indicator.style.opacity = '0.3'
            }
        })
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides
        updateSlider()
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
        updateSlider()
    }

    nextBtn.addEventListener('click', nextSlide)
    prevBtn.addEventListener('click', prevSlide)

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentSlide = index
            updateSlider()
        })
    })

    updateSlider()
})