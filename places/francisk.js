const francisk = {
    name: 'francisk',
    style: {},
    portals: [
        {
            name: 'castles',
            transformPortal: [{translate: [15, 0, 4]}]
        },
        {
            name: 'bridge',
            transformPortal: [{translate: [6, 0, 12]}]
        }
    ],
    labels: [
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [1, 2.5, -5]}, { scale : 1.5 }]
            },
            text: 'Костёл Девы Марии Ангельской',
            description: `Монастырь францисканцев (Костёл Девы Марии Ангельской) — католический монашеский комплекс в городе Гродно (Республика Беларусь). Памятник архитектуры XVII века.\n
                          Монастырский комплекс основан в 1635 году упитским старостой Евстахием Курчом и его женой Сюзанной из рода Тышкевичей на левом берегу реки Неман. Первоначально это был деревянный монастырь с небольшим костёлом Ангельской Божьей Матери, который был разрушен во время русско-польской войны в 1659 году.\n
                          В 1660 году было начато строительство каменного храма с колокольней в стиле барокко. В 1759 году церковь была перестроена после пожара. С 1853 года костёл был закрыт, а после польского восстания 1863 года монастырь использовался как тюрьма для польских священников и монахов. Как тюрьма монастырь использовался вплоть до 1919 года.\n
                          В дальнейшем он все время функционировал как монастырь францисканцев. В 1991 году монастырь был взят под опеку вернувшимися в Гродно францисканцами.\n
                          \n Текст wikipedia.org`,
            infoPosition: 1900, // pixels
            galleryStyle: {
                transform: [{translate: [-4, 5.5, -9]}]
            },
            oldImages: [
                {
                    source: 'places/francisk/old/kostelXX.png',
                    year: 'XX в. Фотограф Я.Булгак',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/francisk/old/kostelXX-1.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/francisk/old/kostelXX-2.png',
                    year: 'XX в. Фото oldgrodno.by, Aвтор Я.Булгак',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/francisk/old/kostelXX-3.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/francisk/old/kostelXX-4.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
            ]
        }
    ]
};

export default francisk;