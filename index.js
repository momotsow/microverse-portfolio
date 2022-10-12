const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.add('nav-list-show');
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    nav.classList.remove('nav-list-show');
  });
}

nav.addEventListener('click', () => {
  nav.classList.remove('nav-list-show');
});