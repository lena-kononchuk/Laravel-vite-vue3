<template>
    <div class="section section__purple">
        <div class="wrapper">
            <div class="box3x h2 center-sm white">Frequently Asked Questions</div>
            <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
                clickable: true, el: '.swiper-pagination-custom',
            }" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(slide, index) in slides" :key="index">
                    <div class="card">
                        <div>{{ slide.image }}</div> <!-- Replace with image tag -->
                        <div class="h4 purple">{{ slide.title }}</div>
                        <div class="text">{{ slide.text }}</div>
                    </div>
                </swiper-slide>
            </swiper>

            <!-- Custom pagination element -->
            <div class="swiper-pagination-custom"></div>
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
            { image: 'path/to/image1.jpg', title: 'Title 1', text: 'Text 1' },
            { image: 'path/to/image2.jpg', title: 'Title 2', text: 'Text 2' },
            { image: 'path/to/image3.jpg', title: 'Title 3', text: 'Text 3' },
            { image: 'path/to/image1.jpg', title: 'Title 1', text: 'Text 1' },
            { image: 'path/to/image2.jpg', title: 'Title 2', text: 'Text 2' },
            { image: 'path/to/image3.jpg', title: 'Title 3', text: 'Text 3' },
            // Add more slide objects as needed
        ]);

        return {
            slides,
            modules: [Pagination],
        };
    },
};
</script>
