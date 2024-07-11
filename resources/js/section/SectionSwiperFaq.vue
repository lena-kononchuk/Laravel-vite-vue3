<template>
    <div class="section section__purple" style="overflow: hidden;">
        <div class="wrapper">
            <div class="box3x h2 center-xs white uppercase">Frequently Asked Questions</div>
            <!-- Swiper component for displaying slides -->
            <swiper :slidesPerView="3" :spaceBetween="30"
                :pagination="{ clickable: true, el: '.swiper-pagination-custom' }" :modules="modules"
                class="swiperFaq box2x swiper__horizontal relative" :breakpoints="breakpoints">
                <swiper-slide v-for="(slide, index) in slides" :key="index"
                    class="card card__image relative flex-vertical" :style="{ minHeight: '500px' }">
                    <div class="image image--middle" style="background-image: url('/img/slider_image.jpg');"></div>
                    <!-- Replace with image tag -->
                    <div class="card card__text box" style="box-shadow:none">
                        <button class="button button--purple swiper__button box center-xs">{{ slide.button }}</button>

                        <div class="h4 purple box">{{ slide.question }}</div>
                        <div class="text">{{ slide.answer }}</div>
                    </div>
                </swiper-slide>
            </swiper>
            <!-- Custom pagination element -->
            <div class="center-xs swiper-pagination-custom"></div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import axios from 'axios';
import { ref, onMounted } from 'vue';

// Import required modules
import { Pagination } from 'swiper/modules';

const slides = ref([]);

// Fetch FAQs from backend on component mount
onMounted(async () => {
    try {
        const response = await axios.get('/api/faqs');
        slides.value = response.data.data.map(faq => ({
            question: faq.question,
            answer: faq.answer,
            button: faq.button,
        }));
    } catch (error) {
        console.error('Failed to fetch FAQs:', error);
    }
});

// Responsive breakpoints for Swiper
const breakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    480: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
};

// Swiper modules to use
const modules = [Pagination];
</script>
