document.addEventListener('click', (event) => {
    const btnBurgerElement = event.target.closest('.burger')
    const burgerMenu = document.querySelector('.nav')
    const authElement = document.querySelector('.header__auth')
    const bodyElement = document.querySelector('body')

    if (btnBurgerElement) {
        burgerMenu.classList.toggle('active')
        btnBurgerElement.classList.toggle('active')
        authElement.classList.toggle('active')
        bodyElement.classList.toggle('no-scroll')
        return
    }

    if (!event.target.closest('.nav__menu') && burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active')
        authElement.classList.remove('active')

        const activeBurger = document.querySelector('.burger.active')
        if (activeBurger) {
            activeBurger.classList.remove('active')
        }
        bodyElement.classList.remove('no-scroll')
    }
})