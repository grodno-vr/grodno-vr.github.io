const fire = {
    name: 'fire',
    sound: 'audio/vilenskaja.m4a',
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
        },
        {
            name: 'toys',
            transformPortal: [{translate: [-12, 0, 4]}]
        },
        {
            name: 'garadnica',
            transformPortal: [{translate: [4, 0, 14]}]
        }
    ],
    labels: [
        {
            offset: -90,
            viewStyle: {
                transform: [{translate: [-13, 3, 1]}, { scale : 3 }, { rotateY: 90 }]
            },
            text: {
                ru: 'Кукольный Театр (Театр А.Тизенгауза)',
                en: 'Puppet Theater (Tizengauz Theater)'
            },
            description: {
                ru: `Театр Тизенгауза в Гродно является памятником архитектуры XVIII века и первым публичным театром города. Построено здание театра в 1772 году архитекторами Мезером и Сакко, хотя сам театр начал функционировать 30 апреля 1769 года. Созданный как небольшой ансамбль вокалистов и инструменталистов, вскоре театр преобразовался в постоянный коллектив с внушительным балетным и оперным репертуаром.\n
                          Здание театра было соединено с дворцом Тизенгауза крытым переходом. Главный зал театра представлял собой полукруглое помещение с амфитеатром и ярусными галереями по периметру и был сформирован по «итальянской кривой».\n
                          В 1940-1941 года в здании работал Государственный польский театр кукол БССР, в 1945-1947 - Государственный русский драматический театр БССР, с 1947 года - драматический областной театр. В 1975 году театр вновь реконструировался: были расширены зрительный зал и сценическая коробка. С 1984 года в здании располагается театр кукол.\n
                          \nТекст holiday.by`,
                en: `Tizengauz theater in Grodno is an architectural monument of the 18th century and the first public theater in the city. The theatre building was constructed in 1772 by the architects Mezer and Sacco, although the theater itself began to function on April 30, 1769. Created as a small ensemble of vocalists and instrumentalists the theater soon transformed into a permanent cast with an impressive ballet and operatic repertoire. \n
                     The building of the theater was connected with Tizengauz palace by means of a covered passage. The main hall of the theater was a semi-circular room with an amphitheater and tiered galleries all round and was formed as "Italian curve". \n
                     In 1940-1941 the building housed State Polish Puppet Theater of the BSSR, in 1945-1947 - State Russian Drama Theater of the BSSR, since 1947 - regional drama theater. In 1975 the theater was  reconstructed again: the auditorium and stage box were expanded. The building has housed the Puppet Theater since 1984.`
            },
            infoPosition: 500, // pixels
            galleryStyle: {
                transform: [{translate: [-11, 4.5, 0]}, { rotateY: 90 }]
            },
            oldImages: [
                {
                    source: 'places/toys/old/toysXIX-XX-1.png',
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
                    source: 'places/toys/old/toysXIX-XX-2.png',
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
                    source: 'places/toys/old/toysXIX-XX.png',
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
                    source: 'places/toys/old/toys1930th.png',
                    year: {
                        ru: '1930-е, Фото harodnia.com',
                        en: '1930th, Photo harodnia.com'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/toys/old/toys1979.png',
                    year: {
                        ru: '1979 г. Фото oldgrodno.by',
                        en: '1979, Photo oldgrodno.by'
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
                transform: [{translate: [1, 2, -5]}, { scale : 1.5 }]
            },
            text: {
                ru: '"Вечный Огонь" (Дворец А.Тизенгауза)',
                en: '"Eternal Fire" (Tizengauz Palace)'
            },
            description: {
                ru: `Братская могила советских воинов и партизан в Гродно - мемориальный комплекс, расположенный у входа в парк Жилибера. Открыт в 1949 году.\n
                     Ранее на этом месте распологался дворец Антония Тизенгауза, позже к концу XVIII века, ставший губернаторским домом.\n`,
                en: `The communal grave of Soviet soldiers and partisans in Grodno is a memorial complex located at the entrance to Gilibert’s park. It was opened in 1949. \n
                     Previously this place had been the seat of Antony Tizengauz, and later by the end of the 18th century became the governor's house.`
            },
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/fire/old/memorial1985.png',
                    year: {
                        ru: '1985 г. Фото oldgrodno.by',
                        en: '1985, Photo oldgrodno.by'
                    },
                    style: {
                        width: 4.5,
                        height: 5.2
                    }
                },
                {
                    source: 'places/fire/old/memorialXX.jpg',
                    year: {
                        ru: 'XX в Фото К.Китурко',
                        en: '20th c. Photo K.Kiturko'
                    },
                    style: {
                        width: 4.5,
                        height: 5.2
                    }
                },
                {
                    source: 'places/fire/old/palaceXX-1.png',
                    year: {
                        ru: 'XX в.',
                        en: '20th c.'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/fire/old/palaceXX.jpg',
                    year: {
                        ru: 'XX в. Фото tut.by',
                        en: '20th c. Photo tut.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/fire/old/palaceXX.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by',
                        en: '20th c. Photo oldgrodno.by'
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

export default fire;