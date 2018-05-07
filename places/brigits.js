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
            text: 'Монастырь Бригиток',
            description: `Костёл Благовещения Пресвятой Девы Марии и Монастырь Бригиток - памятник архитектуры раннего барокко (так называемого любельского типа ренессансного костёла) с элементами готики и возрождения был построен в Гродно в 1634-1642 годах на улице Язерской (позже улица Скидельская, Купеческая, Бригитская), застройка которой на то время была деревянной.\n
                          Ансамбль бывшего монастыря бригиток включает в себя костёл, жилой корпус, деревянный лямус и каменную стену. Сам ансамбль является памятником архитектуры республиканского значения.\n
                          Основан на средства Кшиштофа Веселовского, государственного деятеля Великого княжества Литовского, маршалка великого литовского (в 1635-1637) и его жены Александры Марианны из Собеских.\n
                          \n\nТекст wikipedia.org `,
            infoPosition: 1700, // pixels
            galleryStyle: {
                transform: [{translate: [-4, 5.5, -9]}]
            },
            oldImages: [
                {
                    source: 'places/brigits/old/brigits_XX-1.png',
                    year: 'XIX - XX вв. Фото old.grodno.net',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/brigits/old/brigits_XX-2.png',
                    year: 'XIX - XX вв. Фото old.grodno.net, автор Я.Булгак',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/brigits/old/brigits_XX-3.png',
                    year: 'XIX - XX вв. Фото old.grodno.net',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/brigits/old/brigits_XX-4.png',
                    year: 'XIX - XX вв. Фото old.grodno.net',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/brigits/old/brigits_XX-5.png',
                    year: 'XIX - XX вв. Фото old.grodno.net',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/brigits/old/brigits_XX.png',
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