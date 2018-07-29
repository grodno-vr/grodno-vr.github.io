const lenina = {
    name: 'lenina',
    sound: 'audio/vilenskaja.m4a',
    style: {},
    portals: [
        {
            name: 'ozheshko',
            transformPortal: [{translate: [-8, 0, -12]}]
        },
        {
            name: 'pochta',
            transformPortal: [{translate: [-3, 0, -14]}]
        },
        {
            name: 'swiss_valley',
            transformPortal: [{translate: [-10, 0, -8]}]
        },
        {
            name: 'fire',
            transformPortal: [{translate: [-16, 0, -3]}]
        },
        {
            name: 'zags',
            transformPortal: [{translate: [14, 0, 4]}]
        },
        {
            name: 'garadnica',
            transformPortal: [{translate: [-14, 0, 7]}]
        }
    ],
    labels: [
        {
            offset: -120,
            viewStyle: {
                transform: [{translate: [-7, 3, 6]}, { scale : 3 }, { rotateY: 120 }]
            },
            text: {
                ru: 'Памятники В.И. Ленину',
                en: 'Lenin Monuments'
            },
            description: {
                ru: `Памятник В. И. Ленину в Гродно был установлен 4 октября 1987 года. Создание памятника было приурочено к 70-й годовщине Октябрьской революции, а его открытие сопровождалось праздничным митингом.\n
                          Современный памятник Ленину является далеко не первым в истории города. Первый «Ильич» появился в Гродно ещё до войны в 1940 году, однако через год его сняли с постамента. В июне 1948 года была установлена скульптура из белого мрамора «Ленин и Сталин в Горках». Она известна прежде всего тем, что несколько раз перемещалась. Это изваяние было одним из любимых мест гродненцев, которые часто фотографировали своих детей рядом с ним.\n
                          Ещё был памятник на входе в Парк Жилибера. Владимир Ильич стоял спиной к вечному огню и указывал поднятой рукой в сторону улицы Горького.\n
                          \n\n Текст grodno.in`,
                en: `The monument to Lenin in Grodno was established on October 4, 1987. The creation of the monument was timed to coincide with the 70th anniversary of the October Revolution, and its opening was accompanied by a festive rally. \n
                     Modern Lenin monument is far from being the first in the history of the city. The first "Ilyich" appeared in Grodno before the war in 1940, but a year later was removed from its pedestal. In June 1948 a white marble sculpture "Lenin and Stalin in Gorki" was erected. It is primarily known for being transferred several times. This sculpture was one of the favorite places of Grodno residents, who often used to photograph their children next to it.\n
                     There was also a monument at the entrance to Gilibert’s Park. Vladimir Ilyich was standing with his back to the eternal flame and his raised hand pointing in Gorky street direction.`
            },
            infoPosition: 1, // pixels
            galleryStyle: {
                transform: [{translate: [-10, 4.5, 6]}, { rotateY: 130 }]
            },
            oldImages: [
                {
                    source: 'places/lenina/old/lenin1950-60.png',
                    year: {
                        ru: '1950-60 гг. Фото oldgrodno.by',
                        en: '1950-60, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/lenin1970th.png',
                    year: {
                        ru: '1970-е, Фото oldgrodno.by',
                        en: '1970th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/lenin1987.png',
                    year: {
                        ru: '1987 г. Фото harodnia.com',
                        en: '1987, Photo harodnia.com'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/lenin1989.png',
                    year: {
                        ru: '1989 г. Фото oldgrodno.by',
                        en: '1989, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/leninXX-2.png',
                    year: {
                        ru: 'XX в. Фото grodno.in',
                        en: '20th c. Photo grodno.in'
                    },
                    style: {
                        width: 5,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/leninistalinXX.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by, автор И. Пашпекина (Чупровая)',
                        en: '20th c. Photo oldgrodno.by, author I. Pashpekina'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/leninistalinXX-1.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by',
                        en: '20th c. Photo oldgrodno.by'
                    },
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
            text: {
                ru: 'Площадь А. Тизенгауза (Площадь В.И. Ленина)',
                en: 'Tizengauz Square (Lenin Square)'
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
            infoPosition: 300, // pixels
            galleryStyle: {
                transform: [{translate: [-12, 4.5, 3]}, { rotateY: 115 }]
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
                        ru: 'XX вв. Фото s13.ru',
                        en: '20th c. Photo s13.ru'
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
                },
                {
                    source: 'places/lenina/old/square1987.png',
                    year: {
                        ru: '1987 г. Фото oldgrodno.by',
                        en: '1987, Photo oldgrodno.by'
                    },
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
            text: {
                ru: 'Здание Почты',
                en: 'Postal Service'
            },
            description: {
                ru: `---`,
                en: `---`
            },
            infoPosition: 1550, // pixels
            galleryStyle: {
                transform: [{translate: [-6, 5, -8]}, { rotateY : 15 }]
            },
            oldImages: [
                {
                    source: 'places/lenina/old/pochtaXX.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by',
                        en: '20th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/pochtaXX-1.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by',
                        en: '20th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/pochtaXX-2.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by',
                        en: '20th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/pochtaXX-3.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by',
                        en: '20th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/pochta1975.png',
                    year: {
                        ru: '1975 г. Фото oldgrodno.by',
                        en: '1975, Photo oldgrodno.by'
                    },
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
            text: {
                ru: 'Кинотеатр "Красная Звезда" ("Эден", "Пан")',
                en: '"Red Star" Cinema ("Eden", "Pan")'
            },
            description: {
                ru: `Четная сторона улицы Социалистической сегодня исчисляется от дома #4, в котором расположен любимый многими кинотеатр «Красная звезда» или «Звездочка», как его называют в народе. Построен кинотеатр был за личные средства отставного штабс-капитана Монастырского, прошение о строительстве было им подано в мае 1914 года. Изначально кинотеатр получил название «Эден», которое в последующие годы менялось на  Eden, Palac, Polonija, Pan.\n
                          \n\n Текст kinogrodno.by`,
                en: `Today houses on even side of Socialist street are calculated starting from the house #4, which is a widely favoured cinema "Red star" or "Star", as it is popularly known. The cinema was built using personal funds of retired junior captain Monastyrsky, who filed a request for construction in May 1914. Initially the cinema was called "Eden", which in subsequent years was changing to Eden, Palac, Polonija, Pan.`
            },
            infoPosition: 1550, // pixels
            galleryStyle: {
                transform: [{translate: [-2, 5, -12]}, { rotateY : 0 }]
            },
            oldImages: [
                {
                    source: 'places/lenina/old/kino1930th.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by',
                        en: '1930th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 5,
                        height: 6.2
                    }
                },
                {
                    source: 'places/lenina/old/kino1941-44.png',
                    year: {
                        ru: '1941-44 гг. Фото oldgrodno.by',
                        en: '1941-44, Photo oldgrodno.by'
                    },
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