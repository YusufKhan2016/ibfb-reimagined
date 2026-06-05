<script setup>
import Header from '@/components/ui/header.vue';
import { ArrowBigRight } from '@lucide/vue';
import gsap, { ScrollTrigger, SplitText } from 'gsap/all';
import { onMounted, ref } from 'vue';


const mediaTextWrapper = ref(null)
const businessTextWrapper = ref(null)
const sectionWrapper = ref(null)

// gsap.registerPlugin(SplitText) 
// gsap.registerPlugin(ScrollTrigger)

// onMounted(() => {

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: sectionWrapper.value,
//       start: 'top 70%',
//       toggleActions: 'play pause resume reset'
//     }
//   });

//   tl.from(mediaTextWrapper.value, {
//     filter: "blur(10px)",
//     ease: 'power3.in',
//     duration: 0.3,
//   })
//     .from(businessTextWrapper.value, {
//       filter: "blur(10px)",
//       ease: 'power3.in',
//       duration: 0.3,
//   },"-=0.2")

// })

</script>

<template>
  <section class="m-4">
    <div class="relative w-full py-16 px-10 overflow-hidden">

      <div
        ref="sectionWrapper"
        class="relative z-10 container mx-auto"
      > 

        <div class="flex justify-between">
          <Header 
            first-part="IBFB"
            second-part="In Media"
            wrapper-class="text-start"
          />

          <Header 
            first-part="Business"
            second-part="Information"
            wrapper-class="text-end w-lg"
          />
        </div>
        
        <div class="flex justify-between gap-2">
          <ul 
            ref="mediaTextWrapper"
            class="space-y-2 w-1/2 bg-white p-4 border border-solid border-black/10"
          >
            <li class="flex gap-2"><ArrowBigRight :stroke-width="2.25" />IBFB in Media FBCCI for fairness, ethics to improve business environment</li>
            <li class="flex gap-2"><ArrowBigRight :stroke-width="2.25" />US ambassador visits IBFB founding president's residence</li> 
            <li class="flex gap-2"><ArrowBigRight :stroke-width="2.25" />Green shipbuilding could drive BD's next industry growth frontier: Experts</li>
            <li class="flex gap-2"><ArrowBigRight :stroke-width="2.25" />FBCCI and IBFB to work together on sector-specific research</li>
          </ul>

          <ul
            ref="businessTextWrapper"
            class="space-y-2 w-1/2 bg-white p-4 border border-solid border-black/10"
          >
            <li class="flex gap-2"><ArrowBigRight :stroke-width="2.25" />IBFB in Media FBCCI for fairness, ethics to improve business environment</li>
            <li class="flex gap-2"><ArrowBigRight :stroke-width="2.25" />US ambassador visits IBFB founding president's residence</li> 
            <li class="flex gap-2"><ArrowBigRight :stroke-width="2.25" />Green shipbuilding could drive BD's next industry growth frontier: Experts</li>
            <li class="flex gap-2"><ArrowBigRight :stroke-width="2.25" />FBCCI and IBFB to work together on sector-specific research</li>
          </ul>
        </div>
        
      </div>
      
    </div>
  </section>
</template>