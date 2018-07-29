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
            text: {
                ru: 'Водонапорные башни',
                en: 'Water Towers'
            },
            description: {
                ru: `Водонапорные башни стоят на краю исторического центра, над железной дорогой, напротив городского рынка. Высота кирпичных башен 22 метра. Накрыты 8-ми скатными крышами. В центре - трубы для подачи воды в резервуары в верхние части башен. Они были возведены после открытия в Гродно водопровода при участии «Всероссийского акционерного водного общества» и принадлежат к памятникам архитектуры в стиле эклектики.\n
                          24 февраля 1876 года, по завершению инженерно-технических и строительных работ, вода из Немана насосами через фильтры была подана в городской водопровод. Об этом губернатор Гродненской губернии сообщил Его Превосходительству Министру Внутренних Дел России письменно. Этот день и считается днем рождения централизованного водоснабжения г. Гродно.\n
                          Первая, Южная башня (покрашена в розовый цвет) возведена в 1890 году. Вторая, Северная башня построена в 1910 году (желтого цвета, и она ближе к железной дороге).\n
                          \n\n Текс zetgrodno.com`,
                en: `Water towers stand on the edge of the historic center above the railway and opposite the city market. The height of brick towers amounts to 22 meters. They are covered with eight pitched roofs. In the center stand the pipes for supplying water to the tanks in the upper part of the towers. They were constructed with the participation of the "All-Russian Joint Water Society" after the opening of the water pipeline in Grodno and belong to the monuments of eclecticism style architecture in. \n
                     On February 24, 1876 after the completion of engineering and construction works, the water from Neman started being pumped through filters to the city water supply system. Grodno Province Governor reported this in writing to His Excellency the Minister of the Interior Affairs of Russia. This day is considered the birthday of the centralized water supply in Grodno. \n
                     The first, South Tower (painted in pink), was built in 1890. The second, Northern Tower, was built in 1910 (painted in yellow, and is located closer to the railway).`
            },
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
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/towers/old/towers1970th.jpg',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1970-е, Фото grodnonews.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/towers/old/towers1915-17.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1915-17 гг. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/towers/old/towers1968.png',
                    year: {
                        ru: '',
                        en: ''
                    },
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