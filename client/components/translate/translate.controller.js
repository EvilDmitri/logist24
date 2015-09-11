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
      ALL: 'Kõik päringud',
      TRUCKS: 'Veod',
      NEW: 'Saada päring',
      LOAD: 'Koormus',
      NEW_TRUCK: 'Saada päring',
      NEW_TRUCK_TEXT: 'Saada oma päring ja sai nähtav kaardil.',
      LOOK: 'Vaata',
      BUTTON_TEXT_EN: 'eng',
      BUTTON_TEXT_RU: 'rus',
      BUTTON_TEXT_EE: 'est',
      MY_TRUCKS: 'See on Teie päringud'
    })
  .translations('ru', {
      ALL: 'Все',
      TRUCKS: 'Перевозчики',
      NEW: 'Послать запрос',
      LOAD: 'Груз',
      NEW_TRUCK: 'Начни новый маршрут',
      NEW_TRUCK_TEXT: 'Начни новый маршрут и стань видимым на карте',
      LOOK: 'Смотри',
      BUTTON_TEXT_EN: 'eng',
      BUTTON_TEXT_RU: 'rus',
      BUTTON_TEXT_EE: 'est',
      'MY_TRUCKS': 'Это Ваши маршруты'
    });
  $translateProvider.preferredLanguage('ee');

  //$translateProvider.determinePreferredLanguage(function () {
  //  // define a function to determine the language
  //  // and return a language key
  //});

});

