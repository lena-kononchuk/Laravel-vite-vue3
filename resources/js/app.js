import { createWebHistory, createRouter } from 'vue-router';
import { createApp } from 'vue';
import HomePage from './pages/HomePage.vue';
import VueGoogleMaps from '@fawmi/vue-google-maps';

console.log("JavaScript файл исполняется...");

const routes = [
    { path: '/', component: HomePage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

console.log("Vue Router работает корректно...");

const app = createApp({});

app.use(router);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCY92VDM03aLG9Z3riE8IsV4wF0gemzv_M',
    },
});

app.mount('#app');



