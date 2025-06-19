<template>
    <!-- !!test -->
    <div class="l">
        <div class="bg" ref="bg">
            <div class="c c1" style="background-image: url('/img/hero/hero-relocation.jpg'); border-radius:10px;">
            </div>
            <div class="c c2" style="background-image: url('/img/hero/hero-invest.jpg'); border-radius:10px;"></div>
            <div class="c c3" style="background-image: url('/img/hero/hero-family.jpg'); border-radius:10px;"></div>
            <div class="c c4" style="background-image: url('/img/hero/hero-business.jpg'); border-radius:10px;">
            </div>
            <div class="c c5" style="background-image: url('/img/hero/hero-investing.jpg'); border-radius:10px;">
            </div>
        </div>
        <div class="fg" ref="fg">
            <div class="c">
                <h1>
                    SAMPLE ONE<br />
                    <small>THIS IS THE FIRST DESCRIPTION</small>
                </h1>
            </div>
            <div class="c">
                <h1>
                    SAMPLE TWO<br />
                    <small>THIS IS THE SECOND DESCRIPTION</small>
                </h1>
            </div>
            <div class="c">
                <h1>
                    SAMPLE THREE<br />
                    <small>THIS IS THE THIRD DESCRIPTION</small>
                </h1>
            </div>
            <div class="c">
                <h1>
                    SAMPLE FOUR<br />
                    <small>THIS IS THE FOURTH DESCRIPTION</small>
                </h1>
            </div>
            <div class="c">
                <h1>
                    SAMPLE FIVE<br />
                    <small>THIS IS THE FIFTH DESCRIPTION</small>
                </h1>
            </div>
        </div>
        <div class="i">
            <a v-for="index in 5" :key="index" :class="{ active: selectedLink === index - 1 }"
                @click.prevent="changePage(index - 1)">
            </a>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const bg = ref(null);
const fg = ref(null);
const selectedLink = ref(0);

function updateVisibility() {
    const children = bg.value.children;
    Array.from(children).forEach((child, index) => {
        child.style.opacity = (index === selectedLink.value) ? '1' : '0';
    });
}

function updatePositions() {
    const bgHeight = window.innerHeight;
    const fgHeight = bgHeight * 2;

    bg.value.style.top = `${selectedLink.value * bgHeight * -1}px`;
    fg.value.style.top = `${(selectedLink.value * fgHeight + Math.floor(fgHeight / 4)) * -1}px`;
    updateVisibility();
}


function leInitWrapper() {
    const bgHeight = window.innerHeight;
    const fgHeight = bgHeight * 2;

    fg.value.style.top = `${Math.floor(fgHeight / 4) * -1}px`;
    updatePositions();
}


function changePage(index) {
    selectedLink.value = index;
    updatePositions();
}

onMounted(() => {
    leInitWrapper();
    window.addEventListener('resize', leInitWrapper);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', leInitWrapper);
});
</script>

<style scoped>
* {
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
}

html,
body,
.l,
.bg,
.bg>.c,
.fg {
    width: 100%;
    height: 100%;
}

/* LAYER */
.l {
    /* position: relative; */
    overflow: hidden;
}

.bg>.c {
    background-size: cover;
    transition: opacity 1s;
    opacity: 0;

}

/* BACKGROUND */
.bg {
    position: absolute;
    top: 0;
    left: 0;
    transition: top 1s;
}

.bg>.c {
    background-size: cover;
}

/* FOREGROUND */
.fg {
    position: absolute;
    top: 0;
    left: 0;
    transition: top 1s;
}

.fg>.c {
    width: 100%;
    height: 200%;
    position: relative;
}

.fg>.c>h1 {
    font-size: 56px;
    color: red;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    text-shadow: -2px 0 black, -2px 2px black, -2px -2px black, 0 2px black, 2px 0 black, 2px 2px black, 2px -2px black, 0 -2px black;
    transform: translateY(-50%);
}

.fg>.c>h1>small {
    font-size: 32px;
    color: red;
}

.i {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 10px;
    word-spacing: 10px;
}

.i>a {
    background: #888888;
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
}

.i>a.active {
    background: red;
}

.hidden {
    display: none;
}
</style>
