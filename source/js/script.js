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

/*******Переключение преимуществ в планшете*********/

var features_list = document.getElementsByClassName('features__list')[0];

function deselectAllFilter(items) {
  for (var i = 0; i < items.children.length; i++) {
    items.children[i].classList.remove('features__item--active');
  }
}

if (features_list) {
  features_list.onclick = function(event) {
    var target = event.target;
    console.log(target.tagName);

    if (target.closest('.features__item')) {
      deselectAllFilter(this);
      target.closest('.features__item').classList.add('features__item--active');
    }
  }
}


/*******Слайдер отзывов*********/

var slider_btns = document.getElementsByClassName('reviews__toggles')[0];
var slider_list = document.getElementsByClassName('slider__list')[0];
var reviews_wrapper = document.getElementsByClassName('reviews__wrapper')[0];
var rev_prev = document.getElementsByClassName('reviews__btn--prev')[0];
var rev_next = document.getElementsByClassName('reviews__btn--next')[0];

function deselectAll(items) {
  for (var i = 0; i < items.children.length; i++) {
    items.children[i].classList.remove('slider__btn--active');
  }
}

if (slider_btns) {
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
}

if (slider_list) {
  $('.slider__list').swipe( {
    swipeLeft: leftSwipeRev,
    swipeRight: rightSwipeRev,
    threshold: 0
  });
}
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

if(rev_next) {
  rev_next.onclick = function() {
    if (slide_count < 2) {
      slide_count++;
      slider_list.style.transform = 'translateX(-' + slide_count * reviews_wrapper.offsetWidth + 'px)';
    }
  }
}

if(rev_prev) {
  rev_prev.onclick = function() {
    if (slide_count > 0) {
      slide_count--;
      slider_list.style.transform = 'translateX(-' + slide_count * reviews_wrapper.offsetWidth + 'px)';
    }
  }
}


/*******Слайдер прайс-листа*********/

var price_btns = document.getElementsByClassName("price__toggles")[0];
var price_list = document.getElementsByClassName("price__list")[0];
var price_wrapper = document.getElementsByClassName("price__wrapper")[0];

if(price_btns) {
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
}

if (price_list) {
  $(".price__list").swipe( {
    swipeLeft: leftSwipePrice,
    swipeRight: rightSwipePrice,
    threshold: 0
  });
}

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




/*******Фото-редактор*******/

var edit_img_box = document.getElementsByClassName('photo-editor__picture')[0];
var edit_img = document.getElementById('editor_img');
var sliderCrop = document.getElementById('crop');
var sliderSaturate = document.getElementById('saturate');
var sliderBright = document.getElementById('bright');
var bright, satur;
var transform_crop = 1;
var crop_change = false;

if (edit_img) {
  var crop_slide = new Slider({
    elem: sliderCrop,
    filter: 'crop',
    max: 500
  });

  var saturate_slide = new Slider({
    elem: sliderSaturate,
    filter: 'saturate',
    max: 200
  });

  var bright_slide = new Slider({
    elem: sliderBright,
    filter: 'bright',
    max: 200
  });

  document.addEventListener('crop', function(event) {
    Crop(edit_img, event.detail.pos);
    if (event.detail.pos > 0) {
      edit_img.addEventListener('mousedown', dragImage);
      edit_img.addEventListener('touchstart', dragImage);
    } else {
      edit_img.removeEventListener('mousedown', dragImage);
      edit_img.removeEventListener('touchstart', dragImage);
    }
    console.log('filt: ' + event.detail.filt_type + ' slide: ' + event.detail.pos);
  });

  document.addEventListener('bright', function(event) {
    Bright(edit_img, event.detail.pos);
    //bright = event.detail.pos;
    //Filter(edit_img, bright, satur);
    console.log('filt: ' + event.detail.filt_type + ' slide: ' + event.detail.pos);
  });

  document.addEventListener('saturate', function(event) {
    Saturate(edit_img, event.detail.pos);
    //satur = event.detail.pos;
    //Filter(edit_img, bright, satur);
    console.log('filt: ' + event.detail.filt_type + ' slide: ' + event.detail.pos);
  });

  function Filter(edit_img, bright, satur) {
    bright = bright;
    satur = satur;
    edit_img.style.filter = 'brightness(' + bright + '%)' + ' saturate(' + satur + '%)';
  }

  function Bright(edit_img, data) {
    edit_img.style.filter = 'brightness(' + data + '%)';
    console.log('bright: ' + data + '%');
  }

  function Saturate(edit_img, data) {
    edit_img.style.filter = 'saturate(' + data + '%)';
    console.log('saturate: ' + data + '%');
  }

  function Crop(edit_img, data) {
    data = (data + 100) / 100;
    edit_img.style.transform = 'scale(' + data + ') ' + 'translate(' + translateX + 'px,' + translateY + 'px)';
    //edit_img.style.transform = 'scale(' + data + ')';
    transform_crop = data;
    console.log('crop ' + data);
  }

  function deselectAllFilter(items) {
    for (var i = 0; i < items.children.length; i++) {
      items.children[i].classList.remove('photo-editor__control--active');
    }
  }

  var filter_control_list = document.getElementsByClassName('photo-editor__controls-list')[0];

  filter_control_list.onclick = function(event) {
    var target = event.target;
    console.log(target.tagName);
    if (target.closest('.photo-editor__btn')) {
      deselectAllFilter(this);
      target.closest('.photo-editor__control').classList.add('photo-editor__control--active');
    }
    if (target.closest('.photo-editor__btn--crop')) {
      edit_img.addEventListener('mousedown', dragImage);
      edit_img.addEventListener('touchstart', dragImage);
    } else {
      edit_img.removeEventListener('mousedown', dragImage);
      edit_img.removeEventListener('touchstart', dragImage);
    }
  }

  var btn_cancel = document.getElementById('btn_cancel');
  btn_cancel.onclick = function() {
    crop_slide.setValue(0);
    saturate_slide.setValue(100);
    bright_slide.setValue(100);

    edit_img.style.transform = 'translate(0, 0)';
    translateX = 0;
    translateY = 0;
  }

  //полифилл для включения CustomEvent в IE9+
  try {
    new CustomEvent("IE has CustomEvent, but doesn't support constructor");
  } catch (e) {
    window.CustomEvent = function (event, params) {
      var evt;
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };
    CustomEvent.prototype = Object.create(window.Event.prototype);
  }

  function Slider(options) {
    var elem = options.elem;
    var thumbElem = elem.querySelector('.photo-editor__thumb');

    var max = options.max || 100;
    var sliderCoords, thumbCoords, shiftX, pixelsPerValue;

    elem.ondragstart = function() {
      return false;
    };

    elem.ontouchstart = elem.onmousedown = function(event) {
      console.log(event.target.className);
      if (event.target.classList.contains('photo-editor__thumb')) {
        var clientX = event.clientX || event.touches[0].clientX;
        var clientY = event.clientY || event.touches[0].clientY;
        pixelsPerValue = (elem.offsetWidth - thumbElem.offsetWidth) / max;
        console.log('pixelsPerValue ' + pixelsPerValue);
        startDrag(clientX, clientY);
        return false;
      }
    }

    function startDrag(startClientX, startClientY) {
      thumbCoords = thumbElem.getBoundingClientRect();
      sliderCoords = elem.getBoundingClientRect();

      shiftX = startClientX - thumbCoords.left;

      document.addEventListener('mousemove', onDocumentMouseMove);
      document.addEventListener('mouseup', onDocumentMouseUp);

      document.addEventListener('touchmove', onDocumentMouseMove);
      document.addEventListener('touchend', onDocumentMouseUp);
    }

    function moveTo(clientX) {
      var newLeft = clientX - shiftX - sliderCoords.left;

      if (newLeft < 0) {
        newLeft = 0;
      }

      var rightEdge = elem.offsetWidth - thumbElem.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      //thumbElem.style.left = newLeft + 'px';  //версия в пикселях
      thumbElem.style.left = (newLeft / elem.offsetWidth) * 100 + '%';  //версия в процентах
      setEvent(options.filter, newLeft);
    }

    function setEvent(events, data) {
      elem.dispatchEvent(new CustomEvent(events, {
        bubbles: true,
        detail: { pos: positionToValue(data), filt_type: events }
      }));
    }

    function positionToValue(left) {
      return Math.round(left / pixelsPerValue);
    }

    function valueToPosition(value) {
      return pixelsPerValue * value;
    }

    function onDocumentMouseMove(e) {
      var clientX = e.clientX || e.touches[0].clientX;
      moveTo(clientX);
    }

    function onDocumentMouseUp() {
      endDrag();
    }

    function endDrag() {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      document.removeEventListener('mouseup', onDocumentMouseUp);

      document.removeEventListener('touchmove', onDocumentMouseMove);
      document.removeEventListener('touchend', onDocumentMouseUp);
    }

    function setValue(value) {
      var pos = valueToPosition(value);
      //thumbElem.style.left = pos + 'px';  //версия в пикселях
      thumbElem.style.left = (pos / elem.offsetWidth) * 100 + '%';  //версия в процентах
      setEvent(options.filter, pos);
    }

    this.setValue = setValue;
  }

  var translateX = 0; //итоговое смещение фотографии по X
  var translateY = 0; //итоговое смещение фотографии по Y

  /**функция перемещения фотографии**/
  function dragImage(event) {

    //var imgCoords = getCoords(edit_img);
    //var imgBoxCoords = getCoords(edit_img_box);
    //var imgCoords = edit_img.getBoundingClientRect();
    //var imgBoxCoords = edit_img_box.getBoundingClientRect();

    var clientX_start = event.clientX || event.touches[0].clientX;  //координата X касания фотографии
    var clientY_start = event.clientY || event.touches[0].clientY;  //координата Y касания фотографии

    //var shiftX = clientX - imgCoords.left;
    //var shiftY = clientY - imgCoords.top;
    var newLeftImg, newTopImg;

    document.ontouchmove = document.onmousemove = function(event) {
      var clientX_end = event.clientX || event.touches[0].clientX;  //координата X нажатой мыши/пальца фотографии
      var clientY_end = event.clientY || event.touches[0].clientY;  //координата Y нажатой мыши/пальца фотографии

      newLeftImg = translateX + clientX_end - clientX_start;  //смещение по X относительно начального касания фотографии(translateX чтобы учесть предыдущий сдвиг фотографии)
      newTopImg = translateY + clientY_end - clientY_start; //смещение по Y относительно начального касания фотографии(translateY чтобы учесть предыдущий сдвиг фотографии)
      //var newLeft = clientX - shiftX - imgBoxCoords.left;
      //var newTop = clientY - shiftY - imgBoxCoords.top;

      edit_img.style.transform = 'scale(' + transform_crop + ') ' + 'translate(' + newLeftImg + 'px,' + newTopImg + 'px)';
      //edit_img.style.transform = 'translate(' + newLeftImg + 'px,' + newTopImg + 'px)';
    }

    document.ontouchend = document.onmouseup = function() {
      translateX = newLeftImg;  //для сохранения смещения фотографии, чтобы след-ее смещение было от этой координаты
      translateY = newTopImg; //для сохранения смещения фотографии, чтобы след-ее смещение было от этой координаты
      document.onmousemove = document.onmouseup = null;
      document.ontouchmove = document.ontouchend = null;
    };

    //return false;
    event.preventDefault();
  };

  edit_img.ondragstart = function() {
    return false;
  };

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
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

if (form_contest) {
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
}
