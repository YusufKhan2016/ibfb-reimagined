<script setup>
import { onMounted, ref } from 'vue'
import gsap, { ScrollTrigger, SplitText } from 'gsap/all'
import Button from '../ui/button.vue'
import Header from '../ui/header.vue';

const aboutSection = ref(null)
const aboutText = ref(null);

gsap.registerPlugin(SplitText) 
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {

  let split = SplitText.create(aboutText.value, { type: "words" });
  
  const textAnimation = gsap.from(split.words, {
    opacity: 0.2,
    filter: "blur(1px)",
    ease: "power2.out",
    stagger: 0.2
  })

  ScrollTrigger.create({
    trigger: aboutSection.value,
    animation: textAnimation,
    pin: true,
    scrub: true,
    start: "top 10%",
  })
})

</script>

<template>
  <section class="m-4">
    <div class="relative w-full py-16 px-10 overflow-hidden">

      <div
        ref="aboutSection"
        class="relative z-10 container mx-auto"
      >

        <Header 
          first-part="About"
          second-part="IBFB"
        />

        <div 
          ref="aboutText" 
          class="space-y-6 border border-solid border-black/10 bg-white p-4"
        >
          <div class="text-lg text-black leading-relaxed text-justify">
            The International Business Forum of Bangladesh (IBFB) was formed in 2005 with license granted by the Director of Trade Organizations (DTO) and registration from the Registrar of Joint Stock Companies & Firms (RJSC) under the Ministry of Commerce, Government of Bangladesh. IBFB is a research and advocacy based non-profit and non-partisan nationwide business forum that works as a bridge between the private sector stakeholders and decision makers in the Government. It strives for identifying common business challenges, conducting advocacy through dialogues, participatory workshops, seminars, symposium etc. and pursuing specific and actionable recommendations to mitigate business and economic barriers and thus create a business friendly environment to ensure transparency, good governance and sustainable economic growth in the country.
          </div>

          <div class="text-lg text-black leading-relaxed text-justify">
            Business advocacy has become a very important and necessary part of most of the nations’ law making process. The business community in Bangladesh has the potential and responsibility to become an important voice in the national dialogue on business and economic policies and on efforts to increase the efficiency and productivity of the business community. IBFB has been formed to fulfill this role.
          </div>
        </div>

        <div class="flex mt-8 justify-center">
          <Button>Read more</Button>
        </div>
      </div>
      
    </div>
  </section>
</template>
