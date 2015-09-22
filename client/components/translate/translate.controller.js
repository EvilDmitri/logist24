'use strict';

var app = angular.module('logistaApp');

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    ALL: 'All',
    TRUCKS: 'Trucks',
    NEW: 'New',
    LOAD: 'Load',
    NEW_TRUCK: 'Start a new round',
    NEW_TRUCK_TEXT: 'Start your own round and be visible on the map',
    LOOK: 'See',
    BUTTON_TEXT_EN: 'eng',
    BUTTON_TEXT_RU: 'rus',
    BUTTON_TEXT_EE: 'est',
    'MY_TRUCKS': 'Here are Your trucks'
  })
    .translations('ee', {
      Saada: 'Saada päring',
      ALL: 'Kõik päringud',
      FIND: 'Otsi päring',
      NEW: 'Saada päring',
      LOAD: 'Koormus',
      NEW_TRUCK: 'Saada päring',
      NEW_TRUCK_TEXT: 'Saada oma päring ja sai nähtav kaardil.',
      LOOK: 'Vaata',
      BUTTON_TEXT_EN: 'eng',
      BUTTON_TEXT_RU: 'rus',
      BUTTON_TEXT_EE: 'est',
      MY_TRUCKS: 'See on Teie päringud',


      Main: {
        HOT: 'Kuumad pakkumised',
        LOADS : 'Vaba kauba',
        TRUCKS : 'Vaba transport'
      },

      Statistics: {
        Header: 'Meie statistika'
      },

      Modal_text_start : 'Kui soovite '
    })
  .translations('ru', {
      Logistik: 'Логистик',
      Meist: 'О нас',
      Saada: 'Послать запрос',
      ALL: 'Все запросы',
      FIND: 'Поиск запроса',
      NEW: 'Послать запрос',
      //LOAD: 'Груз',
      Sisse: 'Вход',
      Registeeru: 'Регистрация',

      Main: {
        HOT: 'Горячие предложения',
        LOADS : 'Товары',
        TRUCKS : 'Свободный транспорт'
      },

      Statistics: {
        Header: 'Наша статистика'
      },

      NEW_TRUCK: 'Послать запрос',
      NEW_TRUCK_TEXT: 'Пошли новый запрос на товар или транспорт и стань видимым на карте',
      LOOK: 'Смотри',
      BUTTON_TEXT_EN: 'eng',
      BUTTON_TEXT_RU: 'rus',
      BUTTON_TEXT_EE: 'est',
      'MY_TRUCKS': 'Это Ваши маршруты',

      Modal_text_start : 'Kui soovite ',
      Modal_text_end : ' on vaja logi sisse.'


    });
  $translateProvider.preferredLanguage('ee');

  $translateProvider.useLocalStorage();

  //$translateProvider.determinePreferredLanguage(function () {
  //  // define a function to determine the language
  //  // and return a language key
  //});

});

