<template>
    <div class="section services section__yellow">
        <div class="wrapper">
            <div class="box3x center-xs">
                <div class="h2 box uppercase">
                    <slot name="title"></slot>
                </div>
                <div class="text box3x"
                     style="max-width: 580px; margin: 0 auto;">
                    <slot name="text"></slot>
                </div>
            </div>
            <div class="row">
                <div v-for="(item, index) in items"
                     :key="index"
                     class="col-xs-12 col-sm-6 col-md-3"
                     v-animate-on-scroll>
                    <div class="center-xs">
                        <div class="box">
                            <slot name="services-image"
                                  :item="item">
                                <img :src="item.image"
                                     class="circle" loading="lazy"
                                     alt="images" />
                            </slot>
                        </div>
                        <slot name="services-title"
                              :item="item">
                            <div class="h4 purple box--small">{{ item.title }}</div>
                        </slot>
                        <slot name="services-text"
                              :item="item">
                            <div class="text">{{ item.text }}</div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AnimateOnScroll from '../directives/animateOnScroll'

export default {
  props: {
    title: String,
    description: String,
    items: Array,
  },
  directives: {
  AnimateOnScroll
}
}

</script>
<style scoped>
.before-visible {
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 0.5s ease, transform 0.5s ease;
  will-change: opacity, transform;
}

.animate-visible {
  opacity: 1;
  transform: scale(1.05);
  animation: pulseScale 1s forwards;
}

@keyframes pulseScale {
  0% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

</style>
