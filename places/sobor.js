const sobor = {
    name: 'sobor',
    sound: 'audio/sobor.m4a',
    style: {},
    portals: [
        {
            name: 'ozheshko',
            transformPortal: [{translate: [-8, 0, -10]}]
        },
        {
            name: 'kirha',
            transformPortal: [{translate: [8, 0, -9]}]
        },
        {
            name: 'zoo',
            transformPortal: [{translate: [10, 0, 2]}]
        }
    ],
    labels: [
        {
            offset: 140,
            viewStyle: {
                transform: [{translate: [8, 5, 8]}, { scale : 3 }, { rotateY: -140 }]
            },
            text: {
                ru: 'Свято-Покровский Кафедральный Собор',
                en: `St. Basil's Cathedral`
            },
            description: {
                ru: `Возведённый в ретроспективно-русском стиле из кирпича в 1904-1905 годах по проекту архитектора М. М. Прозорова, собор был построен в память об офицерах и нижних чинах 26-й артиллерийской бригады, погибших во время русско-японской войны. Согласно одному из мнений, именно благодаря военному инженеру И. Е. Савельеву собор получил неповторимые черты.\n
                          За основу при строительстве Кафедрального собора была взята церковь Каспийского пехотного полка в Петергофе. Ещё в конце XIX века царским правительством было принято решение о строительстве гарнизонных и полковых церквей. В конце 1901 года появился приказ Николая II.\n
                          При церкви решили открыть музей и небольшой мемориал. Возведенная церковь стала называться Свято-Покровским собором. 30 сентября (11 ноября) 1907 года храм был освящен.\n
                          После освобождения города в июле 1944 года часть мощей Гавриила Белостокского была перенесена в Свято-Покровский собор, где они находились в подвале до 1992 года. С 21 по 22 сентября 1992 года его мощи были торжественно перенесены в Свято-Николаевский собор Белостока.\n
                          18 февраля 1992 года, после провозглашения независимости Беларусии, была восстановлена Гродненская епархия, которая была закрыта в 1951 году. После этого Свято-Покровский собор снова получил статус кафедрального.\n
                          \n Текст wikipedia.org`,
                en: `Brick cathedral in a retrospective-Russian style was built in 1904-1905 upon the project of architect Prozorov in memory of the officers and lower ranks officials of the 26th artillery brigade, who died during the Russo-Japanese War. According to one of the opinions, it was thanks to military engineer Saveliev that the cathedral received its unique features. \n
                     The church of the Caspian Infantry Regiment in Peterhof was taken as a basis for the construction of the Cathedral. At the end of the 19th century the tsarist government decided to build garrison and regimental churches. At the end of 1901 an order from Nicholas II was published. \n
                     It was decided to open a museum and small memoria near the church. The erected church became st. Basil’s Cathedral. On September 30 (November 11), 1907 the Church was consecrated. \n
                     After the city liberation in July 1944 part of the relics of Gabriel Bialostoksky was transferred to st. Basil’s Cathedral, where they were kept in the cellar until 1992. From September 21 to 22, 1992, the relics were solemnly transferred to the St. Nicholas Cathedral of Bialystok. \n
                     Following the proclamation of independence of Belarus, on February 18, 1992 the Grodno Diocese, which was closed in 1951, was re-established. Since then st. Basil’s Cathedral again received the status of a cathedral.`
            },
            infoPosition: 3750, // pixels
            galleryStyle: {
                transform: [{translate: [3, 7, 5]}, { rotateY: -125 }]
            },
            oldImages: [
                {
                    source: 'places/sobor/old/sobor1915.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1915 г. Фото oldgrodno.by',
                    style: {
                        width: 4.6,
                        height: 6.5
                    }
                },
                {
                    source: 'places/sobor/old/sobor1930th.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 4.6,
                        height: 6.5
                    }
                },
                {
                    source: 'places/sobor/old/soborXX.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 4.6,
                        height: 6.5
                    }
                },
                {
                    source: 'places/sobor/old/soborXX-1.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 4.6,
                        height: 6.5
                    }
                },
                {
                    source: 'places/sobor/old/sobor1941-44.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1941-44 гг. Фото oldgrodno.by',
                    style: {
                        width: 4.6,
                        height: 6.5
                    }
                },
                {
                    source: 'places/sobor/old/sobor1941-44-1.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1941-44 гг. Фото oldgrodno.by',
                    style: {
                        width: 4.6,
                        height: 6.5
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
                ru: 'Университет им. Янки Купалы',
                en: 'Yanka Kupala State University'
            },
            description: {
                ru: `Учреждение образования «Гродненский государственный университет имени Янки Купалы» - ведущий ВУЗ Гродненской области. Основан в 1940 г. как учительский институт, преобразован в 1978 г.\n
                          Возле входа в корпус находится бюст поэта Я. Купалы. Памятник был установлен в 1965 году. Его открытие было связано с присвоением на тот момент педагогическому институту имени Янки Купалы в честь 75-летнего юбилея поэта. Бюст выполнен из бронзы и имеет высоту 1,2 метра. Общая высота памятника вместе с бетонной стелой составляет более 5 метров.
                          \n\n Текст grodno.in`,
                en: `Educational institution "Yanka Kupala state university of Grodno" is the leading university in the Grodno region. It was founded in 1940 as a teacher's institute and transformed in 1978. \n
                     Next to the entrance to the building stands the bust of poet Kupala. The monument was installed in 1965. Its unveiling was associated with the pedagogical institute’s naming after Yanka Kupala in honor of the poet's 75th birthday. The bust is made of bronze and is 1.2 metres high. The total height of the monument including concrete stela is more than 5 meters.`
            },
            infoPosition: 1900, // pixels
            infoWidth: 1300, // pixels,
            infoHeight: 900, // pixels
            model: {
                style: {
                    // borderWidth: 2,
                    // borderColor: 'white',
                    transform: [
                        { translate: [8, 1, -16] },
                        { rotateZ: -40 },
                        { rotateX: 35 },
                        { rotateY: -20 }
                    ]
                },
                rotationAxis: 'rotateZ',
                obj: 'models/yanka/yanka.obj',
                mtl: 'models/yanka/yanka.mtl',
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
                    source: 'places/sobor/old/university1960th.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1960-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/sobor/old/university1964.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1964 г. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/sobor/old/university1967.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1967 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/sobor/old/university1975.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1975 г. Фото grodno.in',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/sobor/old/university1992.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1992 г. Фото grodno.in',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        }
    ]
};

export default sobor;