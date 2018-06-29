const lilea = {
    name: 'lilea',
    // sound: 'audio/birds.mp3',
    style: {},
    portals: [
        {
            name: 'center',
            transformPortal: [{translate: [10, 0, 6]}]
        },
        {
            name: 'brigits',
            transformPortal: [{translate: [6, 0, -12]}]
        },
        {
            name: 'pochta',
            transformPortal: [{translate: [-12, 0, 1]}]
        }
    ],
    labels: [
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [1, 2, -5]}, { scale : 1.5 }]
            },
            text: '«Дом с лилиями» (дом Крейцера)',
            description: `«Дом с лилиями» в стиле модерн построил купец Владимир Крейцер в начале ХХ века. Название происходит от лепнины растительной тематики на фасаде здания.\n
                          Это украшение является одной из главных ценностей дома. В Беларуси строений с такой лепниной всего около двадцати. В доме были жилые комнаты семьи купца, а на первом этаже - магазин и склады. Позже размещались табачный магазин, пивная, спортивное общество, сберкасса, столярная мастерская, рекламное бюро, аптека. В 2007 году дом полностью отселили и продали Беларускому народному банку.\n
                          \nТекст vgr.by`,
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/lilea/old/lileaXIX-XX.png',
                    year: 'XIX-XX вв. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lilea/old/lileaXIX-XX-1.png',
                    year: 'XIX-XX вв. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
            ]
        }
    ]
};

export default lilea;