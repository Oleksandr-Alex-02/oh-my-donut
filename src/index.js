//  Open menu



const burger = document.querySelector('[burger]');
const mobile = document.querySelector('[data-mobile]');

if (burger) {
  burger.addEventListener('click', onBurgerClick);
  function onBurgerClick() {
    mobile.classList.toggle('is-hidden'), burger.classList.toggle('open');
  }
}



  const navLinks = document.querySelector('.nav__list');
  if (navLinks) {
    navLinks.addEventListener('click', onMenuLinkClick);
    function onMenuLinkClick(e) {
      e.preventDefault();
      onBurgerClick();
      const att = e.target.getAttribute('data-goto');
      const gotoBlock = document.getElementById(att);

      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });     
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


