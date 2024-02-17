import { createRouter, createWebHashHistory } from 'vue-router';

// Importo componenti
import App from './App.vue';
import AboutUsSection from './components/AboutUsSection.vue';

const router = createRouter({
    history: createWebHashHistory(),
    //mode: "hash",
    routes: [
        // Rotta Home
        {
            path: '/',
            alias: '/operazione-africa/',
            name: 'home',
            component: App
        },
        {
            path: '/about-us/:id',
            name: 'about-us',
            component: AboutUsSection
        },
        // // Rotta Orizzontali
        // {
        //     path: '/orizzontali/:id',
        //     name: 'orizzontali',
        //     component: Orizzontali
        // },
        // // Rotta Porta a Battente
        // {
        //     path: '/porta-a-battente/:id',
        //     name: 'porta-a-battente',
        //     component: PortaABattente
        // },
        // // Rotta Scorri
        // {
        //     path: '/scorri/:id',
        //     name: 'scorri',
        //     component: Scorri
        // },
        // // Rotta Fissa
        // {
        //     path: '/fissa/:id',
        //     name: 'fissa',
        //     component: Fissa
        // },
        // // Rotta Casper
        // {
        //     path: '/casper/:id',
        //     name: 'casper',
        //     component: Casper
        // },
        // // Rotta preventivo
        // {
        //     path: '/preventivo',
        //     name: 'preventivo',
        //     component: Preventivo
        // },
        // // Rotta Sede
        // {
        //     path: '/sede',
        //     name: 'sede',
        //     component: Sede
        // },
        // // Rotta Contatti
        // {
        //     path: '/contatti',
        //     name: 'contatti',
        //     component: Contatti
        // },
    ],
    scrollBehavior(to, from, savedPosition) {
        // Per scrollare in alto
        return { top: 0 }
    },
});

export { router };