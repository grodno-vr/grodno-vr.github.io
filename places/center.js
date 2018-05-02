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
            text: 'Костел Св. Девы Марии (Фара Витовта)',
            description: `St. Mary\'s Church was a parish church (fara) in the city of Grodno (modern Hrodna, Belarus).\n
            It was founded by Vitaut, Grand Duke of Lithuania before 1389. Because of its founder, it was commonly referred to as Vitautas\' Church.\n
            Rebuilt as a Gothic church around 1494, it was one of the principal catholic churches of Hrodna until the advent of Soviet rule after World War II. Neglected, it was finally demolished in 1961.\n
            (at the right you can find 3D representation of 16th century church)`,
            infoPosition: 500, // pixels
            infoWidth: 1300, // pixels,
            infoHeight: 900, // pixels
            model: {
                style: {
                    transform: [
                        { translate: [-30, 1, -22] },
                        { scale: 1.5 },
                        { rotateZ: 120 },
                        { rotateX: 80 },
                        { rotateY: 50 }
                    ]
                },
                rotationAxis: 'rotateZ',
                obj: 'models/fara/Fara_cleaned.obj',
                mtl: 'models/fara/Fara_cleaned_tex.mtl',
                controls: {
                    transform: [{translate: [-20, -2, -8]}, { rotateY: 50 }]
                }
            },
            galleryStyle: {
                transform: [{translate: [-12, 5, -2]}, { rotateY: 80 }]
            },
            oldImages: [
                {
                    source: 'places/center/old/vitaut5.jpg',
                    year: '1915-1918 гг. Фото wikimedia.org',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/vitaut.jpg',
                    year: '1898 – 1920 гг. Фото newgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/vitaut3.jpg',
                    year: '1900 г. Фото wikimedia.org',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/vitaut1.jpg',
                    year: '1923 – 1930 гг. Фото s13.ru',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/vitaut2.jpg',
                    year: '1936 г. Фото radzima.org',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/vitaut4.jpg',
                    year: '1930-е, Фото katolik.life',
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
            text: 'Дворец Культуры Текстильщиков',
            description: 'Более полувека на центральной площади Гродно стоит большое здание с колоннами. \n' +
            'Некогда это был Дворец культуры Гродненского тонкосуконного комбината – по сути, культурный центр города. Но со временем он потерял свое значение.',
            infoPosition: 100,
            galleryStyle: {
                transform: [{translate: [-10, 5, 3]}, { rotateY: 125 }]
            },
            oldImages: [
                {
                    source: 'places/center/old/textile_palace1.jpeg',
                    year: '1950-e, Фото harodnia.com',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace4.jpeg',
                    year: '1957 г. Фото newgrodno.by',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace.jpeg',
                    year: '1960-е, Фото newgrodno.by',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace2.jpeg',
                    year: '1960-е, Фото newgrodno.by',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace3.jpeg',
                    year: '1960 г. Фото newgrodno.by',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace5.jpg',
                    year: '1958 г. Фото newgrodno.by',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace6.jpg',
                    year: '1970-80-е, Фото newgrodno.by',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/textile_palace7.jpg',
                    year: '1970-80-е, Фото newgrodno.by',
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
            text: 'Площадь Батория (Раночная или Советская)',
            description: `Batory Square is the historical name (during the Polish period in 1921 - 1939) of Soviet (Savyetskaya) Square - the central square for the city of Hrodna in Belarus. \n
            It was named after Stephen Báthory, King of Rzeczpospolita who had a residence here in the 16th century.`,
            infoPosition: 3500,
            galleryStyle: {
                transform: [{translate: [5, 5, 3]}, { rotateY: -110 }]
            },
            oldImages: [
                {
                    source: 'places/center/old/square.jpg',
                    year: '1939 г. Фото grodno.net',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/square1.jpg',
                    year: 'XIX в. Фото radzima.org',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/square2.jpg',
                    year: 'XIX в. Фото radzima.org',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/square3.jpg',
                    year: 'XIX в. Фото s13',
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
            description: '',
            infoPosition: 1400,
            galleryStyle: {
                transform: [{translate: [-8, 5, -8]}, { rotateY: 35 }]
            },
            oldImages: [
                {
                    source: 'places/center/old/muravjov5.jpg',
                    year: '1910 г. Фото newgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/muravjov.jpg',
                    year: 'XIX в. Фото newgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/muravjov1.jpg',
                    year: '1990-е, Фото newgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/muravjov2.jpg',
                    year: '1987 г. Фото newgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/muravjov3.jpg',
                    year: '2006 г. Фото s13.ru',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/center/old/muravjov4.jpg',
                    year: '1975 г. Фото newgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        },
        {
            offset: 15,
            viewStyle: {
                transform: [{translate: [1, 5.25, -10]}, { scale : 3 }, { rotateY: -15 }]
            },
            text: 'Собор Св. Франциска Ксаверия (Фарный)',
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
                    year: 'XVII в. Фото radzima.org, автор Я.Булгак',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/cathedral1.jpg',
                    year: '1914 - 1918 гг. Фото ay.by',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/cathedral2.jpg',
                    year: '1924 г. Фото wikimapia.org',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/cathedral3.png',
                    year: '1924 г. Фото tut.by',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/cathedral4.png',
                    year: '1873 г. Фото wikimedia.org, рисунок Н.Орда',
                    style: {
                        width: 7,
                        height: 3.9
                    }
                },
                {
                    source: 'places/center/old/1965.jpg',
                    year: '1965 г. Фото facebook.com, источник БГАКФФД',
                    style: {
                        width: 7,
                        height: 4.1
                    }
                }
            ]
        }
    ]
};

export default center;