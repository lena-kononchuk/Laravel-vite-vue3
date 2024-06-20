<template>
    <div class="section">
        <div class="wrapper">
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <div class="h3 uppercase box2x">
                        <slot name="title"></slot>
                    </div>
                    <div class="text">
                        <slot name="text"></slot>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="image image--large" ref="sectionImage" :style="{ backgroundImage: 'url(' + img + ')' }"
                        style="border-radius:0;"></div>
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
