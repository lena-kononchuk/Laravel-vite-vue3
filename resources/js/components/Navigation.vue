<template>
    <div>
        <nav class="navbar relative show-md hide-xxs">
            <ul class="navbar__links flex select" style="list-style-type: none;">
                <li><router-link class="link" to="/">HOME</router-link></li>
                <li><router-link class="link" to="/about">ABOUT US</router-link></li>
                <li @click="toggleServicesMenu" :class="{ 'active': servicesMenuOpen }" style="cursor: pointer;"
                    class="relative">
                    <span class="link" style="justify-content: center; align-items: center;">
                        SERVICES
                        <i :class="servicesMenuOpen ? 'fa fa-angle-up' : 'fa fa-angle-down'"
                            style="margin-left: 3px;"></i>
                    </span>
                    <ul v-if="servicesMenuOpen">
                        <li class="box--small"><router-link class="link" to="/services-investments">Investments
                                opportunities</router-link></li>
                        <li class="box--small"><router-link class="link" to="/services-business">Business
                                relocation</router-link></li>
                        <li class="box--small"><router-link class="link" to="/services-family">Family
                                relocation</router-link></li>
                    </ul>
                </li>
                <li><router-link class="link" to="/immigration">MIGRATION</router-link></li>
                <li><router-link class="link" to="/enquiry">CONTACT US</router-link></li>
            </ul>
        </nav>
        <nav-mobile></nav-mobile>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import navigation from '../components/Navigation.vue';
import NavMobile from '../components/NavMobile.vue';



const servicesMenuOpen = ref(false);

const toggleServicesMenu = () => {
    servicesMenuOpen.value = !servicesMenuOpen.value;
};
</script>
