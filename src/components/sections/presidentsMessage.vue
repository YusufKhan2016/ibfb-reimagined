<script setup>
import { onMounted, ref } from 'vue'
import gsap, { ScrollTrigger, SplitText } from 'gsap/all'
import Button from '../ui/button.vue'
import Header from '../ui/header.vue';

const messageText = ref(null)
const presidentImageWrapper = ref(null);
const presidentImage = ref(null);
const sectionWrapper = ref(null);

gsap.registerPlugin(SplitText) 
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {

  let split = SplitText.create(messageText.value, { type: "words" });
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionWrapper.value,
        start: 'top 70%',
        toggleActions: 'play pause resume reset'
    }
  });

  tl
    .from(split.words, {
      filter: "blur(10px)",
      stagger: 0.01,
      ease: 'power3.out',
      duration: 0.5,
    })
    .from(presidentImageWrapper.value, {
      width: '0px',
    }, "-=1.4")
    .from(presidentImage.value, {
      filter: "blur(20px)",
      scale: 0.5, 
    }, "-=1.4")
  
})  

</script>

<template>
  <section class="m-4">
    <div class="relative w-full py-16 px-10 overflow-hidden">

      <div
        ref="sectionWrapper"
        class="relative z-10 container mx-auto"
      >

        <Header 
          first-part="President's"
          second-part="Message"
        />

        <div class="flex justify-between items-center mt-12">
          
          <div 
            ref="messageText" 
            class="space-y-6 w-3xl 2xl:w-5xl bg-white border border-solid border-black/10 p-4"
          >
            <div class="text-lg text-black leading-relaxed">
              
              <div>Dear visitors,</div> 
              <div>
                Assalamualaikum and welcome to the website of International Business Forum of Bangladesh (IBFB).
                Please let me take the opportunity to provide some information on the International Business Forum of Bangladesh (IBFB).
    
                IIBFB is a research and advocacy based non-profit and non-partisan nationwide business forum of Bangladeshi and foreign business owners including resource and knowledge based individuals such as academia, civil society members, retired high govt. officials, journalists, lawyers etc. Working together, our goal is to identify common business and economic challenges, present solutions and advocate for changes in public policies which will help in establishing an enabling business environment and accelerating economic growth of Bangladesh
              </div>
              
            </div>
  
            <div class="flex mt-8">
              <Button>Read more</Button>
            </div>
          </div>

          <div 
            ref="presidentImageWrapper"
            class="relative overflow-hidden w-90 h-[416px] 2xl:h-[430px]"
          >
            <img 
              ref="presidentImage"
              src="@/assets/presidentMessage/president.jpg" 
              alt=""
              class="h-full w-full object-cover"
            >
          </div>
        </div>

      </div>
      
    </div>
  </section>
</template>
