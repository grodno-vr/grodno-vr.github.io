const castle = {
    name: 'castle',
    sound: 'audio/birds.mp3',
    style: {},
    portals: [
        {
            name: 'center',
            transformPortal: [{translate: [5, 0, 15]}]
        }
    ],
    labels: [
        {
            viewStyle: {
                transform: [{translate: [1, 1, -10]}, { scale: 2 }]
            },
            text: 'Commonwealth Coat of Arms',
            description: `Architectural Polish-Lithuanian commonwealth coat of arms (first half of 18th century).\n
            More information about Hrodna (Grodno) history: http://harodnia.com`,
            infoPosition: 1800, // pixels
            model: {
                style: {
                    transform: [
                        { translate: [12, 5, -21] }
                    ]
                },
                rotationAxis: 'rotateZ',
                // obj: 'models/coat/coat_clean.obj',
                // mtl: 'models/coat/coat_clean_tex.mtl',
                obj: 'models/getto/getto.obj',
                mtl: 'models/getto/getto.mtl',

                controls: {
                    transform: [{translate: [-2, -1, -15]}, { rotateY: -10 }]
                }
            },
            oldImages: []
        },
        {
            viewStyle: {
                transform: [{translate: [-1, 4, -10]}, { scale: 2 }]
            },
            text: 'The New Castle',
            description: `The New Castle in Hrodna, Belarus is a royal palace of Augustus III of Poland and Stanislaw August Poniatowski where the famous Grodno Sejm took place in 1793.\n
            The royal residence was built on the high bank of the Neman River at a little distance from the Old Hrodna Castle which had suffered great dilapidation in the aftermath of the Swedish occupation in the early 18th century. The two castles are joined by a 300-year-old arch bridge.\n
            The palace compound was designed by Carl Friedrich Pöppelmann. Construction was carried out between 1734 and 1751 under the supervision of several other Saxon architects, including Johann Friedrich Knöbel and Joachim Daniel von Jauch. The palace was completed under the direction of Giuseppe de Sacco in 1789 and remained home for King Stanisław II August until 1797.`,
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-6, 4, -10]}]
            },
            oldImages: [
                {
                    source: 'places/castle/old/castle_18.jpg',
                    year: 'XVII c.',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/castle/old/castle_19.jpg',
                    year: 'XIX c.',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/castle/old/castle_20.jpg',
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

export default castle;