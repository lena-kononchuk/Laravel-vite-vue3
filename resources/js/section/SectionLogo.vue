<template>
    <div class="section">
        <div class="box center-xs">
            <div class="h2 box uppercase">
                Our Partners
            </div>
        </div>
        <div class="center-xs">
            <!-- Main container with hidden overflow to create carousel effect -->
            <div class="logos-container" ref="container">
                <!-- Track that will be animated horizontally -->
                <div class="logos-track" ref="track">
                <!-- Loop through extendedLogos array to render logo images -->
                <img
                    v-for="(logo, index) in extendedLogos"
                    :key="index"
                    :src="logo"
                    :alt="`Partner ${index % logos.length + 1}`"
                    class="logo cursor"
                />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'


// Array of logo image paths
const logos = [
  '/img/partners/partner1.png',
  '/img/partners/partner2.png',
  '/img/partners/partner3.png',
  '/img/partners/partner4.png',
  '/img/partners/partner5.png',
  '/img/partners/partner6.png'
]

// Create extended array with 3 copies of logos for seamless looping
const extendedLogos = [...logos, ...logos, ...logos]

// Template refs
const container = ref(null)
const track = ref(null)
const animation = ref(null)
const itemWidth = ref(0)
const gap = ref(40)

// Initialize carousel animation
const initCarousel = async () => {
  // Get all logo images from DOM
  const images = Array.from(track.value.querySelectorAll('img'))

  // Wait for all images to load (resolve immediately if already loaded)
  await Promise.all(images.map(img =>
    img.complete ? Promise.resolve() : new Promise(resolve => {
      img.onload = resolve
    })
  ))

  // Calculate width of first logo if available
  if (images.length > 0) {
    itemWidth.value = images[0].offsetWidth
  }

  // Calculate width of one complete set of logos (original array)
  const singleSetWidth = (itemWidth.value + gap.value) * logos.length

  // Create GSAP animation
  animation.value = gsap.to(track.value, {
    x: -singleSetWidth,
    duration: singleSetWidth / 50,
    ease: 'none',
    repeat: -1,
    onRepeat: () => {
      // Reset position at the end of each loop for seamless transition
      gsap.set(track.value, { x: 0 })
    }
  })
}

// Handle window resize - restart animation with new dimensions
const handleResize = () => {
  if (animation.value) {
    animation.value.kill()
    initCarousel()
  }
}

// Component lifecycle hooks
onMounted(() => {
  initCarousel()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animation.value) animation.value.kill()
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* Container with hidden overflow to create carousel effect */
.logos-container {
  width: 100%;
  overflow: hidden;
  padding: 30px 0;
  position: relative;
}

/* Track that holds all logos and will be animated */
.logos-track {
  display: flex;
  will-change: transform;
  gap: v-bind(gap + 'px');
}

/* Individual logo styling */
.logo {
  flex: 0 0 auto;
  width: 120px;
  height: 60px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
}

/* Hover effects */
.logo:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .logo {
    width: 80px;
  }
}
</style>