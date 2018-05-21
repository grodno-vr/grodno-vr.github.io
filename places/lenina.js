const lenina = {
    name: 'lenina',
    // sound: 'audio/birds.mp3',
    style: {},
    portals: [
        {
            name: 'ozheshko',
            transformPortal: [{translate: [-8, 0, -12]}]
        },
        {
            name: 'swiss_valley',
            transformPortal: [{translate: [-10, 0, -8]}]
        },
        {
            name: 'toys',
            transformPortal: [{translate: [-16, 0, -3]}]
        },
        {
            name: 'zags',
            transformPortal: [{translate: [14, 0, 4]}]
        }
    ],
    labels: [
        {
            offset: -120,
            viewStyle: {
                transform: [{translate: [-7, 3, 6]}, { scale : 3 }, { rotateY: 120 }]
            },
            text: 'Памятники В.И. Ленину',
            description: `Памятник В. И. Ленину в Гродно был установлен 4 октября 1987 года. Создание памятника было приурочено к 70-й годовщине Октябрьской революции, а его открытие сопровождалось праздничным митингом.\n
                          Современный памятник Ленину является далеко не первым в истории города. Первый «Ильич» появился в Гродно ещё до войны в 1940 году, однако через год его сняли с постамента. В июне 1948 года была установлена скульптура из белого мрамора «Ленин и Сталин в Горках». Она известна прежде всего тем, что несколько раз перемещалась. Это изваяние было одним из любимых мест гродненцев, которые часто фотографировали своих детей рядом с ним.\n
                          Ещё был памятник на входе в Парк Жилибера. Владимир Ильич стоял спиной к вечному огню и указывал поднятой рукой в сторону улицы Горького.\n
                          \n\n Текст grodno.in`,
            infoPosition: 1, // pixels
            galleryStyle: {
                transform: [{translate: [-10, 4.5, 6]}, { rotateY: 130 }]
            },
            oldImages: [
                {
                    source: 'places/lenina/old/lenin1950-60.png',
                    year: '1950-60 гг. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/lenin1970th.png',
                    year: '1970-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/lenin1987.png',
                    year: '1987 г. Фото harodnia.com',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/lenin1989.png',
                    year: '1989 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/leninXX-2.png',
                    year: 'XX в. Фото grodno.in',
                    style: {
                        width: 5,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/leninistalinXX.png',
                    year: 'XX в. Фото oldgrodno.by, автор И. Пашпекина (Чупровая)',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/leninistalinXX-1.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 6,
                        height: 4.2
                    }
                }



            ]
        },
        {
            offset: -100,
            viewStyle: {
                transform: [{translate: [-10, 2, 3]}, { scale : 3 }, { rotateY: 110 }]
            },
            text: 'Площадь А. Тизенгауза (Площадь В.И. Ленина)',
            description: `Неповторимый архитектурный ансамбль - площадь Антония Тизенгауза - оставил нам в подарок Джузеппе де Сакко, один из крупнейших архитекторов своего времени, работавший в Гродно в XVIII веке.\n
                          Итальянский зодчий родился в Вероне в 1735 году, служил придворным архитектором при дворе короля Станислава Августа Понятовского (последний король Польский и великий князь Литовский в 1764-1795 годах). Грандиозные проекты по градостроительству под руководством Джузеппе де Сакко, приближенные к европейскому уровню, были осуществлены в городе в годы правления гродненского старосты Антония Тизенгауза.\n
                          C 1870 по 1938 годы на площади существовала Александро-Невская церковь. Церковь была построена в честь спасения императора Александра II от покушения, состоявшегося 4 апреля 1866 года. Разобрана 12 мая 1938 года по решению Гродненского городского самоуправления.\n
                          В это же время (XIX - начало XX) на площади находилась Стела Свободы.\n`,
            infoPosition: 300, // pixels
            galleryStyle: {
                transform: [{translate: [-12, 4.5, 3]}, { rotateY: 115 }]
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
            offset: -15,
            viewStyle: {
                transform: [{translate: [-1, 0.75, -3]}, { rotateY : 15 }]
            },
            text: 'Здание Почты',
            description: `---`,
            infoPosition: 1550, // pixels
            galleryStyle: {
                transform: [{translate: [-6, 5, -8]}, { rotateY : 15 }]
            },
            oldImages: [
                {
                    source: 'places/lenina/old/pochtaXX.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/pochtaXX-1.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/pochtaXX-2.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/pochtaXX-3.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/pochta1975.png',
                    year: '1975 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        },
        {
            offset: -15,
            viewStyle: {
                transform: [{translate: [0.5, 0.5, -4]}, { rotateY : -15 }]
            },
            text: 'Кинотеатр "Красная Звезда" ("Эден", "Пан")',
            description: `Четная сторона улицы Социалистической сегодня исчисляется от дома #4, в котором расположен любимый многими кинотеатр «Красная звезда» или «Звездочка», как его называют в народе. Построен кинотеатр был за личные средства отставного штабс-капитана Монастырского, прошение о строительстве было им подано в мае 1914 года. Изначально кинотеатр получил название «Эден», которое в последующие годы менялось на  Eden, Palac, Polonija, Pan.\n
                          \n\n Текст kinogrodno.by`,
            infoPosition: 1550, // pixels
            galleryStyle: {
                transform: [{translate: [-2, 5, -12]}, { rotateY : 0 }]
            },
            oldImages: [
                {
                    source: 'places/lenina/old/kino1930th.png',
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 5,
                        height: 6.2
                    }
                },
                {
                    source: 'places/lenina/old/kino1941-44.png',
                    year: '1941-44 гг. Фото oldgrodno.by',
                    style: {
                        width: 5,
                        height: 6.2
                    }
                }
            ]
        }
    ]
};

export default lenina;