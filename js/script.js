const hamb = document.querySelector('.hamburger');

const classToggle = () => {
  const navs = document.querySelectorAll('.hamburger-noshow');
  navs.forEach(nav => nav.classList.toggle('hamburger-show'));
  hamb.setAttribute('aria-expanded', hamb.getAttribute('aria-expanded') === 'true' ? 'false' : true);
}

hamb.addEventListener('click', classToggle);
hamb.addEventListener('keyup', event => {
  if (event.keyCode == 13 || event.keyCode == 32) {
    classToggle();
  }
})