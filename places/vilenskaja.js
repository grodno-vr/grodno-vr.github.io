const vilenskaja = {
    name: 'vilenskaja',
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
            text: 'Доминиканский монастырь (Гимназия)',
            description: `Здание бывшего доминиканского монастыря (первая половина XVIII в.), доминиканской школы и гимназии, губернской мужской гимназии, женской гимназии имени Эмилии Плятер.\n
            Среди учителей гимназии были историки Евстафий Орловский (1863-1913) и Иосиф Иодковский (1890-1950), языковед Йонас Яблонскис (1860-1930), памятная табличка с его профилем находится на одной из стен гимназии.\n
            Учениками гимназии были знаменитые ученые и общественно-политические деятели, в том числе прославленный цирковой силач Якуба Чеховской.\n`,
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
                    source: 'places/vilenskaja/old/gimnasiumXX.jpg',
                    year: 'XX в. Фото vgr.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/gimnasiumXX-1.png',
                    year: 'XX в. Фото vgr.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/gimnasium1930-1.png',
                    year: '1930-е, Фото oldgrodno.by, автор Ф.Ворошильский',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/gimnasium1930.png',
                    year: '1930-е, Фото old.grodno.net, автор Ф.Ворошильский',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/gimnasium1944.png',
                    year: '1944 г. Фото oldgrodno.by',
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
            text: 'Памятник-бюст Маршала Соколовского В. Д.',
            description: `Будущий Маршал СССР Василий Данилович Соколовский появился на свет в д. Козлики, входившей на то время в Белостокский уезд Гродненской губернии (теперь деревня находится в Белостокском повяте Подляского воеводства Польши) 9 (21) июля 1897 года. \n
                          В.Д. Соколовский является известным советским военачальником, Маршалом Советского Союза, Героем Советского Союза, а также автором труда под названием «Военная стратегия».
                          Торжественное открытие монумента было осуществлено в 1973 году.\n
                          До 1960-ого года рядом с этим монументом стоял памятник И. В. Сталину. Согласно одной из легенд, скульптура И. В. Сталина была закопана в глубокой яме, вырытой рядом с памятником.`,
            infoPosition: 500, // pixels
            galleryStyle: {
                transform: [{translate: [-11, 4.5, 0]}, { rotateY: 90 }]
            },
            oldImages: [
                {
                    source: 'places/vilenskaja/old/sokolovXIX-XX.jpg',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/sokolov1958.jpg',
                    year: '1958 г. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/sokolovXX.png',
                    year: 'XX вв. Фото hrodno.life',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/sokolovXX-1.png',
                    year: 'XX в. Фото  oldgrodno.by',
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
            text: 'Кинотеатр "Гродно"',
            description: `Напротив скверика в 1961 г. открыли кинотеатр «Гродно», который стал первым широкоэкранным, а затем и широкоформатным кинотеатром в области. Кинотеатр пользовался огромным спросом среди населения.\n
            Цветные широкоэкранные фильмы, тем более широкоформатные, тогда были в диковинку и народ буквально валом валил на каждую премьеру. Вспоминается фильм «Человек-амфибия». Когда он появился в кинопрокате, в городе возник небывалый ажиотаж. Билеты приобрести можно было, простояв несколько часов в очереди, которая в 2-3 ряда от касс тянулась аж до проезжей части улицы. Работали кассы предварительной продажи билетов, но и они не спасали положение.\n
            \n\nТекст kinogrodno.by`,
            infoPosition: 3700, // pixels
            galleryStyle: {
                transform: [{translate: [3, 5, 5]}, { rotateY: -120 }]
            },
            oldImages: [
                {
                    source: 'places/vilenskaja/old/kino1960th.png',
                    year: '1960-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/kino1965.png',
                    year: '1965 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/kino1975.png',
                    year: '1975 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/kino1979.png',
                    year: '1979 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/kino1930th.jpg',
                    year: '1920-30 гг. Фото old.grodno.net',
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
            text: 'ул. Доминиканская (Советская)',
            description: `Советская улица (раньше Виленская, Соборная, Доминиканская) - одна из самых старых улиц в историческом центре города Гродно, центральная пешеходная улица города (с 1964 г). В 1930-е улицу выложили брусчаткой. Протяженность около 500 метров от Площади Советской до улицы Элизы Ожешки. На улице находятся многочисленные административные, торговые, культурные и развлекательные заведения.\n 
                          Улица имеет большую историческую ценность, и, за некоторым исключением, сохранилась почти вся застройка XIX - начало XX века.\n
                          На улице жили и работали многие участники восстаний 1830-1831 и 1863-1864 годов.\n
                          \n\n Текс wikipedia.org`,
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/vilenskaja/old/dominikXIX-XX.jpg',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/vilenskaja/old/dominikXIX-XX-1.jpg',
                    year: 'XIX-XX вв. Фото old.grodno.net',
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