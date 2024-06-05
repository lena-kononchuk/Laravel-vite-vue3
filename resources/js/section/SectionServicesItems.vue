<template>
    <div class="section services section__yellow">
        <div class="wrapper">
            <div class="box3x center-sm">
                <div class="h2">
                    <slot name="title"></slot>
                </div>
                <div class="text">
                    <slot name="text"></slot>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6 col-sm-3" v-for="(item, index) in items" :key="index">
                    <div class="center-sm">
                        <slot name="services-image" :item="item">
                            <img :src="item.image" alt="">
                        </slot>
                        <slot name="services-title" :item="item">
                            <h4>{{ item.title }}</h4>
                        </slot>
                        <slot name="services-text" :item="item">
                            <p>{{ item.text }}</p>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    description: String,
    items: Array,
});
</script>
