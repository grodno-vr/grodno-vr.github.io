const garadnica = {
    name: 'garadnica',
    sound: 'audio/vilenskaja.m4a',
    style: {},
    portals: [
        {
            name: 'lenina',
            transformPortal: [{translate: [-4, 0, 14]}]
        },
        {
            name: 'swiss_valley',
            transformPortal: [{translate: [10, 0, 10]}]
        },
        {
            name: 'pochta',
            transformPortal: [{translate: [4, 0, 16]}]
        },
        {
            name: 'fire',
            transformPortal: [{translate: [12, 0, -10]}]
        },
        {
            name: 'palace',
            transformPortal: [{translate: [-12, 0, -4]}]
        }
    ],
    labels: [
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [1, 2, -5]}, { scale : 1.5 }]
            },
            text: {
                ru: 'Площадь А. Тизенгауза ("Городница")',
                en: 'Tizengauz Square  ("Gorodnitsa")'
            },
            description: {
                ru: `Неповторимый архитектурный ансамбль - площадь Антония Тизенгауза - оставил нам в подарок Джузеппе де Сакко, один из крупнейших архитекторов своего времени, работавший в Гродно в XVIII веке.\n
                          Итальянский зодчий родился в Вероне в 1735 году, служил придворным архитектором при дворе короля Станислава Августа Понятовского (последний король Польский и великий князь Литовский в 1764-1795 годах). Грандиозные проекты по градостроительству под руководством Джузеппе де Сакко, приближенные к европейскому уровню, были осуществлены в городе в годы правления гродненского старосты Антония Тизенгауза.\n
                          C 1870 по 1938 годы на площади существовала Александро-Невская церковь. Церковь была построена в честь спасения императора Александра II от покушения, состоявшегося 4 апреля 1866 года. Разобрана 12 мая 1938 года по решению Гродненского городского самоуправления.\n
                          В это же время (XIX - начало XX) на площади находилась Стела Свободы.\n`,
                en: `Square of Antony Tizengauz, a unique architectural ensemble, was left to us as a gift from Giuseppe de Sacco, one of the greatest architects of his time, who worked in Grodno in the 18th century. \n
                        Italian architect was born in Verona in 1735, served as a court architect at the court of King Stanislaw Augustus Poniatowski (the last King of Poland and Grand Duke of Lithuania in 1764-1795). Tremendous urban development projects of almost European level under the direction of Giuseppe de Sacco were carried out in the city during the reign of the Grodno village head Antony Tizengauz. \n
                        From 1870 to 1938 Alexander Nevsky Church occupied the square. The church was built in honor of Emperor Alexander II rescue from an assassination attempt on April 4, 1866. It was demounted on May 12, 1938 by the decision of the Grodno administration. \n
                        At the same time (19th - early 20th) the square was brightened with Victory Stele.`
            },
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/lenina/old/squareXIX-XX.png',
                    year: {
                        ru: 'XIX-XX вв. Фото oldgrodno.by',
                        en: '19-20th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/squareXIX-XX-1.png',
                    year: {
                        ru: 'XIX-XX вв. Фото oldgrodno.by',
                        en: '19-20th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/squareXIX-XX-2.png',
                    year: {
                        ru: 'XIX-XX вв. Фото vgr.by',
                        en: '19-20th c. Photo vgr.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/squareXIX-XX-3.png',
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
                    source: 'places/lenina/old/squareXIX-XX-4.png',
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
                    source: 'places/lenina/old/squareXX.png',
                    year: {
                        ru: 'XX вв. Фото <unknown>',
                        en: '20th c. Photo <unknown>'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/squareXX-1.png',
                    year: {
                        ru: 'XX вв. Фото oldgrodno.by',
                        en: '20th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/square1930th.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by',
                        en: '1930th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/square1930th-1.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by',
                        en: '1930th, Photo oldgrodno.by'
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

export default garadnica;
