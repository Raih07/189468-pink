var nav_toggle = document.getElementsByClassName('main-nav__toggle')[0];
var nav_toogle_open = document.getElementsByClassName('main-nav__toggle--open')[0];
var nav_toogle_close = document.getElementsByClassName('main-nav__toggle--close')[0];
var main_header = document.getElementsByClassName('main-header')[0];
var main_nav = document.getElementsByClassName('main-nav')[0];


nav_toggle.addEventListener('click', function () {
  main_nav.classList.toggle('main-nav--open');
  main_header.classList.toggle('main-header--open');
/*
  if (!main_nav.classList.contains('main-nav--open')) {
    nav_toogle_close.style.display = 'block';
    nav_toogle_open.style.display = 'none';
  }
  else {
    nav_toogle_close.style.display = 'none';
    nav_toogle_open.style.display = 'block';
  }*/
});
