<script setup>
import Header from '@/components/ui/header.vue'
import { ArrowBigRight, Calendar, ChevronLeft, ChevronRight, MapPin } from '@lucide/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { computed, onMounted, ref } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { featuredEvents, pastEvents, upcomingEvents } from '@/staticDatas/events'
import Button from '../ui/button.vue'

const sectionWrapper = ref(null)
const activeTab = ref('upcoming')
const modules = [Navigation]
const swiperInstance = ref(null)
const prevRef = ref(null)
const nextRef = ref(null)
const currentIndex = ref(0)

const getEvents = () => {
  switch (activeTab.value) {
    case 'past':
      return pastEvents
    case 'featured':
      return featuredEvents
    default:
      return upcomingEvents
  }
}

const onSwiperInit = (swiper) => {
  swiperInstance.value = swiper
  currentIndex.value = swiper.activeIndex
}

const onSlideChange = (swiper) => {
  currentIndex.value = swiper.activeIndex
}

const goToSlide = (index) => {
  swiperInstance.value?.slideTo(index)
}

</script>

<template>
  <section class="m-4">
    <div class="relative w-full py-16 px-10 overflow-hidden">
      <div ref="sectionWrapper" class="relative z-10 container mx-auto">
        <Header first-part="Our" second-part="Events" wrapper-class="text-start mb-12" />

        <div class="flex items-center justify-between gap-4 mb-8">
          <div class="flex gap-4">
            <Button
              @click="activeTab = 'upcoming'"
              :bg-color="[
                activeTab === 'upcoming'
                  ? '#0B1050'
                  :'white'
              ]"
              :text-color="[
                activeTab === 'upcoming'
                  ? 'white'
                  :'#0B1050'
              ]"
            >
              Upcoming Events
            </Button>
            <Button
              @click="activeTab = 'past'"
              :bg-color="[
                activeTab === 'past'
                  ? '#0B1050'
                  :'white'
              ]"
              :text-color="[
                activeTab === 'past'
                  ? 'white'
                  :'#0B1050'
              ]"
            >
              Past Events
            </Button>
            <Button
              @click="activeTab = 'featured'"
              :bg-color="[
                activeTab === 'featured'
                  ? '#0B1050'
                  :'white'
              ]"
              :text-color="[
                activeTab === 'featured'
                  ? 'white'
                  :'#0B1050'
              ]"
            >
              Featured Events
            </Button>
          </div>

          <div class="flex gap-2">
            <div
              ref="prevRef"
              class="w-10 h-10 flex items-center justify-center border border-[#0B1050]/20 bg-white text-[#0B1050] cursor-pointer transition-all duration-300 hover:bg-[#0B1050] hover:text-white hover:border-[#0B1050]"
            >
              <ChevronLeft />
            </div>
            <div
              ref="nextRef"
              class="w-10 h-10 flex items-center justify-center border border-[#0B1050]/20 bg-white text-[#0B1050] cursor-pointer transition-all duration-300 hover:bg-[#0B1050] hover:text-white hover:border-[#0B1050]"
            >
              <ChevronRight />
            </div>
          </div>
        </div>

        <div class="bg-white border border-solid border-[#0B1050]/10 p-6">
          <Swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="20"
            :navigation="{
              prevEl: prevRef,
              nextEl: nextRef,
            }"
            :breakpoints="{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }"
            @swiper="onSwiperInit"
            @slideChange="onSlideChange"
          >
            <SwiperSlide v-for="event in getEvents()" :key="event.id">
              <div
                class="min-h-full bg-linear-to-br from-white to-gray-50 p-6 border border-[#0B1050]/10 hover:shadow-lg transition-shadow duration-300"
              >
                <div class="flex flex-col gap-3 mb-4">
                  <div class="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar :size="18" />
                    <span>{{ event.date }}</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin :size="18" />
                    <span>{{ event.location }}</span>
                  </div>
                </div>

                <h3 class="text-lg font-bold mb-3 text-[#0B1050] line-clamp-2 hover:text-gray-700">
                  {{ event.title }}
                </h3>

                <p class="text-sm text-gray-700 mb-4 line-clamp-3">
                  {{ event.description }}
                </p>

                <div
                  class="flex items-center gap-2 text-sm font-semibold text-[#0B1050] hover:gap-3 transition-all cursor-pointer"
                >
                  Learn More
                  <ArrowBigRight :size="16" :stroke-width="2.25" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div class="flex items-center justify-center gap-2 mt-6">

            <div
              v-for="(_, index) in getEvents().length -1"
              :key="index"
              @click="goToSlide(index)"
              :class="[
                'cursor-pointer transition-all duration-300',
                currentIndex === index
                  ? 'w-6 h-2 bg-[#0B1050]'
                  : 'w-2 h-2 bg-[#0B1050]/20 hover:bg-[#0B1050]/50',
              ]"
            />

          </div>
        </div>
      </div>
    </div>
  </section>
</template>