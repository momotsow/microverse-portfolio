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

// form validation
function validation() {
  const form = document.getElementById('form');
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value.trim();
  const alert = document.getElementById('alert');
  alert.innerHTML = '';

  form.addEventListener('submit', (event) => {
    if (name.length < 1 && name === undefined && email < 1
      && email === undefined && email !== email.toLowerCase()
      && message.length < 5 && message === undefined) {
      event.preventDefault();
      alert.innerHTML = '* Make sure you fill all the input fields. form not sent.';
      document.getElementsByTagName('input').classList.add('invalid');
      document.getElementsByTagName('textarea').classList.add('invalid');
    } else if (email !== email.toLowerCase()) {
      event.preventDefault();
      alert.innerHTML = '* Make sure your email is in lower case. form not sent.';
      document.getElementById('email').classList.add('invalid');
    } else if (message.length < 5 || message === undefined) {
      event.preventDefault();
      alert.innerHTML ="* Text area should have at least 5 characters. form not sent.";
      document.getElementsByTagName("input").classList.add("invalid");
    } else if (name.length < 1 || name === undefined) {
      event.preventDefault();
      alert.innerHTML = "* Make sure you fill your name. Form not sent.";
      document.getElementById("name").classList.add("invalid");
    } else {
      form.submit();
    }
  });
}

validation();