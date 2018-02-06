var nav_toggle = document.getElementsByClassName('main-nav__toggle')[0];
//var nav_toogle_open = document.getElementsByClassName('main-nav__toggle--open')[0];
//var nav_toogle_close = document.getElementsByClassName('main-nav__toggle--close')[0];
var main_header = document.getElementsByClassName('main-header')[0];
var main_nav = document.getElementsByClassName('main-nav')[0];

main_header.classList.remove('main-header--nojs');
main_nav.classList.remove('main-nav--nojs');

nav_toggle.addEventListener('click', function() {
  if (main_nav.classList.contains('main-nav--open')) {
    main_nav.classList.remove('main-nav--open');
    main_nav.classList.add('main-nav--close');

    main_header.classList.remove('main-header--open');
    main_header.classList.add('main-header--close');
  }
  else {
    main_nav.classList.remove('main-nav--close');
    main_nav.classList.add('main-nav--open');

    main_header.classList.remove('main-header--close');
    main_header.classList.add('main-header--open');
  }
  //main_nav.classList.toggle('main-nav--open');
  //main_header.classList.toggle('main-header--open');
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
