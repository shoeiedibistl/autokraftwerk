document.addEventListener("DOMContentLoaded", () => {
  // const mapPlacemark = document.querySelector("map-placemark");
  // console.log(mapPlacemark);

  var myMap;

  // Дождёмся загрузки API и готовности DOM.
  ymaps.ready(init);

  console.log("ymap");

  function init() {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map(
      "map",
      {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [51.677953, 39.131498], // Москва
        zoom: 13,
        controls: ["smallMapDefaultSet"],
      },
      {
        searchControlProvider: "yandex#search",
      },

      (myPlacemark = new ymaps.Placemark(
        [51.677953, 39.131498],
        {
          hintContent: "Собственный значок метки",
          balloonContent: "Это красивая метка",
          balloonContentBody:
            '<img src="img/enter.jpg" height="300rem" width="400rem"> <br/> ',
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "img/ymap-icon.png",
          // Размеры метки.
          iconImageSize: [80, 80],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-40, -80],
        }
      ))
    );
    myMap.behaviors.disable("scrollZoom");
    myMap.geoObjects.add(myPlacemark);
  }
});
