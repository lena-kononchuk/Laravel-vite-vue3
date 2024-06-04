<template>
    <div>
        <section-text-image :img="'путь/к/изображению.jpg'">
            <template #title> title</template>
            <template #text> text</template>
        </section-text-image>
        <section-services>
            <template #title> title2</template>
            <template #text> text2</template>
        </section-services>

    </div>
</template>

<script setup>
import SectionTextImage from '../section/SectionTextImage.vue';
import SectionServices from '../section/SectionServices.vue';


</script>
