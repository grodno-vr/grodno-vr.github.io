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
            viewStyle: {
                transform: [{translate: [2, 3, -5]}, { scale : 2.5 }, { rotateY: -40 }]
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
            viewStyle: {
                transform: [{translate: [-17, 2, 10]}, { scale : 3 }, { rotateY: 120 }]
            },
            textStyle: {
                fontSize: 0.2,
                textAlign: 'center'
            },
            text: 'Church of the Holy Cross',
            oldImages: []
        }
    ]
};

export default bridge;