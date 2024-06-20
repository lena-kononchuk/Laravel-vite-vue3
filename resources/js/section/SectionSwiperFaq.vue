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
            { title: 'Question: How is the business environment in Cyprus?', text: 'Answer: Cyprus is considered to be one of the most business-oriented countries of the EU, offering business entrepreneurs a variety of opportunities to expand their corporate dreams and ambitions.', button: 'Business' },
            { title: 'Question: What is the cost of living in Cyprus?', text: 'Answer: In comparison to other countries of the EU, the cost of living is relatively low. Of course, the cost of living varies from city to city. For example, this means that living in Paphos might be a bit cheaper than living in Limassol. ', button: 'Prices' },
            { title: 'Question: What are the best cities in Cyprus for expats?', text: 'Answer: As Cyprus is among the most attractive destinations for people from different parts of the globe, large and thriving expat communities can be found in Paphos, Limassol, Larnaca, Nicosia.', button: 'Migration' },
            { title: 'Question: What is the Tax system like in Cyprus?', text: 'Answer: With one of the lowest corporate tax rates (12.5%) in the European Union, the tax system is attractive to foreign investors. Neither succession taxes nor gains from the disposal of securities are subject to tax.', button: 'Taxes' },
            { title: 'How long does it take to buy a property in Cyprus?', text: 'Answer: The whole procedure for pur-chasing property in Cyprus should only take about 1-3 months. Of course, each situation is different and this timeframe may vary from one individual to another. Our relocation services aim to simplify this process by providing guidance and assistance from start to finish. ', button: 'Investment' },
            { title: 'Question: How long does it take to become a permanent resident in Cyprus?', text: 'Answer: While a residency card can be obtained within two months through the fast-track process, a permanent resident of Cyprus can apply for Cyprus Citizenship after completing 5 years (1825 days) of legal stay in Cyprus, according to the naturalization scheme based on years of residence (M127). Once acquired, permanent residency in Cyprus is valid for life. ', button: 'Migration' },
            { title: 'Question: Is Cyprus a good country to live with a family?', text: 'Answer: Cyprus is a perfect location for every type of family looking for a place to settle with their children. The stunning weather combined with great education programs, excellent healthcare system, and the ability to live in one of the safest countries in the world makes Cyprus a top choice among thousands every year.', button: 'Family Relocation' },
            { title: 'Question: Does PAM Consulting offer any Investment Plans?', text: 'Answer: Of course! Our services include the provision of a variety of investment opportunities you can choose from, depending on your needs and economic outlook.', button: 'Invest in Cyprus' },
            { title: 'Question: Is Cyprus a member of the European Union (EU)?', text: 'Answer: Yes, Cyprus has been a member of the EU since 2004. ', button: 'Business' },
            { title: 'Question: How is the business environment in Cyprus?', text: 'Answer: Cyprus is considered to be one of the most business-oriented countries of the EU, offering business entrepreneurs a variety of opportunities to expand their corporate dreams and ambitions.', button: 'Business' },
            { title: 'Question: What is the cost of living in Cyprus?', text: 'Answer: In comparison to other countries of the EU, the cost of living is relatively low. Of course, the cost of living varies from city to city. For example, this means that living in Paphos might be a bit cheaper than living in Limassol. ', button: 'Prices' },
            { title: 'Question: What are the best cities in Cyprus for expats?', text: 'Answer: As Cyprus is among the most attractive destinations for people from different parts of the globe, large and thriving expat communities can be found in Paphos, Limassol, Larnaca, Nicosia.', button: 'Migration' },

        ]);
        return {
            slides,
            modules: [Pagination],
        };
    },
};
</script>
