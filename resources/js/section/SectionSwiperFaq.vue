<template>
    <div class="section section__purple" style="overflow: hidden;">
        <div class="wrapper">
            <div class="box3x h2 center-sm white">Frequently Asked Questions</div>
            <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
                clickable: true, el: '.swiper-pagination-custom',
            }" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(slide, index) in slides" :key="index" :slidesPerView="3" :spaceBetween="20"
                    :centeredSlides="true" class="card relative">
                    <div class="image card__background-middle"></div> <!-- Replace with image tag -->
                    <div class="card card__text box">
                        <div class="h4 purple box">{{ slide.title }}</div>
                        <div class="text">{{ slide.text }}</div>
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
import { ref } from 'vue';

// Import required modules
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const slides = ref([
            {
                title: 'Question: How is the business environment in Cyprus?', text: 'Answer: Cyprus is considered to be one of the most business-oriented countries of the EU, offering business entrepreneurs a variety of opportunities to expand their corporate dreams and ambitions.', button: 'Business'
            },
            { title: '', text: '', button: 'Taxes' },

        ]);

        return {
            slides,
            modules: [Pagination],
        };
    },
};
</script>
