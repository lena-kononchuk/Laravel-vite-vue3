import { createWebHistory, createRouter } from 'vue-router';
import { createApp } from 'vue';
import './bootstrap';
import axios from 'axios';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/bgset/ls.bgset';

import { defineAsyncComponent } from 'vue';




// import HomePage from './pages/HomePage.vue';
// import ServicesPage from './pages/ServicesPage.vue';
// import ImmigrationPage from './pages/ImmigrationPage.vue';
// import AboutPage from './pages/AboutPage.vue';
// import ServicesFamilyPage from './pages/ServicesFamilyPage.vue';
// import ServicesBusiness from './pages/ServicesBusiness.vue';
// import ServicesInvestments from './pages/ServicesInvestments.vue';
// import SectionFooter from './section/SectionFooter.vue';
// import SectionHeader from './section/SectionHeader.vue';
// import DisclaimerPage from './pages/DisclaimerPage.vue';
// import PrivacyPolicyPage from './pages/PrivacyPolicyPage.vue';
// import enquiryPage from './pages/ContactPage.vue';
// import Navigation from './components/Navigation.vue';
// import NavMobile from './components/NavMobile.vue';



const HomePage = defineAsyncComponent(() => import('./pages/HomePage.vue'));
const ServicesPage = defineAsyncComponent(() => import('./pages/ServicesPage.vue'));
const ImmigrationPage = defineAsyncComponent(() => import('./pages/ImmigrationPage.vue'));
const AboutPage = defineAsyncComponent(() => import('./pages/AboutPage.vue'));
const ServicesFamilyPage = defineAsyncComponent(() => import('./pages/ServicesFamilyPage.vue'));
const ServicesBusiness = defineAsyncComponent(() => import('./pages/ServicesBusiness.vue'));
const ServicesInvestments = defineAsyncComponent(() => import('./pages/ServicesInvestments.vue'));
const SectionFooter = defineAsyncComponent(() => import('./section/SectionFooter.vue'));
const SectionHeader = defineAsyncComponent(() => import('./section/SectionHeader.vue'));
const DisclaimerPage = defineAsyncComponent(() => import('./pages/DisclaimerPage.vue'));
const PrivacyPolicyPage = defineAsyncComponent(() => import('./pages/PrivacyPolicyPage.vue'));
const enquiryPage = defineAsyncComponent(() => import('./pages/ContactPage.vue'));
const Navigation = defineAsyncComponent(() => import('./components/Navigation.vue'));
const NavMobile = defineAsyncComponent(() => import('./components/NavMobile.vue'));




const routes = [
    { path: '/', component: HomePage },
    { path: '/services', component: ServicesPage },
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
document.addEventListener('DOMContentLoaded', () => {
    const lazyBackgrounds = document.querySelectorAll('.lazyload[data-bg]');

    lazyBackgrounds.forEach((el) => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const element = entries[0].target;
                const bgImage = element.getAttribute('data-bg');
                element.style.backgroundImage = `url(${bgImage})`;
                observer.disconnect(); // Отключаем observer после загрузки
            }
        });

        observer.observe(el);
    });
});



axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

console.log("Vue Router работает корректно...");

const app = createApp({});




app.component('section-footer', SectionFooter);
app.component('section-header', SectionHeader);
app.component('contact-form', enquiryPage);
app.component('navigation', Navigation);
app.component('nav-mobile', NavMobile);

app.use(router);
app.mount('#app');



