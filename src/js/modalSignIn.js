const openModalBtn = document.querySelector('.header__auth-btn--signin');
const WindowModalSignIn = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__close');

const mainBody = document.body;

if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
        WindowModalSignIn.classList.toggle('active');
        body.classList.toggle('lock');
    })
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        WindowModalSignIn.classList.remove('active');
        mainBody.classList.remove('lock');
    })
}

WindowModalSignIn.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        WindowModalSignIn.classList.remove('active');
        mainBody.classList.remove('lock');
    }
})
