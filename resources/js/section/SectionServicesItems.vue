<template>
    <div class="section services section__yellow">
        <div class="wrapper">
            <div class="box3x center-xs">
                <div class="h2 box uppercase">
                    <slot name="title"></slot>
                </div>
                <div class="text box3x" style="max-width: 580px; margin: 0 auto;">
                    <slot name="text"></slot>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6 col-sm-3" v-for="(item, index) in items" :key="index">
                    <div class="center-xs">
                        <div class="box">
                            <slot name="services-image" :item="item">
                                <img :src="item.image" class="circle" alt="">
                            </slot>
                        </div>
                        <slot name="services-title" :item="item">
                            <div class="h4 purple box--small">{{ item.title }}</div>
                        </slot>
                        <slot name="services-text" :item="item">
                            <div class="text ">{{ item.text }}</div>
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
