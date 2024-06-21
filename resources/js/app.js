import { createWebHistory, createRouter } from 'vue-router';
import { createApp } from 'vue';
import HomePage from './pages/HomePage.vue';
import ServicesPage from './pages/ServicesPage.vue';
import ImigrationPage from './pages/ImigrationPage.vue';
import AboutPage from './pages/AboutPage.vue';
import ServicesFamilyPage from './pages/ServicesFamilyPage.vue';
import ServicesBusiness from './pages/ServicesBusiness.vue';
import ServicesInvestments from './pages/ServicesInvestments.vue';




import SectionFooter from './section/SectionFooter.vue';
import SectionHeader from './section/SectionHeader.vue';
import ContactForm from './components/ContactForm.vue';





console.log("JavaScript файл исполняется...");

const routes = [
    { path: '/', component: HomePage },
    { path: '/services', component: ServicesPage },
    { path: '/about', component: AboutPage },
    { path: '/imigration', component: ImigrationPage },
    { path: '/services-family', component: ServicesFamilyPage },
    { path: '/services-business', component: ServicesBusiness },
    { path: '/services-investments', component: ServicesInvestments },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

console.log("Vue Router работает корректно...");

const app = createApp({});

app.component('section-footer', SectionFooter);
app.component('section-header', SectionHeader);
app.component('contact-form', ContactForm);

app.use(router);
app.mount('#app');



