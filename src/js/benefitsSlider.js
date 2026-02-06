document.addEventListener('DOMContentLoaded', function() {
  const navbarBtns = document.querySelector('.benefits__navigation-bar');

  function activateBlock(event) {
    const target = event.target;

    const btnTarget = target.closest('.benefits__navigation-link');
    if (!btnTarget || btnTarget.classList.contains('benefits__navigation-link--active')) return;

    navbarBtns.querySelector('.benefits__navigation-link--active').classList.remove('benefits__navigation-link--active');
    btnTarget.classList.add('benefits__navigation-link--active');

    const targetDataAttribute = btnTarget.getAttribute('data-target');

    document.querySelector('.benefits__content--active').classList.remove('benefits__content--active');
    document.querySelector(`.benefits__content-${targetDataAttribute}`).classList.add('benefits__content--active');
  }

  navbarBtns.addEventListener('click', activateBlock);
});
