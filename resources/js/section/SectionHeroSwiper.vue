<template>
    <div class="section section__swiper hero relative"
        :style="{ backgroundImage: `linear-gradient(100deg, rgb(183, 214, 239) 32%, rgba(183, 214, 239, 0.6) 49%, rgba(183, 214, 239, 0) 59%), url(${currentBackground})` }">
        <div class="swiper__overlay"></div>
        <div class="wrapper">
            <!-- Horizontal Swiper -->
            <swiper
                :modules="[Pagination, Autoplay, Parallax]"
                :pagination="{ clickable: true, el: '.swiper-pagination' }"
                :autoplay="{ delay: 5000, disableOnInteraction: false }"
                :parallax="true"
                direction="horizontal"
                class="swiper swiper__horizontal"
                @slideChange="onSlideChange">

                <swiper-slide v-for="(slide, index) in slides" :key="index" class="slide">
                    <div class="slide__parallax " data-swiper-parallax="30%">
                        <div class="flex wrap slide__buttons box2x">
                            <router-link to="/services-investments" class="button button--purple-light">Investments</router-link>
                            <router-link to="/services-business" class="button button--purple-light">Business Relocation</router-link>
                            <router-link to="/services-family" class="button button--purple-light">Family Relocation</router-link>
                        </div>

                        <div class="slide__content">
                            <div class="box2x">
                            <div :class="{ 'h1': true, 'white': index === 0 || index === 3 || index === 5, 'grey-blue': index !== 0 && index !== 3 && index !== 5, 'slide__title': true }"
                                class="box--small" data-swiper-parallax="-100">{{ slide.title }}</div>

                            <div :class="{ 'h4': true, 'white': index === 0 || index === 3 || index === 5, 'grey-blue': index !== 0 && index !== 3 && index !== 5, 'slide__subtitle': true }"
                                class="box" data-swiper-parallax="-200" v-if="slide.subtitle_small">{{ slide.subtitle_small }}</div>

                            <div :class="{ 'text': true, 'white': index === 0 || index === 3 || index === 5, 'grey-blue': index !== 0 && index !== 3 && index !== 5, 'slide__text': true }"
                                class="box" style="max-width: 400px" data-swiper-parallax="-300">{{ slide.text }}</div>
                            </div>
                            <router-link :to="slide.buttonLink" class="button button--yellow box3x slide__button" data-swiper-parallax="-400">
                                {{ slide.buttonText }}
                            </router-link>
                        </div>
                    </div>

                    <!-- Images for Index 0 on Desktop -->
                    <div v-if="index === 0" class="flex slide__cities">
                        <div v-for="(image, imgIndex) in slide.images" :key="imgIndex" class="card slide__city-card">
                            <img :src="image" :alt="`Image of ${slide.cityNames[imgIndex]}`"
                                class="image image--small box--small lazyload slide__city-image" />
                            <div class="text slide__city-name">{{ slide.cityNames[imgIndex] }}</div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>

            <div class="swiper-pagination hero__pagination"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/parallax';

const slides = [
    {
        background: '/img/hero/hero-relocation.jpg',
        title: 'Relocating to Cyprus',
        subtitle_small: 'Seamless – Exceptional – Experience',
        text: 'The captivating Mediterranean island of Cyprus has become a business haven with a flourishing expat community. The strategic location that grants networking opportunities and the stability of being in the EU offers entrepreneurs the abilities they need to thrive.',
        buttonLink: '/immigration',
        buttonText: 'Find Out More',
    },
    {
        background: '/img/hero/hero-invest.jpg',
        title: 'Invest in property in Cyprus',
        subtitle_small: '',
        text: 'Real estate has become a flourishing type of investment on the island, with an increasing number of people seeking to invest in residential and commercial property projects in Cyprus. With a confident and stable economic outlook, it is a great time to consider investing in Cyprus property.',
        buttonLink: '/services-investments',
        buttonText: 'Check more',
    },
    {
        background: '/img/hero/hero-family.jpg',
        title: 'Family Relocation',
        subtitle_small: '',
        text: 'Globally known as one of the safest places to live in the world, Cyprus is the ideal location for families. The healthy lifestyle and family-friendly communities have much to offer to every member of your family.',
        buttonLink: '/services-family',
        buttonText: 'Check more',
    },
    {
        background: '/img/hero/hero-business.jpg',
        title: 'Business Relocation',
        subtitle_small: '',
        text: 'Cyprus has a lot to offer for business entrepreneurs who aim to reach for more and expand their business goals. The attractive tax benefits and office locations have transformed Cyprus into a country with endless business opportunities for everyone.',
        buttonLink: '/services-business',
        buttonText: 'Check more',
    },
    {
        background: '/img/hero/hero-investing.jpg',
        title: 'Investing in Yachts',
        buttonLink: '',
        text: 'Living on an island is an adventure that opens up a wide range of experiences and possibilities. Here, you can conquer the Mediterranean Sea by renting or owning a yacht as part of your investment plan.',
        buttonText: 'Check more',
    },
    {
        background: '/img/hero/hero-moving.jpg',
        title: 'Moving to Cyprus',
        buttonLink: '/immigration',
        text: 'Thousands of individuals and families from every part of the globe have immigrated to Cyprus after discovering their perfect place to call home. The island is now one of the most dominant destinations with huge expat communities.',
        buttonText: 'Check more',
    },
];

const currentBackground = ref(slides[0].background);
const currentSlideIndex = ref(0);
const isVertical = ref(true);

const onSlideChange = (swiper) => {
    currentBackground.value = slides[swiper.activeIndex].background;
    currentSlideIndex.value = swiper.activeIndex;
};

watchEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 61.99em)');
    isVertical.value = mediaQuery.matches;
    mediaQuery.addListener((mq) => {
        isVertical.value = mq.matches;
    });
});
</script>

<style scoped>

.section__swiper {
    transition: background-image 0.8s ease;
}

.slide__parallax {
    /* padding: 2rem; */
}

.slide__buttons {
    margin-bottom: 2rem;
    transform: translateY(-20px);
    opacity: 0;
    transition: all 0.6s ease 0.2s;
}

.slide__content {
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.slide__title {
    transform: translateX(-50px);
    opacity: 0;
    transition: all 0.8s ease;
}

.slide__subtitle {
    transform: translateX(-50px);
    opacity: 0;
    transition: all 0.8s ease 0.2s;
}

.slide__text {
    white-space: normal;
  word-wrap: break-word;
  max-width: 100%;
  transform: translateX(-50px);
  opacity: 0;
  transition: all 0.8s ease 0.4s;
}

.slide__button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transform: translateX(-50px);
    opacity: 0;
}


.swiper-slide-active .slide__buttons,
.swiper-slide-active .slide__content,
.swiper-slide-active .slide__title,
.swiper-slide-active .slide__subtitle,
.swiper-slide-active .slide__text,
.swiper-slide-active .slide__button,
.swiper-slide-active .slide__cities {
    transform: translate(0);
    opacity: 1;
}

.hero__pagination {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 10;
}

.hero__pagination .swiper-pagination-bullet {
    width: 40px;
    height: 3px;
    border-radius: 0;
    background: rgba(255,255,255,0.5);
    opacity: 1;
}

.hero__pagination .swiper-pagination-bullet-active {
    background: #F7970E;
}

.hero__navigation {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 10;
    display: flex;
    gap: 10px;
}

</style>