<template>
    <div class="section">
        <div class="wrapper">
            <div class="row">
                <div class="col-xs-12 col-sm-6" style="padding-right: 20px;">
                    <div class="h3 uppercase box2x">
                        <slot name="title"></slot>
                    </div>
                    <div class="text">
                        <div class="content box" :class="{ 'show-more': isExpanded }">
                            <slot name="text"></slot>
                        </div>
                        <button v-if="hasOverflow" @click="toggleExpand" class="button button--expand ">
                            {{ isExpanded ? 'Show Less' : 'Expand' }}
                            <i v-if="!isExpanded" class="fa fa-arrow-right "></i>
                        </button>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="image image--large lazyload" ref="sectionImage"
                        :style="{ backgroundImage: 'url(' + img + ')' }" style="border-radius:0;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue';

const props = defineProps({
    img: String,
});

const isExpanded = ref(false);
const hasOverflow = ref(false);

const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
};

onMounted(async () => {
    await nextTick(); // Ensure DOM updates before checking overflow
    const textElement = document.querySelector('.content');
    if (textElement.scrollHeight > textElement.clientHeight) {
        hasOverflow.value = true;
    }
});
</script>
