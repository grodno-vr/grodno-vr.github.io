const kalozha = {
    name: 'kalozha',
    style: {},
    portals: [
        {
            name: 'synagoge',
            transformPortal: [{translate: [-16, 1, -2]}]
        },
        {
            name: 'castles',
            transformPortal: [{translate: [-12, 0, -12]}]
        }
    ],
    labels: [
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [0, 1.5, -5]}, { scale : 1.5 }]
            },
            text: 'Свято-Борисо-Глебская Коложская Церковь',
            description: `Предположительно, церковь была построена во время правления гродненских князей Бориса и Глеба Всеволодковичей (первый умер до 1166, второй - в 1170) и освящена в честь их небесных покровителей, Бориса и Глеба. По другой версии - храм возведён в 1180-е годы детьми Бориса и Глеба.\n
                          Возведение храма осуществлялось на месте урочища Коложань (название «коложань, коложень» обозначает место, где бьют многочисленные родники), которое почиталось окрестными язычниками. Согласно другим исследованиям, название урочища происходит от жителей псковской крепости Коложа, взятых в плен великим князем Витовтом во время его нападения на Псков в 1406 году, и поселённых на территориях, прилегающих к Борисоглебской церкви. После разрушительного пожара 1184 года, который уничтожил соборную церковь древнего Городена, Борисоглебская церковь стала главным городским храмом. То же посвящение Борису и Глебу имела древнейшая церковь Новогрудка, вероятно, строившаяся в одно время с Коложской и, возможно, при участии гродненских мастеров.
                          \n Текст wikipedia.org`,
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/kalozha/old/kalozhaXIX.png',
                    year: 'XIX в. Автор Н.Орда',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/kalozha/old/kalozhaXIX-1.png',
                    year: 'XIX в. Автор Н.Орда',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/kalozha/old/kalozhaXX.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/kalozha/old/kalozhaXX-1.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/kalozha/old/kalozhaXX-2.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/kalozha/old/kalozhaXX-3.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        }
    ]
};

export default kalozha;