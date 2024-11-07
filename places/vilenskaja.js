const vilenskaja = {
    name: 'vilenskaja',
    sound: 'audio/vilenskaja.m4a',
    style: {},
    portals: [
        {
            name: 'center',
            transformPortal: [{translate: [-2, 0, 12]}]
        },
        {
            name: 'zags',
            transformPortal: [{translate: [2, 0, -12]}]
        }
    ],
    labels: [
        {
            offset: -130,
            viewStyle: {
                transform: [{translate: [-6, 3, 8]}, { scale : 3 }, { rotateY: 150 }]
            },
            text: {
                ru: 'Доминиканский монастырь (Гимназия)',
                en: 'Dominican Monastery (Gymnasium)'
            },
            description: {
                ru: `Здание бывшего доминиканского монастыря (первая половина XVIII в.), доминиканской школы и гимназии, губернской мужской гимназии, женской гимназии имени Эмилии Плятер.\n
            Среди учителей гимназии были историки Евстафий Орловский (1863-1913) и Иосиф Иодковский (1890-1950), языковед Йонас Яблонскис (1860-1930), памятная табличка с его профилем находится на одной из стен гимназии.\n
            Учениками гимназии были знаменитые ученые и общественно-политические деятели, в том числе прославленный цирковой силач Якуба Чеховской.\n`,
                en: `This is the building of former Dominican monastery (built in the first half of the 18th century), Dominican school and gymnasium, provincial male gymnasium, Emilia Plater female gymnasium. \n
                        Among the teachers of the gymnasium were historians Eustathius Orlovsky (1863-1913) and Joseph Iodkovsky (1890-1950), linguist Jonas Jablonskis (1860-1930), whose commemorative plaque is on one of gymnasium walls. \n
                        Among gymnasium pupils were famous scientists and social and political figures, including the famous circus strongman Yakub Chekhovskoy.`
            },
            infoPosition: 1, // pixels
            infoWidth: 1300, // pixels,
            infoHeight: 900, // pixels
            model: {
                style: {
                    transform: [
                        { translate: [-6, -1, 0] },
                        { rotateZ: -10 },
                        { rotateX: -150 },
                        { rotateY: 90 }
                    ]
                },
                rotationAxis: 'rotateZ',
                obj: 'models/yonas/yonas.obj',
                mtl: 'models/yonas/yonas.mtl',
                controls: {
                    transform: [{translate: [-18, -0.5, 0]}, { rotateY: 90 }]
                }
            },
            galleryStyle: {
                transform: [{translate: [-10, 4.5, 6]}, { rotateY: 140 }]
            },
            oldImages: [
                {
                    source: 'places/vilenskaja/old/gimnasiumXX-2.png',
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
                    source: 'places/vilenskaja/old/gimnasiumXX.jpg',
                    year: {
                        ru: 'XX в. Фото vgr.by',
                        en: '20th c. Photo vgr.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/gimnasiumXX-1.png',
                    year: {
                        ru: 'XX в. Фото vgr.by',
                        en: '20th c. Photo vgr.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/gimnasium1930-1.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by, Ф.Ворошильский',
                        en: '1930th, Photo oldgrodno.by, F.Woroszylski'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/gimnasium1930.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by, Ф.Ворошильский',
                        en: '1930th, Photo oldgrodno.by, F.Woroszylski'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/gimnasium1944.png',
                    year: {
                        ru: '1944 г. Фото oldgrodno.by',
                        en: '1944, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        },
        {
            offset: -90,
            viewStyle: {
                transform: [{translate: [-13, 3, 1]}, { scale : 3 }, { rotateY: 90 }]
            },
            text: {
                ru: 'Памятник-бюст Маршала Соколовского В. Д.',
                en: 'Marshal Sokolovsky bust'
            },
            description: {
                ru: `Будущий Маршал СССР Василий Данилович Соколовский появился на свет в д. Козлики, входившей на то время в Белостокский уезд Гродненской губернии (теперь деревня находится в Белостокском повяте Подляского воеводства Польши) 9 (21) июля 1897 года. \n
                          В.Д. Соколовский является известным советским военачальником, Маршалом Советского Союза, Героем Советского Союза, а также автором труда под названием «Военная стратегия».
                          Торжественное открытие монумента было осуществлено в 1973 году.\n
                          До 1960-ого года рядом с этим монументом стоял памятник И. В. Сталину. Согласно одной из легенд, скульптура И. В. Сталина была закопана в глубокой яме, вырытой рядом с памятником.`,
                en: `Future USSR marshal Vasily Danilovich Sokolovsky was born on July 9 (21), 1897 in Kozliki village, which at that time belonged to Bialystok district of Grodno Province (now the village is located in the Bialystok District of Podlaskie Province of Poland). \n
                      Sokolovsky is a well-known Soviet military commander, Soviet Union Marshal and Hero as well as the writer of "Military Strategy".
                      The grand opening of the monument was carried out in 1973. \n
                      Until the 1960s Stalin monument stood next to the monument.   According to one of the legends, Stalin sculpture was buried in a deep pit near the monument.`
            },
            infoPosition: 500, // pixels
            galleryStyle: {
                transform: [{translate: [-11, 4.5, 0]}, { rotateY: 90 }]
            },
            oldImages: [
                {
                    source: 'places/vilenskaja/old/sokolovXIX-XX.jpg',
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
                    source: 'places/vilenskaja/old/sokolov1958.jpg',
                    year: {
                        ru: '1958 г. Фото old.grodno.net',
                        en: '1958, Photo old.grodno.net'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/sokolovXX.png',
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
                    source: 'places/vilenskaja/old/sokolovXX-1.png',
                    year: {
                        ru: 'XX в. Фото  oldgrodno.by',
                        en: '20th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 5.2
                    }
                },
            ]
        },
        {
            offset: 120,
            viewStyle: {
                transform: [{translate: [8, 4, 8]}, { scale : 3 }, { rotateY: -120 }]
            },
            text: {
                ru: 'Кинотеатр "Гродно"',
                en: 'Cinema "Grodno"'
            },
            description: {
                ru: `Напротив скверика в 1961 г. открыли кинотеатр «Гродно», который стал первым широкоэкранным, а затем и широкоформатным кинотеатром в области. Кинотеатр пользовался огромным спросом среди населения.\n
            Цветные широкоэкранные фильмы, тем более широкоформатные, тогда были в диковинку и народ буквально валом валил на каждую премьеру. Вспоминается фильм «Человек-амфибия». Когда он появился в кинопрокате, в городе возник небывалый ажиотаж. Билеты приобрести можно было, простояв несколько часов в очереди, которая в 2-3 ряда от касс тянулась аж до проезжей части улицы. Работали кассы предварительной продажи билетов, но и они не спасали положение.\n
            \n\nТекст kinogrodno.by`,
                en: `Cinema "Grodno" was opened opposite the public garden in 1961 and became the first widescreen, and later - large-format cinema of the region. The cinema had great success with the population. \n
                        Color widescreen films, especially in large format, used to be a wonder back then then and people literally beat a path to every premiere. "Amphibian Man" springs to mind. When its distribution began an unprecedented rush started in the city. One could buy tickets only after spending several hours in the queue, 2-3 rows of which stretched right up from the counters to the roadway. Pre-sale counters were working but they also did not save the situation.`
            },
            infoPosition: 3700, // pixels
            galleryStyle: {
                transform: [{translate: [3, 5, 5]}, { rotateY: -120 }]
            },
            oldImages: [
                {
                    source: 'places/vilenskaja/old/kino1960th.png',
                    year: {
                        ru: '1960-е, Фото oldgrodno.by',
                        en: '1960th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/kino1965.png',
                    year: {
                        ru: '1965 г. Фото oldgrodno.by',
                        en: '1965, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/kino1975.png',
                    year: {
                        ru: '1975 г. Фото oldgrodno.by',
                        en: '1975, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/kino1979.png',
                    year: {
                        ru: '1979 г. Фото oldgrodno.by',
                        en: '1979, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/kino1930th.jpg',
                    year: {
                        ru: '1920-30 гг. Фото old.grodno.net',
                        en: '1920-30, Photo old.grodno.net'
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
                ru: 'ул. Доминиканская (Советская)',
                en: 'Dominican (Soviet) Street'
            },
            description: {
                ru: `Советская улица (раньше Виленская, Соборная, Доминиканская) - одна из самых старых улиц в историческом центре города Гродно, центральная пешеходная улица города (с 1964 г). В 1930-е улицу выложили брусчаткой. Протяженность около 500 метров от Площади Советской до улицы Элизы Ожешки. На улице находятся многочисленные административные, торговые, культурные и развлекательные заведения.\n 
                          Улица имеет большую историческую ценность, и, за некоторым исключением, сохранилась почти вся застройка XIX - начало XX века.\n
                          На улице жили и работали многие участники восстаний 1830-1831 и 1863-1864 годов.\n
                          \n\n Текс wikipedia.org`,
                en: `Sovetskaya street (formerly Vilenskaya, Sobornaya, Dominican) is one of the oldest streets in the historical center of Grodno and the central pedestrian street of the city (since 1964). In the 1930s the street was laid out with paving stones. Its length amounts to about 500 meters from Sovetskaya square to Eliza Ozheshko street. The street locates numerous administrative, commercial, cultural and entertainment venues. \n
                     The street has a great historical value and with some exceptions almost the whole construction of the 19th - beginning of the 20th century has been preserved. \n
                     The street located homes and workplaces of many participants of the uprisings of 1830-1831 and 1863-1864.`
            },
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/vilenskaja/old/dominikXIX-XX.jpg',
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
                    source: 'places/vilenskaja/old/dominikXIX-XX-1.jpg',
                    year: {
                        ru: 'XIX-XX вв. Фото old.grodno.net',
                        en: '19-20th c. Photo old.grodno.net'
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

export default vilenskaja;
