const synagoge = {
    name: 'synagoge',
    // sound: 'audio/birds.mp3',
    style: {},
    portals: [
        {
            name: 'castles',
            transformPortal: [{translate: [4, 1.5, 12]}]
        },
        {
            name: 'zamkovaja',
            transformPortal: [{translate: [14, 2, -3]}]
        }
    ],
    labels: [
        {
            offset: -10,
            viewStyle: {
                transform: [{translate: [-1, 2, -4]}, { rotateY : 10 }]
            },
            text: 'Большая Хоральная Синагога',
            description: `Первая каменная синагога в Гродно была построена в 1575-1580 гг. по проекту итальянского архитектора Санти Гуччи, приглашённого раввином Мордехаем Яффе, уроженцем Праги, незадолго до этого - в 1572 году - приехавшим в Гродно. В результате пожара в 1617 году эта синагога была полностью уничтожена, но вскоре после пожара польский король Сигизмунд III разрешил евреям построить новую синагогу на месте старой. Вторая синагога просуществовала дольше, но повторила участь предшественницы, сгорев в 1899 году. Нынешнее здание Большой хоральной синагоги было построено Ильёй Фрункиным в 1902-1905 гг. в одной из разновидностей эклектики - мавританском стиле.\n
                          В период немецкой оккупации Гродно синагога, находившаяся в центре гетто, использовалась нацистами как место сбора евреев перед отправкой в концлагеря и на расстрелы.\n
                          \n Текст wikipedia.org`,
            infoPosition: 1700, // pixels
            galleryStyle: {
                transform: [{translate: [-6, 6, -8]}, { rotateY : 15 }]
            },
            oldImages: [
                {
                    source: 'places/synagoge/old/synagogeXX.png',
                    year: 'XX вв. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/synagoge/old/synagogeXX-1.png',
                    year: 'XX вв. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/synagoge/old/synagoge1972.png',
                    year: '1972 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/synagoge/old/synagoge1988.png',
                    year: '1988 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/synagoge/old/synagoge1992.png',
                    year: '1992 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        }
    ]
};

export default synagoge;