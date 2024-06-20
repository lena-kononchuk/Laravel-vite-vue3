<template>
    <div class="section section__header section__purple-header">
        <div class="wrapper">
            <div class="flex middle-sm" style="justify-content: space-between;">
                <router-link to="/" class="header-logo"></router-link>
                <nav class="navbar">
                    <ul class="nav__links flex">
                        <li><router-link class="link" to="/">HOME</router-link></li>
                        <li><router-link class="link" to="/about">ABOUT US</router-link></li>
                        <li><router-link class="link" to="/services">SERVICES</router-link></li>
                        <li><router-link class="link" to="/invest">INVEST IN CYPRUS</router-link></li>
                        <li><router-link class="link" to="/migration">MIGRATION</router-link></li>
                        <li><router-link class="link" to="/contact">CONTACT US</router-link></li>
                    </ul>
                </nav>
                <div class="end-sm">
                    <button class="button button--yellow">Get in touch</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionHeader',
};
</script>
