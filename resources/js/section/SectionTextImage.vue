<template>
    <div class="section">
        <div class="wrapper">
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <div class="h3 box">
                        <slot name="title"></slot>
                    </div>
                    <div class="text">
                        <slot name="text"></slot>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="images" ref="sectionImage" :style="{ backgroundImage: 'url(' + img + ')' }"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    img: String,
});
</script>
