document.addEventListener('DOMContentLoaded', function() {
    // Получаем все необходимые элементы
    const sliderContainer = document.querySelector('.slider__container');
    const sliderItems = document.querySelectorAll('.slider__content-box');
    const prevBtn = document.querySelector('.testimonials__arrow-left');
    const nextBtn = document.querySelector('.testimonials__arrow-right');
    const indicators = document.querySelectorAll('.rectangle__horizon');

    let currentSlide = 0;
    const totalSlides = sliderItems.length;

    // Функция для обновления слайдера
    function updateSlider() {
        // Скрываем все слайды
        sliderItems.forEach(item => {
            item.style.display = 'none';
        });

        // Показываем текущий слайд
        sliderItems[currentSlide].style.display = 'block';

        // Обновляем индикаторы
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.style.opacity = '1'; // Активный слайд
            } else {
                indicator.style.opacity = '0.3'; // Неактивные слайды
            }
        });
    }

    // Функция для перехода к следующему слайду
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    // Функция для перехода к предыдущему слайду
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Добавляем обработчики событий для кнопок
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Добавляем обработчики событий для индикаторов
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentSlide = index;
            updateSlider();
        });
    });

    // Инициализируем слайдер
    updateSlider();

    // // Опционально: добавляем автоматическое перелистывание
    // let autoSlideInterval;
    //
    // function startAutoSlide() {
    //     autoSlideInterval = setInterval(nextSlide, 5000); // 5 секунд
    // }
    //
    // function stopAutoSlide() {
    //     clearInterval(autoSlideInterval);
    // }
    //
    // // Запускаем автоматическое перелистывание
    // startAutoSlide();
    //
    // // Останавливаем автоматическое перелистывание при наведении на слайдер
    // sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    // sliderContainer.addEventListener('mouseleave', startAutoSlide);
    //
    // // Останавливаем автоматическое перелистывание при взаимодействии с кнопками
    // prevBtn.addEventListener('mouseenter', stopAutoSlide);
    // nextBtn.addEventListener('mouseenter', stopAutoSlide);
    // prevBtn.addEventListener('mouseleave', startAutoSlide);
    // nextBtn.addEventListener('mouseleave', startAutoSlide);
});