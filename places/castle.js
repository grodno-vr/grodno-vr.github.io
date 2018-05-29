const castle = {
    name: 'castle',
    // sound: 'audio/birds.mp3',
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
            text: 'Гербовый Картуш Речи Посполитой',
            description: `Гербовый картуш Речи Посполитой Обоих Народов времен короля Августа III. Картуш венчал фронтон Нового Замка, построенного в 1737-42 годах. Демонтирован в середине XIX века вовремя перестройки замка под военный госпиталь. Сохранен Станиславом Антонием Солтанам, с 1858 года находился в его поместье в Берестовице Мураваной. После 1923 года перевезен в Гродно создателем музея Юзефом Ядковским.
                          Автор 3D-модели Игорь Ламека.`,
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
            text: 'Новый Замок',
            description: `Новый замок в Гродно - новый королевский дворец, построенный в Гродно, напротив старого дворца (Старый замок), в 1734-1751 годах во время правления польского короля и великого князя литовского Августа III как летняя резиденция польских королей и великих князей литовских, по проекту Карла Фридриха Пёппельмана.\n
                          Работы в замке осуществляли также Иоганн Фридрих Кнёбель, Йохим Даниэль Яух и до 1789 года Джузеппе де Сакко. Здесь проходили генеральные сеймы I Речи Посполитой. В этом здании во время последнего сейма Речи Посполитой в 1793 году было подписано соглашение о разделе Речи Посполитой с Россией и Пруссией, а в 1795 году польский король и великий князь литовский Станислав Август Понятовский поставил подпись под актом отречения. Король жил в нём до 1797 года.\n 
                          В июле 1944 года здание сгорело в результате военных действий. Вновь отстроено к 1952 году в стиле советского неоклассицизма. В нём размещался областной комитет КПСС. В настоящее время там размещается часть экспозиции Гродненского историко-археологического музея. В 1994 году установлена памятная доска в честь национально-освободительного восстания 1794 г. под руководством Т. Костюшко.\n
                          \n Текст wikipedia.org`,
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-5, 6, -10]}]
            },
            oldImages: [
                {
                    source: 'places/castle/old/castleXX.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/castle/old/castleXX-1.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/castle/old/castle1917.png',
                    year: '1917 г. Фото oldgrodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/castle/old/castle1941-44.png',
                    year: '1941-44 гг. Фото oldgrodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/castle/old/castle1987.png',
                    year: '1987 г. Фото oldgrodno.by',
                    style: {
                        width: 8,
                        height: 4.9
                    }
                },
                {
                    source: 'places/castle/old/castle2008.png',
                    year: '2008 г. Фото oldgrodno.by',
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