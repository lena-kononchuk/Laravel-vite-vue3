<template>
    <div ref="faqSection" class="section section__purple" style="overflow: hidden;">
        <div class="wrapper">
            <div class="box3x h2 center-xs white uppercase">Frequently Asked Questions</div>
            <!-- Swiper component to be loaded only after scrolling into view -->
            <swiper v-if="isVisible" :slidesPerView="3" :spaceBetween="30"
                :pagination="{ clickable: true, el: '.swiper-pagination-custom' }" :modules="modules"
                class="swiperFaq box2x swiper__horizontal relative" :breakpoints="breakpoints">
                <swiper-slide v-for="(slide, index) in slides" :key="index"
                    class="card card__image relative flex-vertical" :style="{ minHeight: '500px' }">
                    <div class="image image--middle lazyload" style="background-image: url('/img/slider_image.jpg');">
                    </div>
                    <div class="card card__text box" style="box-shadow:none">
                        <button class="button button--purple swiper__button box center-xs">
                            {{ slide.button }}
                        </button>
                        <div class="h4 purple box">{{ slide.question }}</div>
                        <div class="text box">
                            <!-- Display text based on isExpanded state -->
                            {{ slide.isExpanded || slide.answer.length <= 240 ? slide.answer : slide.answer.slice(0,
                240) + '...' }} </div>
                                <!-- Button to toggle text expansion -->
                                <button v-if="slide.answer.length > 240" @click="toggleText(index)"
                                    class="button button--expand box center-xs">
                                    {{ slide.isExpanded ? 'Read less' : 'Expand' }}
                                    <i :class="{ 'fa-arrow-right': !slide.isExpanded }" class="fa"></i>
                                </button>
                        </div>
                </swiper-slide>
            </swiper>
            <div v-if="isVisible" class="center-xs swiper-pagination-custom"></div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import axios from 'axios';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Pagination } from 'swiper/modules';

// States
const slides = ref([]); // Array to store FAQ data
const isVisible = ref(false); // Tracker for element visibility
const observer = ref(null); // IntersectionObserver instance
const faqSection = ref(null); // Reference to the FAQ section

// Function to load FAQ data
const loadFAQs = async () => {
    try {
        const response = await axios.get('/api/faqs');
        slides.value = response.data.data.map(faq => ({
            question: faq.question,
            answer: faq.answer,
            button: faq.button,
            isExpanded: false, // State to manage text expansion
        }));
        console.log('fetch FAQs:',         slides);
    } catch (error) {
        console.error('Failed to fetch FAQs:', error);
    }
};

// Function to handle scroll visibility using IntersectionObserver
const observeVisibility = (entries) => {
    if (entries[0].isIntersecting) {
        isVisible.value = true;
        loadFAQs(); // Load data when element is in the viewport
        observer.value.disconnect(); // Stop observing after loading
    }
};

// Setup observer
onMounted(() => {
    observer.value = new IntersectionObserver(observeVisibility);
    if (faqSection.value) {
        observer.value.observe(faqSection.value); // Start observing the element
    }
});

onBeforeUnmount(() => {
    if (observer.value && faqSection.value) {
        observer.value.unobserve(faqSection.value); // Stop observing when component is destroyed
    }
});

// Function to toggle text state (expand/collapse)
const toggleText = (index) => {
    slides.value[index].isExpanded = !slides.value[index].isExpanded;
};

// Swiper parameters
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

const modules = [Pagination]; // Swiper modules
</script>
