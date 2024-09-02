<template>
    <div class="show-xs hide-md relative">
        <Slide :isOpen="menuOpen" @close="closeMenu" right>
            <ul class="navbar__links select block" style="list-style-type: none;">
                <li class="box"><router-link class="h4 link link__yellow" to="/" @click="closeMenu">HOME</router-link>
                </li>
                <li class="box"><router-link class="h4  link link__yellow" to="/about" @click="closeMenu">ABOUT
                        US</router-link></li>
                <li class="box"><router-link class="h4 link link__yellow" to="/services"
                        @click="closeMenu">SERVICES</router-link></li>
                <li class="box"><router-link class="h4 link link__yellow" to="/immigration"
                        @click="closeMenu">MIGRATION</router-link>
                </li>
                <li class="box"><router-link class="h4 link link__yellow" to="/enquiry" @click="closeMenu">CONTACT
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
import Vue3BurgerMenu from 'vue3-burger-menu';


const menuOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
    menuOpen.value = false;
};
</script>
