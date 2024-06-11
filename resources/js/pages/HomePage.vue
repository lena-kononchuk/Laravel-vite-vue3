<template>
    <div>
        <section-hero-swiper></section-hero-swiper>

        <section-services :items="servicesItem">
            <template #title> Our Services</template>
            <template #button>
                <router-link class="button button--primary" to="#">
                    <span>Find Out More</span>
                </router-link>
            </template>
        </section-services>
        <section class="section">
            <div class="row">
                <div class="col-xs-12 col-sm-4">
                    <div class="background" style="background-image: url('/img/move/image_villa.jpg')"></div>
                </div>
                <div class="col-xs-12 col-sm-4">
                    <div class="center-sm">
                        <div class="h2 box">Moving to Paradise</div>
                        <div class="text">Have you ever dreamed about the perfect place to live? Your definition of
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
                <div class="col-xs-12 col-sm-4">
                    <div class="background" style="background-image: url('/img/move/image_villas.jpg')"></div>

                </div>

            </div>
        </section>

        <section-services-items :items="yourItemsArray">
            <template #title> title2</template>
            <template #text> text2</template>
        </section-services-items>

        <section-image-text :img="'путь/к/изображению.jpg'">
            <template #title></template>
            <template #text> </template>
        </section-image-text>

        <section-swiper-faq> </section-swiper-faq>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SectionHeroSwiper from '../section/SectionHeroSwiper.vue';
import SectionServices from '../section/SectionServices.vue';


import SectionTextImage from '../section/SectionTextImage.vue';
import SectionImageText from '../section/SectionImageText.vue';
import SectionServicesItems from '../section/SectionServicesItems.vue';
import SectionSwiperFaq from '../section/SectionSwiperFaq.vue';


const servicesItem = [
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
</script>
