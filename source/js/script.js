document.body.onkeydown = function(event) {
  if (event.keyCode === 9) {  // TAB
    document.body.classList.add('tab-user');

    document.addEventListener('click', function() {
      document.body.classList.remove('tab-user');
    });
  }
};

document.removeEventListener('click', function() {
  document.body.classList.remove('tab-user');
});

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

/*******Слайдер отзывов*********/

var slider_btns = document.getElementsByClassName("reviews__toggles")[0];
var slider_list = document.getElementsByClassName("slider__list")[0];
var reviews_wrapper = document.getElementsByClassName("reviews__wrapper")[0];
var rev_prev = document.getElementsByClassName("reviews__btn--prev")[0];
var rev_next = document.getElementsByClassName("reviews__btn--next")[0];

function deselectAll(items) {
  for (var i = 0; i < items.children.length; i++) {
    items.children[i].classList.remove('slider__btn--active');
  }
}

slider_btns.onclick = function(event) {
  var target = event.target;
  switch(target.dataset.slide) {
    case '1':
      slider_list.style.transform = 'translateX(0)';
      deselectAll(this);
      target.classList.add('slider__btn--active');
      break;
    case '2':
      slider_list.style.transform = 'translateX(-' + reviews_wrapper.offsetWidth + 'px)';
      deselectAll(this);
      target.classList.add('slider__btn--active');
      break;
    case '3':
      slider_list.style.transform = 'translateX(-' + 2*reviews_wrapper.offsetWidth + 'px)';
      deselectAll(this);
      target.classList.add('slider__btn--active');
      break;
  }
}

$('.slider__list').swipe( {
  swipeLeft: leftSwipeRev,
  swipeRight: rightSwipeRev,
  threshold: 0
});
var swipe_count_rev = 0;
function leftSwipeRev(){
  if (swipe_count_rev < 2) {
    swipe_count_rev++;
    slider_list.style.transform = 'translateX(-' + swipe_count_rev * reviews_wrapper.offsetWidth + 'px)';
    deselectAll(slider_btns);
    slider_btns.children[swipe_count_rev].classList.add('slider__btn--active');
  }
}
function rightSwipeRev(){
  if (swipe_count_rev > 0) {
    swipe_count_rev--;
    slider_list.style.transform = 'translateX(-' + swipe_count_rev * reviews_wrapper.offsetWidth + 'px)';
    deselectAll(slider_btns);
    slider_btns.children[swipe_count_rev].classList.add('slider__btn--active');
  }
}

/**десктоп**/
var slide_count = 0;

rev_next.onclick = function() {
  if (slide_count < 2) {
    slide_count++;
    slider_list.style.transform = 'translateX(-' + slide_count * reviews_wrapper.offsetWidth + 'px)';
  }
}

rev_prev.onclick = function() {
  if (slide_count > 0) {
    slide_count--;
    slider_list.style.transform = 'translateX(-' + slide_count * reviews_wrapper.offsetWidth + 'px)';
  }
}

/*******Слайдер прайс-листа*********/

var price_btns = document.getElementsByClassName("price__toggles")[0];
var price_list = document.getElementsByClassName("price__list")[0];
var price_wrapper = document.getElementsByClassName("price__wrapper")[0];

price_btns.onclick = function(event) {
  var target = event.target;
  switch(target.dataset.slide) {
    case '1':
      price_list.style.transform = 'translateX(0)';
      deselectAll(this);
      target.classList.add('slider__btn--active');
      break;
    case '2':
      price_list.style.transform = 'translateX(-' + 1 * 30.9 + '%)';
      deselectAll(this);
      target.classList.add('slider__btn--active');
      break;
    case '3':
      price_list.style.transform = 'translateX(-' + 2 * 30.9 + '%)';
      deselectAll(this);
      target.classList.add('slider__btn--active');
      break;
  }
}

$(".price__list").swipe( {
  swipeLeft: leftSwipePrice,
  swipeRight: rightSwipePrice,
  threshold: 0
});
var swipe_count_price = 0;
function leftSwipePrice(){
  if (swipe_count_price < 2) {
    swipe_count_price++;
    price_list.style.transform = 'translateX(-' + swipe_count_price * 30.9 + '%)';
    deselectAll(price_btns);
    price_btns.children[swipe_count_price].classList.add('slider__btn--active');
  }
}
function rightSwipePrice(){
  if (swipe_count_price > 0) {
    swipe_count_price--;
    price_list.style.transform = 'translateX(-' + swipe_count_price * 30.9 + '%)';
    deselectAll(price_btns);
    price_btns.children[swipe_count_price].classList.add('slider__btn--active');
  }
}

/*******Карта в подвале*********/

if(document.getElementById('YMapsID')) {
  ymaps.ready(init);
  var myMap, myPlacemar;

  function init() {

    myMap = new ymaps.Map("YMapsID", {
      center: [59.936280, 30.321076],
      zoom: 16,
      controls: [] //убираем все кнопки управления
    });

    myMap.behaviors.disable('scrollZoom'); //отключение зума скролом колесика
    //myMap.behaviors.disable('drag');

    myMap.controls.add('zoomControl', {
      float: 'none'
    });
    myMap.controls.add('fullscreenControl', {
      float: 'right'
    });

    myMap.controls.add('typeSelector', {
      float: 'left',
      // Переключатель слоев карты – второй слева.
    });
    myMap.controls.get('typeSelector').options.set('size', 'small');//принудительно выбран маленькой мконки

    myPlacemark = new ymaps.Placemark([59.936280, 30.321076], {
      hintContent: 'PINK',
      balloonContent: '191186, Санкт-Петербург, Невский пр., д.20'
    }, {
      iconLayout: 'default#image', //изображение без доп текста
      iconImageHref: 'img/icon-map-marker.svg',
      iconImageSize: [36, 36],
      iconImageOffset: [-10, -10] //смещение картинки
    });

    myMap.geoObjects.add(myPlacemark);
  }
}

/*******Открытии и закрытие попапов*******/

var pop_sucs = document.getElementById('popup_success');
var pop_err = document.getElementById('popup_error');
var form_contest= document.getElementsByClassName("questionnaire__form")[0];
var first_name = document.getElementById('first_name');
var second_name = document.getElementById('surname');
var email = document.getElementById('mail');
var storage_name = localStorage.getItem('first_name');
var storage_second_name = localStorage.getItem('second_name');
var storage_email = localStorage.getItem('email');

if (storage_name) {
  first_name.value = storage_name;
  //console.log('first_name ' + storage_name);
}

if (storage_second_name) {
  second_name.value = storage_second_name;
  //console.log('second_name ' + storage_second_name);
}

if (storage_email) {
  email.value = storage_email;
  //console.log('email ' + storage_email);
}

function showPopup(popup, form_contest) {
  popup.classList.remove('popup--close');
  popup.classList.add('popup--open');

  var btn_close= popup.getElementsByClassName("popup__btn")[0];

  btn_close.onclick = function() {
    if (popup.classList.contains('popup--success')) {
      form_contest.submit();
    }
    closePopup(popup);
  }

  document.onkeydown = function (event) {
    if (event.keyCode === 27) { // escape
      closePopup(popup);
    }
  };
}

function closePopup(popup) {
  popup.classList.remove('popup--open');
  popup.classList.add('popup--close');
}

form_contest.addEventListener('submit', function (event) {
  if (first_name.value == '' || second_name.value == '' ||email.value == '') {
    showPopup(pop_err);
    //console.log('error');
    event.preventDefault();
  }
  else {
    showPopup(pop_sucs, form_contest);
    //console.log('suc');
    localStorage.setItem('first_name', first_name.value);
    localStorage.setItem('second_name', second_name.value);
    localStorage.setItem('email', email.value);
    event.preventDefault();
  }
});
