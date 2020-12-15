let toggleCountries = document.querySelector('.toggle-countries');
let filterCountryClose = document.querySelector('.filter-country__button');
let filterCountry = document.querySelector('.filter-country');

let fieldsetAccordionToggle = document.querySelector('.fieldset-accordion__toggle');
let fieldsetAccordion = document.querySelector('.fieldset-accordion');

let likesButtons = document.querySelectorAll('.likes__button');

let selectCountryChoices = document.querySelectorAll('.select-country__choice');
let mainMenuToggle = document.querySelector('.page-header__toggle');
let pageHeader = document.querySelector('.page-header');


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
    selectCountryChoice.addEventListener('click', function (evt) {
      evt.preventDefault();
      selectCountryChoice.classList.toggle('select-country__choice--active')
    })
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
