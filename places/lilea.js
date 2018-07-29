const lilea = {
    name: 'lilea',
    sound: 'audio/vilenskaja.m4a',
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
            text: {
                ru: '"Дом с лилиями" (дом Крейцера)',
                en: `"House with lilies" (Kreuzer's house)`
            },
            description: {
                ru: `"Дом с лилиями" в стиле модерн построил купец Владимир Крейцер в начале ХХ века. Название происходит от лепнины растительной тематики на фасаде здания.\n
                          Это украшение является одной из главных ценностей дома. В Беларуси строений с такой лепниной всего около двадцати. В доме были жилые комнаты семьи купца, а на первом этаже - магазин и склады. Позже размещались табачный магазин, пивная, спортивное общество, сберкасса, столярная мастерская, рекламное бюро, аптека. В 2007 году дом полностью отселили и продали Беларускому народному банку.\n
                          \nТекст vgr.by`,
                en: `"House with lilies" in art Nouveau style was built by merchant Vladimir Kreuzer in the early 20th century. Its name comes from herbal theme plasterwork on the building facade.\n
                    This decoration is one of the main treasures of the house. In Belarus there are only about twenty buildings with such plasterwork work. The House contained living rooms of the merchant's family and a shop and warehouses on the first floor. Later it housed a tobacco shop, pub, sports association, savings bank, joiner’s shop, advertising agency, pharmacy. In 2007 the house was completely resettled and sold to Belarusky Narodny Bank.`
            },
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/lilea/old/lileaXIX-XX.png',
                    year: {
                        ru: 'XIX-XX вв. Фото oldgrodno.by',
                        en: '19-20th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/lilea/old/lileaXIX-XX-1.png',
                    year: {
                        ru: 'XIX-XX вв. Фото oldgrodno.by',
                        en: '19-20th c. Photo oldgrodno.by'
                    },
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