<template>
    <div class="slider">
        <div class="slides" :style="{ transform: `translateX(-${currentSlideIndex * slideWidth}px)` }">
            <div class="slide" v-for="(slide, index) in slides" :key="index">
                {{ slide }}
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    props: {
        slides: {
            type: Array,
            required: true
        },
        interval: {
            type: Number,
            default: 3000
        }
    },
    setup(props) {
        const currentSlideIndex = ref(0);
        const slideWidth = 100 / props.slides.length; // Assuming equal width for each slide

        let autoPlayInterval = null;

        const startAutoPlay = () => {
            autoPlayInterval = setInterval(() => {
                nextSlide();
            }, props.interval);
        };

        const stopAutoPlay = () => {
            clearInterval(autoPlayInterval);
        };

        const nextSlide = () => {
            currentSlideIndex.value = (currentSlideIndex.value + 1) % (props.slides.length / 4);
        };

        onMounted(() => {
            startAutoPlay();
        });

        onUnmounted(() => {
            stopAutoPlay();
        });

        return {
            currentSlideIndex,
            slideWidth
        };
    }
};
</script>

<style scoped>
.slider {
    width: 100%;
    overflow: hidden;
}

.slides {
    display: flex;
}

.slide {
    width: calc(100% / 4);
    /* Adjust according to the number of slides you want to display */
    flex-shrink: 0;
    background-color: #ccc;
    /* Adjust as needed */
}
</style>