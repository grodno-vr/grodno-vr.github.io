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
            buttonStyle: {},
            viewStyle: {
                transform: [{translate: [1, 1, -10]}, { scale: 2 }]
            },
            textStyle: {
                fontSize: 0.2,
                textAlign: 'center'
            },
            text: 'Commonwealth Coat of Arms',
            description: 'Architectural Polish-Lithuanian commonwealth coat of arms (first half of 18th century). More information about Hrodna (Grodno) history: http://harodnia.com',
            oldImages: []
        }
    ]
};

export default castle;