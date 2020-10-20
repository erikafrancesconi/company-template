(function() {
  // Hamburger Menu
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

  // Dropdown Navigation
  // const menuItems = document.querySelectorAll('li.dropdown');
  // let timer;
  // Array.prototype.forEach.call(menuItems, function(el) {
  //   el.querySelector('a').addEventListener("click",  function(event) {
  //     event.preventDefault();
  //     if (this.parentNode.className == "dropdown") {
  //       this.parentNode.className = "dropdown open";
  //       this.setAttribute('aria-expanded', "true");
  //     } else {
  //       this.parentNode.className = "dropdown";
  //       this.setAttribute('aria-expanded', "false");
  //     }
  //     return false;
  //   });
  // });
})();