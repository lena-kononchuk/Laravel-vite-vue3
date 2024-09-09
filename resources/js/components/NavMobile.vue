<template>
    <div class="show-xs hide-md relative">
        <Slide :isOpen="menuOpen" @close="closeMenu" right :closeOnNavigation="true" disableEsc>
            <ul class="navbar__links select block" style="list-style-type: none;">
                <li class="box">
                    <router-link class="h4 link link__yellow" to="/" @click="handleLinkClick">HOME</router-link>
                </li>
                <li class="box">
                    <router-link class="h4 link link__yellow" to="/about" @click="handleLinkClick">ABOUT
                        US</router-link>
                </li>
                <li class="box">
                    <router-link class="h4 link link__yellow" to="/services"
                        @click="handleLinkClick">SERVICES</router-link>
                </li>
                <li class="box">
                    <router-link class="h4 link link__yellow" to="/immigration"
                        @click="handleLinkClick">MIGRATION</router-link>
                </li>
                <li class="box">
                    <router-link class="h4 link link__yellow" to="/enquiry" @click="handleLinkClick">CONTACT
                        US</router-link>
                </li>
            </ul>
        </Slide>
        <div class="show-xs hide-xxs" style="margin-right: 70px;">
            <router-link to="/enquiry" class="button button--yellow button__header">Get in touch</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Slide } from 'vue3-burger-menu';

const menuOpen = ref(false);

// Toggle the menu open/closed state
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

// Close the menu
const closeMenu = () => {
    menuOpen.value = false;
};

// Close the menu when any link is clicked
const handleLinkClick = () => {
    closeMenu();
};
</script>

<style scoped>
/* Ensure smooth menu closing */
.bm-menu {
    transition: transform 0.3s ease-in-out;
}
</style>
