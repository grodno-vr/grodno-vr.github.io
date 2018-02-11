const castle = {
    name: 'castle',
    style: {},
    portals: [
        {
            name: 'center',
            transformPortal: [{translate: [5, 0, 15]}]
        }
    ],
    labels: [
        {
            viewStyle: {
                transform: [{translate: [1, 1, -10]}, { scale: 2 }]
            },
            textStyle: {
                fontSize: 0.2,
                textAlign: 'center'
            },
            text: 'Commonwealth Coat of Arms',
            description: `Architectural Polish-Lithuanian commonwealth coat of arms (first half of 18th century).\n
            More information about Hrodna (Grodno) history: http://harodnia.com`,
            infoPosition: 1800, // pixels
            model: {
                style: {
                    transform: [
                        { translate: [-5, 2, -67] },
                        { scale: 1.1 },
                        { rotateZ: 40 },
                        { rotateX: 100 },
                        { rotateY: 10 }
                    ]
                },
                rotationAxis: 'rotateZ',
                obj: 'models/coat/coat_clean.obj',
                mtl: 'models/coat/coat_clean_tex.mtl'

            },
            oldImages: []
        }
    ]
};

export default castle;