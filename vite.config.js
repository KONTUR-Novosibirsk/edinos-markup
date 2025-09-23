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
                resolve(__dirname, 'src/partials'),
                resolve(__dirname, 'src/components'),
                resolve(__dirname, 'src/components/header'),
                resolve(__dirname, 'src/components/support'),
                resolve(__dirname, 'src/components/searches'),
                resolve(__dirname, 'src/components/sliders'),
                resolve(__dirname, 'src/components/activities'),
                resolve(__dirname, 'src/components/formsAndModal'),
                resolve(__dirname, 'src/components/billing'),
                resolve(__dirname, 'src/components/internet'),
                resolve(__dirname, 'src/components/tariffs'),
                resolve(__dirname, 'src/components/about'),
                resolve(__dirname, 'src/components/channels'),
                resolve(__dirname, 'src/components/footer'),


            ],
            context: {
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
