<template>
    <div class="section">
        <div class="box3x center-sm">
            <div class="h2 box uppercase">
                Our Partners
            </div>
        </div>
        <div class="center-sm">
            <swiper :slidesPerView="4" :spaceBetween="0" :centeredSlides="true" :modules="modules" class="mySwiper"
                :loop="true" :autoplay="{ delay: 1000 }">
                <swiper-slide v-for="(image, index) in partnerImages" :key="index">
                    <img :src="image" :alt="'Partner Image ' + (index + 1)" class="logo">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import { Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const partnerImages = [
            "/img/partners/partner1.png",
            "/img/partners/partner2.png",
            "/img/partners/partner3.png",
            "/img/partners/partner4.png",
            "/img/partners/partner5.png",
            "/img/partners/partner6.png",
        ];

        const modules = [Autoplay];

        return {
            modules,
            partnerImages,
        };
    },
};
</script>
