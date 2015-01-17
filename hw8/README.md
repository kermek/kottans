Практика по jQuery (3/12/14) aka MATCH-DOT-KOM KILLAH!

Что мы имеем:
результаты труда нашего любимого верстальщика-коллеги Кривожоп Криворуков Колесович (К.К.К.):
https://googledrive.com/host/0B65dEGRmB3ViSXVoT3g0SDZjWmM/index.html
исходники:
https://drive.google.com/#folders/0B65dEGRmB3ViSXVoT3g0SDZjWmM

результаты труда нашего любимого коллеги бекэндщика Жоры Ж(р)укова:
Апи по адресу http://api.sudodoki.name:8888/
Доступные действия:
  POST /signup -> возможность зарегестрировать нового пользователя. В теле запроса  ожидается поля login, password, passwordConfirmation

    Типа такого:
      $.post(API_URL + '/signup', {data: {login: ..., password: ..., passwordConfirmation: ...}})
    В ответ получаем или
      1) статус ошибки и или текстовую строку, или массив объектов ошибок валидации
      2) 200, {status: 'New and shiny account for you!', token: Ваш_секретный токен, который используется при запросах к /user/:id }

  POST /login -> возможность авторизировать пользователя. В теле запроса ожидаются поля login, password

    В ответ получаем:
      1) статус ошибки и или текстовую строку, или массив объектов ошибок валидации
      2) 200, {status: 'good to go', token: Ваш_секретный токен, который используется при запросах к /user/:id }

  GET /users -> предоставляет список всех пользователей. Предполагается, что их и будем   выводить в секции #list

  GET /user/:id -> предоставляет данные по пользователю с id == :id. Предполагается , что именно их и будем выводить в секции #show-full. Для получения ответа требуется вставить хедер SECRET-TOKEN при запросе со значением токена, полученого при авторизации.

Чтобы хотелось видеть:
  0. Правленую верстку, если чувствуете в себе силы.
  1. Секцию #list, в которой данные берутся из АПИ при загрузке страницы.
    PROTIP: можно обойтись $(elem).html('<div class="' + data.someAttr +'">') и дальше по тексту, можно изначально формировать строки и их вставлять в хтмл. Можно юзать
    http://berzniz.com/post/68001735765/javascript-hacks-for-hipsters (Hipster Hack #9 - Ultra Light Templates) а можно сделать как взрослые дядьки для сложных приложений и заюзать какую-нибудь либу для шаблонов:
    http://garann.github.io/template-chooser/
    Если коротко, то работает это так: единожды написав шаблон, который браузер/клиент будет кешировать, и подключив эту либу, мы получаем возможность вызвать метод этой либы передав на вход шаблон и объект, из которого вставляться будут аттрибуты, и получить на выходе html/txt. Если не знаете, что взять, возьмите http://handlebarsjs.com/
  2. Возможность логинится-сайнапится по аяксу, с выводом ошибок (если онные будут) или сохранением токена при успешной авторизации
  3. Возможность просматривать детальную информацию по пользователю: после нажатия по ссылке в #list обновляется содержимое #show-full с данными нашего пользователя.

  Бонусные очки (не обязательно для выполнения):
  4. Индикация запроса с помощью аякс спиннера (присутствует гифка в #show-full)
  5. Показ только одной секции и переход между ними по клику в навигационном баре/ссылкам
  6. Рабочая адресная строка: кнопки вперед-назад переходят в предыдущее-следующее состояния (реакция на событие popstate https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history)
  7. Whatever your heart tells you...
  ????
  8. Profit.


**Готовая страница должна быть задеплоена на github-pages и доступна из интернета.**