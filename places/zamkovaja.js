const zamkovaja = {
    name: 'zamkovaja',
    style: {},
    portals: [
        {
            name: 'castle',
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
            text: 'Левая сторона Замковой улицы',
            description: `Текст`,
            infoPosition: 500, // pixels
            galleryStyle: {
                transform: [{translate: [-11, 4.5, 0]}, { rotateY: 90 }]
            },
            oldImages: [
                {
                    source: 'places/zamkovaja/old/zamkovajaLeftXX.jpg',
                    year: 'XX в. Фото grodnonews.by, автор В.Саяпин',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaLeftXX-1.jpg',
                    year: 'XX в. Фото grodnonews.by, автор В.Саяпин',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaLeftXX-2.jpg',
                    year: 'XX в. Фото grodnonews.by, автор Ф.Ворошильский',
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
            text: 'Правая сторона Замковой улицы',
            description: `Текст`,
            infoPosition: 3700, // pixels
            galleryStyle: {
                transform: [{translate: [4, 5, 4]}, { rotateY: -120 }]
            },
            oldImages: [
                {
                    source: 'places/zamkovaja/old/zamkovajaRightXX.jpg',
                    year: 'XX в. Фото grodnonews.by, автор В.Саяпин',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaRightXX-1.jpg',
                    year: 'XX в. Фото grodnonews.by, автор В.Саяпин',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaRightXX-2.png',
                    year: 'XX в. Фото oldgrodno.by, автор Ф.Ворошильский',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaRight30.png',
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 6.2,
                        height: 5.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaRight1915.png',
                    year: '1915 г. Фото oldgrodno.by, автор Ф.Ворошильский',
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
            text: 'Памятная табличка на входе в бывшее гетто',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            infoPosition: 1800, // pixels
            infoWidth: 1300, // pixels,
            infoHeight: 900, // pixels
            model: {
                style: {
                    transform: [
                        { translate: [12, 3.5, -10] },
                        { scale: 0.7 },
                        { rotateZ: -60 },
                        { rotateX: -8 },
                        { rotateY: -8 }
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
                    year: '1941 г. Фото wikipedia.org',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/ghetto1.jpg',
                    year: '1941 г. Фото wikipedia.org',
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