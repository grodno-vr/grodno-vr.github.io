const pochta = {
    name: 'pochta',
    // sound: 'audio/birds.mp3',
    style: {},
    portals: [
        {
            name: 'ozheshko',
            transformPortal: [{translate: [-8, 0, -12]}]
        },
        {
            name: 'lilea',
            transformPortal: [{translate: [12, 0, -8]}]
        },
        {
            name: 'swiss_valley',
            transformPortal: [{translate: [-10, 0, -6]}]
        },
        {
            name: 'fire',
            transformPortal: [{translate: [-16, 0, -1]}]
        },
        {
            name: 'zags',
            transformPortal: [{translate: [12, 0, 10]}]
        },
        {
            name: 'lenina',
            transformPortal: [{translate: [-2, 0, 14]}]
        },
        {
            name: 'garadnica',
            transformPortal: [{translate: [-12, 0, 7]}]
        }
    ],
    labels: [
        {
            offset: -15,
            viewStyle: {
                transform: [{translate: [0, 1, -3]}, { rotateY : 15 }]
            },
            text: {
                ru: 'Здание Почты',
                en: 'Postal Service'
            },
            description: {
                ru: `---`,
                en: `---`
            },
            infoPosition: 1700, // pixels
            galleryStyle: {
                transform: [{translate: [-5, 4, -8]}, { rotateY : 15 }]
            },
            oldImages: [
                {
                    source: 'places/pochta/old/pochtaXIX-XX.png',
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
                    source: 'places/lenina/old/pochtaXX.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/pochtaXX-1.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/pochtaXX-2.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/pochtaXX-3.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lenina/old/pochta1975.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1975 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        },
        {
            offset: 20,
            viewStyle: {
                transform: [{translate: [3, 1.5, -4]}, { rotateY : -15 }]
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
            infoPosition: 2200, // pixels
            galleryStyle: {
                transform: [{translate: [3, 6, -8]}, { rotateY : -25 }]
            },
            oldImages: [
                {
                    source: 'places/lenina/old/kino1930th.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 5,
                        height: 6.2
                    }
                },
                {
                    source: 'places/lenina/old/kino1941-44.png',
                    year: {
                        ru: '',
                        en: ''
                    },
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

export default pochta;