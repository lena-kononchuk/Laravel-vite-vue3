import { createWebHistory, createRouter } from 'vue-router';
import { createApp } from 'vue';
import HomePage from './pages/HomePage.vue';

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

app.mount('#app');



