const mobileBtn = document.getElementById('mobileMenu');

const nav = document.querySelector('.nav-list');

const mobileBtnExit = document.getElementById('mobile-exit');


mobileBtn.addEventListener("click", () => {
  nav.classList.add('menu-btn');
});
