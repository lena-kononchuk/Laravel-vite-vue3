import { createWebHistory, createRouter } from 'vue-router';
import { createApp } from 'vue';
import HomePage from './pages/HomePage.vue';
import ServicesPage from './pages/ServicesPage.vue';
import ImmigrationPage from './pages/ImmigrationPage.vue';
import AboutPage from './pages/AboutPage.vue';
import ServicesFamilyPage from './pages/ServicesFamilyPage.vue';
import ServicesBusiness from './pages/ServicesBusiness.vue';
import ServicesInvestments from './pages/ServicesInvestments.vue';
import SectionFooter from './section/SectionFooter.vue';
import SectionHeader from './section/SectionHeader.vue';
import ContactForm from './components/ContactForm.vue';
import DisclaimerPage from './pages/DisclaimerPage.vue';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.vue';
import ContactPage from './pages/ContactPage.vue';





console.log("JavaScript файл исполняется...");

const routes = [
    { path: '/', component: HomePage },
    // { path: '/services', component: ServicesPage },
    { path: '/about', component: AboutPage },
    { path: '/immigration', component: ImmigrationPage },
    { path: '/services-family', component: ServicesFamilyPage },
    { path: '/services-business', component: ServicesBusiness },
    { path: '/services-investments', component: ServicesInvestments },
    { path: '/disclaimer', component: DisclaimerPage },
    { path: '/privacy-policy', component: PrivacyPolicyPage },
    { path: '/contact', component: ContactPage },
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



