<template>
    <div>
        <section-hero-swiper></section-hero-swiper>

        <section-text-image :img="'путь/к/изображению.jpg'">
            <template #title></template>
            <template #text> </template>
        </section-text-image>

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

import SectionTextImage from '../section/SectionTextImage.vue';
import SectionImageText from '../section/SectionImageText.vue';
import SectionHeroSwiper from '../section/SectionHeroSwiper.vue';
import SectionServicesItems from '../section/SectionServicesItems.vue';
import SectionSwiperFaq from '../section/SectionSwiperFaq.vue';


const yourItemsArray = [
    {
        image: 'путь/к/изображению1.jpg',
        title: 'Заголовок 1',
        text: 'Текст 1'
    },
    {
        image: 'путь/к/изображению2.jpg',
        title: 'Заголовок 2',
        text: 'Текст 2'
    },
];
</script>
