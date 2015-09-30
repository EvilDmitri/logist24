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
        TRUCKS : 'Vaba transport',
        LastLoads: 'Viimased kaubaruumi päringud',
        LastTrucks: 'Viimased transpordi päringud'
      },

      Statistics: {
        Header: 'Meie statistika',
        Users: 'registreerunud kasutajat',
        Loads: 'registreerunud kaubaruumi',
        Trucks: 'registreerunud transpordi'
      },

      Loads: {
        Header: 'Otsi oma transport või kaubaruumi ja sõida!',
        Trucks: 'Vaba transport',
        Loads: 'Kaubaruumid',
        Name:'Nimetus',
        Route: 'Marsruut',
        Info: 'Lisainfo'
      },

      Search: {
        Header: 'Otsi vaba transport või kaubaruumi, <br>helista klientile ja sõida mõni hetke pärast!',
        Trucks: 'Transpordi päring',
        Loads: 'Kaubaruumi päring',
        BtnForward: 'Edasi',
        BtnBack: '',
        BtnSearch: 'Otsi'
      },
      About: {
        Header: '<h3>Mis on Logista24?</h3><p>Logista24 eesmärk on viia kokku transporti vajava kauba omanik kauba vajava transpordi omanikuga.</p><br>'
        ,
        How:'<h4><strong>Kuidas Logista24 tegutseb?</strong></h4>' +
        '<ol>' +
        '<li>Kasutaja&nbsp;täidab&nbsp;' +
        '<a href="/new_route">transpordipäringu vormi</a>.<br>' +
        'Päringu saatja vajab kas transporditeenust või soovib leida oma autole koormat.</li>' +
        '<li>Logista24 salvestab päringu andmebaasil.</li>' +
        '<li>Päring nähtavaks kaardial ja nimekirjas.</li>' +
        '<li>Päringu saatja ja saaja saavad omavahel sõltumatult suhelda.</li>' +
        '</ol>',

        More: '<h3><strong>Mida täpsemalt pakume?</strong>' +
        '</h3>' +
        '<div style="width: 330px; float: left;">' +
        '<h4>Tarbijale:</h4>' +
        '<ol>' +
        '<li><span style="color: red;">Tasuta teenus</span> - meie süsteemi kasutamine ei maksa midagi.</li>' +
        '<li><span style="color: red;">Parim transpordihind</span> - saada transporditeenuse hinnapäring kõigile meie süsteemiga liitunud firmadele korraga.&nbsp;</li>' +
        '<li><span style="color: red;">Operatiivne tagasiside</span> - kõik hinnapäringud saadetakse portaali poolt laiali korraga.&nbsp;</li>' +
        '</ol>' +
        '<br>' +
        '<h5><strong>Võimalused:</strong>' +
        '</h5> <ul class="navilist">' +
        '<!--<li><a href="http://www.veokorraldaja.ee/saada-tasuta-hinnaparing?request_type=transport&amp;x=57&amp;y=13">Saada transporditeenuse hinnapäring</a></li>-->' +
        '<!--<li><a href="http://www.veokorraldaja.ee/?op=st_register">Registreeru meie süsteemi kasutajaks</a></li>-->' +
        '</ul>' +
        '</div>' +
        '<div style="width: 330px; float: right;">' +
        '<h4>Transpordifirmale:</h4>' +
        '<ol>' +
        '<li>Rohkem hinnapäringuid - <span style="color: rgb(255, 0, 0);">suurem müük</span></li>' +
        '<li>Saadavaite hinnapäringute filtreerimine - <span style="color: rgb(255, 0, 0);">vähem spämmi</span></li>' +
        '<li>Võimalus kuulutada vabast kaubaruumist - <span style="color: rgb(255, 0, 0);">rohkem tööd</span></li>' +
        '<li>Andmete avaldamine transpordifirmade baasis - <span style="color: rgb(255, 0, 0);">täiendav turundus</span></li>' +
        '</ol>' +
        '<br>' +
        '<h5><strong>Võimalused:</strong></h5> <ul class="navilist">' +
        '<!--<li><a href="http://www.veokorraldaja.ee/saada-tasuta-hinnaparing?request_type=load&amp;x=57&amp;y=13">Anna teada vabast kaubaruumist</a></li>-->' +
        '<!--<li><a href="http://www.veokorraldaja.ee/?op=st_register">Registreeru meie süsteemi kasutajaks ja avalda andmed infobaasis<br>     </a>-->' +
        '</li>' +
        '</ul>' +
        '</div>'
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
        TRUCKS : 'Свободный транспорт',
        LastLoads: 'Последние запросы транспорта',
        LastTrucks: 'Последние предложения транспорта'
      },

      Statistics: {
        Header: 'Наша статистика',
        Users: 'пользователей',
        Loads: 'товаров',
        Trucks: 'транспорта'

      },

      Loads: {
        Header: 'Найди себе транспорт или товар и в путь!',
        Trucks: 'Свободный транспорт',
        Loads: 'Грузы',
        Name:'Название',
        Route: 'Маршрут',
        Info: 'Информация'
      },

      Search: {
        Header: 'Найди транспорт или товар, звони клиенту и уже через несколько мгновений можешь ехать',
        Trucks: 'Поиск транспорта',
        Loads: 'Поиск товара',
        BtnForward: 'Далее',
        BtnBack: 'Назад',
        BtnSearch: 'Искать'
      },

      About: {
        Header: '<h3>Что такое Logista24?</h3>' +
                '<p>Цель Logista24 - это соединить владельцев транспорта и людей, которым требуется транспорт.</p><br>',
        How:'<h4><strong>Как Logista24 работает?</strong></h4>' +
            '<ol>' +
            '<li>Пользователь заполняет&nbsp;' +
            '<a href="/new_route">форму запроса</a>.<br>' +
            'В запросе указывается требование груза или транспорта.</li>' +
            '<li>Logista24 сохраняет запрос в базе данных.</li>' +
            '<li>Запрос виден на карте и в списке.</li>' +
            '<li>Отправитель запроса и клент могут общаться.</li>' +
            '</ol>',

        More: '<h3><strong>Что точно предлагаем?</strong>' +
              '</h3>' +
              '<div style="width: 330px; float: left;">' +
                '<h4>Потребителю:</h4>' +
              '<ol>' +
              '<li><span style="color: red;">Бесплатная услуга</span> - использование нашей системы БЕСПЛАТНО.</li>' +
              '<li><span style="color: red;">Лучшая цена транспорта</span> - saada transporditeenuse hinnapäring kõigile meie süsteemiga liitunud firmadele korraga.&nbsp;</li>' +
              '<li><span style="color: red;">Опреативная обратная связь</span> - kõik hinnapäringud saadetakse portaali poolt laiali korraga.&nbsp;</li>' +
              '</ol>' +
              '<br>' +
              '<h5><strong>Возможности:</strong>' +
              '</h5> <ul class="navilist">' +
                '<!--<li><a href="http://www.veokorraldaja.ee/saada-tasuta-hinnaparing?request_type=transport&amp;x=57&amp;y=13">Saada transporditeenuse hinnapäring</a></li>-->' +
              '<!--<li><a href="http://www.veokorraldaja.ee/?op=st_register">Registreeru meie süsteemi kasutajaks</a></li>-->' +
              '</ul>' +
              '</div>' +
              '<div style="width: 330px; float: right;">' +
                '<h4>Транспортной фирме:</h4>' +
              '<ol>' +
              '<li>Rohkem hinnapäringuid - <span style="color: rgb(255, 0, 0);">suurem müük</span></li>' +
              '<li>Saadavaite hinnapäringute filtreerimine - <span style="color: rgb(255, 0, 0);">vähem spämmi</span></li>' +
              '<li>Võimalus kuulutada vabast kaubaruumist - <span style="color: rgb(255, 0, 0);">rohkem tööd</span></li>' +
              '<li>Andmete avaldamine transpordifirmade baasis - <span style="color: rgb(255, 0, 0);">täiendav turundus</span></li>' +
              '</ol>' +
              '<br>' +
              '<h5><strong>Возможности:</strong></h5> <ul class="navilist">' +
                '<!--<li><a href="http://www.veokorraldaja.ee/saada-tasuta-hinnaparing?request_type=load&amp;x=57&amp;y=13">Anna teada vabast kaubaruumist</a></li>-->' +
              '<!--<li><a href="http://www.veokorraldaja.ee/?op=st_register">Registreeru meie süsteemi kasutajaks ja avalda andmed infobaasis<br>     </a>-->' +
              '</li>' +
              '</ul>' +
              '</div>'
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

