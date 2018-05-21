const toys = {
    name: 'toys',
    // sound: 'audio/birds.mp3',
    style: {},
    portals: [
        {
            name: 'ozheshko',
            transformPortal: [{translate: [6, 0, -12]}]
        },
        {
            name: 'swiss_valley',
            transformPortal: [{translate: [12, 0, -4]}]
        },
        {
            name: 'lenina',
            transformPortal: [{translate: [10, 0, 10]}]
        }
    ],
    labels: [
        {
            offset: -220,
            viewStyle: {
                transform: [{translate: [2, 1, 5]}, { scale : 1.5 }, { rotateY: 210 }]
            },
            text: 'Площадь А. Тизенгауза (Площадь В.И. Ленина)',
            description: `Неповторимый архитектурный ансамбль - площадь Антония Тизенгауза - оставил нам в подарок Джузеппе де Сакко, один из крупнейших архитекторов своего времени, работавший в Гродно в XVIII веке.\n
                          Итальянский зодчий родился в Вероне в 1735 году, служил придворным архитектором при дворе короля Станислава Августа Понятовского (последний король Польский и великий князь Литовский в 1764-1795 годах). Грандиозные проекты по градостроительству под руководством Джузеппе де Сакко, приближенные к европейскому уровню, были осуществлены в городе в годы правления гродненского старосты Антония Тизенгауза.\n
                          C 1870 по 1938 годы на площади существовала Александро-Невская церковь. Церковь была построена в честь спасения императора Александра II от покушения, состоявшегося 4 апреля 1866 года. Разобрана 12 мая 1938 года по решению Гродненского городского самоуправления.\n
                          В это же время (XIX - начало XX) на площади находилась Стела Свободы.\n`,
            infoPosition: 3700, // pixels
            galleryStyle: {
                transform: [{translate: [3, 5, 8]}, { rotateY: 210 }]
            },
            oldImages: [
                {
                    source: 'places/lenina/old/squareXIX-XX.png',
                    year: 'XIX-XX вв. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/squareXIX-XX-1.png',
                    year: 'XIX-XX вв. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/squareXIX-XX-2.png',
                    year: 'XIX-XX вв. Фото vgr.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/squareXX.png',
                    year: 'XX вв. Фото s13.ru',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/squareXX-1.png',
                    year: 'XX вв. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/square1930th.png',
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/square1930th-1.png',
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/square1987.png',
                    year: '1987 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        },
        {
            offset: -90,
            viewStyle: {
                transform: [{translate: [-13, 3, 1]}, { scale : 3 }, { rotateY: 90 }]
            },
            text: 'Кукольный Театр (Театр А.Тизенгауза)',
            description: `Театр Тизенгауза в Гродно является памятником архитектуры XVIII века и первым публичным театром города. Построено здание театра в 1772 году архитекторами Мезером и Сакко, хотя сам театр начал функционировать 30 апреля 1769 года. Созданный как небольшой ансамбль вокалистов и инструменталистов, вскоре театр преобразовался в постоянный коллектив с внушительным балетным и оперным репертуаром.\n
                          Здание театра было соединено с дворцом Тизенгауза крытым переходом. Главный зал театра представлял собой полукруглое помещение с амфитеатром и ярусными галереями по периметру и был сформирован по «итальянской кривой».\n
                          В 1940-1941 года в здании работал Государственный польский театр кукол БССР, в 1945-1947 - Государственный русский драматический театр БССР, с 1947 года - драматический областной театр. В 1975 году театр вновь реконструировался: были расширены зрительный зал и сценическая коробка. С 1984 года в здании располагается театр кукол.\n
                          \nТекст holiday.by`,
            infoPosition: 500, // pixels
            galleryStyle: {
                transform: [{translate: [-11, 4.5, 0]}, { rotateY: 90 }]
            },
            oldImages: [
                {
                    source: 'places/toys/old/toysXIX-XX.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/toys/old/toys1930th.png',
                    year: '1930-е, Фото harodnia.com',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/toys/old/toys1979.png',
                    year: '1979 г. Фото oldgrodno.by',
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
                transform: [{translate: [1, 2, -5]}, { scale : 1.5 }]
            },
            text: '"Вечный Огонь" (Дворец А.Тизенгауза)',
            description: `Братская могила советских воинов и партизан в Гродно - мемориальный комплекс, расположенный у входа в парк Жилибера. Открыт в 1949 году.\n
                          Ранее на этом месте распологался дворец Антония Тизенгауза, позже к концу XVIII века, ставший губернаторским домом.\n`,
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/toys/old/memorial1985.png',
                    year: '1985 г. Фото oldgrodno.by',
                    style: {
                        width: 4.5,
                        height: 5.2
                    }
                },
                {
                    source: 'places/toys/old/palaceXX.jpg',
                    year: 'XX в. Фото tut.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/toys/old/palaceXX.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        }
    ]
};

export default toys;