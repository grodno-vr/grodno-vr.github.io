const agro = {
    name: 'agro',
    sound: 'audio/vilenskaja.m4a',
    style: {},
    portals: [
        {
            name: 'zoo',
            transformPortal: [{translate: [11, 0, -6]}]
        },
        {
            name: 'kirha',
            transformPortal: [{translate: [10, 0, 8]}]
        }
    ],
    labels: [
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [1, 2, -5]}, { scale : 1.5 }]
            },
            text: {
                ru: 'Здание Аграрного Университета',
                en: 'Building of Agrarian University'

            },
            description: {
                ru: `----`,
                en: `----`

            },
            infoPosition: 1900, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 7, -8]}]
            },
            oldImages: []
        }
    ]
};

export default agro;