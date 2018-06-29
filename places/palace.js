const palace = {
    name: 'palace',
    // sound: 'audio/birds.mp3',
    style: {},
    portals: [
        {
            name: 'garadnica',
            transformPortal: [{translate: [2, 0, 12]}]
        }
    ],
    labels: [
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [-2, 2, -5]}, { scale : 1.5 }]
            },
            text: 'Дворец Валицкого',
            description: `Памятник архитектуры XVIII века, окружённый регулярным парком.\n
                          Являлся городской резиденцией администратора, спроектированной как часть градостроительного ансамбля XVIII века - Городницы, по поручению Антония Тизенгауза, предположительно архитектором И. Мезером, в сотрудничестве с Д. Сакко. По другой версии - Сакко продолжал строительство комплекса, доработав проект.\n
                          В 1793 году подарен королём Станиславом Августом Понятовским подскарбию А. Дзеконскому. В 1789 дворец был продан графу М. Валицкому. В 1858 году комплекс был выкуплен брестским православным епископом Игнатием, для организации резиденции священников гродненской епархии.\n
                          В 1919 году, во время нахождения в Гродно правительства БНР, в здании дворца размещалась беларуская армейская комендатура.\n
                          \nТекст wikipedia.org`,
            infoPosition: 1700, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/palace/old/valickiXX.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/palace/old/valicki1919.png',
                    year: '1919 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/palace/old/valicki1986.png',
                    year: '1986 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        }
    ]
};

export default palace;