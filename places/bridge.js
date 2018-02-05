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
            buttonStyle: {},
            offset: 30,
            viewStyle: {
                transform: [{translate: [2, 3, -5]}, { scale : 1.5 }, { rotateY: -40 }]
            },
            textStyle: {
                fontSize: 0.2,
                textAlign: 'center'
            },
            text: 'Liberation Memorial (T-34/85 Tank)',
            oldImages: [
                {
                    source: 'places/bridge/old/tank1.jpg',
                    year: '1980',
                    style: {
                        transform: [{translate: [2, 7, -9]}, { rotateY: -40 }],
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/tank.png',
                    year: '1975',
                    style: {
                        transform: [{translate: [-1, 8, -14]}, { rotateY: -30 }],
                        width: 4.9,
                        height: 8
                    }
                }
            ]
        },
        {
            buttonStyle: {},
            offset: -80,
            viewStyle: {
                transform: [{translate: [-15, 7, -5]}, { scale : 3 }, { rotateY: 90 }]
            },
            textStyle: {
                fontSize: 0.2,
                textAlign: 'center'
            },
            text: 'Drama Theater',
            description: `A regional drama theater was established by a Decree of the BSSR Council of Ministers (1947). The official opening of the theater was marked with the premiere performance of the play "V Odnom Gorode" (In a Certain City) by A. Safronov.`,
            oldImages: [
                {
                    source: 'places/bridge/old/theater.jpg',
                    year: '1978 - 1984',
                    style: {
                        transform: [{translate: [-17, 9, 0]}, { rotateY: 90, rotateZ: 20 }, { scale: 1.2}],
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater1.jpg',
                    year: '1978 - 1984',
                    style: {
                        transform: [{translate: [-17, 4, 0]}, { rotateY: 90 }, { scale: 1.2}],
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater2.jpg',
                    year: '1978 - 1984',
                    style: {
                        transform: [{translate: [-17, 9, -9]}, { rotateY: 70, rotateZ: 20 }, { scale: 1.2}],
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater3.jpg',
                    year: '1978 - 1984',
                    style: {
                        transform: [{translate: [-17, 4, -9]}, { rotateY: 70 }, { scale: 1.2}],
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/theater4.jpg',
                    year: '1978 - 1984',
                    style: {
                        transform: [{translate: [-17, -1, -9]}, { rotateY: 70 }, { scale: 1.2}],
                        width: 8,
                        height: 4.9
                    }
                }
            ]
        },
        {
            buttonStyle: {},
            offset: -110,
            viewStyle: {
                transform: [{translate: [-17, 2, 10]}, { scale : 3 }, { rotateY: 120 }]
            },
            textStyle: {
                fontSize: 0.2,
                textAlign: 'center'
            },
            text: 'Church of the Holy Cross, Carmelite Monastery',
            oldImages: [
                {
                    source: 'places/bridge/old/holyCross.jpg',
                    year: 'XIX c.',
                    style: {
                        transform: [{translate: [-17, 8, 14]}, { scale : 1.5 }, { rotateY: 120 }],
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross1.png',
                    year: 'XIX c.',
                    style: {
                        transform: [{translate: [-20, 8, 4]}, { scale : 1.5 }, { rotateY: 100 }],
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross2.jpg',
                    year: 'XIX c.',
                    style: {
                        transform: [{translate: [-17, 1, 14]}, { scale : 1.5 }, { rotateY: 120 }],
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/holyCross3.jpg',
                    year: 'XVIII c.',
                    style: {
                        transform: [{translate: [-20, 1, 4]}, { scale : 1.5 }, { rotateY: 95 }],
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
            textStyle: {
                fontSize: 0.2,
                textAlign: 'center'
            },
            text: 'Church of the Holy Cross Discovery',
            description: `In the early XV century a part of modern Grodno came to possession of the Order of the Bernardins by order of Alexander Yagellonchik. As a result, the monks built a wooden monastery there in 1494. Grodno reached its peak in the XVI century: at the time, Stefan Batory made the town be an unofficial capital of the Polish-Lithuanian Commonwealth. His successor King Sigizmund III Vaza ordered to build a brick church on the basis of the Bernardine monastery.
            The Vilno bishop Evstahy Valovich finished the construction of the church and consecrated it on 13 May 1618. This remarkable historical event is eternalized in the memorial tablet on the modern building of the church. However, after a little while, a fire outbreak occurred in the building in 1655. It severely damaged the church. It took almost five years to reconstruct the church: the altars were restored; it was agreed to build a chapel of St. Barbara near the church. One century later, the interior of the church was decorated with three additional altars of St. Mikhail.
            In 1863, the monastery was eliminated and the church became parochial. Over its long existence, the church has suffered lots of changes in its exterior. The restoration works were carried out at different times so today the building of the church combines three architectural styles that is unusual for most Belarusian catholic sanctuaries. However, despite this, the image of the Church of the Cross Discovery presents a single composition possessing great artistic potential.`,
            oldImages: [
                {
                    source: 'places/bridge/old/bernardine1910.png',
                    year: '1910',
                    style: {
                        transform: [{translate: [-4, 7, 10]}, { scale : 1 }, { rotateY: 180 }],
                        width: 4.9,
                        height: 8
                    }
                },
                {
                    source: 'places/bridge/old/bernardine1944.png',
                    year: '1944',
                    style: {
                        transform: [{translate: [0, 7, 10]}, { scale : 1 }, { rotateY: 200 }],
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/bridge/old/bernardine1950.jpg',
                    year: '1950th',
                    style: {
                        transform: [{translate: [-9, 7, 10]}, { scale : 1 }, { rotateY: 150 }],
                        width: 4.9,
                        height: 8
                    }
                },
                {
                    source: 'places/bridge/old/bernardine1950-1.jpg',
                    year: '1950th',
                    style: {
                        transform: [{translate: [1, 3, 10]}, { scale : 1 }, { rotateY: 200 }],
                        width: 8,
                        height: 4.9
                    }
                }
            ]
        }
    ]
};

export default bridge;