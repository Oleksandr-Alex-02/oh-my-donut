//  Open menu

const burger = document.querySelector('[DATA-BURGER]');
const mobile = document.querySelector('[data-mobile]');

if (burger) {
  burger.addEventListener('click', onBurgerClick);
}

function onBurgerClick() {
  mobile.classList.toggle('is-hidden');
  burger.classList.toggle('open');
}

const navLinks = document.querySelector('.nav__list');
const navLinksMenu = document.querySelector('[DATA-NAVIGATION]');

if (navLinks) {
  navLinks.addEventListener('click', onMenuLinkClick);
  function onMenuLinkClick(e) {
    e.preventDefault();

    const att = e.target.getAttribute('data-goto');
    const gotoBlock = document.getElementById(att);

    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });
  }
}

if (navLinksMenu) {
  navLinksMenu.addEventListener('click', onMenuMobilLinckClick);
  function onMenuMobilLinckClick(e) {
    onBurgerClick();
  }
}

// Open text
const menuButton = document.querySelector('.program__button');
const headerNav = document.querySelector('.program__text--visible');
menuButton.addEventListener('click', () => {
  if (headerNav.classList.contains('is-open')) {
    menuButton.textContent = 'Read more';
  } else {
    menuButton.textContent = 'Less';
  }
  headerNav.classList.toggle('is-open');
});

// копія коду Open text для About-us
const showButton = document.querySelector('.about-us__button');
const hiddenText = document.querySelector('.about-us__text--visible');
showButton.addEventListener('click', () => {
  if (hiddenText.classList.contains('is-open')) {
    showButton.textContent = 'Read more';
  } else {
    showButton.textContent = 'Less';
  }
  hiddenText.classList.toggle('is-open');
});

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-map-modal-open]'),
    closeModalBtn: document.querySelector('[data-map-modal-close]'),
    modal: document.querySelector('[data-map-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('map-is-hidden');
  }
})();
