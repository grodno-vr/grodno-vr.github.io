const zags = {
    name: 'zags',
    sound: 'audio/vilenskaja.m4a',
    style: {},
    portals: [
        {
            name: 'vilenskaja',
            transformPortal: [{translate: [-1, 0, -12]}]
        },
        {
            name: 'lenina',
            transformPortal: [{translate: [-1, 0, 13]}]
        },
        {
            name: 'ozheshko',
            transformPortal: [{translate: [-10, 0, 8]}]
        }
    ],
    labels: [
        {
            offset: -120,
            viewStyle: {
                transform: [{translate: [-8, 3, 4]}, { scale : 3 }, { rotateY: 120 }]
            },
            text: 'Начало ул. Элизы Ожешко',
            description: `Начало улицы Элизы Ожешко, улица связывает центр Гродно с железнодорожным вокзалом.\n
                          Слева по улице ранее находился отель "Швейцария" (он же отель "Нью-Йорк"), именно его можно разглядеть на старых фото. На его месте в 1930-х построен банк в стиле конструктивизма.\n
                          Справа по улице - дворец княжеского рода Масальских и дом вице-губернатора Максимовича. Дом был построен в 1803 году в стиле класицизма. Главный фасад здания украшен 4-колонным портиком и дворическим ордером. За дворцом находился небольшой пейзажный парк с каменной беседкой-ротондой в стиле классицизма. Во время войны России и Франции 1812 года здесь размещался штаб французского маршала Жерома Бонапарта. Теперь в здании размещается ресторан.`,
            infoPosition: 100, // pixels
            galleryStyle: {
                transform: [{translate: [-11, 4.5, 4]}, { rotateY: 120 }]
            },
            oldImages: [
                {
                    source: 'places/zags/old/ozheshkoXIX.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/ozheshkoXIX-1.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/ozheshkoXIX-2.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/ozheshkoXIX-3.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/ozheshkoXIX-4.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/ozheshkoXIX-5.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        },
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [0, 2, -4]}, { scale : 1.5 }]
            },
            text: 'ул. Доминиканская (Советская)',
            description: `Советская улица (раньше Виленская, Соборная, Доминиканская) - одна из самых старых улиц в историческом центре города Гродно, центральная пешеходная улица города (с 1964 г). В 1930-е улицу выложили брусчаткой. Протяженность около 500 метров от Площади Советской до улицы Элизы Ожешки. На улице находятся многочисленные административные, торговые, культурные и развлекательные заведения.\n 
                          Улица имеет большую историческую ценность, и, за некоторым исключением, сохранилась почти вся застройка XIX - начало XX века.\n
                          На улице жили и работали многие участники восстаний 1830-1831 и 1863-1864 годов.\n
                          \n\n Текс wikipedia.org`,
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-5, 5, -8]}, { rotateY: 10 }]
            },
            oldImages: [
                {
                    source: 'places/zags/old/dominikXIX.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/dominikXIX-1.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/dominikXIX-2.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/dominikXX.png',
                    year: 'XX в. Фото kinogrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        }
    ]
};

export default zags;