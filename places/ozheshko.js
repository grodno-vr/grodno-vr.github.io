const ozheshko = {
    name: 'ozheshko',
    sound: 'audio/ozheshko.m4a',
    style: {},
    portals: [
        {
            name: 'pochta',
            transformPortal: [{translate: [4, 0, 12]}]
        },
        {
            name: 'swiss_valley',
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
            text: {
                ru: 'Здание женской Мариинской гимназии',
                en: 'The building of female Mariinsky gymnasium'
            },
            description: {
                ru: `Здание женской Мариинской гимназии в Гродно было возведено в 1893 году в неоклассическом стиле. Автор проекта – инженер и статский советник Василий Федорович Небольсин.\n
                          Женская Мариинская гимназия существовала в Гродно с 1860 года и строительство для неё собственного нового здания было настоящим событием. В гимназии получали образование дочери чиновников, дворян и духовных лиц. Образование было семиклассным. После Октябрьской революции 1917 года гимназия была закрыта, однако её здание продолжило служить образовательным целям.\n
                          В 1940 году в здании гимназии был открыт первый на территории Западной Беларуси учительский институт. После Второй Мировой войны он был преобразован в педагогический. В 1978 году на его базе открыт Гродненский университет имени Янки Купалы, которому и по сей день здание женской Мариинской гимназии в Гродно принадлежит.\n
                          \n\n Текст holiday.by`,
                en: `The building of female Mariinsky gymnasium in Grodno was built in 1893 in neoclassical style. The author of the project is an engineer and state advisor Vasily Fedorovich Nebolsin.\n
                     Female Mariinsky gymnasium had existed in Grodno since 1860 and the construction of its own new building made a difference. In the gimnasium daughters of the officials, nobility and clergy received their education. Education included seven grades. After the October revolution of 1917 the gymnasium was closed, but its building continued to be used  for educational purposes.\n
                     In 1940 the first education Institute in Western Belarus was opened in the gymnasium building. After the Second World war it was transformed into a pedagogical institute. In 1978 it served as a basis for a newly opened Yanka Kupala state university of Grodno, which today owns the building of female Mariinsky gymnasium in Grodno.`
            },
            infoPosition: 300, // pixels
            galleryStyle: {
                transform: [{translate: [-12, 5, 0]}, { rotateY: 100 }]
            },
            oldImages: [
                {
                    source: 'places/ozheshko/old/gimnasiumXIX-XX.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/gimnasiumXIX-XX-1.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/gimnasiumXIX-XX-2.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/gimnasium1957.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1957 r. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/gimnasium2013.jpg',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '2016 г. Фото radzima.org',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/gimnasium2016.jpg',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '2017 г. Фото galina-lukas.ru',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/gimnasium2017.png',
                    year: {
                        ru: '',
                        en: ''
                    },
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
            text: {
                ru: 'Дом Элизы Ожешко',
                en: 'House of Eliza Ozheshko'
            },
            description: {
                ru: `Дом-музей Элизы Ожешко в Гродно - архитектурный памятник, являющийся точной копией дома знаменитой писательницы. В нём она жила после переезда в Гродно в 1894 году до своей смерти в мае 1910 года.\n
                          В завещании Элизы Ожешко было указано, что после её смерти дом необходимо было передать Гродненскому обществу опеки над детьми. В 1911 году воля писательницы была исполнена. В середине 20-х годов в доме разместили торговую школу, а в 1940 году - музыкальную. К счастью, постройка уцелела в годы войны. По завершении военных действий Облпроект разместил здесь своё управление. Затем дом стал станицей переливания крови, а ещё позднее инвентаризационным бюро. Пристанищем для Дома Пионеров здание стало в 1948 году.\n
                          Читальный зал библиотеки открыли в 1958 году. В этом же году был открыт и музей писательницы. Время не пощадило старую постройку. В 1976 году обветшалое здание разобрали, а новая его копия построена рядом, подальше от дороги. Ещё одну реконструкцию здание пережило в 2009 году.\n
                          \n\n Текст grodno.in `,
                en: `The house-museum of Eliza Ozheshko in Grodno is an architectural monument that is an exact copy of the house of the famous writer. She lived in it after moving to Grodno in 1894 until her death in May 1910.\n
             In Elisa Ozheshko's will it was specified that after her death the house had to be passed on to Grodno child custody society. The writer’s will was fulfilled in 1911. In the mid-1920s the house stationed school of trade, and in 1940 - school of music. Fortunately the building survived the war. When military operations were over regional project used the building for its office. Later the house became a blood transfusion village, and afterwards - an inventory office. The building became a refuge for the house of pioneers in 1948.\n
             In 1958 the reading room of the library was opened. In the same year the museum of the writer was opened. Time did not spare the old building. In 1976 shabby building was dismantled and its new copy was built nearby, away from the road. The building survived one more reconstruction in 2009.`
            },
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
                    source: 'places/ozheshko/old/ozheshkoXIX-XX-1.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XIX-XX вв.',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/ozheshkoXIX-XX.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/ozheshkoXX.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/ozheshkoXX-1.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/ozheshkoXX-2.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/ozheshko/old/ozheshko1926.png',
                    year: {
                        ru: '',
                        en: ''
                    },
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