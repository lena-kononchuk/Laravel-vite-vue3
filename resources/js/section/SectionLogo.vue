<template>
    <div class="section">
        <div class="box3x center-sm">
            <div class="h2 box uppercase">
                Our Partners
            </div>
        </div>
        <div class="center-sm">
            <swiper :slidesPerView="4" :spaceBetween="0" :centeredSlides="true" :modules="modules" class="mySwiper"
                :loop="true" :autoplay="{ delay: 1000 }" ref="swiper">
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
// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Import GSAP for animations
import gsap from 'gsap';

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
    mounted() {
        this.animateSwiper();
    },
    methods: {
        animateSwiper() {
            const swiper = this.$refs.swiper.swiper;
            if (!swiper) return;

            const container = swiper.$el.querySelector('.swiper-wrapper');
            const slides = container.querySelectorAll('.swiper-slide');
            const totalWidth = Array.from(slides).reduce((acc, slide) => acc + slide.offsetWidth, 0);

            gsap.to(container, {
                x: -totalWidth,
                duration: totalWidth / 100, // Adjust duration based on total width
                ease: 'linear',
                repeat: -1, // Repeat indefinitely
                modifiers: {
                    x: gsap.utils.unitize((value) => parseFloat(value) % totalWidth)
                }
            });
        }
    }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
