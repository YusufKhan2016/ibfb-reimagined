<script setup>
import { onMounted, ref } from 'vue';
import Button from '@/components/ui/button.vue';
import gsap from 'gsap/all';

const bannerText = ref(null)

onMounted(() => {
  gsap.from(bannerText.value, {
    filter: "blur(30px)",
    duration: 0.8,
  })
})

</script>

<template>
  <section class="m-4">
    <div ref="bannerText" class="relative  w-full h-screen flex items-center overflow-hidden bg-[#060914]">
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover opacity-25"
      >
        <source src="@/assets/banner.mp4" type="video/mp4" />
      </video>

      <div class="absolute inset-0 z-1">
        <div
          class="w-full h-full
          bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)]
          bg-size-[60px_60px]"
        ></div>
      </div>
  
      <div 
        
        class="relative z-10 px-10 text-center container w-full mx-auto"
      >
        <div class="flex items-center justify-center gap-3 mb-8">
          <span class="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Next-Gen Platform
          </span>
        </div>
  
        <h1 class="text-7xl font-bold leading-[1.08] tracking-tight text-white mb-6">
          Built for those <br />
          who <em class="not-italic text-transparent bg-clip-text bg-linear-to-r from-blue-300 via-cyan-300 to-teal-300">
            shape tomorrow
          </em>
        </h1>
  
        <p class="text-base md:text-lg text-slate-100 max-w-lg mx-auto font-normal mb-10">
          A platform that moves as fast as your ideas — designed for clarity,
          built for scale, ready for what comes next.
        </p>
  
        <div class="flex flex-wrap justify-center items-center gap-4">
          <Button
            bg-color="white"
            text-color="#0B1050"
          >
            About IBFB
          </Button>

          <Button
            bg-color="oklch(80.9% 0.105 251.813)"
            text-color="#000"
          >
            What we do
          </Button>
        </div>
  
      </div>
  
    </div>
  </section>
</template>