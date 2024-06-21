<template>
    <div>
        <section-hero-swiper></section-hero-swiper>

        <section-services :items="services">
            <template #title> Our Services</template>
            <template #button>
                <router-link class="button button--primary" to="#">
                    <span>Find Out More</span>
                </router-link>
            </template>
        </section-services>
        <section class="section">
            <div class="row">
                <div class="col-xs-12 col-sm-4 overflow">
                    <div class="background" style="background-image: url('/img/move/image_villa.jpg')"></div>
                </div>
                <div class="col-xs-12 col-sm-4 relative">
                    <div class="center-sm middle-sm" style="padding: 0 50px;">
                        <div class="h2 box uppercase">Moving to Paradise</div>
                        <div class="text box">Have you ever dreamed about the perfect place to live? Your definition of
                            perfect
                            may be different someone else’s. Are you longing to live by the beach and listen to the
                            soothing
                            waves or are you a kind of person who enjoys the bustling sounds of the city? Whatever
                            lifestyle
                            you desire, Cyprus has it all! Whether you’re travelling with your family, your partner, or
                            as a
                            solo business entrepreneur, this exotic island can offer you a little bit of everything.
                        </div>
                        <div class="text box">If you’ve made the decision to relocate to Cyprus, then you are expecting
                            to
                            find
                            a safe place to settle. With extremely low crime rate, stunning sandy beaches, and
                            awe-inspiring
                            mountain views, Cyprus is the place to be!</div>
                        <router-link to="/find-out-more" class="button button--primary">Find Out More</router-link>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 overflow">
                    <div class="background" style="background-image: url('/img/move/image_villas.jpg')"></div>

                </div>

            </div>
        </section>

        <section-services-items :items="servicesItems">
            <template #title> Why Choose Cyprus? </template>
            <template #text> When you’re searching for the ideal home you want everything to be perfect. This is why
                over the years more and more people from all around the world are choosing Cyprus as their ultimate
                destination. This smal Mediterranean mesmerizes millions of visitors every year.
            </template>
        </section-services-items>

        <section-location> </section-location>

        <section class="section section__purple">
            <div class="wrapper">
                <div class="row" style="justify-content: space-between;">
                    <div class="col-xs-12 col-sm-6 white" style="max-width: 480px;">
                        <div class="h2 box uppercase">Who We Are</div>
                        <div class="text box">Have you ever dreamed about the perfect place to live? Your
                            definition
                            of
                            PAM Consulting is built upon a team of motivated professionals aiming to provide
                            families
                            and businesses the services they need to relocate to the island of Cyprus.
                        </div>
                        <div class="text box3x">If you’ve made the decision to relocate to Cyprus, then you are
                            expecting
                            to
                            find
                            a safe place to settle. With extremely low crime rate, stunning sandy beaches, and
                            awe-inspiring
                            mountain views, Cyprus is the place to be!</div>
                        <router-link to="/find-out-more" class="button button--yellow">More about us</router-link>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div class="card card--grey flex" style="gap:40px">
                            <div class="background"
                                style="background-image: url('/img/team/founder.jpg'); width: 200px; height: 350px; border-radius:10px;">
                            </div>
                            <div>
                                <div class="h4 box purple">FOUNDER</div>
                                <div class="text box--small">Anastasia Papaharidemou</div>
                                <router-link to="/find-out-more" class="button button--yellow">Contact</router-link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section-services-items :items="newServicesItems">
            <template #title> How we make it happen</template>
        </section-services-items>

        <contact-form></contact-form>
        <section-logo></section-logo>

        <section-swiper-faq> </section-swiper-faq>
        <section-footer> </section-footer>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import SectionHeroSwiper from '../section/SectionHeroSwiper.vue';
import SectionServices from '../section/SectionServices.vue';
import SectionLocation from '../section/SectionLocation.vue';
import SectionImageText from '../section/SectionImageText.vue';
import SectionLogo from '../section/SectionLogo.vue';
import ContactForm from '../components/ContactForm.vue';

import SectionTextImage from '../section/SectionTextImage.vue';
import SectionServicesItems from '../section/SectionServicesItems.vue';
import SectionSwiperFaq from '../section/SectionSwiperFaq.vue';
import SectionFooter from '../section/SectionFooter.vue';



const services = [
    {
        image: '/img/services/services_family.jpg',
        subtitle: 'Family Relocation',
        text: 'With strategic planning, we simplify the moving process so you and your family can feel safe and confident.'
    },
    {
        image: '/img/services/services_business.jpg',
        subtitle: 'Business Relocation',
        text: 'We handle the responsibility of moving your business to Cyprus, so you can focus on your business goals.'
    },
    {
        image: '/img/services/services_investment.jpg',
        subtitle: 'Investment plans',
        text: 'Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan.'
    },
];

const servicesItems = [
    {
        image: '/img/services/services_slide1.png',
        title: 'Progressive tax system',
        text: 'Offering one of the most attractive tax regimes in Europe'
    },
    {
        image: '/img/services/services_slide2.png',
        title: 'Stunning weather and climate',
        text: 'Enjoy a high quality of life with over 324 days of sun annually'
    },
    {
        image: '/img/services/services_slide3.png',
        title: 'Blooming expat community',
        text: 'Become part of an increasingly diverse community'
    },
    {
        image: '/img/services/services_slide4.png',
        title: 'Family-oriented values',
        text: 'Excellent education standards and extremely low crime rates'
    },
]

const newServicesItems = [
    {
        image: '/img/services/new-services1.png',
        title: 'We listen',
        text: 'Our most prominent purpose is to understand and identify with your needs so we can effectively find ways to provide solutions.'
    },
    {
        image: '/img/services/new-services2.png',
        title: 'We strategize',
        text: 'According to your requirements, our team designs a thorough series of steps that will make the relocation process as smooth  as possible.'
    },
    {
        image: '/img/services/new-services3.png',
        title: 'We provide',
        text: 'We implement our services that are based on efficient strategic planning that respond to your family’s and business’s goals and ambitions.'
    },
    {
        image: '/img/services/new-services4.png',
        title: 'We manage',
        text: 'Once you are settled, we make sure that everything is according to your expectations and your vision of the quality of our services.'
    },
]
</script>
