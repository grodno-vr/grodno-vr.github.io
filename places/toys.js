const toys = {
    name: 'toys',
    // sound: 'audio/birds.mp3',
    style: {},
    portals: [
        {
            name: 'garadnica',
            transformPortal: [{translate: [-4, 0, 14]}]
        },
        {
            name: 'fire',
            transformPortal: [{translate: [10, 0, 10]}]
        }
    ],
    labels: [
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [1, 2, -5]}, { scale : 1.5 }]
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
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/toys/old/toysXIX-XX-1.png',
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
                    source: 'places/toys/old/toysXIX-XX-2.png',
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
                    source: 'places/toys/old/toysXIX-XX.png',
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
                    source: 'places/toys/old/toys1930th.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1930-е, Фото harodnia.com',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/toys/old/toys1979.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1979 г. Фото oldgrodno.by',
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