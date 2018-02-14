const bridge = {
    name: 'bridge',
    style: {},
    portals: [
        {
            name: 'center',
            transformPortal: [{translate: [12, 0, -7]}]
        }
    ],
    labels: [
        {
            offset: 30,
            viewStyle: {
                transform: [{translate: [2, 3, -5]}, { scale : 1.5 }, { rotateY: -40 }]
            },
            text: 'Liberation Memorial (T-34/85 Tank)',
            description: '<None>',
            infoPosition: 2300,
            galleryStyle: {
                transform: [{translate: [-2, 6, -10]}, { rotateY: -30 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/tank1.jpg',
                    year: '1980',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/tank.png',
                    year: '1975',
                    style: {
                        width: 4.9,
                        height: 8
                    }
                }
            ]
        },
        {
            offset: -80,
            viewStyle: {
                transform: [{translate: [-15, 7, -5]}, { scale : 3 }, { rotateY: 90 }]
            },
            text: 'Drama Theater',
            description: `A regional drama theater was established by a Decree of the BSSR Council of Ministers (1947).\n
            The official opening of the theater was marked with the premiere performance of the play "V Odnom Gorode" (In a Certain City) by A. Safronov.`,
            infoPosition: 700,
            galleryStyle: {
                transform: [{translate: [-16, 6, -2]}, { rotateY: 80 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/theater.jpg',
                    year: '1978 - 1984',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater1.jpg',
                    year: '1978 - 1984',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater2.jpg',
                    year: '1978 - 1984',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater3.jpg',
                    year: '1978 - 1984',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater4.jpg',
                    year: '1978 - 1984',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                }
            ]
        },
        {
            offset: -80,
            viewStyle: {
                transform: [{translate: [-17, 5, -2]}, { scale : 3 }, { rotateY: 80 }]
            },
            text: 'Church of the Bernardine Sisters',
            description: '<None>',
            infoPosition: 600,
            galleryStyle: {
                transform: [{translate: [-18, 6, -1]}, { rotateY: 80 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/bernardineSisters1944.png',
                    year: '1944',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/bernardineSisters1900.png',
                    year: '1900',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/bernardineSisters1934.png',
                    year: '1934',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/bernardineSisters1922.png',
                    year: '1922',
                    style: {
                        width: 4.9,
                        height: 8
                    }
                }
            ]
        },
        {
            offset: -110,
            viewStyle: {
                transform: [{translate: [-17, 2, 10]}, { scale : 3 }, { rotateY: 120 }]
            },
            text: 'Church of the Holy Cross, Carmelite Monastery',
            description: '<None>',
            infoPosition: 80,
            galleryStyle: {
                transform: [{translate: [-18, 5, 8]}, { rotateY: 110 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/holyCross.jpg',
                    year: 'XIX c.',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross1.png',
                    year: 'XIX c.',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross2.jpg',
                    year: 'XIX c.',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross3.jpg',
                    year: 'XVIII c.',
                    style: {
                        width: 6.5,
                        height: 8
                    }
                }
            ]
        },
        {
            buttonStyle: {},
            offset: 180,
            viewStyle: {
                transform: [{translate: [1, 5, 10]}, { scale : 2 }, { rotateY: 190 }]
            },
            text: 'Church of the Holy Cross Discovery',
            description: `In the early XV century a part of modern Grodno came to possession of the Order of the Bernardins by order of Alexander Yagellonchik. As a result, the monks built a wooden monastery there in 1494. Grodno reached its peak in the XVI century: at the time, Stefan Batory made the town be an unofficial capital of the Polish-Lithuanian Commonwealth. His successor King Sigizmund III Vaza ordered to build a brick church on the basis of the Bernardine monastery.\n
            The Vilno bishop Evstahy Valovich finished the construction of the church and consecrated it on 13 May 1618. However, after a little while, a fire outbreak occurred in the building in 1655. It severely damaged the church. It took almost five years to reconstruct the church: the altars were restored; it was agreed to build a chapel of St. Barbara near the church. One century later, the interior of the church was decorated with three additional altars of St. Mikhail.\n
            In 1863, the monastery was eliminated and the church became parochial. Over its long existence, the church has suffered lots of changes in its exterior.`,
            infoPosition: 3600,
            infoHeight: 2200, // pixels
            infoWidth: 1000, // pixels
            galleryStyle: {
                transform: [{translate: [-4, 7, 12]}, { rotateY: 190 }]
            },
            oldImages: [
                {
                    source: 'places/bridge/old/bernardine1910.png',
                    year: '1910',
                    style: {
                        width: 4.9,
                        height: 8
                    }
                },
                {
                    source: 'places/bridge/old/bernardine1950.jpg',
                    year: '1950th',
                    style: {
                        width: 4.9,
                        height: 8
                    }
                },
                {
                    source: 'places/bridge/old/bernardine1950-1.jpg',
                    year: '1950th',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                }
            ]
        }
    ]
};

export default bridge;