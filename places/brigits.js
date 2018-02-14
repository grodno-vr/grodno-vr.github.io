const brigits = {
    name: 'brigits',
    style: {},
    portals: [
        {
            name: 'center',
            transformPortal: [{translate: [12, 0, 1]}]
        }
    ],
    labels: [
        {
            offset: 75,
            viewStyle: {
                transform: [{translate: [12, 4, 0]}, { scale : 2.5 }, { rotateY: -90 }]
            },
            textStyle: {
                fontSize: 0.2,
                textAlign: 'center'
            },
            text: 'Monastery of St. Brigitte',
            description: `Church of the Annunciation and the Blessed Virgin Mary and the Brigit monastery - an architectural monument of the early baroque. The monastery was founded in 1634 on donations of Marshal of the Grand Duchy of Lithuania Krzysztof Veselovsky and his wife Alexandra.\n
            There is miraculously survived the oldest wooden building in Belarus of 1630s behind the church. It is built without a single nail. His appointment - a hostel for brigit nuns.`,
            infoPosition: 3000, // pixels
            galleryStyle: {
                transform: [{translate: [4, 6, -2]}, { rotateY: -80 }]
            },
            oldImages: [
                {
                    source: 'places/brigits/old/brigits_20.jpg',
                    year: 'XX c.',
                    style: {
                        width: 8,
                        height: 7.8
                    }
                },
                {
                    source: 'places/brigits/old/brigits_20-1.jpg',
                    year: 'XX c.',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                }
            ]
        }
    ]
};

export default brigits;