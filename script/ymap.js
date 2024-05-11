ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
      center: [51.677954, 39.131494],
      zoom: 14,
    }),
    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject(
      {
        // Описание геометрии.
        geometry: {
          type: "Point",
          coordinates: [51.677954, 39.131494],
        },
        // Свойства.
        properties: {
          // Контент метки.
          iconContent: "Метка",
          balloonContent: "Меня можно перемещать",
        },
      },
      {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: "twirl#redStretchyIcon",
        // Метку можно перемещать.
        draggable: true,
      }
    ),
    // Создаем метку с помощью вспомогательного класса.

    myPlacemark2 = new ymaps.Placemark(
      [51.677954, 39.131494],
      {
        // Свойства.
        hintContent: "Собственный значок метки",
      },
      {
        // Опции.
        // Своё изображение иконки метки.
        iconImageHref: "images/myIcon.gif",
        // Размеры метки.
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-3, -42],
      }
    );

  // Добавляем все метки на карту.
  myMap.geoObjects.add(myPlacemark2).add(myGeoObject);
}
