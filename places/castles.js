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
            text: 'Новый Замок',
            description: `Новый замок в Гродно - новый королевский дворец, построенный в Гродно, напротив старого дворца (Старый замок), в 1734-1751 годах во время правления польского короля и великого князя литовского Августа III как летняя резиденция польских королей и великих князей литовских, по проекту Карла Фридриха Пёппельмана.\n
                          Работы в замке осуществляли также Иоганн Фридрих Кнёбель, Йохим Даниэль Яух и до 1789 года Джузеппе де Сакко. Здесь проходили генеральные сеймы I Речи Посполитой. В этом здании во время последнего сейма Речи Посполитой в 1793 году было подписано соглашение о разделе Речи Посполитой с Россией и Пруссией, а в 1795 году польский король и великий князь литовский Станислав Август Понятовский поставил подпись под актом отречения. Король жил в нём до 1797 года.\n 
                          В июле 1944 года здание сгорело в результате военных действий. Вновь отстроено к 1952 году в стиле советского неоклассицизма. В нём размещался областной комитет КПСС. В настоящее время там размещается часть экспозиции Гродненского историко-археологического музея. В 1994 году установлена памятная доска в честь национально-освободительного восстания 1794 г. под руководством Т. Костюшко.\n
                          \n Текст wikipedia.org`,
            infoPosition: 1, // pixels
            galleryStyle: {
                transform: [{translate: [-10, 4.5, 6]}, { rotateY: 130 }]
            },
            oldImages: [
                {
                    source: 'places/castles/old/new_castleXVIII.jpg',
                    year: 'XVIII в. Фото wikipedia.org',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/new_castleXIX.jpg',
                    year: 'XIX в. Фото zetgrodno.com',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/new_castleXX.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/new_castle1930th-3.png',
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/new_castle1944-50.png',
                    year: '1944-50 гг. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/new_castle1982.png',
                    year: '1982 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/new_castle1988.png',
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
            text: 'Старый Замок',
            description: `Старый замок - замок в Гродно. Первое оборонительное сооружение было построено еще в XI веке. В XIII веке Гродно. В XIII веке Гродно вошло в состав Великого княжества Литовского, с начала следующего столетия стало целью многочисленных нападений крестоносцев. В 1391 году замок стал одной из главных резиденций Витовта, который в 1398 году вместо деревянной крепости построил каменный замок с пятью башнями. Это здание в основном сохранилось и по сей день.\n
                          В 1445 году великий князь литовский Казимир IV Ягеллончик принял здесь польского посла, предлагавшего ему корону, а в 1492 году скончался в замке. Часто здесь останавливался Стефан Баторий, который фактически сделал Гродно своей столицей. По инициативе короля около 1580 года замок был перестроен в стиле ренессанса итальянским архитектором Скотто из Пармы. В начале XVIII века был сожжён шведами во время Северной войны и уже никогда не имел былого значения.\n
                          \n Текст wikipedia.org`,
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/castles/old/old_castleXVI.png',
                    year: 'XVI в. Фото allcastles.ru',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/old_castleXX.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/old_castleXX-1.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/old_castle1930th.png',
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/old_castle1930th-1.png',
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/castles/old/old_castle1930th-2.png',
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