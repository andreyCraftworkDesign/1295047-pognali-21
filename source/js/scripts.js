let priceModalButton = document.querySelector('.price__link');
let priceModal = document.querySelector('.business-price');
let modalCloseButton = document.querySelector('.modal__close');

let toggleCountries = document.querySelector('.toggle-countries');
let filterCountryClose = document.querySelector('.filter-country__button');
let filterCountry = document.querySelector('.filter-country');

let fieldsetAccordionToggle = document.querySelector('.fieldset-accordion__toggle');
let fieldsetAccordion = document.querySelector('.fieldset-accordion');

let likesButtons = document.querySelectorAll('.likes__button');

let selectCountryChoices = document.querySelectorAll('.select-country__choice');
let mainMenuToggle = document.querySelector('.page-header__toggle');
let pageHeader = document.querySelector('.page-header');


let filterAbcButtons = document.querySelectorAll('.filter-abc__button');
let filterAbcLists = document.querySelectorAll('.filter-abc__list');

if (priceModalButton) {
  priceModalButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    priceModal.classList.add('modal--show');
  });
}

if (modalCloseButton) {
  modalCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    priceModal.classList.remove('modal--show');
  });
}

for (let filterAbcList of filterAbcLists) {
  filterAbcList.addEventListener('click', function(evt) {
    if(evt.target.classList.contains('filter-abc__button')) {
      let array = Array.from(filterAbcButtons);
      let target = evt.target;
      let index = array.indexOf(target);

      array.forEach(function(item, i, arr) {
        if(i === index) {
          item.classList.add('filter-abc__button--active');
        } else {
          item.classList.remove('filter-abc__button--active');
        }
      });
    }
  });
}

if (toggleCountries) {
  toggleCountries.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterCountry.classList.toggle('filter-country--active');
    console.log('222222');
  });
}


mainMenuToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  pageHeader.classList.toggle('page-header--active');
});

if (filterCountryClose) {
  filterCountryClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterCountry.classList.remove('filter-country--active');
  });
}

if (selectCountryChoices) {
  for (let selectCountryChoice of selectCountryChoices) {
    if (selectCountryChoice.classList.contains('select-country__choice--select')) {
      selectCountryChoice.addEventListener('click', function (evt) {
        evt.preventDefault();
        selectCountryChoice.classList.toggle('select-country__choice--active')
      })
    }
  }
}


if (likesButtons) {
  for (let likesButton of likesButtons) {
    likesButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      likesButton.classList.toggle('likes__button--active')
    })
  }
}
