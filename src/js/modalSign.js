const openModalBtn = document.querySelector('.header__auth-btn--signin');
const WindowModalSignIn = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__close');
const openModalBtnRegister = document.querySelector('.header__auth-btn--signup');
const WindowModalSignUp = document.querySelector('.modal__register');
const closeModalBtnSignUp = document.querySelector('.modal__close-signup');

const mainBody = document.body;

if (openModalBtnRegister) {
    openModalBtnRegister.addEventListener('click', () => {
        WindowModalSignUp.classList.toggle('active');
        body.classList.toggle('lock');
    })
}

if (closeModalBtnSignUp) {
    closeModalBtnSignUp.addEventListener('click', () => {
        WindowModalSignUp.classList.remove('active');
        mainBody.classList.remove('lock');
    })
}

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

WindowModalSignUp.addEventListener('click', event => {
    if (event.target.classList.contains('modal__register')) {
        WindowModalSignUp.classList.remove('active');
        mainBody.classList.remove('lock');
    }
})

// document.addEventListener('click', (event) => {
//     const modalSignInBtn = document.querySelector('.header__auth-btn--signin')
//     const modalSignUpBtn = document.querySelector('.header__auth-btn--signup')
//     const modalCloseBtn = document.querySelector('.modal__close-icon')
//     const modalSignInWindow = document.querySelector('.modal')
//     const modalSignUpWindow = document.querySelector('.modal__register')
//     const body = document.querySelector('body')
//     const modalElement = document.querySelector('.modal__content')
//
//     if (modalSignInBtn) {
//         modalSignInWindow.classList.add('active')
//         body.classList.add('no-scroll')
//         return
//     }
//
//     if (modalCloseBtn) {
//         modalSignUpWindow.classList.remove('active')
//         modalSignInWindow.classList.remove('active')}
//         body.classList.remove('no-scroll')
// })