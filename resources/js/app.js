import { createWebHistory, createRouter } from 'vue-router';
import { createApp } from 'vue';
import HomePage from './pages/HomePage.vue';
import ServicesPage from './pages/ServicesPage.vue';
import SectionFooter from './section/SectionFooter.vue';
import SectionHeader from './section/SectionHeader.vue';
import AboutPage from './pages/AboutPage.vue';




console.log("JavaScript файл исполняется...");

const routes = [
    { path: '/', component: HomePage },
    { path: '/services', component: ServicesPage },
    { path: '/about', component: AboutPage },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

console.log("Vue Router работает корректно...");

const app = createApp({});

app.component('section-footer', SectionFooter);
app.component('section-header', SectionHeader);

app.use(router);
app.mount('#app');



