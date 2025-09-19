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
                resolve(__dirname, 'src/components/footer'),

                // resolve(__dirname, 'src/partials/header'),
                // resolve(__dirname, 'src/partials/tariffs'),
                // resolve(__dirname, 'src/components/indexPage/banner'),
                // resolve(__dirname, 'src/components/indexPage/billing'),
                // resolve(__dirname, 'src/components/indexPage/tariffs'),
                // resolve(__dirname, 'src/components/indexPage/search'),
                // resolve(__dirname, 'src/components/indexPage/promotions'),


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
