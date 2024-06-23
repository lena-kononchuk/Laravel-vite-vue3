<template>
    <div class="section section__header section__purple-header">
        <div class="wrapper">
            <div class="flex middle-sm" style="justify-content: space-between;">
                <router-link to="/" class="header-logo"></router-link>
                <nav class="navbar">
                    <ul class="nav__links flex select">
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
                        <li><router-link class="link" to="/contact">CONTACT US</router-link></li>
                    </ul>
                </nav>
                <div class="end-sm">
                    <router-link to="/contact" class="button button--yellow">Get in touch</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionHeader',
    data() {
        return {
            servicesMenuOpen: false
        };
    },
    methods: {
        toggleServicesMenu() {
            this.servicesMenuOpen = !this.servicesMenuOpen;
        }
    }
};
</script>
