document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.team__navigation_list');
    const sliderItems = document.querySelectorAll('.team__navigation_item');
    const prevBtn = document.querySelector('.team__arrow-left');
    const nextBtn = document.querySelector('.team__arrow-right');

    // Определяем сколько элементов показывать за раз
    let itemsPerView = 4; // По умолчанию показываем 4 элемента
    let currentIndex = 0;
    let totalItems = sliderItems.length;

    // Функция для определения количества видимых элементов
    function updateItemsPerView() {
        const containerWidth = sliderContainer.parentElement.offsetWidth;
        const itemWidth = sliderItems[0]?.offsetWidth || 300; // Предполагаемая ширина элемента

        // Рассчитываем сколько элементов помещается
        itemsPerView = Math.floor(containerWidth / itemWidth);

        // Минимум 1 элемент
        itemsPerView = Math.max(1, Math.min(4, itemsPerView)); // Ограничиваем максимум 4
    }

    // Функция для плавного перемещения слайдера
    function moveSlider(direction) {
        // Определяем максимальный индекс
        const maxIndex = Math.max(0, totalItems - itemsPerView);

        // Обновляем индекс
        if (direction === 'next') {
            currentIndex = Math.min(currentIndex + 1, maxIndex);
        } else if (direction === 'prev') {
            currentIndex = Math.max(currentIndex - 1, 0);
        }

        // Рассчитываем смещение
        const itemWidth = sliderItems[0].offsetWidth;
        const gap = 20; // Примерный gap между элементами, можно вычислить
        const translateX = -(currentIndex * (itemWidth + gap));

        // Применяем плавную анимацию
        sliderContainer.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        sliderContainer.style.transform = `translateX(${translateX}px)`;

        // Обновляем состояние кнопок
        updateButtonsState();
    }

    // Функция для обновления состояния кнопок
    function updateButtonsState() {
        const maxIndex = Math.max(0, totalItems - itemsPerView);

        // Кнопка "назад"
        if (currentIndex === 0) {
            prevBtn.style.opacity = '0.5';
            prevBtn.style.cursor = 'not-allowed';
            prevBtn.disabled = true;
        } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.cursor = 'pointer';
            prevBtn.disabled = false;
        }

        // Кнопка "вперед"
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

    // Добавляем CSS для слайдера
    const style = document.createElement('style');
    style.textContent = `
        .team__navigation {
            overflow: hidden;
            position: relative;
        }
        
        .team__navigation_list {
            display: flex;
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: transform;
            gap: 20px; /* Добавляем gap между элементами */
        }
        
        .team__navigation_item {
            flex: 0 0 auto;
            min-width: 0;
        }
        
        .team__arrow-left,
        .team__arrow-right {
            transition: all 0.3s ease;
            background: none;
            border: none;
            cursor: pointer;
            padding: 10px;
        }
        
        .team__arrow-left:hover:not(:disabled),
        .team__arrow-right:hover:not(:disabled) {
            transform: scale(1.1);
        }
        
        .team__arrow-left:disabled svg path,
        .team__arrow-right:disabled svg path {
            fill: #ccc;
        }
        
        /* Для touch устройств */
        .team__navigation_list {
            touch-action: pan-y;
        }
    `;
    document.head.appendChild(style);

    // Обработчики событий для кнопок
    prevBtn.addEventListener('click', function() {
        if (!this.disabled) {
            moveSlider('prev');
        }
    });

    nextBtn.addEventListener('click', function() {
        if (!this.disabled) {
            moveSlider('next');
        }
    });

    // Добавляем поддержку клавиатуры
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextBtn.click();
        }
    });

    // Добавляем свайп для мобильных устройств
    let startX = 0;
    let isDragging = false;

    sliderContainer.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        isDragging = true;
        sliderContainer.style.transition = 'none'; // Отключаем анимацию при драге
    });

    sliderContainer.addEventListener('touchmove', function(e) {
        if (!isDragging) return;

        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;

        // Если свайп достаточно сильный
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Свайп влево = следующий слайд
                nextBtn.click();
            } else {
                // Свайп вправо = предыдущий слайд
                prevBtn.click();
            }
            isDragging = false;
        }
    });

    sliderContainer.addEventListener('touchend', function() {
        isDragging = false;
        sliderContainer.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Обновляем при изменении размера окна
    window.addEventListener('resize', function() {
        updateItemsPerView();
        // Пересчитываем позицию
        const itemWidth = sliderItems[0]?.offsetWidth || 300;
        const gap = 20;
        const translateX = -(currentIndex * (itemWidth + gap));
        sliderContainer.style.transform = `translateX(${translateX}px)`;
        updateButtonsState();
    });

    // Инициализация
    updateItemsPerView();
    updateButtonsState();

    // Автоматическое определение gap
    function calculateGap() {
        const computedStyle = window.getComputedStyle(sliderContainer);
        return parseFloat(computedStyle.gap) || 20;
    }
});