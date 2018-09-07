const bridge = {
    name: 'bridge',
    sound: 'audio/vilenskaja.m4a',
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
        },
        {
            name: 'francisk',
            transformPortal: [{translate: [5, 0, -12]}]
        }
    ],
    labels: [
        {
            offset: 90,
            viewStyle: {
                transform: [{translate: [8, 2, 0]}, { scale : 2 }, { rotateY: -90 }]
            },
            text: {
                ru: 'Памятник Воинам-Освободителям',
                en: 'Monument to the Soldiers-Liberators'
            },
            description: {
                ru: `Памятник воинам-освободителям (танк Т-34/85), расположенный на краю Советской площади. Установлен в память о воинах 2-го и 3-го Белорусских фронтов, участвовавших в освобождении города Гродно 16 июля 1944 года.\n
                          Установка памятника состоялась 23 февраля 1968 году на краю уже несуществующего сквера в центре города. Архитектором проекта выступил Г. Федосеенко. Танк Т-34 с номером «200» стоит на сложном постаменте. \n
                          Высота памятника в целом составляет 6 метров.\n
                          \n\n Текст grodno.in`,
                en: `Monument to the soldiers-liberators (tank T-34/85) is located on the edge of the Soviet square. It was established in the memory of the soldiers of the 2nd and 3rd Belarusian fronts that participated in the liberation of Grodno on July 16, 1944.
                     The installation of the monument took place on February 23, 1968 on the edge of a currently non-existent square in the city center. Fedoseenko was the architect of the project. Tank T-34 no. 200 stands on a complex pedestal.
                     In whole the height of the monument amounts to 6 meters.`
            },
            infoPosition: 3300,
            galleryStyle: {
                transform: [{translate: [5, 6, 0]}, { rotateY: -90 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/tank1.jpg',
                    year: {
                        ru: '1980 г. Фото oldgrodno.by',
                        en: '1980, Photo oldgrodno.by'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/tank.png',
                    year: {
                        ru: '1975 г. Фото grodno.in',
                        en: '1975, Photo grodno.in'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/tank2.jpg',
                    year: {
                        ru: '2008 г. Фото tut.by',
                        en: '2008, Photo tut.by'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/tank3.jpg',
                    year: {
                        ru: '1968 г. Фото tut.by',
                        en: '1968, Photo tut.by'
                    },
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
            text: {
                ru: 'Областной Драматический Театр',
                en: 'Regional Drama Theatre'
            },
            description: {
                ru: `В 1947 г. постановлением Совета Министров БССР в Гродно создан областной драматический театр. \n
                        Официальное открытие театра состоялось премьерным спектаклем «В одном городе» по пьесе А.Сафронова.\n
                        \n\nТекст drama.grodno.by`,
                en: `Regional drama theatre was established in Grodno in 1947 under the resolution of the BSSR Council of Ministers.
                     Premiere performance of "In One City" after the the play by Safronov marked the official opening of the theater.`
            },
            infoPosition: 2500,
            galleryStyle: {
                transform: [{translate: [3, 6, -6]}, { rotateY: -45 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/theater.jpg',
                    year: {
                        ru: '1978 - 1984 гг. Фото drama.grodno.by',
                        en: '1978 - 1984, Photo drama.grodno.by'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater1.jpg',
                    year: {
                        ru: '1978 - 1984 гг. Фото drama.grodno.by',
                        en: '1978 - 1984, Photo drama.grodno.by'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater2.jpg',
                    year: {
                        ru: '1978 - 1984 гг. Фото drama.grodno.by',
                        en: '1978 - 1984, Photo drama.grodno.by'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater3.jpg',
                    year: {
                        ru: '1978 - 1984 гг. Фото drama.grodno.by',
                        en: '1978 - 1984, Photo drama.grodno.by'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater4.jpg',
                    year: {
                        ru: '1978 - 1984 гг. Фото drama.grodno.by',
                        en: '1978 - 1984, Photo drama.grodno.by'
                    },
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
            text: {
                ru: 'Костел и Монастырь Бернардинок',
                en: 'Catholic Bernardine Church and Monastery'
            },
            description: {
                ru: `Католический монастырь бернардинок (позже Свято-Борисоглебский монастырь 1853-58 гг.) ХVII–ХХ вв., ранее размещался на месте драматического театра.\n
                          Очень сильно пострадал после Второй Мировой Войны. Снесен в 60-е годы.\n
                          \n\n Текст vgr.by`,
                en: `The Catholic Bernardine Monastery (later - St. Boris and Gleb Monastery, 1853-58) of the 17th-20th centuries was previously located on the site of a dramatic theater. \n
                     It suffered very badly after the Second World War. It was demolished in the 60s.`
            },
            infoPosition: 2400,
            galleryStyle: {
                transform: [{translate: [2, 6, -8]}, { rotateY: -40 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/bernardineSisterXX.png',
                    year: {
                        ru: 'XX в.',
                        en: '20th c.'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },                {
                    source: 'places/bridge/old/bernardineSisterXIX.jpg',
                    year: {
                        ru: 'XIX в. Н.Орда',
                        en: '19th c. N.Orda'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/bernardineSisters1944.png',
                    year: {
                        ru: '1944 г. Фото s13.ru',
                        en: '1944, Photo s13.ru'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/bernardineSisters1900.png',
                    year: {
                        ru: '1900 г. Фото wikimedia.org',
                        en: '1900, Photo wikimedia.org'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/bernardineSisters1934.png',
                    year: {
                        ru: '1934 г. Фото wikimedia.org',
                        en: '1934, Photo wikimedia.org'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/bernardineSisters1922.png',
                    year: {
                        ru: '1922 г. Фото wikimedia.org',
                        en: '1922, Photo wikimedia.org'
                    },
                    style: {
                        width: 8,
                        height: 5.5
                    }
                },
                {
                    source: 'places/bridge/old/bernardineSisters1940.jpg',
                    year: {
                        ru: '1940-е, Фото vgr.by',
                        en: '1940th, Photo vgr.by'
                    },
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
            text: {
                ru: 'Костел и Монастырь Кармелитов',
                en: 'Catholic Church and Monastery of Carmelites'
            },
            description: {
                ru: `Костел и монастырь ордена босых кармелитов XVIII в. был разобран в 1903 г. при реконструкции комплекса под казармы гродненского крепостного батальона. Ныне это здание банка.`,
                en: `The catholic church and monastery of the Order of Discalced Carmelites of the 18th century was dismantled in 1903 during the reconstruction of the complex for the barracks of Grodno fortress battalion. Today this is a bank building.`
            },
            infoPosition: 1880,
            galleryStyle: {
                transform: [{translate: [-4, 6, -8]}, { rotateY: 0 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/holyCrossXIX-XX.png',
                    year: {
                        ru: 'XIX-XX вв.',
                        en: '19-20th c.'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross.jpg',
                    year: {
                        ru: 'XIX в. Фото radzima.org',
                        en: '19th c. Photo radzima.org'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross1.png',
                    year: {
                        ru: 'XIX в. Фото grodnonews.by',
                        en: '19th c. Photo grodnonews.by'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross2.jpg',
                    year: {
                        ru: 'XIX в. Фото radzima.org',
                        en: '19th c. Photo radzima.org'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross3.jpg',
                    year: {
                        ru: 'XVIII в. Фото radzima.org',
                        en: '18th c. Photo radzima.org'
                    },
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
            text: {
                ru: 'Костёл Обретения Святого Креста',
                en: 'Catholic church of the Acquisition of the Holy Cross'
            },
            description: {
                ru: `Aрхитектурный комплекс костёла и монастыря бернардинцев. Церковь является старейшим действующим католическим храмом в Гродно и одним из старейших в западной Беларуси.\n
                        Деревянный монастырь был основан в 1494 или 1495 году, на земле подаренной великим князем Литовским и королём Польским Александром Ягеллончиком ордену бернардинцев (францисканцев). Каменный мужской монастырь возведён в 1595-1618 годы, с соизволения короля Сигизмунда III. Отдельные постройки комплекса относятся к XVIII веку.\n
                        Храм Обретения Святого Креста был освящён 13 мая 1618 года, виленским епископом Евстафием Воловичем. Внешний облик комплекса несёт в себе черты готики (апсида), ренессанса и барокко.\n
                        \n\n Текст wikipedia.org`,
                en: `This is the architectural complex of the Bernardine catholic church and monastery. The church is the oldest active catholic church in Grodno and one of the oldest in Western Belarus.
                        Wooden monastery was founded in 1494 or 1495 on the land presented to the Bernardines Order  (Franciscans) by the Grand Duke of Lithuania and the King of Poland, Alexander Jagiellon. Stone monastery was built in 1595-1618 with the permission of King Sigismund III. Separate buildings of the complex date back to the 18th century.
                        The Church of the Acquisition of the Holy Cross was consecrated on May 13, 1618 by the Bishop of Vilna, Eustathius Volovic. External appearance of the complex bears Gothic (apse), Renaissance and Baroque features.`
            },
            infoPosition: 1000,
            galleryStyle: {
                transform: [{translate: [-12, 8, -5]}, { rotateY: 60 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/bernardine1910.png',
                    year: {
                        ru: '1910 г. Фото ay.by',
                        en: '1910, Photo ay.by'
                    },
                    style: {
                        width: 4.9,
                        height: 8
                    }
                },
                {
                    source: 'places/bridge/old/bernardine1950.jpg',
                    year: {
                        ru: '1950-е, Фото radzima.org',
                        en: '1950th, Photo radzima.org'
                    },
                    style: {
                        width: 4.9,
                        height: 8
                    }
                },
                {
                    source: 'places/bridge/old/bernardine1950-1.jpg',
                    year: {
                        ru: '1950-е, Фото radzima.org',
                        en: '1950th, Photo radzima.org'
                    },
                    style: {
                        width: 8,
                        height: 5.1
                    }
                },
                {
                    source: 'places/bridge/old/bernardine1962.jpg',
                    year: {
                        ru: '1962-70-e, Фото grodnonews.by, автор В.Саяпин',
                        en: '1962-70th, Photo grodnonews.by, author V.Sayapin'
                    },
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