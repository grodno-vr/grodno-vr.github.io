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
            name: 'lenina',
            transformPortal: [{translate: [10, 0, 10]}]
        }
    ],
    labels: [
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