<script setup>
import { currentNews } from '@/staticDatas/news'
import { Zap, ChevronLeft, ChevronRight } from '@lucide/vue'
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const prevNews = ref(null)
const nextNews = ref(null)
const modules = [Navigation]
</script>

<template>
  <div
    class="bg-[#0B1050] border-b overflow-hidden"
  >
    <div class="container mx-auto px-10 py-3">
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2 text-cyan-400 font-semibold whitespace-nowrap">
          <Zap :size="18" :stroke-width="2.5" />
          Breaking News
        </div>
        <div class="w-px h-6 bg-cyan-400/30"></div>

        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          :navigation="{
            prevEl: prevNews,
            nextEl: nextNews,
          }"
        >
          <SwiperSlide v-for="news in currentNews" :key="news.id">
            <div class="transition-all duration-500 ease-in-out">
              <p class="text-white font-semibold truncate">
                {{ news.title }}
              </p>
              <p class="text-cyan-300 text-sm">
                {{ news.date }}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Navigation Buttons -->
        <div class="flex items-center gap-2 ml-4 whitespace-nowrap">
          <button
            ref="prevNews"
            class="flex items-center justify-center p-1.5 text-cyan-200 bg-cyan-950 rounded transition-all duration-300"
            aria-label="Previous news"
          >
            <ChevronLeft :size="18" :stroke-width="2.5" />
          </button>
          <button
            ref="nextNews"
            class="flex items-center justify-center p-1.5 text-cyan-200 bg-cyan-950 rounded transition-all duration-300"
            aria-label="Next news"
          >
            <ChevronRight :size="18" :stroke-width="2.5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
