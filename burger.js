const iconMenu = document.querySelector('.burger');
const menuBody = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.nav__item');
const fone = document.querySelector('.fone');
const header = document.querySelector('header');

const toggleMenu = function() { 
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('active_burg');
  menuBody.classList.toggle('active_burg');
  fone.classList.toggle('fone-active');
  header.classList.toggle('header-active');
}
const removeMenu = function() { 
  document.body.classList.remove('_lock');
  iconMenu.classList.remove('active_burg');
  menuBody.classList.remove('active_burg');
  fone.classList.remove('fone-active');
  header.classList.remove('header-active');
}

iconMenu.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', function(e) {
  const target = e.target;
  const its_menu = target ==  menuBody ||  menuBody.contains(target);
  const its_btnMenu = target == iconMenu ;
  const menu_is_active = menuBody.classList.contains('active_burg');
  if (!its_menu && !its_btnMenu && menu_is_active) {
    removeMenu();
  }
});

menuLinks.forEach((el) => document.addEventListener('click', function(e) {
  removeMenu();
}));