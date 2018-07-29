const brigits = {
    name: 'brigits',
    //sound: 'audio/back-1.wav',
    style: {},
    portals: [
        {
            name: 'center',
            transformPortal: [{translate: [3, 0, -10]}]
        }
    ],
    labels: [
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [0, 4, -8]}, { scale : 2.5 }]
            },
            textStyle: {
                fontSize: 0.2,
                textAlign: 'center'
            },
            text: {
                ru: 'Монастырь Бригиток',
                en: 'Brigit monastery'
            },
            description: {
                ru: `Костёл Благовещения Пресвятой Девы Марии и Монастырь Бригиток - памятник архитектуры раннего барокко (так называемого любельского типа ренессансного костёла) с элементами готики и возрождения был построен в Гродно в 1634-1642 годах на улице Язерской (позже улица Скидельская, Купеческая, Бригитская), застройка которой на то время была деревянной.\n
                          Ансамбль бывшего монастыря бригиток включает в себя костёл, жилой корпус, деревянный лямус и каменную стену. Сам ансамбль является памятником архитектуры республиканского значения.\n
                          Основан на средства Кшиштофа Веселовского, государственного деятеля Великого княжества Литовского, маршалка великого литовского (в 1635-1637) и его жены Александры Марианны из Собеских.\n
                          \n\nТекст wikipedia.org `,
                en: `Catholic church of the Annunciation of the Blessed Virgin Mary and Brigite monastery is a monument of early Baroque architecture (a so-called Lubelsky type of the Renaissance church) bearing the elements of Gothic and Renaissance styles. It was built in Grodno in 1634-1642 on Yazerskaya street (later Skidelskaya Street, Kupecheskaya street, Brigitskaya street), which at that time was wooden. \n
             The ensemble of the former Brigit monastery includes a catholic church, residential house, wooden quincha and a stone wall. The ensemble itself constitutes an architectural monument of the republican significance. 
             It was funded by Krzysztof Veselovsky, statesperson of the Grand Duchy of Lithuania, great Lithuanian marshal (in 1635-1637), and his wife, Aleksandra Marianna of Sobieski.`
            },
            infoPosition: 1700, // pixels
            galleryStyle: {
                transform: [{translate: [-4, 5.5, -9]}]
            },
            oldImages: [
                {
                    source: 'places/brigits/old/brigits_XX-1.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XIX - XX вв. Фото old.grodno.net',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/brigits/old/brigits_XX-2.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XIX - XX вв. Фото old.grodno.net, автор Я.Булгак',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/brigits/old/brigits_XX-3.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XIX - XX вв. Фото old.grodno.net',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/brigits/old/brigits_XX-4.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XIX - XX вв. Фото old.grodno.net',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/brigits/old/brigits_XX-5.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XIX - XX вв. Фото old.grodno.net',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/brigits/old/brigits_XX.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XIX - XX вв. Фото old.grodno.net',
                    style: {
                        width: 8,
                        height: 5.1
                    }
                }
            ]
        }
    ]
};

export default brigits;