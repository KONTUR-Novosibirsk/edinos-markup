import {defineConfig} from 'vite';
import {resolve} from 'path'
import {fileURLToPath, URL} from 'node:url';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'src/pages/about.html'),
                support: resolve(__dirname, 'src/pages/support.html'),
                subscriber: resolve(__dirname, 'src/pages/subscriber.html'),
                internet: resolve(__dirname, 'src/pages/internet.html'),
                tv: resolve(__dirname, 'src/pages/tv.html'),
                VideoSurveillance: resolve(__dirname, 'src/pages/VideoSurveillance.html'),
                tariffsPage: resolve(__dirname, 'src/pages/tariffsPage.html'),
                discountPage: resolve(__dirname, 'src/pages/discountPage.html'),
            }
        }
    },


    plugins: [
        handlebars({
            partialDirectory: [
                //Новое подключение
                // Слайдеры - Изменить название папок
                resolve(__dirname, 'src/newPartials'),
                resolve(__dirname, 'src/newPartials/sliders'),
                resolve(__dirname, 'src/newPartials/billing'),
                resolve(__dirname, 'src/newComponents/sliders'),
                resolve(__dirname, 'src/newComponents/activities'),
                resolve(__dirname, 'src/newComponents/billing'),
                resolve(__dirname, 'src/newComponents/tariffs'),
                resolve(__dirname, 'src/newComponents/searches'),
                resolve(__dirname, 'src/newComponents/internet'),
                resolve(__dirname, 'src/newComponents/channels'),


                resolve(__dirname, 'src/partials'),
                resolve(__dirname, 'src/components'),
                resolve(__dirname, 'src/components/header'),
                resolve(__dirname, 'src/components/support'),
                resolve(__dirname, 'src/components/searches'),
                resolve(__dirname, 'src/components/sliders'),
                resolve(__dirname, 'src/components/formsAndModal'),
                // resolve(__dirname, 'src/components/billing'),
                resolve(__dirname, 'src/components/internet'),
                resolve(__dirname, 'src/components/tariffs'),
                resolve(__dirname, 'src/components/about'),
                resolve(__dirname, 'src/components/footer'),


            ],
            context: {
                walletImages: [
                    'src/assets/images/icons/visa.svg',
                    'src/assets/images/icons/masterCard.svg',
                    'src/assets/images/icons/mir.svg',
                    'src/assets/images/icons/sbp.svg',
                ],
                trustList: [
                    'Более 14 лет на рынке – мы знаем всё о подключении частных домов и коттеджей.',
                    'Собственная инфраструктура – оптоволоконные сети (GPON) вместо устаревших технологий.',
                    'Решаем сложные задачи – подключаем даже там, где другие отказывают.'
                ],
                vacancy: [
                    '-заниматься тестированием новых продуктов и услуг перед запуском (проверка корректности тарификации, доступность подключения/отключения тарифов и услуг, работоспособность услуг)',
                    '-взаимодействовать с сотрудниками других структурных подразделений, принимать участие в переговорах, связанных с тестированием продуктов и исправлением выявленных в процессе тестирования проблем.',

                ],
                faqMoney: [
                    {
                        question: 'Как оплатить услуги онлайн',
                        answer: 'Вы можете оплатить услуги онлайн через личный кабинет или мобильное приложение.'
                    },
                    {
                        question: 'Как настроить уведомления о балансе',
                        answer: 'Уведомления о балансе настраиваются в разделе "Профиль" → "Уведомления".'
                    },
                    {
                        question: 'Как узнать баланс',
                        answer: 'Баланс можно узнать в личном кабинете или по телефону службы поддержки.'
                    },
                    {
                        question: 'Как оплатить услуги наличными',
                        answer: 'Оплата наличными возможна в офисах компании и в терминалах партнёров.'
                    },
                    {
                        question: 'Как оплатить услуги онлайн',
                        answer: 'Также доступна оплата картой VISA/MasterCard через сайт.'
                    },
                    {
                        question: 'Как настроить уведомления о балансе',
                        answer: 'Выберите частоту уведомлений и способ доставки (SMS, Email).'
                    },
                    {
                        question: 'Как узнать баланс',
                        answer: 'Отправьте USSD-команду *100# или зайдите в приложение.'
                    },
                    {
                        question: 'Как оплатить услуги наличными',
                        answer: 'Кассиры принимают оплату по номеру лицевого счёта.'
                    }
                ],
                faqInternet: [
                    {
                        question: 'Как измерить скорость интернета',
                        answer: 'Используйте сервис speedtest.net или раздел "Скорость" в личном кабинете.'
                    },
                    {
                        question: 'От чего зависит скорость интернета',
                        answer: 'Скорость зависит от тарифа, состояния кабеля и загруженности сети.'
                    },
                    {
                        question: 'Почему плохо работает Wi-Fi',
                        answer: 'Причина может быть в роутере, настройках канала или помехах от других устройств.'
                    },
                    {
                        question: 'Пропал интернет. Что делать?',
                        answer: 'Перезагрузите роутер и проверьте соединение. Если не помогло — обратитесь в поддержку.'
                    },
                    {
                        question: 'Как измерить скорость интернета',
                        answer: 'Для точности проводите тест через кабель, а не Wi-Fi.'
                    },
                    {
                        question: 'От чего зависит скорость интернета',
                        answer: 'Иногда замедление связано с работой торрент-клиентов или видеостримингом.'
                    },
                    {
                        question: 'Почему плохо работает Wi-Fi',
                        answer: 'Попробуйте сменить канал Wi-Fi в настройках роутера.'
                    },
                    {
                        question: 'Пропал интернет. Что делать?',
                        answer: 'Убедитесь, что услуги оплачены, и что индикаторы на модеме горят зелёным.'
                    }
                ],
                faqPrefix: [
                    {
                        question: 'Как подключить дополнительные телеканалы, видеосервисы',
                        answer: 'Дополнительные каналы подключаются через меню приставки или личный кабинет.'
                    },
                    {
                        question: 'Как подключить голосовой пульт на приставке Eltex NV-510',
                        answer: 'Зайдите в меню "Настройки" → "Пульт ДУ" и следуйте инструкции на экране.'
                    },
                    {
                        question: 'Как подключить голосовой пульт на приставке Vermax',
                        answer: 'Вставьте батарейки, зажмите кнопку "Mic" и поднесите пульт к приставке.'
                    },
                    {
                        question: 'Как подключить дополнительные телеканалы, видеосервисы',
                        answer: 'Для видеосервисов нужна активация в разделе "Приложения" меню приставки.'
                    },
                    {
                        question: 'Как подключить голосовой пульт на приставке Eltex NV-510',
                        answer: 'Если пульт не определяется — сбросьте приставку до заводских настроек.'
                    },
                    {
                        question: 'Как подключить голосовой пульт на приставке Vermax',
                        answer: 'Удерживайте кнопку "OK" 5 секунд для синхронизации.'
                    }
                ],
                tariffs: [
                    {
                        title: 'Рекомендуем',
                        speed: 100,
                        price: '999₽',
                        note: '240 ТВ-каналов',
                        img: 'src/assets/images/ellipse_speed.png'
                    },
                    {
                        title: 'Интернет + ТВ',
                        speed: 300,
                        price: '1499₽',
                        note: '320 ТВ-каналов',
                        img: 'src/assets/images/ellipse_speed.png'

                    },
                    {
                        title: 'Премиум',
                        speed: 500,
                        price: '1999₽',
                        note: 'Все каналы и сервисы',
                        img: 'src/assets/images/ellipse_speed.png'

                    },
                    {
                        title: 'Премиум',
                        speed: 600,
                        price: '1400',
                        note: 'Все каналы и сервисы',
                        img: 'src/assets/images/ellipse_speed.png'

                    },
                    {
                        title: 'Премиум',
                        speed: 500,
                        price: '1999₽',
                        note: 'Все каналы и сервисы',
                        img: 'src/assets/images/ellipse_speed.png'

                    },
                    {
                        title: 'Премиум',
                        speed: 500,
                        price: '1999₽',
                        note: 'Все каналы и сервисы',
                        img: 'src/assets/images/ellipse_speed.png'

                    }
                ],
                tariffsInternet: [
                    {
                        title: 'Рекомендуем',
                        speed: 100,
                        price: '999₽',
                        note: '240 ТВ-каналов',
                        img: '/src/assets/images/ellipse_speed.png'
                    },
                    {
                        title: 'Интернет + ТВ',
                        speed: 300,
                        price: '1499₽',
                        note: '320 ТВ-каналов',
                        img: '/src/assets/images/ellipse_speed.png'

                    },


                ],
                tariffsTv: [
                    {
                        title: 'Рекомендуем',
                        speed: 100,
                        price: '999₽',
                        note: '240 ТВ-каналов',
                        img: '/src/assets/images/ellipse_speed.png'
                    },
                    {
                        title: 'Интернет + ТВ',
                        speed: 300,
                        price: '1499₽',
                        note: '320 ТВ-каналов',
                        img: '/src/assets/images/ellipse_speed.png'

                    },
                    {
                        title: 'Интернет + ТВ',
                        speed: 300,
                        price: '1499₽',
                        note: '320 ТВ-каналов',
                        img: '/src/assets/images/ellipse_speed.png'

                    },


                ],
                channels: [
                    {
                        key: "all",
                        title: "Все каналы",
                        items: [
                            "/src/assets/images/channels_1.png",
                            "/src/assets/images/channels_2.png",
                            "/src/assets/images/channels_3.png",
                            "/src/assets/images/channels_4.png",
                            "/src/assets/images/channels_5.png",
                            "/src/assets/images/channels_6.png",
                            "/src/assets/images/channels_7.png",
                            "/src/assets/images/channels_8.png",

                        ]
                    },
                    {
                        key: "federal",
                        title: "Федеральные",
                        items: [
                            "/src/assets/images/channels_2.png",
                            "/src/assets/images/channels_2.png",
                            "/src/assets/images/channels_2.png"
                        ]
                    },
                    {
                        key: "cinema",
                        title: "Кино и сериалы",
                        items: [
                            "/src/assets/images/channels_3.png",
                            "/src/assets/images/channels_3.png",
                            "/src/assets/images/channels_3.png"
                        ]
                    },
                    {
                        key: "news",
                        title: "Новостные",
                        items: [
                            "/src/assets/images/channels_4.png",
                            "/src/assets/images/channels_4.png",
                            "/src/assets/images/channels_4.png"
                        ]
                    },
                    {
                        key: "entertainment",
                        title: "Развлекательные",
                        items: [
                            "/src/assets/images/channels_5.png",
                            "/src/assets/images/channels_5.png",
                            "/src/assets/images/channels_5.png"
                        ]
                    },
                    {
                        key: "cognitive",
                        title: "Позновательные",
                        items: [
                            "/src/assets/images/channels_5.png",
                            "/src/assets/images/channels_5.png",
                            "/src/assets/images/channels_5.png"
                        ]
                    },
                    {
                        key: "sport",
                        title: "Спортивные",
                        items: [
                            "/src/assets/images/channels_6.png",
                            "/src/assets/images/channels_6.png",
                            "/src/assets/images/channels_6.png"
                        ]
                    },
                    {
                        key: "kids",
                        title: "Детские",
                        items: [
                            "/src/assets/images/channels_7.png",
                            "/src/assets/images/channels_7.png",
                            "/src/assets/images/channels_7.png"
                        ]
                    },
                    {
                        key: "musical",
                        title: "Музыкальные",
                        items: [
                            "/src/assets/images/channels_8.png",
                            "/src/assets/images/channels_8.png",
                            "/src/assets/images/channels_8.png"
                        ]
                    },
                ]

            },
        }),

    ],


    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        },
    },
});
