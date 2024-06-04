<template>
    <div>
        <div class="title">
            <slot name="title">Default Title</slot>
        </div>
        <div class="text">
            <slot name="text">Default Text</slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    description: String,
    items: Array
});
</script>
