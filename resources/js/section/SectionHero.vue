<template>
    <div class="hero hero__small relative lazyload" ref="backgroundImage"
        :style="{ backgroundImage: 'url(' + bg + ')' }">

        <div class="wrapper">
            <div class="hero__overlay"></div>


            <div class="h2 box uppercase start-md center-xs">
                <slot name="title"></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import { onMounted, onBeforeUnmount } from 'vue'

const handleScroll = () => {
  const el = backgroundImage.value
  if (!el) return

  const scrollTop = window.scrollY
  const offsetTop = el.offsetTop
  const speed = 0.9

  const translateY = (scrollTop - offsetTop) * speed
  el.style.backgroundPosition = `center ${translateY}px`
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const props = defineProps({
    bg: String,
});
const backgroundImage = ref(null);

</script>

<style  scoped>
.parallax {
    margin-top: -150px;
  }

  .hero__small {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
    overflow: visible;
  }
</style>