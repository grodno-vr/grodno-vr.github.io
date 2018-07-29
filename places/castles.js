const castles = {
    name: 'castles',
    // sound: 'audio/birds.mp3',
    style: {},
    portals: [
        {
            name: 'monastery',
            transformPortal: [{translate: [6, 0, 12]}]
        },
        {
            name: 'zamkovaja',
            transformPortal: [{translate: [14, 0, 6]}]
        },
        {
            name: 'castle',
            transformPortal: [{translate: [-8, 0, 10]}]
        },
        {
            name: 'francisk',
            transformPortal: [{translate: [-12, 0, -6]}]
        },
        {
            name: 'synagoge',
            transformPortal: [{translate: [14, 0, 2]}]
        }
    ],
    labels: [
        {
            offset: -120,
            viewStyle: {
                transform: [{translate: [-6, 3, 8]}, { scale : 3 }, { rotateY: 130 }]
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
            infoPosition: 1, // pixels
            galleryStyle: {
                transform: [{translate: [-10, 4.5, 6]}, { rotateY: 130 }]
            },
            oldImages: [
                {
                    source: 'places/castles/old/new_castleXVIII.jpg',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XVIII в. Фото wikipedia.org',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/new_castleXIX.jpg',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XIX в. Фото zetgrodno.com',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/new_castleXX.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/new_castle1930th-3.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/new_castle1944-50.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1944-50 гг. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/new_castle1982.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1982 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/new_castle1988.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1988 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        },
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [1, 2, -5]}, { scale : 1.5 }]
            },
            text: {
                ru: 'Старый Замок',
                en: 'Old Castle'
            },
            description: {
                ru: `Старый замок - замок в Гродно. Первое оборонительное сооружение было построено еще в XI веке. В XIII веке Гродно. В XIII веке Гродно вошло в состав Великого княжества Литовского, с начала следующего столетия стало целью многочисленных нападений крестоносцев. В 1391 году замок стал одной из главных резиденций Витовта, который в 1398 году вместо деревянной крепости построил каменный замок с пятью башнями. Это здание в основном сохранилось и по сей день.\n
                          В 1445 году великий князь литовский Казимир IV Ягеллончик принял здесь польского посла, предлагавшего ему корону, а в 1492 году скончался в замке. Часто здесь останавливался Стефан Баторий, который фактически сделал Гродно своей столицей. По инициативе короля около 1580 года замок был перестроен в стиле ренессанса итальянским архитектором Скотто из Пармы. В начале XVIII века был сожжён шведами во время Северной войны и уже никогда не имел былого значения.\n
                          \n Текст wikipedia.org`,
                en: `The old castle is a castle in Grodno. The first defensive structure dates back as far as to the 11th century. In 13th century Grodno became a part of the Grand Duchy of Lithuania and from the beginning of the next century - the target of numerous Crusader attacks. In 1391 the castle became one of the main residences of Vytautas, who in 1398 instead of a wooden fortress built a stone castle with five towers. This construction largely survived to this day. \n
                    In 1445 the Grand Duke of Lithuania Casimir IV Jagiellon received here a Polish ambassador that offered him a crown and in 1492 the Duke died in the castle. Stefan Batory, who essentially made Grodno his capital often stayed here. At the initiative of the king around 1580 the castle was rebuilt in Renaissance style by an Italian architect Scotto of Parma. At the beginning of the 18th century it was burned by the Swedes during the Northern War and afterwards never retrieved its former significance.`
            },
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/castles/old/old_castleXVI.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XVI в. Фото allcastles.ru',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/old_castleXX.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/old_castleXX-1.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/old_castle1930th.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/old_castle1930th-1.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/old_castle1930th-2.png',
                    year: {
                        ru: '',
                        en: ''
                    },
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        }
    ]
};

export default castles;