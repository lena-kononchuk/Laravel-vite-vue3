<template>
    <div>
        <div class="title">
            <slot name="title">Default Title</slot>
        </div>
        <div class="text">
            <slot name="text">Default Text</slot>
        </div>
        <div ref="sectionImage" :style="{ backgroundImage: 'url(' + img + ')' }"
            style="width: 100px; height: 100px; background-color: red;"></div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    img: String,
});
</script>
