const castle = {
    name: 'castle',
    sound: 'audio/vilenskaja.m4a',
    style: {},
    portals: [
        {
            name: 'castles',
            transformPortal: [{translate: [5, 0, 15]}]
        }
    ],
    labels: [
        {
            viewStyle: {
                transform: [{translate: [1, 1, -10]}, { scale: 2 }]
            },
            text: {
                ru: 'Гербовый Картуш Речи Посполитой',
                en: 'Heraldic cartouche of the Polish-Lithuanian Commonwealth'
            },
            description: {
                ru: `Гербовый картуш Речи Посполитой Обоих Народов времен короля Августа III. Картуш венчал фронтон Нового Замка, построенного в 1737-42 годах. Демонтирован в середине XIX века вовремя перестройки замка под военный госпиталь. Сохранен Станиславом Антонием Солтанам, с 1858 года находился в его поместье в Берестовице Мураваной. После 1923 года перевезен в Гродно создателем музея Юзефом Ядковским.
                          Автор 3D-модели Игорь Ламека.`,
                en: `The heraldic cartouche (ornate) of the Polish-Lithuanian Commonwealth of both Peoples dates back to the reign of King Augustus III.\n
                 The cartouche topped the pediment of the New Castle built in 1737-42.\n\n
                 It was dismantled in the middle of the 19th century during the reconstruction of the castle into a military hospital.\n\n
                 The cartouche was preserved by Stanislaw Antony Soltanam, and since 1858 belonged to his estate in Berestovitsa Muravana. After 1923 it was transported to Grodno by the creator of the museum, Yusef Yadkovsky.
                     Igor Lameka is the author of 3D-model.`
            },
            infoPosition: 1800, // pixels
            model: {
                style: {
                    transform: [
                        { translate: [2, 10, -67] },
                        { scale: 1.1 },
                        { rotateZ: 40 },
                        { rotateX: 100 },
                        { rotateY: 10 }
                    ]
                },
                rotationAxis: 'rotateZ',
                obj: 'models/coat/coat_clean.obj',
                mtl: 'models/coat/coat_clean_tex.mtl',
                controls: {
                    transform: [{translate: [-3, -1, -15]}, { rotateY: -10 }]
                }
            },
            oldImages: []
        },
        {
            viewStyle: {
                transform: [{translate: [-1, 4, -10]}, { scale: 2 }]
            },
            text: {
                ru: 'Новый Замок',
                en: 'New Castle'
            },
            description: {
                ru: `Новый замок в Гродно - новый королевский дворец, построенный в Гродно, напротив старого дворца (Старый замок), в 1734-1751 годах во время правления польского короля и великого князя литовского Августа III как летняя резиденция польских королей и великих князей литовских, по проекту Карла Фридриха Пёппельмана.\n
                          Работы в замке осуществляли также Иоганн Фридрих Кнёбель, Йохим Даниэль Яух и до 1789 года Джузеппе де Сакко. Здесь проходили генеральные сеймы I Речи Посполитой. В этом здании во время последнего сейма Речи Посполитой в 1793 году было подписано соглашение о разделе Речи Посполитой с Россией и Пруссией, а в 1795 году польский король и великий князь литовский Станислав Август Понятовский поставил подпись под актом отречения. Король жил в нём до 1797 года.\n 
                          В июле 1944 года здание сгорело в результате военных действий. Вновь отстроено к 1952 году в стиле советского неоклассицизма. В нём размещался областной комитет КПСС. В настоящее время там размещается часть экспозиции Гродненского историко-археологического музея. В 1994 году установлена памятная доска в честь национально-освободительного восстания 1794 г. под руководством Т. Костюшко.\n
                          \n Текст wikipedia.org`,
                en: `The new castle in Grodno is a new royal palace built in Grodno opposite the old palace (Old Castle) in 1734-1751 during the reign of Polish king and the Grand Duke of Lithuania Augustus III as a summer residence for Polish kings and grand dukes of Lithuania, designed by Carl Friedrich Pöppelmann. \n
                     Works in the castle were also carried out by Johann Friedrich Knöbel, Johim Daniel Jauch and until 1789 - by Giuseppe de Sacco. General seims of the first Polish-Lithuanian Commonwealth took place here. In this building during the last seim of the Polish-Lithuanian Commonwealth in 1793 an agreement on the partition of the Commonwealth with Russia and Prussia was signed, and in 1795 the Polish king and the Grand Duke of Lithuania, Stanislaw Augustus Poniatowski, signed an act of abdication. The king lived in the castle until 1797. \n
                     In July 1944 in result of military operations the building burned down. It was rebuilt in 1952 in Soviet neoclassicism style. It housed the regional committee of the CPSU. Today it is a home to a part of the exposition of Grodno Historical and Archaeological Museum. In 1994 a memorial plate in honor of the national liberation uprising of 1794 under the command of T. Kosciuszko was installed.`
            },
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-5, 6, -10]}]
            },
            oldImages: [
                {
                    source: 'places/castle/old/castleXX.png',
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
                    source: 'places/castle/old/castleXX-1.png',
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
                    source: 'places/castle/old/castle1917.png',
                    year: {
                        ru: '1917 г. Фото oldgrodno.by',
                        en: '1917, Photo oldgrodno.by'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/castle/old/castle1941-44.png',
                    year: {
                        ru: '1941-44 гг. Фото oldgrodno.by',
                        en: '1941-44, Photo oldgrodno.by'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/castle/old/castle1944-45.png',
                    year: {
                        ru: '1944-45 гг.',
                        en: '1944-45 years'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/castle/old/castle1944-45-1.png',
                    year: {
                        ru: '1944-45 гг.',
                        en: '1944-45 years'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/castle/old/castle1987.png',
                    year: {
                        ru: '1987 г. Фото oldgrodno.by',
                        en: '1987, Photo oldgrodno.by'
                    },
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/castle/old/castle2008.png',
                    year: {
                        ru: '2008 г. Фото oldgrodno.by',
                        en: '2008, Photo oldgrodno.by'
                    },
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