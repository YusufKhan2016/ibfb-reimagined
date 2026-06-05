<script setup>
import { ref, onMounted } from 'vue';
import gsap, { ScrollTrigger } from 'gsap/all';

defineProps({
    firstPart: {
      type: String,
      required: true,
      default: 'About'
    },
    secondPart: {
      type: String,
      required: true,
      default: 'IBFB'
    },
    class: {
      type: String,
      required: false,
      default: 'text-5xl md:text-6xl font-bold text-black mb-6'
    },
    wrapperClass: {
      type: String,
      required: false,
      default: 'text-center mb-6'
    }
    
})

const headingText = ref(null);

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {

  const headingTextAnimation = gsap.from(headingText.value, {
    filter: "blur(10px)",
  })

  ScrollTrigger.create({
    trigger: headingText.value,
    animation: headingTextAnimation,
    start: 'top 90%',
    end: 'top 60%',
    scrub: true
  })

})
</script>

<template>
    <div
      ref="headingText"
      :class="wrapperClass"
    >
      <h2 :class="class">
          {{ firstPart }} <span class="text-blue-500"> {{ secondPart }} </span>
      </h2>
    </div>
</template>