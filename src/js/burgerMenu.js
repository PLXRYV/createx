const menu = document.querySelector('.nav');
const menuAuth = document.querySelector('.header__auth');
const menuBtn = document.querySelector('.burger');

const body = document.body;

if (menuBtn && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuAuth.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');
    })

    menu.addEventListener('click', event => {
        if (event.target.classList.contains('nav')) {
            menu.classList.remove('active');
            menuAuth.classList.remove('active');
            menuBtn.classList.remove('active');
            body.classList.remove('lock');
        }
    })

    menu.querySelectorAll('.nav__menu-item__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuAuth.classList.remove('active');
            menuBtn.classList.remove('active');
            body.classList.remove('lock');
        })
    })
}