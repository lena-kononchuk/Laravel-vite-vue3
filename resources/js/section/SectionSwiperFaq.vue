<template>
    <div ref="faqSection" class="section section__purple" style="overflow: hidden;">
      <div class="wrapper">
        <h2 class="box3x h2 center-xs white uppercase">Frequently Asked Questions</h2>
        <!-- Swiper container -->
        <swiper
          v-if="isVisible"
          :modules="modules"
          :slides-per-view="3"
          :space-between="30"
          :pagination="{ clickable: true, el: '.faq-pagination' }"
          class="wiperFaq box2x swiper__horizontal relative"
          :breakpoints="breakpoints"
        >
          <!-- Swiper slides -->
          <swiper-slide
            v-for="(slide, index) in slides"
            :key="index"
            class="faq-card card card__image relative flex-vertical"
          >
            <div class="faq-image-container">
              <div
                class="image image--middle lazyload"
                :style="{ backgroundImage: `url('${slide.image || '/img/slider_image.jpg'}')`,  }"
              ></div>
            </div>

            <div class="faq-content card card__text box">
              <button class="button button--purple swiper__button center-xs box">
                {{ slide.button }}
              </button>

              <h3 class="faq-question h4 purple box">{{ slide.question }}</h3>

              <div class="faq-answer text box">
                {{ slide.answer }}
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <div v-if="isVisible" class="faq-pagination"></div>
      </div>
    </div>
  </template>

  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import axios from 'axios'

  // Data
  const slides = ref([])
  const isVisible = ref(false)
  const observer = ref(null)
  const faqSection = ref(null)

  // Configuration
  const breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 10 },
    480: { slidesPerView: 2, spaceBetween: 15 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 }
  }

  const modules = [Pagination]

  // Methods
  const loadFAQs = async () => {
    try {
      const response = await axios.get('/api/faqs')
      slides.value = response.data.data.map(faq => ({
        ...faq,
        isExpanded: false
      }))
    } catch (error) {
      console.error('Failed to fetch FAQs:', error)
    }
  }

  const observeVisibility = (entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true
      loadFAQs()
      observer.value.disconnect()
    }
  }


  // Lifecycle hooks
  onMounted(() => {
    observer.value = new IntersectionObserver(observeVisibility, {
      threshold: 0.1
    })

    if (faqSection.value) {
      observer.value.observe(faqSection.value)
    }
  })

  onBeforeUnmount(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })
  </script>

  <style scoped>
  /* Main card container */
  .faq-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 500px;
    background: white;
    border-radius: 19px;
    overflow: hidden;
    margin-top: 30px;
  }

  /* Content area - flex column layout */
  .faq-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  /* Ensure swiper slides have consistent height */
  .swiper-slide {
    height: auto;
    display: flex;
  }
  </style>