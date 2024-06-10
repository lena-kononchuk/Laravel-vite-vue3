<template>
    <div class="section section__swiper hero" :style="{ backgroundImage: `url(${currentBackground})` }">
        <div class="wrapper">
            <swiper :modules="[Pagination]" :pagination="{ clickable: true, el: '.swiper-pagination' }"
                direction="vertical" class="swiper swiper__vertical" @slideChange="onSlideChange">
                <swiper-slide v-for="(slide, index) in slides" :key="index">
                    <a v-if="slide.buttonLink" :href="slide.buttonLink" class="box button button--purple-light">{{
        slide.buttonText }}</a>
                    <div v-if="slide.title" class="h1 white box--small">{{ slide.title }}</div>
                    <div v-if="slide.subtitle_small" class="h4 box white">{{ slide.subtitle_small }}</div>
                    <div v-if="slide.text" class="text white box" style="max-width: 520px;">{{ slide.text }}</div>
                    <a v-if="slide.buttonLink" :href="slide.buttonLink" class="button button--primary box3x">{{
        slide.buttonText }}</a>
                    <div v-if="slide.subtitle" class="h4 box white">{{ slide.subtitle }}</div>

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
import { ref, watch } from 'vue';
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
                background: '/img/hero-relocation.jpg',
                title: 'Relocating to Cyprus',
                subtitle_small: 'Seamless – Exceptional – Experience ',
                text: 'The captivating Mediterranean island of Cyprus has become a business haven with a flourishing expat community. The strategic location that grants networking opportunities and the stability of being in the EU offers entrepreneurs the abilities they need to thrive.',
                buttonLink: '',
                buttonText: 'Find Out More',
                subtitle: 'Most popular cities',
                // images: ['/img/picture_home2.jpg', '/img/picture_home3.jpg']
            },
            {
                background: '/img/hero-invest.jpg',
                title: 'Invest in property in Cyprus',
                subtitle_small: '',
                text: 'Real estate has become a flourishing type of investment on the island, with an increasing number of people seeking to invest in residential and commercial property projects in Cyprus.With a confident and stable economic outlook, it is a great time to consider investing in Cyprus property.',
                buttonLink: '',
                buttonText: 'Check more',
                subtitle: '',
            },
            {
                background: '/img/hero-family.jpg',
                title: '',
                subtitle_small: '',
                text: '',
                buttonLink: '',
                buttonText: '',
                subtitle: '',
            },

            {
                background: '/img/hero-business.jpg',
                title: '',
                subtitle_small: '',
                text: '',
                buttonLink: '',
                buttonText: '',
                subtitle: '',
            },

            {
                background: '/img/hero-investing.jpg',
                title: '',
                subtitle_small: '',
                text: '',
                buttonLink: '',
                buttonText: '',
                subtitle: '',
            },
            {
                background: '/img/hero-moving.jpg',
                title: '',
                subtitle_small: '',
                text: '',
                buttonLink: '',
                buttonText: '',
                subtitle: '',
            },
        ];

        const currentSlideIndex = ref(0); // Индекс текущего слайда

        // Функция для обновления текущего слайда при смене слайда
        const onSlideChange = (swiper) => {
            currentSlideIndex.value = swiper.activeIndex;
        };

        // Watcher для отслеживания изменений текущего слайда
        watch(currentSlideIndex, (newIndex) => {
            // Устанавливаем данные текущего слайда
            currentBackground.value = slides[newIndex].background;
            currentTitle.value = slides[newIndex].title;
            currentSubtitleSmall.value = slides[newIndex].subtitle_small;
            currentText.value = slides[newIndex].text;
            currentButtonLink.value = slides[newIndex].buttonLink;
            currentButtonText.value = slides[newIndex].buttonText;
            currentSubtitle.value = slides[newIndex].subtitle;
        });

        // Переменные для данных текущего слайда
        const currentBackground = ref(slides[0].background);
        const currentTitle = ref(slides[0].title);
        const currentSubtitleSmall = ref(slides[0].subtitle_small);
        const currentText = ref(slides[0].text);
        const currentButtonLink = ref(slides[0].buttonLink);
        const currentButtonText = ref(slides[0].buttonText);
        const currentSubtitle = ref(slides[0].subtitle);

        return {
            slides,
            currentSlideIndex,
            onSlideChange,
            Pagination,
            currentBackground,
            currentTitle,
            currentSubtitleSmall,
            currentText,
            currentButtonLink,
            currentButtonText,
            currentSubtitle
        };
    },
};
</script>

<style scoped>
.swiper-container {
    width: 100%;
    height: 100%;
}

.swiper-slide {}

.swiper-pagination {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
}
</style>
