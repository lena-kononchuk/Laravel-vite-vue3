<template>
    <div class="section section__swiper hero swiper__vertical"
        :style="{ backgroundImage: `url(${currentBackground})` }">
        <div class="wrapper">
            <swiper :modules="[Pagination]" :pagination="{ clickable: true, el: '.swiper-pagination' }"
                direction="vertical" class="swiper swiper__vertical" @slideChange="onSlideChange"
                style="height: 500px; overflow: hidden;">
                <swiper-slide v-for="(slide, index) in slides" :key="index" class="slide">
                    <div class="flex">
                        <a href="/investments" class="box button button--purple-light">Investments</a>
                        <a href="/business-relocation" class="box button button--purple-light">Business Relocation</a>
                        <a href="/family-relocation" class="box button button--purple-light">Family Relocation</a>
                    </div>

                    <div :class="{ 'h1': true, 'white': index === 0 || index === 3 || index === 5, 'grey-blue': index !== 0 && index !== 3 && index !== 5 }"
                        class="box--small">{{ slide.title }}</div>
                    <div :class="{ 'h4': true, 'white': index === 0 || index === 3 || index === 5, 'grey-blue': index !== 0 && index !== 3 && index !== 5 }"
                        class="box">{{ slide.subtitle_small }}</div>
                    <div :class="{ 'text': true, 'white': index === 0 || index === 3 || index === 5, 'grey-blue': index !== 0 && index !== 3 && index !== 5 }"
                        class="box" style="max-width: 520px;">{{ slide.text }}</div>
                    <a :href="slide.buttonLink" class="button button--primary box3x">{{ slide.buttonText }}</a>

                    <div :class="{ 'h4': true, 'white': index === 0 || index === 3 || index === 5, 'grey-blue': index !== 0 && index !== 3 && index !== 5 }"
                        class="box">{{ slide.subtitle }}</div>

                    <div class="images flex">
                        <img v-for="(image, imgIndex) in slide.images" :key="imgIndex" :src="image" alt="card" />
                    </div>
                </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const slides = [
            {
                background: '/img/hero/hero-relocation.jpg',
                title: 'Relocating to Cyprus',
                subtitle_small: 'Seamless – Exceptional – Experience ',
                text: 'The captivating Mediterranean island of Cyprus has become a business haven with a flourishing expat community. The strategic location that grants networking opportunities and the stability of being in the EU offers entrepreneurs the abilities they need to thrive.',
                buttonLink: '',
                buttonText: 'Find Out More',
                subtitle: 'Most popular cities',
                // images: ['/img/picture_home2.jpg', '/img/picture_home3.jpg']
            },
            {
                background: '/img/hero/hero-invest.jpg',
                title: 'Invest in property in Cyprus',
                subtitle_small: '',
                text: 'Real estate has become a flourishing type of investment on the island, with an increasing number of people seeking to invest in residential and commercial property projects in Cyprus.With a confident and stable economic outlook, it is a great time to consider investing in Cyprus property.',
                buttonLink: '',
                buttonText: 'Check more',
            },
            {
                background: '/img/hero/hero-family.jpg',
                title: 'Family Relocation',
                subtitle_small: '',
                text: 'Globally known as one of the safest places to live in the world, Cyprus is the ideal location for families. The healthy lifestyle and family-friendly communities have much to offer to every member of your family.',
                buttonLink: '',
                buttonText: 'Check more',
            },

            {
                background: '/img/hero/hero-business.jpg',
                title: 'Business Relocation',
                subtitle_small: '',
                text: 'Cyprus has a lot to offer for business entrepreneurs who aim to reach for more and expand their business goals. The attractive tax benefits and office locations have transformed Cyprus into a country with endless business opportunities for everyone.',
                buttonLink: '',
                buttonText: 'Check more',
            },

            {
                background: '/img/hero/hero-investing.jpg',
                title: 'Investing in Yachts',
                subtitle_small: '',
                text: 'Living on an island is an adventure that opens up a wide range of experiences and possibilities. Here, you can conquer the Mediterranean Sea by renting or owning a yacht as part of your investment plan.',
                buttonLink: '',
                buttonText: 'Check more',
            },
            {
                background: '/img/hero/hero-moving.jpg',
                title: 'Moving to Cyprus',
                subtitle_small: '',
                text: 'Thousands of individuals and families from every part of the globe have immigrated to Cyprus after discovering their perfect place to call home.The island is now one of the most dominant destinations with huge expat communities.',
                buttonLink: '',
                buttonText: 'Check more',
            },
        ];

        const currentBackground = ref(slides[0].background);

        const onSlideChange = (swiper) => {
            console.log('Current Slide:', slides[swiper.activeIndex]);
            currentBackground.value = slides[swiper.activeIndex].background;
        };

        return {
            slides,
            currentBackground,
            onSlideChange,
            Pagination,
        };
    },
};
</script>
