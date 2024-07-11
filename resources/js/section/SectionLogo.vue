<template>
    <div class="section">
        <div class="box3x center-xs">
            <div class="h2 box uppercase">
                Our Partners
            </div>
        </div>
        <div class="center-xs">
            <swiper :spaceBetween="60" :modules="modules" :loop="true" :autoplay="{ delay: 1000 }"
                :breakpoints="breakpoints" ref="swiper" class="mySwiper">
                <swiper-slide v-for="(image, index) in partnerImages" :key="index">
                    <img :src="image" :alt="'Partner Image ' + (index + 1)" class="logo">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Import GSAP and ScrollTrigger
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import required modules
import { Autoplay } from 'swiper/modules';
import { ref, onMounted } from 'vue';

// Define the array of partner images
const partnerImages = [
    "/img/partners/partner1.png",
    "/img/partners/partner2.png",
    "/img/partners/partner3.png",
    "/img/partners/partner4.png",
    "/img/partners/partner5.png",
    "/img/partners/partner6.png",
];

// Define Swiper modules
const modules = [Autoplay];

// Define responsive breakpoints for Swiper
const breakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true
    },
    480: {
        slidesPerView: 2,
    },
    640: {
        slidesPerView: 3,
    },
    768: {
        slidesPerView: 4,
    }
};

// Reference to Swiper instance
const swiperRef = ref(null);

// Check if GSAP is defined
if (typeof gsap !== 'undefined') {
    // Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Function to initialize animations
    function initAnimations() {
        // Select the Swiper wrapper
        const landingLogos = document.querySelector('.mySwiper .swiper-wrapper');

        // Check if landingLogos exists before proceeding
        if (!landingLogos) {
            console.error('Swiper wrapper not found.');
            return;
        }

        // Clone the Swiper wrapper and append it
        const clone = landingLogos.cloneNode(true);
        landingLogos.appendChild(clone);

        // Calculate the total width of the logos
        const logoSetWidth = landingLogos.scrollWidth;

        // Fade in the logos
        gsap.fromTo(landingLogos, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.5 });

        // Create a timeline for looping the animation
        const timeline = gsap.timeline({
            repeat: -1,
            ease: 'none',
            yoyo: true,
        });

        // Animate the movement of the logo wrapper
        timeline.to(landingLogos, {
            x: -logoSetWidth,
            duration: 90,
            ease: 'none',
        });
    }

    // Initialize animations after the component is mounted
    onMounted(() => {
        initAnimations();
    });
} else {
    // Log an error message if GSAP is not found
    console.error('GSAP is not defined!');
}
</script>
