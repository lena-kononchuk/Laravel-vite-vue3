<template>
    <section-hero bg="/img/hero/business.jpg" style="height: 500;">
        <template #title>Business Relocation</template>
    </section-hero>

    <section-image-text img="/img/services-page/bussines-friendly.jpg">
        <template #title>Business-Friendly Environment
        </template>
        <template #text>
            <div class="box">
                Apart from being one of the most attractive holiday destinations globally, Cyprus is also recognized as
                an ever-growing hub for business in the EU. Every year, entrepreneurs from all around the world are
                moving to Cyprus with the aim to maximize their business efforts and opportunities. Every big city on
                the island – Nicosia, Limassol, Paphos, and Larnaca – has something to offer to every ambition-driven
                individual. This business-friendly environment is the result of effective business initiatives taken by
                the government which focus on providing a variety of benefits to people moving from abroad. Among the
                multitude of reasons why Cyprus is the ideal place to relocate your business are the following:

            </div>
            <div>
                <ul>
                    <li>Great Market access: The Geostrategic position of the island enables businesses to access major
                        markets of the EU</li>
                    <li>12.5% corporate tax rate: One of the lowest Corporate tax rates in the EU</li>
                    <li>Simple Immigration & Employment process </li>
                    <li>Investment Opportunities: some of the most powerful businesses include real estate, shipping
                        companies, financial, and insurance industries</li>
                    <li>Cypriot Citizenship on naturalization grounds can be applied for following 7 years of employment
                        and residence</li>
                    <li>Straightforward Corporate Structures: simple compliance and legal processes </li>
                </ul>
            </div>
            <div class="box">
                These benefits create an attractive and inviting business environment for those seeking to expand their
                businesses in one of the most dominant corporate locations of the world.
            </div>
        </template>
    </section-image-text>
    <section-text-image img="/img/services-page/qality.jpg">
        <template #title>Quality of Life in Cyprus</template>
        <template #text>
            <div class="box">
                A minimum of around 4 million tourists choose Cyprus as their holiday destination per year. This makes
                the island one of the most popular destinations in the world. In fact, many people who experience life
                in Cyprus tend to return either for another holiday or decide to move permanently. As a business
                entrepreneur looking to relocate, the most essential point to carefully consider is the new location of
                your business activities. This is why apart from the outstanding business advantages of Cyprus, you can
                also find the ideal location for you and your employees to work and live.
            </div>
            <div class="box">
                <ul>
                    <li>The cost of living is lower than in most other EU countries</li>
                    <li>High quality of living for expatriates: there are thousands of expat communities around the
                        island</li>
                    <li>Low crime rate: one of the safest countries to live globally</li>
                    <li>Exceptional healthcare facilities</li>
                    <li>Among the world's top retirement destinations</li>
                    <li>One of the best state pension systems worldwide</li>
                    <li>A strong education sector with a wide range of public and private higher education institutions.
                    </li>
                </ul>
            </div>
            <div class="box">
                Choosing Cyprus is more than just relocating your business – it’s about starting a new life built on
                quality and security.
            </div>
        </template>
    </section-text-image>
    <section-image-text img="/img/services-page/economic.jpg">
        <template #title>Positive Economic Outlook</template>
        <template #text>
            <div class="box">
                The decision to relocate your business comes with the need to discover a location with a strong and
                promising economic future for your business. Cyprus has established its resilient economic reputation
                with one of the fastest growth rates in the EU. This is achieved by focusing on the diversification of
                services and business opportunities found on the island. Some of the most dominant services include
                communications, real estate, and financial industries. The government’s efforts to support businesses
                has proved fundamental in the growth of the economy.
            </div>
            <div>
                <ul>
                    <li>Robust GDP growth</li>
                    <li>Among the fastest-growing economies in the EU</li>
                    <li>Positive macroeconomic forecasts</li>
                    <li>Key focus on investing in interconnectivity in the following years</li>
                    <li>Exceptional Regulatory Structure: closely aligned to the English common law legal system</li>
                </ul>
            </div>
            <div class="box">
                Since the 1st of January 2022, the Government of Cyprus has launched a new action plan to attract
                foreign businesses to Cyprus for the purpose of creating or expanding their operations. This creates
                unlimited possibilities when it comes to growing your business in Cyprus.
            </div>
        </template>
    </section-image-text>
    <section-services-items :items="servicesItems">
        <template #title> How We Can Help</template>
    </section-services-items>
    <contact-form></contact-form>
    <section-swiper-faq> </section-swiper-faq>
</template>

<script setup>
import { ref } from 'vue';
import SectionHero from '../section/SectionHero.vue';
import SectionTextImage from '../section/SectionTextImage.vue';
import SectionImageText from '../section/SectionImageText.vue';
import SectionServices from '../section/SectionServices.vue';
import ContactForm from '../components/ContactForm.vue';
import SectionSwiperFaq from '../section/SectionSwiperFaq.vue';
import SectionServicesItems from '../section/SectionServicesItems.vue';


const servicesItems = [
    {
        image: '/img/services-page/business_slide1.png',
        title: 'Location Selection',
        text: 'We assist in the process of selecting the ideal location for your business.'
    },
    {
        image: '/img/services-page/business_slide2.png',
        title: 'Setting Up Your Business',
        text: 'We help with the corporate establishment, handling compliance and legal matters.'
    },
    {
        image: '/img/services-page/business_slide3.png',
        title: 'Relocating Family and Staff',
        text: 'We take care of your family and employees, finding them the ideal location to settle. '
    },
    {
        image: '/img/services-page/business_slide4.png',
        title: 'Facilitation of Newcomers',
        text: 'We provide support and exceptional services to every newcomer of your business.'
    },
]

</script>
