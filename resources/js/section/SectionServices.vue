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

        <div class="row equal-row center-xs">
          <div
            class="col-xs-12 col-sm-6 col-md-4 column-flex"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="image image--large image--spaced">
              <slot name="image" :item="item">
                <img :src="item.image" alt="images" loading="lazy" />
              </slot>
            </div>

            <div class="card card-flex center-xs">
              <div class="card__text box text-flex">
                <div class="h3 box">
                  <slot name="subtitle" :item="item">{{ item.subtitle }}</slot>
                </div>
                <div class="text box">
                  <slot name="text" :item="item">{{ item.text }}</slot>
                </div>
                <router-link
                  :to="item.buttonLink"
                  class="button button--yellow"
                >
                  Find Out More
                </router-link>
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
