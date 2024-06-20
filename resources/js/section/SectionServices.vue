<template>
    <div class="section services section__purple">
        <div class="wrapper">
            <div class="box3x center-sm">
                <div class="h2 white uppercase">
                    <slot name="title">
                        <div>{{ title }}</div>
                    </slot>
                </div>
                <div class="center-sm separator"></div>
            </div>
            <div class="row">
                <div class="col-xs-6 col-sm-4" v-for="(item, index) in items" :key="index">
                    <div class="card card__image center-sm">
                        <slot name="image" :item="item">
                            <div class="image image--large">
                                <img :src="item.image" alt="">
                            </div>
                        </slot>
                        <div class="card card__text box">
                            <slot name="subtitle" :item="item">
                                <div class="h3 box">{{ item.subtitle }}</div>
                            </slot>
                            <slot name="text" :item="item">
                                <div class="text box">{{ item.text }}</div>
                            </slot>
                            <div>
                                <slot name="button"></slot>
                            </div>
                        </div>
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
    items: Array,
    img: String,
});
</script>
