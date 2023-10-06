document.addEventListener("DOMContentLoaded", () => {

        // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init() {
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [55.75846806898367,37.60108849999989],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 15,
                controls: ['geolocationControl', 'zoomControl']
            },
            { 
                suppressMapOpenBlock: true,
                geolocationControlSize: "large",
                geolocationControlPosition:  { top: "200px", right: "20px" },
                geolocationControlFloat: 'none',
                zoomControlSize: "small",
                zoomControlFloat: "none",
                zoomControlPosition: { top: "120px", right: "20px" }
            });


            // // Создание геообъекта с типом точка (метка).
            // var myGeoObject = new ymaps.GeoObject({
            //     geometry: {
            //         type: "Point", // тип геометрии - точка
            //         coordinates: [48.87093969391086, 2.3569196200599607] // координаты точки
            //     }
            // });

            var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'icon-map.svg',
                iconImageSize: [20, 20],
                iconImageOffset: [-3, -42]
            });


            myMap.behaviors.disable('scrollZoom');

            // Размещение геообъекта на карте.
            // myMap.geoObjects.add(myGeoObject);
            myMap.geoObjects.add(myPlacemark);



        }
    })