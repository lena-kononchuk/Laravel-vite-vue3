import { createWebHistory, createRouter } from 'vue-router';
import { createApp } from 'vue';
import './bootstrap';
import axios from 'axios';

import HomePage from './pages/HomePage.vue';
import ServicesPage from './pages/ServicesPage.vue';
import ImmigrationPage from './pages/ImmigrationPage.vue';
import AboutPage from './pages/AboutPage.vue';
import ServicesFamilyPage from './pages/ServicesFamilyPage.vue';
import ServicesBusiness from './pages/ServicesBusiness.vue';
import ServicesInvestments from './pages/ServicesInvestments.vue';
import SectionFooter from './section/SectionFooter.vue';
import SectionHeader from './section/SectionHeader.vue';
import DisclaimerPage from './pages/DisclaimerPage.vue';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.vue';
import enquiryPage from './pages/ContactPage.vue';





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
    { path: '/enquiry', component: enquiryPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        // Smooth scroll to the top of the app element on route change
        document.getElementById('app').scrollIntoView({
            behavior: 'smooth',

        });
    }
});


axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

console.log("Vue Router работает корректно...");

const app = createApp({});

app.component('section-footer', SectionFooter);
app.component('section-header', SectionHeader);
app.component('contact-form', enquiryPage);

app.use(router);
app.mount('#app');



