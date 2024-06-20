<template>
    <section-hero bg="/img/hero/about-img.jpg">
        <template #title> Who we are</template>
    </section-hero>
    <section>
        <div class="section section__purple">
            <div class="wrapper wrapper__small">
                <div class="h4 white">
                    <div class="box">PAM Consulting is a team of dedicated professionals,
                        located in Cyprus.
                        Our services rely upon the idea that the sunny island of Cyprus can be the solution families and
                        businesses are searching for.
                    </div>
                    <div>
                        We understand the challenges that come with moving from one location to another and the
                        difficulties
                        that may arise. For this reason, we aim to transform family and business relocation into a
                        hassle-free experience for you and yours.
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section-text-image img="/img/about/about-chess.jpg">
        <template #title>What we do</template>
        <template #text>
            <div class="box">
                We provide solutions based on strategic planning that responds to your needs. Our business relocation
                services prioritize your business goals and ambitions. Changing your businesses’ location is a big step
                towards progress and it is essential that everything goes as smooth as possible. While you focus on
                boosting
                your company’s strategies, we take care of everything else.
            </div>
            <div class="box">
                We provide solutions based on strategic planning that responds to your needs. Our business relocation
                services prioritize your business goals and ambitions. Changing your businesses’ location is a big step
                towards progress and it is essential that everything goes as smooth as possible. While you focus on
                boosting
                your company’s strategies, we take care of everything else.
            </div>

        </template>
    </section-text-image>
    <section-services-items :items="servicesItems">
        <template #title> Why We Do It – Our Values</template>
    </section-services-items>
</template>

<script setup>
import { ref } from 'vue';
import SectionHero from '../section/SectionHero.vue';
import SectionTextImage from '../section/SectionTextImage.vue';
import SectionServicesItems from '../section/SectionServicesItems.vue';


const servicesItems = [
    {
        image: '/img/about/about_slide1.png',
        title: 'Time Efficiency ',
        text: 'As our team works efficiently and strategically, the whole relocation process is completed in a short amount of time so you can have more time to focus on setting up your life in Cyprus.'
    },
    {
        image: '/img/about/about_slide2.png',
        title: 'Gratifying Experience ',
        text: 'Moving can be intimidating and demanding experience for anyone. Our team makes sure to come up with the best relocation strategy, offering you a piece of mind and a sense of security.'
    },
    {
        image: '/img/about/about_slide3.png',
        title: 'Safety & Reliability ',
        text: 'Once you are settled, we make sure that everything is according to your expectations and your vision of the quality of our services.'
    },
    {
        image: '/img/about/about_slide4.png',
        title: 'Personalized Support',
        text: 'Our services include providing you with any information you may need about living in Cyprus with your family.'
    },
]



</script>
