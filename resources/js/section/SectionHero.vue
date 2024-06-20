<template>
    <div class="hero hero__small relative" ref="backgroundImage" :style="{ backgroundImage: 'url(' + bg + ')' }">

        <div class="wrapper">
            <div class="hero__overlay"></div>


            <div class="h2 box uppercase start-md center-xs">
                <slot name="title"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    bg: String,
});
const backgroundImage = ref(null);

</script>
