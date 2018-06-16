const garadnica = {
    name: 'garadnica',
    // sound: 'audio/birds.mp3',
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
            text: 'Площадь А. Тизенгауза ("Городница")',
            description: `Неповторимый архитектурный ансамбль - площадь Антония Тизенгауза - оставил нам в подарок Джузеппе де Сакко, один из крупнейших архитекторов своего времени, работавший в Гродно в XVIII веке.\n
                          Итальянский зодчий родился в Вероне в 1735 году, служил придворным архитектором при дворе короля Станислава Августа Понятовского (последний король Польский и великий князь Литовский в 1764-1795 годах). Грандиозные проекты по градостроительству под руководством Джузеппе де Сакко, приближенные к европейскому уровню, были осуществлены в городе в годы правления гродненского старосты Антония Тизенгауза.\n
                          C 1870 по 1938 годы на площади существовала Александро-Невская церковь. Церковь была построена в честь спасения императора Александра II от покушения, состоявшегося 4 апреля 1866 года. Разобрана 12 мая 1938 года по решению Гродненского городского самоуправления.\n
                          В это же время (XIX - начало XX) на площади находилась Стела Свободы.\n`,
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
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
                    source: 'places/lenina/old/squareXIX-XX-3.png',
                    year: 'XIX-XX вв.',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/squareXIX-XX-4.png',
                    year: 'XIX-XX вв.',
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
                }
            ]
        }
    ]
};

export default garadnica;