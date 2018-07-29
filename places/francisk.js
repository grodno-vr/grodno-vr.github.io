const francisk = {
    name: 'francisk',
    sound: 'audio/vilenskaja.m4a',
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
            text: {
                ru: 'Костёл Девы Марии Ангельской',
                en: 'Catholic Church of Mother of God of Angels'
            },
            description: {
                ru: `Монастырь францисканцев (Костёл Девы Марии Ангельской) — католический монашеский комплекс в городе Гродно (Республика Беларусь). Памятник архитектуры XVII века.\n
                          Монастырский комплекс основан в 1635 году упитским старостой Евстахием Курчом и его женой Сюзанной из рода Тышкевичей на левом берегу реки Неман. Первоначально это был деревянный монастырь с небольшим костёлом Ангельской Божьей Матери, который был разрушен во время русско-польской войны в 1659 году.\n
                          В 1660 году было начато строительство каменного храма с колокольней в стиле барокко. В 1759 году церковь была перестроена после пожара. С 1853 года костёл был закрыт, а после польского восстания 1863 года монастырь использовался как тюрьма для польских священников и монахов. Как тюрьма монастырь использовался вплоть до 1919 года.\n
                          В дальнейшем он все время функционировал как монастырь францисканцев. В 1991 году монастырь был взят под опеку вернувшимися в Гродно францисканцами.\n
                          \n Текст wikipedia.org`,
                en: `The Franciscan monastery (Catholic church of Mother of God of Angels) is a catholic monastic complex in Grodno (Republic of Belarus). It is an architectural monument of the 18thI century.
                        The monastic complex was founded in 1635 by the Upitsky governor Eustachy Curc and his wife Suzanne from the Tyszkiewicz family on the left bank of the Neman river. Originally it was a wooden monastery with a small church of Mother of God of Angels, which was destroyed during the Russian-Polish war in 1659.
                        In 1660 the construction of a stone church with a bell tower in Baroque style started. In 1759 the church was rebuilt after a fire. Since 1853 the catholic church had been closed, and after the Polish Uprising of 1863 the monastery was used as a prison for Polish priests and monks. The monastery was used as a prison until 1919.
                        In the years that followed it always functioned like a Franciscan monastery. In 1991 the monastery was taken under the care of the Franciscans that returned to Grodno.`
            },
            infoPosition: 1900, // pixels
            galleryStyle: {
                transform: [{translate: [-4, 5.5, -9]}]
            },
            oldImages: [
                {
                    source: 'places/francisk/old/kostelXX.png',
                    year: {
                        ru: 'XX в. Aвтор Я.Булгак',
                        en: '20th c. Author J.Bulgak'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/francisk/old/kostelXX-1.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by',
                        en: '20th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/francisk/old/kostelXX-2.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by, Aвтор Я.Булгак',
                        en: '20th c. Photo oldgrodno.by, author J.Bulgak'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/francisk/old/kostelXX-3.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by',
                        en: '20th c. Photo oldgrodno.by'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/francisk/old/kostelXX-4.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by',
                        en: '20th c. Photo oldgrodno.by'
                    },
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