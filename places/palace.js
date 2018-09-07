const palace = {
    name: 'palace',
    sound: 'audio/vilenskaja.m4a',
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
            text: {
                ru: 'Дворец Валицкого',
                en: 'Valitsky Palace'
            },
            description: {
                ru: `Памятник архитектуры XVIII века, окружённый регулярным парком.\n
                          Являлся городской резиденцией администратора, спроектированной как часть градостроительного ансамбля XVIII века - Городницы, по поручению Антония Тизенгауза, предположительно архитектором И. Мезером, в сотрудничестве с Д. Сакко. По другой версии - Сакко продолжал строительство комплекса, доработав проект.\n
                          В 1793 году подарен королём Станиславом Августом Понятовским подскарбию А. Дзеконскому. В 1789 дворец был продан графу М. Валицкому. В 1858 году комплекс был выкуплен брестским православным епископом Игнатием, для организации резиденции священников гродненской епархии.\n
                          В 1919 году, во время нахождения в Гродно правительства БНР, в здании дворца размещалась беларуская армейская комендатура.\n
                          \nТекст wikipedia.org`,
                en: `It is a monument of architecture of the 18th century surrounded by a formal park.\n
                     It served as  the city residence of the administrator, designed as a part of an urban ensemble of the 18th century Gorodnitsa, presumably by architect Mezer, in cooperation with Sacco on order of Antony Tizengauz. According to another version Sakko continued the construction of the complex after refining the project.\n
                     In 1793 it was presented to mayor Zakonsky by king Stanislaw Augustus Poniatowski. In 1789 the Palace was sold to count Valitsky. In 1858 the complex was bought by Brest orthodox bishop Ignatius for organizing it as residence for the priests of the Grodno eparchy.\n
                     In 1919 while the government of Belarusian People's Republic situated in Grodno the Palace building served as Belarusian army commandant's office.`
            },
            infoPosition: 1700, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/palace/old/valickiXIX.jpg',
                    year: {
                        ru: 'XIX в. Н.Орда',
                        en: '19th c. N.Orda'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/palace/old/valickiXX.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by',
                        en: '20th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/palace/old/valicki1919.png',
                    year: {
                        ru: '1919 г. Фото oldgrodno.by',
                        en: '1919, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/palace/old/valicki1986.png',
                    year: {
                        ru: '1986 г. Фото oldgrodno.by',
                        en: '1986, Photo oldgrodno.by'
                    },
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