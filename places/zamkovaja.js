const zamkovaja = {
    name: 'zamkovaja',
    style: {},
    portals: [
        {
            name: 'castles',
            transformPortal: [{translate: [-13, 0, 2]}]
        },
        {
            name: 'center',
            transformPortal: [{translate: [12, 0, 7]}]
        }
    ],
    labels: [
        {
            offset: -90,
            viewStyle: {
                transform: [{translate: [-13, 3, 1]}, { scale : 3 }, { rotateY: 90 }]
            },
            text: {
                ru: 'Левая сторона Замковой улицы',
                en: 'Left side of Zamkovaya Street'
            },
            description: {
                ru: `Замковая улица - одна из самых старых городских улиц в центре города Гродно. Является одним из символов города. Протяженность около 360 м, от советской площади до территории нового и старого замков, от которых и пошло название улицы. Является единственной улицей в Беларусии, на которой находятся сразу два королевских замка. В 17 веке произошёл расцвет улицы, на ней было не меньше, чем 7 дворцов магнатов Речи Посполитой.\n
                          Текст wikipedia.org\n
                          В конце улицы можно увидеть Пожарную Каланчу - памятник архитектуры 20 века, на территории которого располагается действующая пожарно-спасательная часть.\n
                          Несмотря на все войны, восстания и революции, главным врагом Гродно был огонь. Поэтому в 1870 году в городе появилась первая деревянная башня пожарной части. Тем не менее, даже тогда не удалось побороть стихию. В мае 1885 года вследствие засухи загорелись соломенные крыши домов. Ветер быстро разнёс огонь по городу, а пожарные хоть и прибыли вовремя, всё равно не успели ничего предпринять. Пожар бушевал в городе 3 дня, унеся десятки жизней и уничтожив 500 строений.\n
                          В начале 20 века деревянную каланчу заменили на каменную. Она была более высокая (32 метра), что позволяло вести круговой обзор города. При обнаружении возгорания дежурный на вершине башни громко звонил в колокол.\n
                          Текст grodno.in`,
                en: `Zamkovaya (Castle) street is one of the oldest city streets in Grodno center. It is one of the symbols of the city. Its length is about 360 m, from Soviet square to new and old castles territory, from which the street name derives. It is the only street in Belarus, on which two castles are located at once. 17th century marked golden age of the street when it was occupied with no less than 7 palaces of Polish-Lithuanian Commonwealth magnates. \n
                        At the end of the street one can see the Fire Tower, an architectural monument of the 20th century, which today stores functional fire and rescue unit. \n
                        Despite all wars, insurrections and revolutions the main enemy of Grodno was fire. This is why in 1870 the city welcomed the first wooden tower of the fire department. Nevertheless, even then it was not possible to overcome the force of nature. In May 1885 the roofs of the houses started burning due to drought. The wind quickly spread fire around the city, and although firefighters arrived on time they still did not have time to do anything. The fire raged in the city for three days claiming dozens of lives and destroying 500 buildings. \n
                        At the beginning of the 20th century wooden watchtower was replaced with a stone one. It was higher (32 meters), which allowed to conduct a circular survey of the city. Once an ignition was detected the attendant at the top of the tower loudly rang the bell.`
            },
            infoPosition: 500, // pixels
            galleryStyle: {
                transform: [{translate: [-11, 4.5, 0]}, { rotateY: 90 }]
            },
            oldImages: [
                {
                    source: 'places/zamkovaja/old/zamkovajaLeftXX-3.png',
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
                    source: 'places/zamkovaja/old/zamkovajaLeftXX.jpg',
                    year: {
                        ru: 'XX в. Фото grodnonews.by, автор В.Саяпин',
                        en: '20th c. Photo grodnonews.by, V.Sayapin'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaLeftXX-1.jpg',
                    year: {
                        ru: 'XX в. Фото grodnonews.by, автор В.Саяпин',
                        en: '20th c. Photo grodnonews.by, V.Sayapin'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaLeftXX-2.jpg',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by, автор Ф.Ворошильский',
                        en: '20th c. Photo oldgrodno.by, F.Woroszylski'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        },
        {
            offset: 120,
            viewStyle: {
                transform: [{translate: [11, 3, 5]}, { scale : 3 }, { rotateY: -120 }]
            },
            text: {
                ru: 'Правая сторона Замковой улицы',
                en: 'Right side of Zamkovaya Street'
            },
            description: {
                ru: `Замковая улица - одна из самых старых городских улиц в центре города Гродно. Является одним из символов города. Протяженность около 360 м, от советской площади до территории нового и старого замков, от которых и пошло название улицы. Является единственной улицей в Беларусии, на которой находятся сразу два королевских замка.\n
                          На улице расположены архитектурные памятники разных эпох: начиная от древнерусского периода и кончая началом 20 века. Улица претерпела на себе все испытания и лихолетья, выпавшие на долю города, её застройка много раз разрушалась и восстанавливалась. В 17 веке произошёл расцвет улицы, на ней было не меньше, чем 7 дворцов магнатов Речи Посполитой. Улица успешно перенесла две мировые войны, однако наибольшие потери понесла в мирное время, когда советскими властями была снесена самая старая и ценная застройка четной стороны улицы, а также взорвано самое высотное на то время здание в городе - Фара Витовта.\n
                          \n Текст wikipedia.org`,
                en: `Zamkovaya street is one of the oldest city streets in Grodno center. It is one of the symbols of the city. Its length is about 360 m, from Soviet square to new and old castles territory, from which the street name of derives. It is the only street in Belarus, on which two castles are located at once. \n
                        The street locates architectural monuments of different eras: from early Russian period to the beginning of the 20th century. The street has undergone all trials and hardships that fell on the city, its construction has many times been destroyed  and restored. 17th century marked golden age of the street when it was occupied with no less than 7 palaces of Polish-Lithuanian Commonwealth magnates. The street successfully came through two world wars, but suffered greatest losses in peacetime when Soviet authorities demolished the oldest and most valuable building on even side of the street, as well as blown up the tallest building in the city then - Fara Vytayta.`
            },
            infoPosition: 3700, // pixels
            galleryStyle: {
                transform: [{translate: [4, 5, 4]}, { rotateY: -120 }]
            },
            oldImages: [
                {
                    source: 'places/zamkovaja/old/zamkovajaRightXX.jpg',
                    year: {
                        ru: 'XX в. Фото grodnonews.by, автор В.Саяпин',
                        en: '20th c. Photo grodnonews.by, V.Sayapin'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaRightXX-1.jpg',
                    year: {
                        ru: 'XX в. Фото grodnonews.by, автор В.Саяпин',
                        en: '20th c. Photo grodnonews.by, V.Sayapin'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaRightXX-2.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by, автор Ф.Ворошильский',
                        en: '20th c. Photo oldgrodno.by, F.Woroszylski'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaRight30.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by',
                        en: '1930th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 6.2,
                        height: 5.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaRight1915.png',
                    year: {
                        ru: '1915 г. Фото oldgrodno.by, автор Ф.Ворошильский',
                        en: '1915, Photo oldgrodno.by, F.Woroszylski'
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
                transform: [{translate: [-1, 2, -5]}, { scale : 1.5 }]
            },
            text: {
                ru: 'Памятная табличка на входе в бывшее гетто',
                en: 'Memorial plaque at former ghetto entrance '
            },
            description: {
                ru: `Гетто в Гродно (ноябрь 1941 - 12 марта 1943) - еврейское гетто, место принудительного переселения евреев города Гродно в процессе преследования и уничтожения евреев во время оккупации территории Беларусии войсками нацистской Германии в период Второй мировой войны.\n
                    В сентябре 1941 года нацисты начали организовать в Гродно 2 гетто, которые заняли площадь около 1,5 гектаров (улица Иерусалимская (современная улица Антонова) и район улицы Большая Троицкая).\n
                    Гетто было создано в центральной части города, в «Старом городе», недалеко от замка и вокруг Большой синагоги, - на улицах Скидельской и Переца, в районе Скидельской площади, а его центральный вход находился со стороны улицы Замковой. На площади меньше половины квадратного километра оно вместило 15 000 узников и просуществовало с ноября 1941 года по март 1943 года. Гетто было окружено 2-метровым забором.\n
                    В 1991 года на улице Замковой, находящейся во время войны на территории одного из двух гетто, установлена мемориальная плита в память о евреях Гродно и близлежащих населённых пунктов, убитых нацистами и их пособниками\n
                    \n Текст wikipedia.org`,
                en: `Grodno ghetto (November 1941 - March 12, 1943) is a Jewish ghetto, place of forced resettlement of Jews in Grodno in the course of persecution and annihilation of Jews during the occupation of the territory of Belarus by the  of Nazi Germany troops during the Second World War. \n
                        In September 1941, the Nazis began to organize two ghettos in Grodno, which were located on approximately 1.5 hectares (Jerusalem street (today - Antonova street) and Bolshaya Troitskaya street). \n
                        Ghetto was created in the central part of the city, in "Old Town", not far from the castle and around the Great Synagogue, on Skidelskaya and Peretz streets, in Skidel area, and its central entrance was located on Zamkovaya street. On its less than half a square kilometers, it accommodated 15,000 prisoners and existed from November 1941 to March 1943. Ghetto was surrounded by a 2-meter fence. \n
                        In 1991 on Zamkovaya Street, which belonged to the territory of one of ghettos during the war, a memorial plaque was erected in memory of  Jews of Grodno and nearby settlements killed by the Nazis and their accomplices.`
            },
            infoPosition: 1800, // pixels
            infoWidth: 1300, // pixels,
            infoHeight: 900, // pixels
            model: {
                style: {
                    transform: [
                        { translate: [18, 3.5, -18] },
                        { rotateZ: -55 },
                        { rotateX: 0 },
                        { rotateY: -10 }
                    ]
                },
                rotationAxis: 'rotateZ',
                obj: 'models/getto/getto.obj',
                mtl: 'models/getto/getto.mtl',
                controls: {
                    transform: [{translate: [-1, -0.5, -10]}, { rotateY: -30 }]
                }
            },
            galleryStyle: {
                transform: [{translate: [-5, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/zamkovaja/old/ghetto.jpg',
                    year: {
                        ru: '1941 г. Фото wikipedia.org',
                        en: '1941, Photo wikipedia.org'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/ghetto1.jpg',
                    year: {
                        ru: '1941 г. Фото wikipedia.org',
                        en: '1941, Photo wikipedia.org'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        },
        {
            offset: -180,
            viewStyle: {
                transform: [{translate: [-1, 2, 5]}, { scale : 1.5 }, { rotateY: 180 }]
            },
            text: {
                ru: 'Дом быта',
                en: 'House of Life'
            },
            description: {
                ru: `------`,
                en: `------`
            },
            infoPosition: 5, // pixels
            galleryStyle: {
                transform: [{translate: [-5, 5, 8]}, { rotateY: 180 }]
            },
            oldImages: [
                {
                    source: 'places/zamkovaja/old/dom1971.jpg',
                    year: {
                        ru: '1971 г. Фото old.grodno.net',
                        en: '1971, Photo old.grodno.net'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/dom1971-1.jpg',
                    year: {
                        ru: '1971 г. Фото old.grodno.net',
                        en: '1971, Photo old.grodno.net'
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

export default zamkovaja;