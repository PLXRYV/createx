document.addEventListener('click', (event) => {
    const buttonBenefitsElement = event.target.closest('.benefits__navigation-link')

    if (buttonBenefitsElement) {
        const target = buttonBenefitsElement.getAttribute('data-target')
        if (!target) return

        document.querySelectorAll('.benefits__navigation-link').forEach(btn => {
            btn.classList.remove('active')
        })

        document.querySelectorAll('.benefits__content').forEach(block => {
            block.style.display = 'none'
        })

        const targetBlock = document.querySelector(`.benefits__content-${target}`)
        if (targetBlock) {
            targetBlock.style.display = 'flex'
        }

        buttonBenefitsElement.classList.add('active')
    }
})

// document.addEventListener('DOMContentLoaded', function() {
//     const navbarBtns = document.querySelector('.benefits__navigation-bar');
//
//     function activateBlock(event) {
//         const target = event.target;
//
//         const btnTarget = target.closest('.benefits__navigation-link');
//         if (!btnTarget || btnTarget.classList.contains('benefits__navigation-link--active')) return;
//
//         navbarBtns.querySelector('.benefits__navigation-link--active').classList.remove('benefits__navigation-link--active');
//         btnTarget.classList.add('benefits__navigation-link--active');
//
//         const targetDataAttribute = btnTarget.getAttribute('data-target');
//
//         document.querySelector('.benefits__content--active').classList.remove('benefits__content--active');
//         document.querySelector(`.benefits__content-${targetDataAttribute}`).classList.add('benefits__content--active');
//     }
//
//     navbarBtns.addEventListener('click', activateBlock);
// });