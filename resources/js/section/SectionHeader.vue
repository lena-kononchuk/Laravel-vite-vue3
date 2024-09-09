<template>
    <div class="header">
        <div class="section section__header section__purple-header">
            <div class="wrapper">
                <div class="flex middle-sm" style="justify-content: space-between;">
                    <router-link to="/" class="header-logo" aria-label="logo"></router-link>
                    <navigation></navigation>

                    <div class="end-sm show-md hide-xxs">
                        <router-link to="/enquiry" class="button button--yellow">Get in touch</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import navigation from '../components/Navigation.vue';

</script>
