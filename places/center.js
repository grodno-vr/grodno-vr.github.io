const center = {
    name: 'center',
    // sound: 'audio/back.wav',
    style: {},
    portals: [
        {
            name: 'bridge',
            transformPortal: [{translate: [10, 0, 10]}]
        },
        {
            name: 'brigits',
            transformPortal: [{translate: [5, 0, -18]}]
        },
        {
            name: 'vilenskaja',
            transformPortal: [{translate: [-12, 0, -8]}]
        },
        {
            name: 'zamkovaja',
            transformPortal: [{translate: [-15, 0, 1]}]
        }
    ],
    labels: [
        {
            offset: -90,
            viewStyle: {
                transform: [{translate: [-14, 3, -2]}, { scale : 4 }, { rotateY: 90 }]
            },
            text: 'Church of Vitaut the Great',
            description: `St. Mary\'s Church was a parish church (fara) in the city of Grodno (modern Hrodna, Belarus).\n
            It was founded by Vitaut, Grand Duke of Lithuania before 1389. Because of its founder, it was commonly referred to as Vitautas\' Church.\n
            Rebuilt as a Gothic church around 1494, it was one of the principal catholic churches of Hrodna until the advent of Soviet rule after World War II. Neglected, it was finally demolished in 1961.\n
            (at the right you can find 3D representation of 16th century church)`,
            infoPosition: 500, // pixels
            // infoWidth: 1300, // pixels,
            // infoHeight: 900, // pixels
            // model: {
            //     style: {
            //         transform: [
            //             { translate: [42, -1, -10] },
            //             { scale: 1.5 },
            //             { rotateZ: 140 },
            //             { rotateX: 70 },
            //             { rotateY: 50 }
            //         ]
            //     },
            //     rotationAxis: 'rotateZ',
            //     obj: 'models/fara/Fara_cleaned.obj',
            //     mtl: 'models/fara/Fara_cleaned_tex.mtl',
            //     controls: {
            //         transform: [{translate: [6, -1, -4]}, { rotateY: -70 }]
            //     }
            // },
            galleryStyle: {
                transform: [{translate: [-12, 5, -2]}, { rotateY: 80 }]
            },
            oldImages: [
                {
                    source: 'places/center/old/vitaut.jpg',
                    year: '1898 – 1920',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/vitaut3.jpg',
                    year: '1900',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/vitaut1.jpg',
                    year: '1923 – 1930',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/vitaut2.jpg',
                    year: '1936',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        },
        {
            offset: -115,
            viewStyle: {
                transform: [{translate: [-9, 4, 5]}, { scale : 3 }, { rotateY: 115 }]
            },
            text: 'Textile Culture Palace',
            description: '<None>',
            infoPosition: 100,
            galleryStyle: {
                transform: [{translate: [-10, 5, 3]}, { rotateY: 125 }]
            },
            oldImages: [
                {
                    source: 'places/center/old/textile_palace1.jpeg',
                    year: '1950th',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace4.jpeg',
                    year: '1957',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace.jpeg',
                    year: '1960th',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace2.jpeg',
                    year: '1960th',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace3.jpeg',
                    year: '1960',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace5.jpg',
                    year: '1958',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                }
            ]
        },
        {
            offset: 110,
            viewStyle: {
                transform: [{translate: [8, 3, 5]}, { scale: 3 }, { rotateY: -110 }]
            },
            text: 'Batory (Market or Soviet) Square',
            description: `Batory Square is the historical name (during the Polish period in 1921 - 1939) of Soviet (Savyetskaya) Square - the central square for the city of Hrodna in Belarus. \n
            It was named after Stephen Báthory, King of Rzeczpospolita who had a residence here in the 16th century.`,
            infoPosition: 3500,
            galleryStyle: {
                transform: [{translate: [5, 5, 3]}, { rotateY: -110 }]
            },
            oldImages: [
                {
                    source: 'places/center/old/square.jpg',
                    year: '1939',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/square1.jpg',
                    year: 'XIX c.',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                }
            ]
        },
        {
            offset: -25,
            viewStyle: {
                transform: [{translate: [-6, 3, -9]}, { scale : 3 }, { rotateY: 25 }]
            },
            text: 'Дом купца Муравьева',
            description: '<None>',
            infoPosition: 1400,
            galleryStyle: {
                transform: [{translate: [-8, 7, -8]}, { rotateY: 35 }]
            },
            oldImages: [
                {
                    source: 'places/center/old/muravjov.jpg',
                    year: 'XIX c.',
                    style: {
                        width: 3.9,
                        height: 7
                    }
                },
                {
                    source: 'places/center/old/muravjov1.jpg',
                    year: '1980',
                    style: {
                        width: 3.9,
                        height: 7
                    }
                },
                {
                    source: 'places/center/old/muravjov2.jpg',
                    year: '1987',
                    style: {
                        width: 3.9,
                        height: 6
                    }
                },
                {
                    source: 'places/center/old/muravjov3.jpg',
                    year: '2006',
                    style: {
                        width: 7,
                        height: 5
                    }
                }
            ]
        },
        {
            offset: 15,
            viewStyle: {
                transform: [{translate: [1, 5.25, -10]}, { scale : 3 }, { rotateY: -15 }]
            },
            text: 'Собор Св. Франциска Ксаверия',
            description: `Jesuit church, it became a cathedral in 1991.\n
            The construction of the church started in 1687. The completed building in Baroque style was consecrated in 1705 to St. Francis Xavier. The monastery was dissolved in 1773 and the church became a parish one. The church survived World War II with no serious damage.\n
            In 1960 it was officially closed for a public religious services (for 27 years). The communist authorities tried to convert the building into a museum or a concert hall. Despite this the people attended the church every Sunday for a common player, songs and rosary.\n 
            The religious services were restored in 1987. In 1990 the church was granted the title of minor basilica, and a year later it became a cathedral for a diocese of Grodno.`,
            infoPosition: 1900,
            galleryStyle: {
                transform: [{translate: [-2, 4.5, -7]}, { rotateY: -10 }]
            },
            oldImages: [
                {
                    source: 'places/center/old/cathedral.jpg',
                    year: 'XVII c.',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/cathedral1.jpg',
                    year: '1914 - 1918',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/cathedral2.jpg',
                    year: '1924',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/cathedral3.jpg',
                    year: '1924',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                }
            ]
        }
    ]
};

export default center;