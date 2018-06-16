const bridge = {
    name: 'bridge',
    style: {},
    portals: [
        {
            name: 'center',
            transformPortal: [{translate: [10, 0, 6]}]
        },
        {
            name: 'monastery',
            transformPortal: [{translate: [12, 0, -2]}]
        },
        {
            name: 'towers',
            transformPortal: [{translate: [-12, 1, -1]}]
        }
    ],
    labels: [
        {
            offset: 90,
            viewStyle: {
                transform: [{translate: [8, 2, 0]}, { scale : 2 }, { rotateY: -90 }]
            },
            text: 'Памятник Воинам-Освободителям',
            description: `Памятник воинам-освободителям (танк Т-34/85), расположенный на краю Советской площади. Установлен в память о воинах 2-го и 3-го Белорусских фронтов, участвовавших в освобождении города Гродно 16 июля 1944 года.\n
                          Установка памятника состоялась 23 февраля 1968 году на краю уже несуществующего сквера в центре города. Архитектором проекта выступил Г. Федосеенко. Танк Т-34 с номером «200» стоит на сложном постаменте. \n
                          Высота памятника в целом составляет 6 метров.\n
                          \n\n Текст grodno.in`,
            infoPosition: 3300,
            galleryStyle: {
                transform: [{translate: [5, 6, 0]}, { rotateY: -90 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/tank1.jpg',
                    year: '1980 г. Фото oldgrodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/tank.png',
                    year: '1975 г. Фото grodno.in',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/tank2.jpg',
                    year: '2008 г. Фото tut.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/tank3.jpg',
                    year: '1968 г. Фото tut.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                }
            ]
        },
        {
            offset: 45,
            viewStyle: {
                transform: [{translate: [7, 3, -6]}, { scale : 2.2 }, { rotateY: -45 }]
            },
            text: 'Областной Драматический Театр',
            description: `В 1947 г. постановлением Совета Министров БССР в Гродно создан областной драматический театр. \n
            Официальное открытие театра состоялось премьерным спектаклем «В одном городе» по пьесе А.Сафронова.\n
            \n\nТекст drama.grodno.by`,
            infoPosition: 2500,
            galleryStyle: {
                transform: [{translate: [3, 6, -6]}, { rotateY: -45 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/theater.jpg',
                    year: '1978 - 1984 гг. Фото drama.grodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater1.jpg',
                    year: '1978 - 1984 гг. Фото drama.grodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater2.jpg',
                    year: '1978 - 1984 гг. Фото drama.grodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater3.jpg',
                    year: '1978 - 1984 гг. Фото drama.grodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater4.jpg',
                    year: '1978 - 1984 гг. Фото drama.grodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                }
            ]
        },
        {
            offset: 40,
            viewStyle: {
                transform: [{translate: [7, 2, -7]}, { scale : 2 }, { rotateY: -30 }]
            },
            text: 'Костел и Монастырь Бернардинок',
            description: `Католический монастырь бернардинок (позже Свято-Борисоглебский монастырь 1853-58 гг.) ХVII–ХХ вв., ранее размещался на месте драматического театра.\n
                          Очень сильно пострадал после Второй Мировой Войны. Снесен в 60-е годы.\n
                          \n\n Текст vgr.by`,
            infoPosition: 2400,
            galleryStyle: {
                transform: [{translate: [2, 6, -8]}, { rotateY: -40 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/bernardineSisterXX.png',
                    year: 'XX в.',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/bernardineSisters1944.png',
                    year: '1944 г. Фото s13.ru',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/bernardineSisters1900.png',
                    year: '1900 г. Фото wikimedia.org',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/bernardineSisters1934.png',
                    year: '1934 г. Фото wikimedia.org',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/bernardineSisters1922.png',
                    year: '1922 г. Фото wikimedia.org',
                    style: {
                        width: 8,
                        height: 5.5
                    }
                },
                {
                    source: 'places/bridge/old/bernardineSisters1940.jpg',
                    year: '1940-е, Фото vgr.by',
                    style: {
                        width: 8,
                        height: 5.5
                    }
                }
            ]
        },
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [0, 1, -9]}, { scale : 2 }, { rotateY: 0 }]
            },
            text: 'Костел и Монастырь Кармелитов',
            description: `Костел и монастырь ордена босых кармелитов XVIII в. был разобран в 1903 г. при реконструкции комплекса под казармы гродненского крепостного батальона. Ныне это здание банка.`,
            infoPosition: 1880,
            galleryStyle: {
                transform: [{translate: [-4, 6, -8]}, { rotateY: 0 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/holyCrossXIX-XX.png',
                    year: 'XIX-XX вв.',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross.jpg',
                    year: 'XIX в. Фото radzima.org',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross1.png',
                    year: 'XIX в. Фото grodnonews.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross2.jpg',
                    year: 'XIX в. Фото radzima.org',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross3.jpg',
                    year: 'XVIII в. Фото radzima.org',
                    style: {
                        width: 7,
                        height: 5.5
                    }
                }
            ]
        },
        {
            offset: -45,
            viewStyle: {
                transform: [{translate: [-8, 5, -4]}, { scale : 2.5 }, { rotateY: 60 }]
            },
            text: 'Костёл Обретения Святого Креста',
            description: `Aрхитектурный комплекс костёла и монастыря бернардинцев. Церковь является старейшим действующим католическим храмом в Гродно и одним из старейших в западной Белоруссии.\n
            Деревянный монастырь был основан в 1494 или 1495 году, на земле подаренной великим князем Литовским и королём Польским Александром Ягеллончиком ордену бернардинцев (францисканцев). Каменный мужской монастырь возведён в 1595-1618 годы, с соизволения короля Сигизмунда III. Отдельные постройки комплекса относятся к XVIII веку.\n
            Храм Обретения Святого Креста был освящён 13 мая 1618 года, виленским епископом Евстафием Воловичем. Внешний облик комплекса несёт в себе черты готики (апсида), ренессанса и барокко.\n
            \n\n Текст wikipedia.org`,
            infoPosition: 1000,
            galleryStyle: {
                transform: [{translate: [-12, 8, -5]}, { rotateY: 60 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/bernardine1910.png',
                    year: '1910 г. Фото ay.by',
                    style: {
                        width: 4.9,
                        height: 8
                    }
                },
                {
                    source: 'places/bridge/old/bernardine1950.jpg',
                    year: '1950-е, Фото radzima.org',
                    style: {
                        width: 4.9,
                        height: 8
                    }
                },
                {
                    source: 'places/bridge/old/bernardine1950-1.jpg',
                    year: '1950-е, Фото radzima.org',
                    style: {
                        width: 8,
                        height: 5.1
                    }
                },
                {
                    source: 'places/bridge/old/bernardine1962.jpg',
                    year: '1962-70-e, Фото grodnonews.by, автор В.Саяпин',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                }
            ]
        }
    ]
};

export default bridge;