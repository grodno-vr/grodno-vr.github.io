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
            name: 'pochta',
            transformPortal: [{translate: [-10, 0, 8]}]
        }
    ],
    labels: [
        {
            offset: -120,
            viewStyle: {
                transform: [{translate: [-8, 3, 4]}, { scale : 3 }, { rotateY: 120 }]
            },
            text: {
                ru: 'Начало ул. Элизы Ожешко',
                en: 'Beginning of Eliza Ozheshko Street'
            },
            description: {
                ru: `Начало улицы Элизы Ожешко, улица связывает центр Гродно с железнодорожным вокзалом.\n
                          Слева по улице ранее находился отель "Швейцария" (он же отель "Нью-Йорк"), именно его можно разглядеть на старых фото. На его месте в 1930-х построен банк в стиле конструктивизма.\n
                          Справа по улице - дворец княжеского рода Масальских и дом вице-губернатора Максимовича. Дом был построен в 1803 году в стиле класицизма. Главный фасад здания украшен 4-колонным портиком и дворическим ордером. За дворцом находился небольшой пейзажный парк с каменной беседкой-ротондой в стиле классицизма. Во время войны России и Франции 1812 года здесь размещался штаб французского маршала Жерома Бонапарта. Теперь в здании размещается ресторан.`,
                en: `The beginning of Elisa Ozheshko street, which connects the center of Grodno with the railway station. \n
                    On the left used to be located the hotel "Switzerland" (or hotel "New York"), which can be seen in the old photos. On its place in the 1930's a  bank in constructivism style was built. \n
                    On the right stands the palace of the Masalski princely family  and vice-governor Maksimovich’s house. The house was built in 1803 in classicism style. The main facade of the building is decorated with a 4-column portico and a courtyard warrant. Behind the palace a small landscape park with a stone arbor-rotunda in classicism style was located. During the war between Russia and France in 1812 French Marshal Jerome Bonaparte’s headquarters were located here. Today the building houses a restaurant.`
            },
            infoPosition: 100, // pixels
            galleryStyle: {
                transform: [{translate: [-11, 4.5, 4]}, { rotateY: 120 }]
            },
            oldImages: [
                {
                    source: 'places/zags/old/ozheshkoXIX-XX.png',
                    year: {
                        ru: 'XIX-XX вв.',
                        en: '19-20th c.'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/ozheshkoXIX.png',
                    year: {
                        ru: 'XIX-XX вв. Фото old.grodno.net',
                        en: '19-20th c. Photo old.grodno.net'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/ozheshkoXIX-1.png',
                    year: {
                        ru: 'XIX-XX вв. Фото old.grodno.net',
                        en: '19-20th c. Photo old.grodno.net'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/ozheshkoXIX-2.png',
                    year: {
                        ru: 'XIX-XX вв. Фото old.grodno.net',
                        en: '19-20th c. Photo old.grodno.net'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/ozheshkoXIX-3.png',
                    year: {
                        ru: 'XIX-XX вв. Фото old.grodno.net',
                        en: '19-20th c. Photo old.grodno.net'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/ozheshkoXIX-4.png',
                    year: {
                        ru: 'XIX-XX вв. Фото old.grodno.net',
                        en: '19-20th c. Photo old.grodno.net'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/ozheshkoXIX-5.png',
                    year: {
                        ru: 'XIX-XX вв. Фото old.grodno.net',
                        en: '19-20th c. Photo old.grodno.net'
                    },
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
            text: {
                ru: 'ул. Доминиканская (Советская)',
                en: 'Dominican (Soviet) Street'
            },
            description: {
                ru: `Советская улица (раньше Виленская, Соборная, Доминиканская) - одна из самых старых улиц в историческом центре города Гродно, центральная пешеходная улица города (с 1964 г). В 1930-е улицу выложили брусчаткой. Протяженность около 500 метров от Площади Советской до улицы Элизы Ожешки. На улице находятся многочисленные административные, торговые, культурные и развлекательные заведения.\n 
                          Улица имеет большую историческую ценность, и, за некоторым исключением, сохранилась почти вся застройка XIX - начало XX века.\n
                          На улице жили и работали многие участники восстаний 1830-1831 и 1863-1864 годов.\n
                          \n\n Текс wikipedia.org`,
                en: `Sovetskaya street (formerly Vilenskaya, Sobornaya, Dominican) is one of the oldest streets in the historical center of Grodno and the central pedestrian street of the city (since 1964). In the 1930s the street was laid out with paving stones. Its length amounts to about 500 meters from Sovetskaya square to Eliza Ozheshko street. The street locates numerous administrative, commercial, cultural and entertainment venues. \n
                     The street has a great historical value and with some exceptions almost the whole construction of the 19th - beginning of the 20th century has been preserved. \n
                     The street located homes and workplaces of many participants of the uprisings of 1830-1831 and 1863-1864.`
            },
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-5, 5, -8]}, { rotateY: 10 }]
            },
            oldImages: [
                {
                    source: 'places/zags/old/dominikXIX.jpg',
                    year: {
                        ru: 'XIX в. Н.Орда',
                        en: '19th c. N.Orda'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/dominikXIX-XX.png',
                    year: {
                        ru: 'XIX-XX вв.',
                        en: '19-20th c.'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/dominikXIX.png',
                    year: {
                        ru: 'XIX-XX вв. Фото old.grodno.net',
                        en: '19-20th c. Photo old.grodno.net'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/dominikXIX-1.png',
                    year: {
                        ru: 'XIX-XX вв. Фото old.grodno.net',
                        en: '19-20th c. Photo old.grodno.net'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/dominikXIX-2.png',
                    year: {
                        ru: 'XIX-XX вв. Фото old.grodno.net',
                        en: '19-20th c. Photo old.grodno.net'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zags/old/dominikXX.png',
                    year: {
                        ru: 'XX в. Фото kinogrodno.by',
                        en: '20th c. Photo kinogrodno.by'
                    },
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