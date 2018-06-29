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
            text: 'Свято-Покровский Кафедральный Собор',
            description: `Возведённый в ретроспективно-русском стиле из кирпича в 1904-1905 годах по проекту архитектора М. М. Прозорова, собор был построен в память об офицерах и нижних чинах 26-й артиллерийской бригады, погибших во время русско-японской войны. Согласно одному из мнений, именно благодаря военному инженеру И. Е. Савельеву собор получил неповторимые черты.\n
                          За основу при строительстве Кафедрального собора была взята церковь Каспийского пехотного полка в Петергофе. Ещё в конце XIX века царским правительством было принято решение о строительстве гарнизонных и полковых церквей. В конце 1901 года появился приказ Николая II.\n
                          При церкви решили открыть музей и небольшой мемориал. Возведенная церковь стала называться Свято-Покровским собором. 30 сентября (11 ноября) 1907 года храм был освящен.\n
                          После освобождения города в июле 1944 года часть мощей Гавриила Белостокского была перенесена в Свято-Покровский собор, где они находились в подвале до 1992 года. С 21 по 22 сентября 1992 года его мощи были торжественно перенесены в Свято-Николаевский собор Белостока.\n
                          18 февраля 1992 года, после провозглашения независимости Беларусии, была восстановлена Гродненская епархия, которая была закрыта в 1951 году. После этого Свято-Покровский собор снова получил статус кафедрального.\n
                          \n Текст wikipedia.org`,
            infoPosition: 3750, // pixels
            galleryStyle: {
                transform: [{translate: [3, 7, 5]}, { rotateY: -125 }]
            },
            oldImages: [
                {
                    source: 'places/sobor/old/sobor1915.png',
                    year: '1915 г. Фото oldgrodno.by',
                    style: {
                        width: 4.6,
                        height: 6.5
                    }
                },
                {
                    source: 'places/sobor/old/sobor1930th.png',
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 4.6,
                        height: 6.5
                    }
                },
                {
                    source: 'places/sobor/old/soborXX.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 4.6,
                        height: 6.5
                    }
                },
                {
                    source: 'places/sobor/old/soborXX-1.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 4.6,
                        height: 6.5
                    }
                },
                {
                    source: 'places/sobor/old/sobor1941-44.png',
                    year: '1941-44 гг. Фото oldgrodno.by',
                    style: {
                        width: 4.6,
                        height: 6.5
                    }
                },
                {
                    source: 'places/sobor/old/sobor1941-44-1.png',
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
            text: 'Университет им. Янки Купалы',
            description: `Учреждение образования «Гродненский государственный университет имени Янки Купалы» - ведущий ВУЗ Гродненской области. Основан в 1940 г. как учительский институт, преобразован в 1978 г.\n
                          Возле входа в корпус находится бюст поэта Я. Купалы. Памятник был установлен в 1965 году. Его открытие было связано с присвоением на тот момент педагогическому институту имени Янки Купалы в честь 75-летнего юбилея поэта. Бюст выполнен из бронзы и имеет высоту 1,2 метра. Общая высота памятника вместе с бетонной стелой составляет более 5 метров.
                          \n\n Текст grodno.in`,
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
                    year: '1960-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/sobor/old/university1964.png',
                    year: '1964 г. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/sobor/old/university1967.png',
                    year: '1967 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/sobor/old/university1975.png',
                    year: '1975 г. Фото grodno.in',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/sobor/old/university1992.png',
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