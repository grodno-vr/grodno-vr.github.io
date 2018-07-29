const zoo = {
    name: 'zoo',
    style: {},
    portals: [
        {
            name: 'sobor',
            transformPortal: [{translate: [12, 0, 0]}]
        }
    ],
    labels: [
        {
            offset: -90,
            viewStyle: {
                transform: [{translate: [-10, 2, -4]}, { scale : 3 }, { rotateY: 90 }]
            },
            text: {
                ru: 'Зоопарк Яна Кохановского',
                en: 'Jan Koсhanowski Zoo'
            },
            description: {
                ru: `Гродненский зоопарк - первый, крупнейший по коллекции и долгое время единственный зоопарк в Беларуси. Годом основания считается 1927, когда в ботаническом саду мужской гимназии имени А.Мицкевича открылся зоологический отдел. История Гродненского зоопарка началась с группы энтузиастов из Общества любителей природы во главе с Яном Кохановским - преподавателем биологии в мужской гимназии им. А.Мицкевича. По его инициативе в 1926 на благотворительные средства в парке (им. Жилибера) для учебных целей был создан ботанический сад. К учебному году 1927-1928 к саду был добавлен среди прочих отделов зоологический, образованный переездом гимназийского зооуголка. Первым обитателем сада считается обыкновенный бобр чёрного окраса: за ним в Лунно ездил сам Кохановский, откуда пришла телеграмма о раненом животном. Ян Кохановский вместе с другими любителями природы добились от городского управления переноса зоологического отдела на заброшенный городской велотрек по улице Станиславовской (иначе Станиславского), теперь ул. Яна Кохановского.\n
                          В годы войны зоопарку был нанесён большой ущерб: здания были уничтожены или повреждены, ценные и редкие экземпляры были вывезены в зоопарк Кёнигсберга, остальные уничтожены. Ян Кохановский отказался от эвакуации и остался в Гродно. После убийства немецкого врача участниками сопротивления, гестапо арестовало около 100 представителей местной интеллигенции, среди которых был и Ян Кохановский. На просьбу общественности освободить арестованных шеф гестапо заявил, что застрелены будут только 25 человек из 100, а остальные отпущены. В эти двадцать пять человек попал друг Яна Кохановского, учитель Юзеф Вевюрский, отец шестерых детей. Кохановский предложил шефу гестапо обмен - свою жизнь взамен на свободу Юзефу Вевюрскому. В июне 1942 года Ян Кохановский был расстрелян.\n
                          Текст wikipedia.org `,
                en: `Grodno Zoo is the first, largest in collection and for a long time the only zoo in Belarus. It was founded in 1927, when the zoological department in the botanical garden of the Mickiewicz male gymnasium was opened. The history of the Grodno zoo begins from a group of enthusiasts from the Society for Nature Lovers, led by Jan Koсhanowski, a biology teacher at Mickiewicz male gymnasium. On his initiative in 1926 in the park (named after Gilibert) a botanical garden for educational purposes was created on charitable funds. By the school year of 1927-1928 a zoological section, formed by the relocation of the gymnasium zoo, was among other departments to be added to the garden. The first inhabitant of the garden was a black beaver: Kochanowski himself went for it to Lunno, from where came a telegram about a wounded animal. Jan Kochanowski, along with other nature lovers, got of the city government the transfer of the zoological department to the abandoned city cycle track along Stanislavovskaya (or  Stanislavsky) street, which today is called Jan Kochanowski street. \n
                    During the war the zoo suffered great damage: the constructions were destroyed or damaged, valuable and rare specimens were taken to Koenigsberg zoo, others were destroyed. Jan Kochanowski refused to evacuate and stayed in Grodno. After the murder of German physician by the resistance, Gestapo arrested about 100 representatives of local intellectuals, among whom was Jan Kochanowski. At the plea of the public to release the arrested the Gestapo chief announced that only twenty five people out of one hundred would be shot and the rest would be released. Among those twenty five people was Jan Kochanowski’s friend, teacher Jozef Vejurski, a father of six. Kochanowski offered to the Gestapo chief an exchange - his life in exchange for Jozef Vejurski’s freedom. In June 1942 Jan Kochanowski was shot.`
            },
            infoPosition: 600, // pixels
            infoHeight: 1200,
            galleryStyle: {
                transform: [{translate: [-12, 4.5, -1]}, { rotateY: 90 }]
            },
            oldImages: [
                {
                    source: 'places/zoo/old/zooXIX-XX.png',
                    year: {
                        ru: 'XIX-XX вв.',
                        en: '19-20th c.'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/zooXX.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by, Ф.Ворошильский',
                        en: '20th c. Photo oldgrodno.by, F.Woroszylski'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/zooXX-1.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by, Ф.Ворошильский',
                        en: '20th c. Photo oldgrodno.by, F.Woroszylski'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/zoo1930th.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by',
                        en: '1930th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/zoo1930th-1.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by',
                        en: '1930th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/zoo1930th-2.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by',
                        en: '1930th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/zoo1930th-3.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by',
                        en: '1930th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/zoo1930th-4.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by',
                        en: '1930th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/zoo1930th-5.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by',
                        en: '1930th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/zoo1930th-6.png',
                    year: {
                        ru: '1930-е, Фото oldgrodno.by, Ф.Ворошильский',
                        en: '1930th, Photo oldgrodno.by, F.Woroszylski'
                    },
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
                transform: [{translate: [0, 1.5, -5]}, { scale : 1.5 }]
            },
            text: {
                ru: 'Железнодорожный Вокзал',
                en: 'Railway Station'
            },
            description: {
                ru: `Станция Гродно действует с 15 декабря 1862 года (как узловая станция с 1907 года) на первой на территории современной Беларусии Полесской железной дороге (участок Гродно-Поречье) бывшей Петербурго-Варшавской железной дороги. До 1946 года станция была в составе упразднённой Белостокской железной дороги, до 1951 года - в составе ликвидированного Гродненского отделения упразднённой Брест-Литовской железной дороги. Современное здание вокзала было построено в 1986 году (старое при этом было снесено). К 2013 году произведено обновление вокзального здания, масштабная реконструкция всего вокзально-станционного комплекса завершается в 2015 году.
                          \n\n Текст wikipedia.org`,
                en: `Grodno railway station has been operating since December 15, 1862 (as a terminal station since 1907) on Polissya railway (Grodno-Porechye section), first railway on the territory of modern Belarus, of former St. Petersburg-Warsaw railway. Until 1946 the station belonged to abolished Bialystok railway, and until 1951 - to liquidated Grodno branch of abolished Brest-Litovsk railway. The modern building of the station was built in 1986 (while the old one was demolished). By 2013 the station building had been renovated, and a large-scale reconstruction of the entire station and station complex was completed in 2015.`
            },
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/zoo/old/railwayXIX-1.png',
                    year: {
                        ru: 'XIX в. Фото oldgrodno.by',
                        en: '19th c., Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/railwayXIX.png',
                    year: {
                        ru: 'XIX в. Фото oldgrodno.by',
                        en: '19th c., Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/railwayXIX-XX.png',
                    year: {
                        ru: 'XIX-XX вв.',
                        en: '19-20th c.'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/railwayXX.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by',
                        en: '20th c., Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/railwayXX-1.png',
                    year: {
                        ru: 'XX в. Фото oldgrodno.by',
                        en: '20th c., Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/railway1915.png',
                    year: {
                        ru: '1915 г. Фото oldgrodno.by',
                        en: '1915, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/railway1947.png',
                    year: {
                        ru: '1947 г. Фото oldgrodno.by',
                        en: '1947, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/railway1950th.png',
                    year: {
                        ru: '1950-е, Фото oldgrodno.by',
                        en: '1950th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/railway1960th.png',
                    year: {
                        ru: '1960-е, Фото oldgrodno.by',
                        en: '1960th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/railway1960th-1.png',
                    year: {
                        ru: '1960-е, Фото oldgrodno.by',
                        en: '1960th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/railway1970th.png',
                    year: {
                        ru: '1970-е, Фото oldgrodno.by',
                        en: '1970th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/railway1987.png',
                    year: {
                        ru: '1987 г. Фото oldgrodno.by',
                        en: '1987, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zoo/old/railway1990th.png',
                    year: {
                        ru: '1990-е, Фото oldgrodno.by',
                        en: '1990th, Photo oldgrodno.by'
                    },
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        }
    ]
};

export default zoo;