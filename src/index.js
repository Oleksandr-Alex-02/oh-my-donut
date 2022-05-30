//  Open menu
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-open]'),
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    modal: document.querySelector('[data-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  const navLinks = document.querySelector('.nav__list');

  if (navLinks) {
    navLinks.addEventListener('click', onMenuLinkClick);
    function onMenuLinkClick(e) {
      e.preventDefault();
      toggleModal();
      const att = e.target.getAttribute('data-goto');
      const gotoBlock = document.getElementById(att);

      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });

      // }
    }
  }
})();

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

