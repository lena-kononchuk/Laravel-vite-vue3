<template>
    <section-hero bg="/img/hero/business.jpg">
        <template #title>Investment Opportunities</template>
    </section-hero>
    <section-image-text img="/img/services-page/bussines-friendly.jpg">
        <template #title>Investing in Real Estate
        </template>
        <template #text>
            <div class="box">
                Cyprus is becoming a dominant center of interest when it comes to Property Investments in the EU. The
                stability and successful development of properties around the island has contributed to the financial
                and business growth of Cyprus.
            </div>
            <div class="box">
                Property investment means investing in the future and it comes with a huge range of opportunities
                including:
            </div>
            <div class="purple">
                <ul>
                    <li>Obtaining EU citizenship in 6 months</li>
                    <li>Creating your future home</li>
                    <li>The ability to earn passive income</li>
                </ul>
            </div>
            <div class="box">
                With thousands of projects completed annually, there has never been a more perfect time to consider
                property investment in Cyprus. One of the most popular and attractive regions in Cyprus is the southern
                city of Limassol which has transformed into a business haven and a powerful tourist destination. More
                and more people from around the globe are choosing to invest in Cyprus’s properties, as it has become
                one of the most popular and thriving forms of investment. Our team is here to assist you in choosing the
                optimal investment plan as you consider your personal and financial needs.
            </div>
        </template>
    </section-image-text>
    <section-text-image img="/img/services-page/qality.jpg">
        <template #title>Investing in Yachts</template>
        <template #text>
            <div class="box">
                One of the perks of living on an island that is sunny all year round, is the access to the harbors and
                yacht clubs in different parts of the island. There are five harbors in the Republic of Cyprus, with the
                main ones being located in Larnaca and Limassol. PAM Consulting has partnered with one of the most
                prestige and renowned Yachting Companies of Cyprus, offering you the chance to experience the island
                life to the fullest.
            </div>
            <div class="box">
                Our partner, <b>Blue Point Yachting</b>, was founded on the pillars of professionalism and quality of
                services.
                Operating in Cyprus and Lebanon, the company has years of experience in fulfilling the needs of every
                customer and acts as an official representative and dealer for dominant business brands. While the
                company’s headquarters are in Larnaca, there is also one office located at the Limassol Marina, enabling
                them to expand their services and reach a wider audience of customers.
            </div>
            <div class="purple">Blue Point Yachting and our team at PAM Consulting have come together to offer you:
            </div>
            <div class="box">
                <ul>
                    <li>A wide variety of yachts, mega yachts, cruisers, powerboats, and sailing boats are available for
                        you to choose from</li>
                    <li>Safety and security of latest-technology equipment and services</li>
                    <li>24-hour Service and Maintenance Technicians</li>
                    <li>An efficient and responsible shore-based yacht accounting service</li>
                    <li>Assurance of yacht certification compliance, which involves continually monitoring yacht</li>
                    <li>ISMs and crew certifications.</li>
                    <li>A chance to invest in the luxurious way of living in Cyprus</li>
                </ul>
            </div>
            <div>Whether you’re relocating to Cyprus with your family, your partner, or with the aim to expand your
                business plans, Yacht investing comes with many advantages and unforgettable experiences. Of course, as
                safety always comes first, you will also have the opportunity to learn how to operate a
                ship by taking sailing courses, enabling you to discover the ever-ending crystal-clear waters of Cyprus.
            </div>
        </template>
    </section-text-image>
    <section-image-text img="/img/services-page/economic.jpg">
        <template #title>Starting a Business</template>
        <template #text>
            <div class="box">
                Have you ever envisioned starting your own business? Being a business owner means being in charge of
                your own finances and decisions. One of the first steps to consider when building your business is the
                location of your company. This is the place where you will be investing your time, money, and
                motivation. For this reason, it is crucial to do your research regarding your target market, local tax
                implications, and much more.
            </div>
            <div class="box">
                Cyprus may be a small island, but it offers a huge variety of business opportunities. With a
                free-market, service-based economy and high household incomes, the country has a stable and modern
                economy. Millions of international investors have seized the power of business establishment in Cyprus.
            </div>
            <div class="purple">These are some of the main reasons to start your own business in Cyprus:
            </div>
            <div>
                <ul>
                    <li>One of Europe's lowest corporation tax rates</li>
                    <li>Many investment opportunities</li>
                    <li>The minimum of bureaucracy</li>
                    <li>Bilingual qualified workforce</li>
                    <li>High quality and low-cost residency</li>
                </ul>
            </div>
            <div class="box">
                Some of the most thriving businesses on the island include banking and financial consultancy, shipping
                companies, and there is a high demand for both private and public insurance organizations. These are
                only a few options when it comes to finding the best business idea for you. Our team is here to provide
                assistance in discovering the business opportunities found on this beautiful island.
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
        image: '/img/services-page/investments_slide1.png',
        title: 'We listen',
        text: 'You come to us with your goals, and we make sure to understand your needs to the fullest.'
    },
    {
        image: '/img/services-page/investments_slide2.png',
        title: 'We plan',
        text: 'We put all our efforts into creating the perfect investment plan for your family and business.'
    },
    {
        image: '/img/services-page/investments_slide3.png',
        title: 'We recommend',
        text: 'We give you the opportunity to consider a variety of options so you can have a better understanding of investing in Cyprus.'
    },
    {
        image: '/img/services-page/investments_slide4.png',
        title: 'We provide',
        text: 'We offer you our services based on trustworthy agreements with renowned partners in Cyprus.'
    },
    {
        image: '/img/services-page/investments_slide5.png',
        title: 'We support',
        text: 'Once you decide on your investment plan, we remain by your side to make sure everything meets your expectations.'
    },
]

</script>
