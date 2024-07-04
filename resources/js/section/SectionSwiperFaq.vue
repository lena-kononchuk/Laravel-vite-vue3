<template>
    <div class="section section__purple" style="overflow: hidden;">
        <div class="wrapper">
            <div class="box3x h2 center-sm white uppercase">Frequently Asked Questions</div>
            <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
                clickable: true, el: '.swiper-pagination-custom',
            }" :modules="modules" class="mySwiper box2x swiper__horizontal">
                <swiper-slide v-for="(slide, index) in slides" :key="index" :slidesPerView="3" :spaceBetween="20"
                    :centeredSlides="true" class="card card__image relative flex-vertical"
                    :style="{ minHeight: '500px' }">
                    <div class="image image--middle" style="background-image: url('/img/slider_image.jpg');"></div>
                    <!-- Replace with image tag -->
                    <div class="card card__text box" style="box-shadow:none">
                        <div class="h4 purple box">{{ slide.question }}</div>
                        <div class="text">{{ slide.answer }}</div>
                        <button class="button button--purple swiper__button">{{ slide.button }}</button>
                    </div>
                </swiper-slide>
            </swiper>
            <!-- Custom pagination element -->
            <div class="center-sm swiper-pagination-custom"></div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import axios from 'axios';
import { ref, onMounted } from 'vue';

// Import required modules
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
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

        return {
            slides,
            modules: [Pagination],
        };
    },
};
</script>
