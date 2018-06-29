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
            offset: -115,
            viewStyle: {
                transform: [{translate: [-9, 4, 5]}, { scale : 3 }, { rotateY: 115 }]
            },
            text: 'Дворец Культуры Текстильщиков',
            description: `Дворец культуры текстильщиков трехэтажное, прямоугольное в плане здание, построенное в 1958 году по типовому проекту (архитектор И. Рожын) с использованием элементов классицизма. С тыльной стороны фасада примыкает полукруг в плане объёма, где расположена парадная лестница, а также часть фойе. Главный фасад решен в виде колоннады на всю высоту здания, которая образует неглубокую лоджию с центральным входом.\n
                          Длительное время существовала легенда, что здание построено «задом наперед»: фасад, который выходит к Дому быта, должен быть главным.\n
                          \n\n Текс wikipedia.org`,
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
            offset: -90,
            viewStyle: {
                transform: [{translate: [-14, 3, -2]}, { scale : 4 }, { rotateY: 90 }]
            },
            text: 'Костел Св. Девы Марии (Фара Витовта)',
            description: `Костёл Пресвятой Девы Марии в Гродно - несуществующий сегодня готический костел в Гродно, построенный во второй половине XIV века. Так как основателем костёла был князь Витовт, его также называют Фара Витовта.\n
                          В далеком 1389 году по распоряжению великого князя Литовского Витовта в центре города, на главной его площади был построен деревянный костел. В 1494 году король польский и великий князь литовский Александр несколько обновлял костел, а в 1551 году по распоряжению королевы Боны храм был отремонтирован. Важную роль в судьбе костела сыграл король Стефан Баторий, сделавший Гродно своей постоянной резиденцией. Фару Витовта он называл самым прекрасным костелом на землях ВКЛ, отмечая при этом, что костел деревянный. По его распоряжению мастером Антонием де Гротта (Дигрепом) по проекту архитектора Санти Гуччи началось возведение каменного костела в ренессансном стиле. В августе 1586 года строительство храма было завершено. По своим размерам он стал самым большим храмом на беларуско-литвинских землях.\n
                          В 1961 году по распоряжению местной коммунистической власти костёл был взорван. Автор 3D-модели Игорь Ламека.\n
                          \n\n Текс wikipedia.org`,
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
                },
                {
                    source: 'places/center/old/vitaut1960th.png',
                    year: '1960-е',
                    style: {
                        width: 7,
                        height: 4.2
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
            description: `Советская площадь - одна из главных площадей в центральной части Гродно. Старые названия - (Старый) Рынок, Ратушная, Парадная, Соборная, Стефана Батория. Нынешнее название получила в 1940 г.\n
                          После получения городом в 1496 году Магдебургского права, в 1513 на городской площади строится Ратуша, которая имеет башню с часами, а также торговые ряды. Рынок - главная площадь города с XV в., место расположения Ратуши (городских властей), сосредоточение социально-экономической жизни горожан.\n
                          В 1540 в начале улицы Замковой (на месте современного дворца культуры Текстильщиков) строится Замковый двор, а в 1560 на месте современного дома #1 по улице Советской - первая городская корчма.
                          Следующий этап площади связан с именем короля Речи Посполитой Стефана Батория, который сделал город своей резиденцией и умер здесь. На восточной стороне площади в 1580 воздвигается дворец Батория, который сохранился до наших дней. 
                          За ратушей находился один из самых больших дворцов рода Радзивилов, одного из богатейших родов Великого Княжества Литовского. Это был огромный комплекс, который занимал всю сторону ратушной площади и целый квартал за ней. По своим размерам дворец был одной из значительных и больших построек Гродно.`,
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
            description: `Бывший жилой дом купца Муравьева - яркий пример стиля модерн конца XIX в.\n
                          Дом был построен в средине 1890-х. В книге «Биография гродненских улиц» отмечено, что здесь находилось Гродненское отделение Белостоцкого коммерческого банка и магазин мануфактурных товаров. Здание было богато отделано как снаружи, так и внутри: лепнина, кованые детали, несколько кафельных печек, изображения которых печатались в альбомах, посвященных Гродно.\n
                          Жители города помнят дом Муравьева как бывшую библиотеку имени Карского. С 1921 по 1932 год библиотека занимала здание по улице Ожешко, но в 1932 году собственник потребовал освободить помещение, и библиотеку перенесли в бывший дом купца Муравьева.\n
                          Немцы заняли здание сразу же после взятия города, и библиотека вернулась сюда только в 1944-м. Здание требовало ремонта: осколками снарядов была повреждена крыша, выбиты окна, также была уничтожена электропроводка, а библиотечное оборудование — сожжено. Многое удалось восстановить. Библиотека работала здесь до 1990 года. А в январе 1991-го переехала в здание Нового замка, которое до этого занимал обком партии.\n
                          \n\n Текст naviny.by`,
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
                    source: 'places/center/old/muravjov1958.jpg',
                    year: '1958 г. Фото old.grodno.net',
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
            description: `Кафедральный костел Св. Франциска Ксаверия (Фарный костел, одна из 3 Малых Базилик Беларуси) и бывший монастырь иезуитов (вторая половина XVII - первая половина XVIII вв.) - памятник архитектуры стиля барокко. В 1705 г. в присутствии короля Августа II и царя Петра I храм был торжественно освящен.\n
                          В храме - коронованная чудотворная икона Матери Божьей Конгрегатской (Студенческой) XVII в. и 13 деревянных алтарей XVIII в. На башне костела - одни из самых старых в Восточной Европе действующих часов (XVI - XVII вв.).\n
                          К костелу примыкают здания бывшего иезуитского коллегиума и бывшей иезуитской аптеки (1709) - самой старой в Беларуси; сегодня - аптека-музей.`,
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