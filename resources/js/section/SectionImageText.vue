<template>
    <div class="section">
      <div class="wrapper">
        <div class="row animated-group">
          <div
            class="col-xs-12 col-sm-6 image-container"
            :style="{ backgroundImage: 'url(' + img + ')' }"
            ref="sectionImage"
          ></div>
          <div class="col-xs-12 col-sm-6" style="padding-left: 20px;">
            <div class="h3 uppercase box2x">
              <slot name="title"></slot>
            </div>
            <div class="text">
              <div class="content box" :class="{ 'show-more': isExpanded }">
                <slot name="text"></slot>
              </div>
              <button v-if="hasOverflow" @click="toggleExpand" class="button button--expand">
                {{ isExpanded ? 'Show Less' : 'Expand' }}
                <i v-if="!isExpanded" class="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, onMounted, nextTick } from 'vue'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'

  const props = defineProps({
    img: String,
  })

  const isExpanded = ref(false)
  const hasOverflow = ref(false)

  const toggleExpand = () => {
    isExpanded.value = !isExpanded.value
  }

  onMounted(async () => {
    await nextTick()
    const textElement = document.querySelector('.content')
    if (textElement.scrollHeight > textElement.clientHeight) {
      hasOverflow.value = true
    }

    gsap.registerPlugin(ScrollTrigger)

    // Анимация всей группы одновременно
    const group = document.querySelector('.animated-group')
    if (group) {
      gsap.fromTo(
        group,
        { opacity: 0, y: '40px' },
        {
          opacity: 1,
          y: '0px',
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }
  })
  </script>

  <style scoped>
  .image-container {
    height: 380px;
    background-size: cover;
    background-position: center;
    border-radius: 0;
    overflow: hidden;
    will-change: transform, opacity;
  }
  </style>
