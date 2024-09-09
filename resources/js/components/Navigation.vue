<template>
    <div>
        <nav class="navbar relative show-md hide-xxs">
            <ul class="navbar__links flex select submenu" style="list-style-type: none;">
                <!-- Navigation links -->
                <li><router-link class="link" to="/" @click="handleLinkClick">HOME</router-link></li>
                <li><router-link class="link" to="/about" @click="handleLinkClick">ABOUT US</router-link></li>

                <!-- Services menu with submenu -->
                <li class="submenu--item" @mouseenter="openSubMenu('subMenu')" @mouseleave="handleMouseLeave">
                    <a href="#" class="link">SERVICES</a>
                    <ul ref="servicesSubMenu" class="submenu--list">
                        <!-- Submenu items -->
                        <li class="box--small">
                            <router-link class="link" to="/services-investments"
                                @click="handleLinkClick('subMenu')">Investments opportunities</router-link>
                        </li>
                        <li class="box--small">
                            <router-link class="link" to="/services-business"
                                @click="handleLinkClick('subMenu')">Business relocation</router-link>
                        </li>
                        <li class="box--small">
                            <router-link class="link" to="/services-family" @click="handleLinkClick('subMenu')">Family
                                relocation</router-link>
                        </li>
                    </ul>
                </li>
                <li><router-link class="link" to="/immigration" @click="handleLinkClick">MIGRATION</router-link></li>
                <li><router-link class="link" to="/enquiry" @click="handleLinkClick">CONTACT US</router-link></li>
            </ul>
        </nav>
        <nav-mobile></nav-mobile>
    </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';

// Ref for managing the currently active submenu
const activeSubMenu = ref(null);
// Ref for accessing the services submenu DOM element
const servicesSubMenu = ref(null);
// Use route to watch for route changes
const route = useRoute();

// Function to open a submenu with animation
const openSubMenu = (menu) => {
    activeSubMenu.value = menu;
    if (menu === 'subMenu') {
        nextTick(() => {
            gsap.fromTo(servicesSubMenu.value,
                { autoAlpha: 0, height: 0 },
                { autoAlpha: 1, height: 'auto', duration: 0.3, ease: 'power2.out' }
            );
        });
    }
};

// Function to handle mouse leave event
const handleMouseLeave = (event) => {
    // Check if cursor has left the submenu
    if (!servicesSubMenu.value.contains(event.relatedTarget)) {
        closeSubMenu('subMenu');
    }
};

// Function to close a submenu with animation
const closeSubMenu = (menu) => {
    if (activeSubMenu.value === menu) {
        activeSubMenu.value = null;
        if (menu === 'subMenu') {
            gsap.to(servicesSubMenu.value,
                { autoAlpha: 0, height: 0, duration: 0.3, ease: 'power2.in' }
            );
        }
    }
};

// Function to handle link clicks and close the appropriate submenu
const handleLinkClick = (menu) => {
    if (menu) {
        closeSubMenu(menu);
    } else {
        activeSubMenu.value = null;
    }
};

// Close the submenu when the route changes
watch(() => route.path, () => {
    activeSubMenu.value = null;
});

// Initialize GSAP settings for the submenu on component mount
onMounted(() => {
    gsap.set(servicesSubMenu.value, { autoAlpha: 0, height: 0 });
});
</script>
