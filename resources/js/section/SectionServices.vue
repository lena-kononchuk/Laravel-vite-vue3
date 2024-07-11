<template>
    <div class="section services section__purple">
        <div class="wrapper">
            <div class="box center-xs">
                <div class="h2 white">
                    <slot name="title">
                        <div>{{ title }}</div>
                    </slot>
                </div>
            </div>
            <div class="center-sm separator box2x"></div>

            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4 center-xs" v-for="(item, index) in items" :key="index">
                    <div class="card center-xs">
                        <div class="image image--large" style="background: white;">
                            <slot name="image" :item="item">
                                <img :src="item.image" alt="">
                            </slot>
                        </div>
                        <div class="card card__text box">
                            <div class="h3 box">
                                <slot name="subtitle" :item="item">
                                    {{ item.subtitle }}
                                </slot>
                            </div>
                            <div class="text box">
                                <slot name="text" :item="item">
                                    {{ item.text }}
                                </slot>
                            </div>
                            <div>
                                <router-link :to="item.buttonLink" class="button button--primary">Find Out
                                    More</router-link>
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
});
</script>
