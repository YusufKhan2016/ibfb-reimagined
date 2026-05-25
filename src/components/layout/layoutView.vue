<script setup>
import { onMounted, ref } from 'vue';
import Footer from './footer.vue'
import Navbar from './navbar.vue'
import gsap from 'gsap/all';

const screenWrapperLeft = ref(null);
const screenWrapperRight = ref(null);

onMounted(() => {

  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'

  const tl = gsap.timeline({
    onComplete: () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  })

  tl.from(screenWrapperLeft.value, {
    x: '0%',
    duration: 1,
    ease: 'power4.in',
    delay: 1.2
  })

  tl.from(screenWrapperRight.value, {
    x: '0%',
    duration: 1,
    ease: 'power4.in',
    delay: 1.2
  }, 0)

})

</script>

<template>
  <div class="relative min-h-screen">

    <div>
      <div 
        ref="screenWrapperLeft"  
        class="fixed min-h-screen w-1/2 -translate-x-[100%] top-0 left-0 bg-[#0B1050] z-1000"
      >
        <div class="flex justify-end h-screen w-full items-center text-8xl text-white font-semibold">IB</div>
        
      </div>
      <div 
        ref="screenWrapperRight"  
        class="fixed min-h-screen w-1/2 translate-x-[100%] top-0 right-0 bg-[#0B1050] z-1000"
      >
        <div class="flex justify-start h-screen w-full items-center text-8xl text-white font-semibold">FB</div>
      </div>
    </div>

    <div class="fixed inset-0 z-0 pointer-events-none">
      <div
        class="w-full h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-size-[60px_60px]"
      ></div>
    </div>

    <div class="relative z-10">
      <Navbar />

      <div class="bg-[#0B1050] sticky z-999 top-0 border-b border-b-solid border-white">
        <ul class="flex justify-between container mx-auto px-10 py-1 text-white">
          <li class="cursor-pointer hover:text-cyan-100 duration-400 hover:font-semibold">Home</li>
          <li class="cursor-pointer hover:text-cyan-100 duration-400 hover:font-semibold">About IBFB</li>
          <li class="cursor-pointer hover:text-cyan-100 duration-400 hover:font-semibold">What we do</li>
          <li class="cursor-pointer hover:text-cyan-100 duration-400 hover:font-semibold">Membership</li>
          <li class="cursor-pointer hover:text-cyan-100 duration-400 hover:font-semibold">News & Events</li>
          <li class="cursor-pointer hover:text-cyan-100 duration-400 hover:font-semibold">Resources</li>
          <li class="cursor-pointer hover:text-cyan-100 duration-400 hover:font-semibold">Gallery</li>
          <li class="cursor-pointer hover:text-cyan-100 duration-400 hover:font-semibold">Archive</li>
          <li class="cursor-pointer hover:text-cyan-100 duration-400 hover:font-semibold">Bangladesh</li>
          <li class="cursor-pointer hover:text-cyan-100 duration-400 hover:font-semibold">Career</li>
          <li class="cursor-pointer hover:text-cyan-100 duration-400 hover:font-semibold">Contact us</li>
        </ul>
      </div>

      <main class="overflow-x-hidden">
        <router-view />
      </main>

      <Footer />
    </div>
  </div>
</template>
