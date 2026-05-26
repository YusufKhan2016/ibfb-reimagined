<script setup>
import { onMounted, ref } from 'vue'
import Header from '@/components/ui/header.vue'
import { galleryImages } from '@/staticDatas/gallery'
import gsap, { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const gallerySection = ref(null)
const imageCards = ref([])

onMounted(() => {
  gsap.from(gallerySection.value, {
    opacity: 0,
    filter: 'blur(10px)',
    duration: 0.8,
    ease: 'power3.out',
  })

  imageCards.value.forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top center+=100',
        end: 'bottom center-=100',
        scrub: 1,
        markers: false,
      },
      y: () => {
        return index % 2 === 0 ? 0 : -50
      },
      opacity: 1,
      duration: 0.5,
    })
  })

})
</script>

<template>
  <section class="m-4">
    <div ref="gallerySection" class="relative w-full py-16 px-10 overflow-hidden">
      <div class="relative z-10 container mx-auto">
        <Header 
          first-part="Gallery" 
          second-part="Showcase" 
          wrapper-class="mb-12" 
        />

        <div class="columns-1 md:columns-2 lg:columns-3 gap-6 mb-12 space-y-6">
          <div
            v-for="(image, index) in galleryImages"
            :key="image.id"
            ref="imageCards"
            class="group relative overflow-hidden shadow-lg cursor-pointer break-inside-avoid"
          >
            <div class="relative overflow-hidden bg-slate-900">
              <img
                :src="image.image"
                :alt="image.title"
                class="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div
                class="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0B1050]/60 group-hover:from-[#0B1050]/20 group-hover:via-[#0B1050]/40 group-hover:to-[#0B1050]/80 transition-all duration-300"
              ></div>
            </div>

            <div
              class="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div
                class="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              >
                <span
                  class="inline-block px-3 py-1 bg-cyan-400/80 text-[#0B1050] text-xs font-boldll mb-3"
                >
                  {{ image.category }}
                </span>
                <h3 class="text-white text-lg font-bold mb-2">
                  {{ image.title }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


