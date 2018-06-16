const monastery = {
    name: 'monastery',
    // sound: 'audio/birds.mp3',
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
            text: 'Свято-Рождество-Богородицкий Женский Монастырь',
            description: `Церковь Рождества Богородицы - православный храм. При нем находится женский Свято-Рождество-Богородицкий монастырь.\n
                          Первые летописные упоминания о нём датированы 1506 годом. Тогда на его месте стоял деревянный храм - Пречистенская церковь. Позднее она была перестроена в каменную, а в начале 17 века стала униатским монастырём. Сюда переселились 4 монахини. Им были переданы земли западной территории храма.\n
                          Пречистенский собор погиб в пожаре 1654 года. На его месте монахини возвели небольшую деревянную церковь - Рождества Богородицы. Жилой корпус был отстроен рядом. Постройку не щадили пожары, однако упорные монахини каждый раз восстанавливали разрушенное строение.\n
                          В 1843 году храм получил статут Рождество-Богордичного монастыря 2 класса. Сюда привезли ещё 11 монахинь и послушниц. На территории храма был открыт сиротский приют, а рядом с ним появилась церковь Сергия Радонежского. В скором времени здесь побывал император Александр II.\n
                          \n\n Текст grodno.in`,
            infoPosition: 1700, // pixels
            galleryStyle: {
                transform: [{translate: [-6, 6, -8]}, { rotateY : 15 }]
            },
            oldImages: [
                {
                    source: 'places/monastery/old/monasteryXIX.png',
                    year: 'XIX в. Фото oldgrodno.by',
                    style: {
                        width: 4.2,
                        height: 6
                    }
                },
                {
                    source: 'places/monastery/old/monasteryXX.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 4.2,
                        height: 6
                    }
                },
                {
                    source: 'places/monastery/old/monasteryXX-1.png',
                    year: 'XX в.',
                    style: {
                        width: 5.2,
                        height: 5
                    }
                },
                {
                    source: 'places/monastery/old/monastery1915-17.png',
                    year: '1915-17 гг. Фото oldgrodno.by',
                    style: {
                        width: 4.2,
                        height: 6
                    }
                },
                {
                    source: 'places/monastery/old/monastery1915-17-1.png',
                    year: '1915-17 гг. Фото oldgrodno.by',
                    style: {
                        width: 4.2,
                        height: 6
                    }
                },
                {
                    source: 'places/monastery/old/monastery1930th.png',
                    year: '1930-е, Фото oldgrodno.by',
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