<template>
    <section-hero bg="/img/hero/imigration.jpg">
        <template #title> Moving to Cyprus</template>
    </section-hero>
    <section-text-image img="/img/immigration/imigration-img.jpg">
        <template #title>Permanent Residency in Cyprus Benefits</template>
        <template #text>
            <div class="box">
                The decision to relocate your business or move with your family to Cyprus comes with the decision to
                enhance your quality of life. As Cyprus is among the most beloved travel destinations for millions of
                tourists every year, an increasing number of individuals and families have decided to turn the
                Mediterranean island into their permanent home. With over 17% of its population being international
                migrants, Cyprus has numerous expat communities all around the island.
            </div>
            <div class="box">
                Becoming a permanent resident in Cyprus offers you the opportunity to enjoy a multitude of benefits,
                helping your business thrive and making your family feel welcome and safe.
            </div>
            <div class="box">
                It’s important to know that Cyprus Permanent Residency can be obtained by purchasing property or living
                in Cyprus for a continuous period of five years or more. Some of the most important benefits of becoming
                a permanent resident in Cyprus are the following:
            </div>
            <div class="box">
                <ul>
                    <li>Obtaining EU residency in a safe and secure jurisdiction</li>
                    <li>Easy access to Europe due to great geographical location</li>
                    <li>Exceptional education standards for your children </li>
                    <li>Outstanding medical facilities and high quality healthcare</li>
                    <li>No inheritance tax</li>
                    <li>Opportunity to have obtain an EU passport</li>
                    <li>Enjoying a high quality of life</li>
                </ul>
            </div>

            <div class="box">
                Once you experience life on the island, you will have gained a new perspective on life. The blue-flagged
                clear beaches and the sunny weather all year long, will become your own personal oasis where you can
                boost your business opportunities and enjoy a relaxed lifestyle with your family.
            </div>

        </template>
    </section-text-image>
    <section-image-text img="/img/immigration/invest.jpg">
        <template #title>Why to Invest in Cyprus</template>
        <template #text>
            <div class="box">
                PAM Consulting services include assistance and consulting when it comes to your investing plans in
                Cyprus. We will prioritize your needs and expectations by offering you a variety of investment options
                for you to choose from. In an accelerating pace, Cyprus has grown into one of the dominant
                investment-friendly countries in the EU. It is evident that due to the government’s efforts to welcome
                more immigrants to Cyprus, the investment opportunities are vast and customizable for individuals.
            </div>
            <div class="box">
                The main reasons why more and more people are investing in Cyprus are:
            </div>
            <div class="box">
                <ul>
                    <li>Cyprus has the lowest corporate tax rate in Europe at 12.5%</li>
                    <li>No capital gains tax or inheritance tax</li>
                    <li>Tax exemptions on worldwide dividends as well as interest income</li>
                    <li>No Immovable Property Tax</li>
                    <li>Corporate tax relief up to 75% for holdings</li>
                    <li>Competitive VAT rates ranging from 0- 19%</li>
                    <li>Low national healthcare tax contribution of 2.65-4.7%</li>
                </ul>
            </div>
            <div class="box">
                Whether you’re aiming to increase your financial possibilities or increase your business outlook, Cyprus
                is an ideal place to start. With the ability to choose from endless investment plans, you can be one
                step closer to manifesting your goals.
            </div>
        </template>
    </section-image-text>
    <section-text-image img="/img/immigration/imigration-img.jpg">
        <template #title>Important Information to Know Before Immigrating to Cyprus
        </template>
        <template #text>
            <div class="box">
                As you are planning to achieve a fresh start in Cyprus, we would like to provide you with some basic
                information about the island and what to expect when you arrive.
            </div>
            <div class="box">
                <ul>
                    <li> <b>Capital City:</b> Nicosia is the largest city of the island which has over 200000
                        residents, meaning
                        about <b>16.6%</b> of the country’s population.</li>
                    <li> <b>Currency:</b> The currency of Cyprus is the Euro. </li>
                    <li><b>Population:</b>Population: Cyprus’s current population is <b>1.207 million.</b></li>
                    <li><b>Official Languages:</b> The official languages of the island are <b>Greek and Turkish</b>,
                        and <b> English</b>
                        is
                        widely spoken by locals.</li>
                    <li><b>Cost of Living:</b> Compared to other European countries, the cost of living is relatively
                        low in
                        Cyprus.</li>
                    <li><b>Job Market:</b> As a member of the <b>EU since 2004</b>, the business-friendly environment
                        provides
                        access
                        to a wide range of <b>markets</b>, with some of the most prominent being in the <b>financial
                            sector, IT
                            and technology services</b> , and <b>tourism</b>.</li>
                    <li><b>Education:</b> Public and Private Education in Cyprus meets outstanding quality standards.
                    </li>
                </ul>
            </div>
            <div class="box">
                Getting to know the ins and outs of the island is easy and exciting. Our team at PAM Consulting is also
                here to assist you with any additional information you may require.
            </div>

        </template>
    </section-text-image>
    <section-services-items :items="servicesItems">
        <template #title> How We Can Help</template>
        <template #text>
            <div class="box">
                Leaving your home country to settle in another is always accompanied by complex immigration
                processes such as registration, finding housing, signing documents, opening a bank account, finding
                schooling for your children, and much more. This process can make anyone feel stressed and uncertain
                about
                the next move. For this reason, our all-encompassing services make sure to make the relocation process
                as
                smooth as possible by handling everything that has to do with relocating your family and your business
                to
                Cyprus.
            </div>
            <div class="box purple">
                <ul class="navbar__links"
                    style="list-style-type: none;">
                    <li class="box--small">
                        <router-link class="h4 purple link"
                                     to="/services-investments">Investments opportunities</router-link>
                    </li>
                    <li class="box--small">
                        <router-link class="h4 purple link"
                                     to="/services-business">Business relocation</router-link>
                    </li>
                    <li class="box--small">
                        <router-link class="h4 purple link"
                                     to="/services-family">Family
                            relocation</router-link>
                    </li>
                </ul>

            </div>
            <div>
                We want you to feel confident in your decision to relocate to Cyprus, as we take care of the challenging
                parts of moving. Moving to Cyprus is in itself an investment in your future.
            </div>
        </template>
    </section-services-items>
    <contact-form></contact-form>
    <section-swiper-faq> </section-swiper-faq>
</template>

<script setup>
import { ref } from 'vue';
import SectionHero from '../section/SectionHero.vue';
import SectionTextImage from '../section/SectionTextImage.vue';
import SectionImageText from '../section/SectionImageText.vue';
import SectionServicesItems from '../section/SectionServicesItems.vue';
import ContactForm from '../components/ContactForm.vue';
import SectionSwiperFaq from '../section/SectionSwiperFaq.vue';

</script>
