const towers = {
    name: 'towers',
    style: {},
    portals: [
        {
            name: 'bridge',
            transformPortal: [{translate: [6, 0, -8]}]
        }
    ],
    labels: [
        {
            offset: -15,
            viewStyle: {
                transform: [{translate: [-2, 2, -5]}, { scale : 1.5 }, { rotateY: 25 }]
            },
            text: 'Водонапорные башни',
            description: `Водонапорные башни стоят на краю исторического центра, над железной дорогой, напротив городского рынка. Высота кирпичных башен 22 метра. Накрыты 8-ми скатными крышами. В центре - трубы для подачи воды в резервуары в верхние части башен. Они были возведены после открытия в Гродно водопровода при участии «Всероссийского акционерного водного общества» и принадлежат к памятникам архитектуры в стиле эклектики.\n
                          24 февраля 1876 года, по завершению инженерно-технических и строительных работ, вода из Немана насосами через фильтры была подана в городской водопровод. Об этом губернатор Гродненской губернии сообщил Его Превосходительству Министру Внутренних Дел России письменно. Этот день и считается днем рождения централизованного водоснабжения г. Гродно.\n
                          Первая, Южная башня (покрашена в розовый цвет) возведена в 1890 году. Вторая, Северная башня построена в 1910 году (желтого цвета, и она ближе к железной дороге).\n
                          \n\n Текс zetgrodno.com`,
            infoPosition: 1600, // pixels
            galleryStyle: {
                transform: [{translate: [-5, 6, -8]}, { rotateY: 15 }]
            },
            oldImages: [
                {
                    source: 'places/towers/old/towersXX.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/towers/old/towers1930th.png',
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/towers/old/towers1970th.jpg',
                    year: '1970-е, Фото grodnonews.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/towers/old/towers1915-17.png',
                    year: '1915-17 гг. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/towers/old/towers1968.png',
                    year: '1968 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        }
    ]
};

export default towers;