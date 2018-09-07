const monastery = {
    name: 'monastery',
    sound: 'audio/vilenskaja.m4a',
    style: {},
    portals: [
        {
            name: 'castles',
            transformPortal: [{translate: [-15, -0.5, -2]}]
        },
        {
            name: 'bridge',
            transformPortal: [{translate: [12, 0, -2]}]
        }
    ],
    labels: [
        {
            offset: -10,
            viewStyle: {
                transform: [{translate: [-2, 2, -4]}, { rotateY : 10 }]
            },
            text: {
                ru: 'Свято-Рождество-Богородицкий Женский Монастырь',
                en: 'Svyato-Rozhdestvo-Bogoroditsky Female Monastery'
            },
            description: {
                ru: `Церковь Рождества Богородицы - православный храм. При нем находится женский Свято-Рождество-Богородицкий монастырь.\n
                          Первые летописные упоминания о нём датированы 1506 годом. Тогда на его месте стоял деревянный храм - Пречистенская церковь. Позднее она была перестроена в каменную, а в начале 17 века стала униатским монастырём. Сюда переселились 4 монахини. Им были переданы земли западной территории храма.\n
                          Пречистенский собор погиб в пожаре 1654 года. На его месте монахини возвели небольшую деревянную церковь - Рождества Богородицы. Жилой корпус был отстроен рядом. Постройку не щадили пожары, однако упорные монахини каждый раз восстанавливали разрушенное строение.\n
                          В 1843 году храм получил статус Рождество-Богордичного монастыря 2 класса. Сюда привезли ещё 11 монахинь и послушниц. На территории храма был открыт сиротский приют, а рядом с ним появилась церковь Сергия Радонежского. В скором времени здесь побывал император Александр II.\n
                          \n\n Текст grodno.in`,
                en: `The Church of the Nativity of the Virgin is an orthodox church. Female Svyato-Rozhdestvo-Bogoroditsky (Holy Nativity of the Virgin) monastery operates by the church.\n
                    Records first mention it in 1506. Then on its place there was a wooden temple - Prechistensky Church. Later it was rebuilt in stone, and in the early 17th century became a uniat monastery. Four nuns moved here. They were given the land of the Western territory of the temple.\n
                    Prechistensky cathedral was destroyed in the fire of 1654. On its place nuns built a small wooden church - the Church of the Nativity of the Virgin. Nearby they built a residential building. The building was not spared from the fires but each time persistent nuns kept on restoring the destroyed site.\n
                    In 1843 the Church received the state of Rozhdestvo-Bogoroditsky monastery of the 2nd class. Another eleven nuns and noviciates were brought here. On the territory of the Church an orphanage was opened, and next to it - Church of Sergius Radonezhsky . Soon the Emperor Alexander II visited this place.`
            },
            infoPosition: 1700, // pixels
            galleryStyle: {
                transform: [{translate: [-6, 6, -8]}, { rotateY : 15 }]
            },
            oldImages: [
                {
                    source: 'places/monastery/old/monasteryXIX.jpg',
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
                    source: 'places/monastery/old/monasteryXIX.png',
                    year: {
                        ru: 'XIX в. Фото oldgrodno.by',
                        en: '19th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 4.2,
                        height: 6
                    }
                },
                {
                    source: 'places/monastery/old/monasteryXX.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by',
                        en: '20th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 4.2,
                        height: 6
                    }
                },
                {
                    source: 'places/monastery/old/monasteryXX-1.png',
                    year: {
                        ru: 'XX в.',
                        en: '20th c.'
                    },
                    style: {
                        width: 5.2,
                        height: 5
                    }
                },
                {
                    source: 'places/monastery/old/monastery1915-17.png',
                    year: {
                        ru: '1915-17 гг. Фото oldgrodno.by',
                        en: '1915-17, Photo oldgrodno.by'
                    },
                    style: {
                        width: 4.2,
                        height: 6
                    }
                },
                {
                    source: 'places/monastery/old/monastery1915-17-1.png',
                    year: {
                        ru: '1915-17 гг. Фото oldgrodno.by',
                        en: '1915-17, Photo oldgrodno.by'
                    },
                    style: {
                        width: 4.2,
                        height: 6
                    }
                },
                {
                    source: 'places/monastery/old/monastery1930th.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by',
                        en: '1930th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 4.2,
                        height: 6
                    }
                }
            ]
        }
    ]
};

export default monastery;