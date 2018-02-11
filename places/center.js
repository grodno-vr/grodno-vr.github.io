const center = {
    name: 'center',
    style: {},
    portals: [
        {
            name: 'bridge',
            transformPortal: [{translate: [-15, 0, -0.5]}]
        },
        {
            name: 'brigits',
            transformPortal: [{translate: [7, 0, 11]}]
        },
        {
            name: 'vilenskaja',
            transformPortal: [{translate: [15, 0, -7]}]
        },
        {
            name: 'castle',
            transformPortal: [{translate: [7, 0, -15]}]
        }
    ],
    labels: [
        {
            offset: 50,
            viewStyle: {
                transform: [{translate: [20, 4, -20]}, { scale : 5.5 }, { rotateY: -20 }]
            },
            text: 'Church of Vitaut the Great',
            description: `St. Mary\'s Church was a parish church (fara) in the city of Grodno (modern Hrodna, Belarus).\n
            It was founded by Vytautas, Grand Duke of Lithuania before 1389. Because of its founder, it was commonly referred to as Vytautas\' Church.\n
            Rebuilt as a Gothic church around 1494, it was one of the principal catholic churches of Hrodna until the advent of Soviet rule after World War II. Neglected, it was finally demolished in 1961.`,
            infoPosition: 2500, // pixels
            infoWidth: 1300, // pixels
            model: {
                style: {
                    transform: [
                        { translate: [42, -1, -10] },
                        { scale: 1.5 },
                        { rotateZ: 140 },
                        { rotateX: 70 },
                        { rotateY: 50 }
                    ]
                },
                rotationAxis: 'rotateZ',
                obj: 'models/fara/Fara_cleaned.obj',
                mtl: 'models/fara/Fara_cleaned_tex.mtl'

            },
            oldImages: [
                {
                    source: 'places/center/old/vitaut.jpg',
                    year: '1898 – 1920',
                    style: {
                        transform: [{translate: [6, 5.5, -12]}, { rotateY: -35 }],
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/center/old/vitaut3.jpg',
                    year: '1900',
                    style: {
                        transform: [{translate: [12, 5.5, -8]}, { scale: 1.2 }, { rotateY: -50 }],
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/vitaut1.jpg',
                    year: '1923 – 1930',
                    style: {
                        transform: [{translate: [12, 1, -8]}, { scale: 1.2 }, { rotateY: -50 }],
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/vitaut2.jpg',
                    year: '1936',
                    style: {
                        transform: [{translate: [6, 1, -12]}, { scale: 1.1 }, { rotateY: -35 }],
                        width: 7,
                        height: 3.9
                    }
                }
            ]
        },
        {
            viewStyle: {
                transform: [{translate: [-1, 5, -20]}, { scale : 4.5 }]
            },
            text: 'Textile Culture Palace',
            description: '<None>',
            infoPosition: 1800,
            oldImages: [
                {
                    source: 'places/center/old/textile_palace1.jpeg',
                    year: '1950th',
                    style: {
                        transform: [{translate: [-7, 7, -12]}, { rotateX: 10 }],
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace4.jpeg',
                    year: '1957',
                    style: {
                        transform: [{translate: [-1, 7, -12]}, { rotateX: 10 }],
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace.jpeg',
                    year: '1960th',
                    style: {
                        transform: [{translate: [-1, 3, -12]}],
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace2.jpeg',
                    year: '1960th',
                    style: {
                        transform: [{translate: [-7, 3, -12]}],
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace3.jpeg',
                    year: '1960',
                    style: {
                        transform: [{translate: [-7, -1, -12]}, { rotateX: -10 }],
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace5.jpg',
                    year: '1958',
                    style: {
                        transform: [{translate: [-1, -1, -12]}, { rotateX: -10 }],
                        width: 7,
                        height: 3.9
                    }
                }
            ]
        },
        {
            offset: -110,
            viewStyle: {
                transform: [{translate: [-5, 2, 2]}, { scale: 2 }, { rotateY: 110 }]
            },
            text: 'Batory (Market or Soviet) Square',
            description: `Batory Square is the historical name (during the Polish period in 1921 - 1939) of Soviet (Savyetskaya) Square - the central square for the city of Hrodna in Belarus. \n
            It was named after Stephen Báthory, King of Rzeczpospolita who had a residence here in the 16th century.`,
            infoPosition: 100,
            oldImages: [
                {
                    source: 'places/center/old/square.jpg',
                    year: '1939',
                    style: {
                        transform: [{translate: [-10, 0.5, 4]}, { rotateY: 110 }],
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/square1.jpg',
                    year: 'XIX c.',
                    style: {
                        transform: [{translate: [-10, 4, 4]}, { rotateY: 110 }],
                        width: 7,
                        height: 3.9
                    }
                }
            ]
        },
        {
            offset: 90,
            viewStyle: {
                transform: [{translate: [18, 5, -1]}, { scale : 4 }, { rotateY: -75 }]
            },
            text: 'House of merchant Muravjov',
            description: '<None>',
            infoPosition: 3200,
            oldImages: [
                {
                    source: 'places/center/old/muravjov.jpg',
                    year: 'XIX c.',
                    style: {
                        transform: [{translate: [17, 8, -7]}, { scale : 2 }, { rotateY: -75 }],
                        width: 3.9,
                        height: 7
                    }
                },
                {
                    source: 'places/center/old/muravjov1.jpg',
                    year: '1980',
                    style: {
                        transform: [{translate: [18, 8, 0]}, { scale : 2 }, { rotateY: -85 }],
                        width: 3.9,
                        height: 7
                    }
                },
                {
                    source: 'places/center/old/muravjov2.jpg',
                    year: '1987',
                    style: {
                        transform: [{translate: [17, 8, 7]}, { scale : 2 }, { rotateY: -100 }],
                        width: 3.9,
                        height: 6
                    }
                },
                {
                    source: 'places/center/old/muravjov3.jpg',
                    year: '2006',
                    style: {
                        transform: [{translate: [18, -3, 4]}, { scale : 2 }, { rotateY: -100 }],
                        width: 7,
                        height: 4.1
                    }
                }
            ]
        },
        {
            offset: 130,
            viewStyle: {
                transform: [{translate: [12, 9, 12]}, { scale : 4 }, { rotateY: -130 }]
            },
            text: 'St. Francis Xavier Cathedral',
            description: `Jesuit church, it became a cathedral in 1991.\n
            The construction of the church started in 1687. The completed building in Baroque style was consecrated in 1705 to St. Francis Xavier. The monastery was dissolved in 1773 and the church became a parish one. The church survived World War II with no serious damage.\n
            In 1960 it was officially closed for a public religious services (for 27 years). The communist authorities tried to convert the building into a museum or a concert hall. Despite this the people attended the church every Sunday for a common player, songs and rosary.\n 
            The religious services were restored in 1987. In 1990 the church was granted the title of minor basilica, and a year later it became a cathedral for a diocese of Grodno.`,
            infoPosition: 3700,
            oldImages: [
                {
                    source: 'places/center/old/cathedral.jpg',
                    year: 'XVII c.',
                    style: {
                        transform: [{translate: [7, 6, 4]}, { scale: 1.5 }, { rotateY: -130 }],
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/cathedral1.jpg',
                    year: '1914 - 1918',
                    style: {
                        transform: [{translate: [7, 1, 4]}, { scale: 1.5 }, { rotateY: -130 }],
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/cathedral2.jpg',
                    year: '1924',
                    style: {
                        transform: [{translate: [6, 9, 20]}, { scale: 2.5 }, { rotateY: -130 }],
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/cathedral3.jpg',
                    year: '1924',
                    style: {
                        transform: [{translate: [6, 0, 20]}, { scale: 2.5 }, { rotateY: -130 }],
                        width: 7,
                        height: 3.9
                    }
                }
            ]
        }
    ]
};

export default center;