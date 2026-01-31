document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.benefits__navigation-link');
    const contentBlocks = document.querySelectorAll('.benefits__content');

    function activateBlock(target) {
        contentBlocks.forEach(block => {
            block.style.display = 'none';
        });

        navButtons.forEach(button => {
            button.classList.remove('active');
        });

        const targetBlock = document.querySelector(`.benefits__content-${target}`);
        if (targetBlock) {
            targetBlock.style.display = 'flex';
        }

        const activeButton = document.querySelector(`[data-target="${target}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            activateBlock(target);// делегирование событий
        });
    });

    if (navButtons.length > 0) {
        const firstTarget = navButtons[0].getAttribute('data-target');
        activateBlock(firstTarget);
    }
});
