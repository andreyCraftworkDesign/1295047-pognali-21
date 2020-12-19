let mainMenuToggle = document.querySelector('.page-header__toggle');
let pageHeader = document.querySelector('.page-header');

let priceModalButton = document.querySelector('.price__link');
let priceModal = document.querySelector('.business-price');
let modalCloseButton = document.querySelector('.modal__close');

let toggleCountries = document.querySelector('.toggle-countries');
let filterCountryClose = document.querySelector('.filter-country__button');
let filterCountry = document.querySelector('.filter-country');

let fieldsetAccordionToggles = document.querySelectorAll('.fieldset-accordion__toggle');
let fieldsetAccordions = document.querySelectorAll('.fieldset-accordion');

let likesButtons = document.querySelectorAll('.likes__button');

let selectCountryChoices = document.querySelectorAll('.select-country__choice');
let selectCountrySelect = document.querySelector('.select-country__choice--select');
let selectCountryName = document.querySelector('.select-country__name--select');
let selectCountryOptions = document.querySelectorAll('.select-country__option');
let selectFlag = document.querySelector('.flag--select');
let selectFlagTooltip = document.querySelector('.flag__tooltip--select');
let selectCountryDeleteButtons = document.querySelectorAll('.select-country__delete');


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

if (filterAbcLists) {
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
}

if (toggleCountries) {
  toggleCountries.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterCountry.classList.toggle('filter-country--active');
    toggleCountries.classList.toggle('toggle-countries--active')
    console.log('222222');
  });
}

if (fieldsetAccordionToggles) {
  for (let fieldsetAccordionToggle of fieldsetAccordionToggles) {
    fieldsetAccordionToggle.addEventListener('click', function(evt) {
      if(evt.target.classList.contains('fieldset-accordion__toggle')) {
        let array = Array.from(fieldsetAccordionToggles);
        let target = evt.target;
        let index = array.indexOf(target);

        array.forEach(function(item, i, arr) {
          if(i === index) {
            item.classList.toggle('fieldset-accordion__toggle--active');
            fieldsetAccordions[i].classList.toggle('fieldset-accordion--active')
          }
        });
      }
    });
  }
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

if (selectCountryOptions) {
  for (let selectCountryOption of selectCountryOptions) {
    selectCountryOption.addEventListener('click', function(evt) {
      selectCountryName.textContent = selectCountryOption.textContent;
      selectCountrySelect.classList.remove('select-country__choice--active');
      selectCountrySelect.classList.add('select-country__choice--yes');
      selectFlag.className = 'flag--select';
      selectFlag.classList.add('flag');
      if (selectCountryOption.textContent === 'Австралия') {
        selectFlag.classList.add('flag--australia');
        selectFlagTooltip.textContent = 'Австралия';
      } else if (selectCountryOption.textContent === 'Тайланд') {
        selectFlag.classList.add('flag--thailand');
        selectFlagTooltip.textContent = 'Тайланд';
      } else if (selectCountryOption.textContent === 'Тайланд') {
        selectFlag.classList.add('flag--thailand');
        selectFlagTooltip.textContent = 'Тайланд';
      } else if (selectCountryOption.textContent === 'Шри-Ланка') {
        selectFlag.classList.add('flag--sri-lanka');
        selectFlagTooltip.textContent = 'Шри-Ланка';
      } else if (selectCountryOption.textContent === 'Сейшелы') {
        selectFlag.classList.add('flag--seychelles');
        selectFlagTooltip.textContent = 'Сейшелы';
      } else if (selectCountryOption.textContent === 'Бельгия') {
        selectFlag.classList.add('flag--belgium');
        selectFlagTooltip.textContent = 'Бельгия';
      } else if (selectCountryOption.textContent === 'Чехия') {
        selectFlag.classList.add('flag--czech');
        selectFlagTooltip.textContent = 'Чехия';
      } else if (selectCountryOption.textContent === 'Босния и Герцеговина') {
        selectFlag.classList.add('flag--bosnia');
        selectFlagTooltip.textContent = 'Босния и Герцеговина';
      } else if (selectCountryOption.textContent === 'США') {
        selectFlag.classList.add('flag--usa');
        selectFlagTooltip.textContent = 'США';
      } else if (selectCountryOption.textContent === 'Великобритания') {
        selectFlag.classList.add('flag--britain');
        selectFlagTooltip.textContent = 'Великобритания';
      } else if (selectCountryOption.textContent === 'Германия') {
        selectFlag.classList.add('flag--germany');
        selectFlagTooltip.textContent = 'Германия';
      } else if (selectCountryOption.textContent === 'Доминика') {
        selectFlag.classList.add('flag--dominica');
        selectFlagTooltip.textContent = 'Доминика';
      } else if (selectCountryOption.textContent === 'Франция') {
        selectFlag.classList.add('flag--france');
        selectFlagTooltip.textContent = 'Франция';
      } else {
        selectFlag.classList.add('flag--no');
        selectFlagTooltip.textContent = 'Нет флага';
      }
    });
  }
}


if (selectCountryDeleteButtons[2]) {
  selectCountryDeleteButtons[2].addEventListener('click', function (evt) {
    evt.preventDefault();
    selectCountrySelect.classList.remove('select-country__choice--yes');
    selectFlag.className = 'flag--select';
    selectFlag.classList.add('flag');
    selectCountryName.textContent = 'Выберите страну'
  })
}

if (likesButtons) {
  for (let likesButton of likesButtons) {
    likesButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      likesButton.classList.toggle('likes__button--active')
    })
  }
}
