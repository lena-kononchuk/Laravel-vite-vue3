<template>
    <section-services-items :items="servicesItems">
        <template #title> How We Can Help</template>
    </section-services-items>
</template>

<script setup>
import SectionServicesItems from '../section/SectionServicesItems.vue';
const servicesItems = [
    {
        image: '/img/services-page/services-image1.png',
        title: 'Pre-arrival Planning',
        text: 'We provide a step-by-step plan that will handle every aspect of your family’s relocation process.'
    },
    {
        image: '/img/services-page/services-image2.png',
        title: 'Housing and Location Options',
        text: 'Together, we will discuss and review housing options according to your needs and expectations.'
    },
    {
        image: '/img/services-page/services-image3.png',
        title: 'Immigration Assistance ',
        text: 'Our consultation services will simplify immigration matters, helping you arrange the documents you need.'
    },
    {
        image: '/img/services-page/services-image4.png',
        title: 'Education Options ',
        text: 'We will provide you with every schooling option available for your children and assist you in making your decision.'
    },
    {
        image: '/img/services-page/services-image5.png',
        title: 'Personalized Support',
        text: 'Our services include providing you with any information you may need about living in Cyprus with your family.'
    },
]

</script>
