<template>
    <section-services :items="services">
        <template #title>Our Services</template>
        <template #button>
            <router-link class="button button--primary"  :to="item.buttonLink">
                <span>Find Out More</span>
            </router-link>
        </template>
    </section-services>
</template>

<script setup>
import { ref } from 'vue';
import SectionServices from '../section/SectionServices.vue';

const services = [
    {
        image: '/img/services/services_family.jpg',
        subtitle: 'Family Relocation',
        text: 'With strategic planning, we simplify the moving process so you and your family can feel safe and confident.',
        buttonLink: '/services-family'  // Added buttonLink
    },
    {
        image: '/img/services/services_business.jpg',
        subtitle: 'Business Relocation',
        text: 'We handle the responsibility of moving your business to Cyprus, so you can focus on your business goals.',
        buttonLink: '/services-business'  // Added buttonLink
    },
    {
        image: '/img/services/services_investment.jpg',
        subtitle: 'Investment plans',
        text: 'Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan.',
        buttonLink: '/services-investments'  // Added buttonLink
    },
];
</script>
