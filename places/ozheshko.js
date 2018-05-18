const ozheshko = {
    name: 'ozheshko',
    sound: 'audio/ozheshko.m4a',
    style: {},
    portals: [
        {
            name: 'zags',
            transformPortal: [{translate: [4, 0, 12]}]
        },
        {
            name: 'toys',
            transformPortal: [{translate: [-2, 0.5, 14]}]
        },
        {
            name: 'sobor',
            transformPortal: [{translate: [-4, 0, -10]}]
        }
    ],
    labels: [
        {
            offset: -100,
            viewStyle: {
                transform: [{translate: [-10, 4, 1]}, { scale : 3 }, { rotateY: 100 }]
            },
            text: 'Здание женской Мариинской гимназии',
            description: `Здание женской Мариинской гимназии в Гродно было возведено в 1893 году в неоклассическом стиле. Автор проекта – инженер и статский советник Василий Федорович Небольсин.\n
                          Женская Мариинская гимназия в Гродно существовала в Гродно с 1860 года и строительство для неё собственного нового здания было настоящим событием. В гимназии получали образование дочери чиновников, дворян и духовных лиц. Образование было семиклассным. После Октябрьской революции 1917 года гимназия была закрыта, однако её здание продолжило служить образовательным целям.\n
                          В 1940 году в здании гимназии был открыт первый на территории Западной Беларуси учительский институт. После Второй Мировой войны он был преобразован в педагогический. В 1978 году на его базе открыт Гродненский университет имени Янки Купалы, которому и по сей день здание женской Мариинской гимназии в Гродно принадлежит.\n
                          \n\n Текст holiday.by`,
            infoPosition: 300, // pixels
            galleryStyle: {
                transform: [{translate: [-12, 5, 0]}, { rotateY: 100 }]
            },
            oldImages: [
                {
                    source: 'places/ozheshko/old/gimnasiumXIX-XX.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/gimnasiumXIX-XX-1.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/gimnasiumXIX-XX-2.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/gimnasium1957.png',
                    year: '1957 r. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/gimnasium2013.jpg',
                    year: '2016 г. Фото radzima.org',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/gimnasium2016.jpg',
                    year: '2017 г. Фото galina-lukas.ru',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/gimnasium2017.png',
                    year: '2013 г. Фото holiday.by',
                    style: {
                        width: 7,
                        height: 4
                    }
                }
            ]
        },
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [1, 2, -5]}, { scale : 1.5 }]
            },
            text: 'Дом Элизы Ожешко',
            description: `Дом-музей Элизы Ожешко в Гродно - архитектурный памятник, являющийся точной копией дома знаменитой писательницы. В нём она жила после переезда в Гродно в 1894 году до своей смерти в мае 1910 года.\n
                          В завещании Элизы Ожешко было указано, что после её смерти дом необходимо было передать Гродненскому обществу опеки над детьми. В 1911 году воля писательницы была исполнена. В середине 20-х годов в доме разместили торговую школу, а в 1940 году - музыкальную. К счастью, постройка уцелела в годы войны. По завершении военных действий Облпроект разместил здесь своё управление. Затем дом стал станицей переливания крови, а ещё позднее инвентаризационным бюро. Пристанищем для Дома Пионеров здание стало в 1948 году.\n
                          Читальный зал библиотеки открыли в 1958 году. В этом же году был открыт и музей писательницы. Время не пощадило старую постройку. В 1976 году обветшалое здание разобрали, а новая его копия построена рядом, подальше от дороги. Ещё одну реконструкцию здание пережило в 2009 году.\n
                          \n\n Текст grodno.in `,
            infoPosition: 1800, // pixels
            infoWidth: 1300, // pixels,
            infoHeight: 900, // pixels
            model: {
                disabled: true,
                style: {
                    transform: [
                        { translate: [-3, 8, -5] },
                        { rotateZ: -110 },
                        { rotateX: 15 },
                        { rotateY: -15 }
                    ]
                },
                rotationAxis: 'rotateZ',
                obj: 'models/ozheshko/ozheshko.obj',
                mtl: 'models/ozheshko/ozheshko.mtl',
                controls: {
                    disabled: true,
                    transform: [{translate: [-1, -0.5, -10]}, { rotateY: -30 }]
                }
            },
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/ozheshko/old/ozheshkoXIX-XX.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/ozheshkoXX.png',
                    year: 'XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/ozheshkoXX-1.png',
                    year: 'XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/ozheshkoXX-2.png',
                    year: 'XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/ozheshko1926.png',
                    year: '1926 г. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        }
    ]
};

export default ozheshko;